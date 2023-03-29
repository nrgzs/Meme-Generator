import React from 'react';
import data from './../data.js';

export default function Meme() {
  const [meme, setFunc] = React.useState({
    topText: '',
    bottomText: '',
    randomImg: '',
  });

  let [allMemeimg, setmeme] = React.useState({});

  React.useEffect(function () {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setmeme(data));
  }, []);

  function getMemeImg() {
    const memes = allMemeimg.data.memes;
    const randomNum = Math.floor(Math.random() * memes.length);
    setFunc({
      ...meme,
      randomImg: memes[randomNum].url,
    });
  }

  function handleChange(e) {
    setFunc((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <main>
      <div className="form_inputs">
        <input
          type={'text'}
          className="form_input"
          placeholder="top text"
          value={meme.topText}
          name="topText"
          onChange={handleChange}
        ></input>
        <input
          type={'text'}
          className="form_input"
          placeholder="bottom text"
          value={meme.bottomText}
          name="bottomText"
          onChange={handleChange}
        ></input>
      </div>
      <button className="btn" onClick={getMemeImg}>
        Get a new meme image 🖼
      </button>
      <div className="memeImg_container">
        <img src={meme.randomImg} alt="meme" className="meme_img"></img>
        <h2 className="meme_text-top">{meme.topText}</h2>
        <h2 className="meme_text-bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
