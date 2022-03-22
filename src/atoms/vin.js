import localforage from "localforage";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

const vinAtom = atomWithStorage(
  "vin",
  "",
  createJSONStorage(() => localforage)
);

export { vinAtom };
