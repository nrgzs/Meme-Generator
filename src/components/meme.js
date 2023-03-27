import React from 'react';
import data from './../data.js';

export default function Meme() {
  function getMemeImg() {
    const memes = data.data.memes;
    const randomNum = Math.floor(Math.random() * memes.length);
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
    </main>
  );
}
