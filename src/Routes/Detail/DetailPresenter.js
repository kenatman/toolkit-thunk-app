import React from "react";

const DetailPresenter = ({ photo }) => {
  return (
    <div>
      <h2>Created by {photo && photo.author}</h2>
      <img alt="" src={photo && photo.download_url} width="400" height="400" />
    </div>
  );
};

export default DetailPresenter;
