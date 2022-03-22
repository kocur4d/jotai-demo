import { Link } from "react-router-dom";

import { useAtom } from "jotai";

import data from "./snippet.json";
import { imagesAtom } from "../atoms";

function Images() {
  const [images, setImages] = useAtom(imagesAtom);

  const getImage = () => {
    //return Object.values(data)[Math.floor(Math.random() * 7)];
    return Object.values(data)[0];
  };

  return (
    <div>
      <div>
        {images.map((img, i) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img key={`${img.id}-${i}`} src={img.base64} style={{ width: "100px", height: "100px" }} />
        ))}
      </div>
      <div>
        <button type="button" onClick={() => setImages([...images, getImage()])}>
          Add Image
        </button>
      </div>
      <div>
        <Link to="/vin">Prev</Link>
        <Link to="/results">Next</Link>
      </div>
    </div>
  );
}

export { Images };
