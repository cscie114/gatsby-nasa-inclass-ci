import * as React from 'react';

const AstroYoutube = ({ data }) => {
  return (
    <iframe
      width="560"
      height="315"
      src={data.url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
};

export default AstroYoutube