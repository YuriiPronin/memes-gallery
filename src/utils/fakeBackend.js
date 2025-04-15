import Cookies from 'js-cookie';

const initialMemes = [
  { id: 1, name: "I am a meme", image: "https://ichef.bbci.co.uk/images/ic/1920xn/p072ms1x.jpg", likes: 20 },
  { id: 2, name: "There is a spider", image: "https://ichef.bbci.co.uk/images/ic/1920xn/p072ms6r.jpg", likes: 35 },
  { id: 3, name: "No stress", image: "https://www.bu.edu/files/2024/08/Hey-BU-Blog-Headers.jpg", likes: 12 },
  { id: 4, name: "Emotion damage", image: "https://napoleoncat.com/wp-content/uploads/2022/05/social-media-memes-emotional-damage-meme.jpg", likes: 48 },
  { id: 5, name: "Best meme??", image: "https://file.forms.app/sitefile/0.jpg", likes: 63 },
  { id: 6, name: "Sad cat", image: "https://cdn.britannica.com/19/213119-050-C81C786D/Grumpy-Cat-2015-memes.jpg", likes: 19 },
  { id: 7, name: "AI meme", image: "https://static.toiimg.com/thumb/msid-117653392,width-400,resizemode-4/117653392.jpg", likes: 82 },
  { id: 8, name: "That guy", image: "https://www.veganfoodandliving.com/wp-content/uploads/2023/11/Vegan-memes-distracted-boyfriend-meme-your-responsibilities.jpg", likes: 54 },
  { id: 9, name: "Its fine", image: "https://www.memecreator.org/static/images/memes/5651376.jpg", likes: 22 },
  { id: 10, name: "Memes everywhere", image: "https://napoleoncat.com/wp-content/uploads/2022/05/social-media-memes-toy-story-meme.jpg", likes: 41 },
];



const savedMemes = Cookies.get('memesData');
if (!savedMemes || JSON.parse(savedMemes).length === 0) {
  Cookies.set('memesData', JSON.stringify(initialMemes));
}

export default initialMemes;

