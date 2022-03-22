import localforage from "localforage";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

const mileageAtom = atomWithStorage(
  "mileage",
  "",
  createJSONStorage(() => localforage)
);

export { mileageAtom };
