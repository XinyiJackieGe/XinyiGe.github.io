function playVideo(video) {
  let iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    "https://www.youtube.com/embed/9CDbK2plvqw");

  // The height and width of the iFrame should be the same as parent
  iframe.setAttribute("width", 360);
  iframe.setAttribute("height", 115);
  iframe.setAttribute("frameborder", 0);
  // Replace the YouTube thumbnail with YouTube HTML5 Player
  //this.parentNode.replaceChild(iframe, this);

  video.appendChild(iframe);
}


let video = document.getElementsByClassName("youtube")[0];

playVideo(video);
