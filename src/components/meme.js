import React from 'react';
import data from './../data.js';

export default function Meme() {
  let [meme, setFunc] = React.useState({
    topText: '',
    bottomText: '',
    randomImg: '',
  });

  let [allMemeimg] = React.useState(data);

  function getMemeImg() {
    const memes = allMemeimg.data.memes;
    const randomNum = Math.floor(Math.random() * memes.length);
    setFunc({
      ...meme,
      randomImg: memes[randomNum].url,
    });
  }

  return (
    <main>
      <div className="form_inputs">
        <input
          type={'text'}
          className="form_input"
          placeholder="top text"
        ></input>
        <input
          type={'text'}
          className="form_input"
          placeholder="bottom text"
        ></input>
      </div>
      <button className="btn" onClick={getMemeImg}>
        Get a new meme image 🖼
      </button>
      <div className="memeImg_container">
        <img src={meme.randomImg} alt="meme" className="meme_img"></img>
      </div>
    </main>
  );
}
