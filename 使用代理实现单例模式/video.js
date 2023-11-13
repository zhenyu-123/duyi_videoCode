import { singleton } from "./singleton";
class Video {
  constructor() {
    console.log("video created");
  }
}
const newVideo = singleton(Video);
export { newVideo as Video };
