function appendVideo() {
  let video = document.getElementsByClassName("youtube")[0];
  let iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    "https://www.youtube.com/embed/9CDbK2plvqw");

  // The height and width of the iFrame should be the same as parent
  iframe.setAttribute("width", 360);
  iframe.setAttribute("height", 115);
  iframe.setAttribute("frameborder", 0);
  video.appendChild(iframe);
}

appendVideo();
