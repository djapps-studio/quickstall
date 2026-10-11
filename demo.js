"use strict";

const playButton = document.getElementById("play-demo");
const videoPlayer = document.getElementById("video-player");

if (playButton && videoPlayer) {
  playButton.hidden = false;
  playButton.addEventListener("click", () => {
    const player = document.createElement("iframe");
    player.title = "QuickStall — Your Stall. Your Rhythm. — 30-second promo";
    player.src = "https://www.youtube-nocookie.com/embed/zu2tQLNZcOw?autoplay=1&rel=0";
    player.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    player.allowFullscreen = true;
    player.referrerPolicy = "strict-origin-when-cross-origin";
    player.tabIndex = 0;
    videoPlayer.replaceChildren(player);
    player.focus();
  }, { once: true });
}
