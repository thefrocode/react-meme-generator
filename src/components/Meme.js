import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({"topText": "", "bottomText": "", "randomImage": "https://i.imgflip.com/30b1gx.jpg"});
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemeImages.data.memes.length);
    setMeme(prevMeme =>({...prevMeme, "randomImage": allMemeImages.data.memes[randomIndex].url}));
  }
  return (
    <main>
      <div className="meme--grid">
        <input type="text" placeholder="Top Text" className="form--input" />
        <input type="text" placeholder="Bottom Text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Generate a new meme image
        </button>
        
      </div>
      <img src={meme.randomImage} alt="Meme" className="meme--image"/>
    </main>
  );
}
