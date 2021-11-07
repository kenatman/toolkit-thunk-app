import React from "react";
import { Link } from "react-router-dom";

const HomePresenter = ({ photos, count, addCount, minusCount }) => {
  return (
    <div className="App">
      <h1>COUNT : {count}</h1>
      <button onClick={addCount}>+1</button>
      <button onClick={minusCount}>-1</button>
      <hr />
      <h1>PHOTO GALLERY</h1>
      <p>This is a photo gallery made using redux toolkit and redux thunk</p>
      <hr />
      <div className="Gallery">
        {photos.map((photo) => (
          <Link to={`/${photo.id}`} key={photo.id}>
            <img
              alt={photo.alt}
              src={photo.download_url}
              width="400"
              height="400"
            />
          </Link>
        ))}
      </div>
      <button>VIEW MORE</button>
    </div>
  );
};
export default HomePresenter;
