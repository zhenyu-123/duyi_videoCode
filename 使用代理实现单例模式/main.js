import { Video } from "./video.js";
const video = new Video();
const video2 = new Video();
console.log(video === video2);
Video.prototype.play = function () {
  console.log("play");
};
video.play();
