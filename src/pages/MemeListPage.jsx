import MemeList from "../components/MemeList"
import initialMemes from "../utils/fakeBackend"
import '../styles/page.css'

const MemeListPage = () => {
  return(
    <div className="page-container">
    <h2>🧩 Memes List</h2>
    <MemeList memes={initialMemes}/>
  </div>
  )
}

export default MemeListPage