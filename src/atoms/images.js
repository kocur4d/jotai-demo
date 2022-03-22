import localforage from "localforage";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

const imagesAtom = atomWithStorage(
  "images",
  [],
  createJSONStorage(() => localforage)
);

export { imagesAtom };
