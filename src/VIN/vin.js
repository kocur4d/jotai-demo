import { Link } from "react-router-dom";
import { useAtom } from "jotai";

import { vinAtom } from "../atoms";

function Vin() {
  const [vin, setVin] = useAtom(vinAtom);

  return (
    <div>
      <h1>Vin</h1>
      <input type="text" onChange={(e) => setVin(e.target.value)} value={vin} />
      <div>
        <Link to="/">Prev</Link>
        <Link to="/images">Next</Link>
      </div>
    </div>
  );
}

export { Vin };
