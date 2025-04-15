import MemeCard from "./MemeCard"
import '../styles/memeList.css'

const MemeList = ({ memes }) => {
  return (
    <div className="meme-grid">
      {memes.map((meme) => (
        <MemeCard data={meme} />
      ))}
    </div>
  );
}

export default MemeList