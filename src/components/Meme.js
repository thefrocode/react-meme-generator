import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/39t1o.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const randomIndex = Math.floor(
      Math.random() * allMemeImages.data.memes.length
    );
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: allMemeImages.data.memes[randomIndex].url,
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
