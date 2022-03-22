import { Link } from "react-router-dom";
import { useAtom } from "jotai";

import { mileageAtom } from "../atoms";

function Mileage() {
  const [mileage, setMileage] = useAtom(mileageAtom);

  return (
    <div>
      <h1>Mileage</h1>
      <input type="text" onChange={(e) => setMileage(e.target.value)} value={mileage} />
      <div>
        <Link to="/vin">Next</Link>
      </div>
      <div>
        <p>{mileage}</p>
      </div>
    </div>
  );
}

export { Mileage };
