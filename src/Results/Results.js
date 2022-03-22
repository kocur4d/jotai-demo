import { Link } from "react-router-dom";

import { useAtom } from "jotai";

import { vinAtom, mileageAtom, imagesAtom } from "../atoms";

function Results() {
  const [vin] = useAtom(vinAtom);
  const [mileage] = useAtom(mileageAtom);
  const [images] = useAtom(imagesAtom);

  return (
    <div>
      <h1>Results</h1>
      <p>Mileage: {mileage}</p>
      <p>Vin: {vin}</p>
      <div>
        <h2>Images</h2>
        {images.map((img, i) => (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img key={`${img.id}-${i}`} src={img.base64} style={{ width: "100px", height: "100px" }} />
        ))}
      </div>
      <div>
        <Link to="/images">Prev</Link>
      </div>
    </div>
  );
}

export { Results };
