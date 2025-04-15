import { useState, useEffect } from "react";
import MemeTable from "../components/MemeTable";
import initialMemes from "../utils/fakeBackend";
import Cookies from "js-cookie";
import "../styles/page.css";

const MemeTablePage = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const savedMemes = Cookies.get("memesData");
    if (savedMemes && JSON.parse(savedMemes).length > 0) {
      setMemes(JSON.parse(savedMemes));
    } else {
      setMemes(initialMemes);
    }
  }, []);

  return (
    <div className="page-container">
      <h2>📊 Memes Table</h2>
      <MemeTable memes={memes} setMemes={setMemes}/>
    </div>
  );
};

export default MemeTablePage;
