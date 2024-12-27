let isAdPlaying = false; 
let velocity = 500; 

function setPlaybackRate(rate) {
  const video = document.querySelector('video');
  if (video) {
    video.playbackRate = rate;
    console.log(`再生速度を${rate}倍速に設定しました`);
  }
}

function checkAd() {
  const adElement = document.querySelector('.ad-simple-attributed-string.ytp-ad-badge__text--clean-player.ytp-ad-badge__text--clean-player-with-light-shadow');

  if (adElement && !isAdPlaying) {
    console.log('広告が開始しました。16倍速に設定します');
    setPlaybackRate(16);
    isAdPlaying = true; 
  } else if (!adElement && isAdPlaying) {
    console.log('広告が終了しました。通常速度に戻します');
    setPlaybackRate(1);
    isAdPlaying = false; 
  }
}

setInterval(checkAd, velocity);
