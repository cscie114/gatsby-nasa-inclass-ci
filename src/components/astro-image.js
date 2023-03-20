import * as React from "react";
import { astroImageItem } from "./astro-image.module.css";

const AstroImage = ({ data }) => {
  return (
    <div className={astroImageItem}>
      <img src={data.url} alt={data.date} />
      <p>{data.explanation}</p>
    </div>
  );
};

export default AstroImage;
