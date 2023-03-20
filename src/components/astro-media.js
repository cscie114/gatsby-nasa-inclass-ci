import * as React from "react";
import AstroImage from "./astro-image";
import AstroYoutube from "./astro-youtube";
import { astroMediaItem } from "./astro-media.module.css";

const AstroMedia = ({ data }) => {
  let media;
  if (data.media_type === "image") {
    media = <AstroImage data={data}></AstroImage>;
  } else if (data.media_type === "video") {
    media = <AstroYoutube data={data}></AstroYoutube>;
  } else {
    media = <div>Unsupported media type "{data.media_type}"</div>;
  }
  return <div class={astroMediaItem}>{media}</div>;
};

export default AstroMedia;
