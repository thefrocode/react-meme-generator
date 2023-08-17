import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/39t1o.jpg",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        setAllMemes(response.data.memes);
      });
  },[])

  function getMemeImage() {
    const randomIndex = Math.floor(
      Math.random() * allMemes.length
    );
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: allMemes[randomIndex].url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }

  return (
    <main>
      <div className="meme--grid">
        <input
          type="text"
          placeholder="Top Text"
          className="form--input"
          onChange={handleChange}
          value={meme.topText}
          name="topText"
        />
        <input
          type="text"
          placeholder="Bottom Text"
          className="form--input"
          onChange={handleChange}
          value={meme.bottomText}
          name="bottomText"
        />
        <button className="form--button" onClick={getMemeImage}>
          Generate a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="Meme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
