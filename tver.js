const velocity = 100;
 
 function adAccelerate() {
     const controller = [...document.querySelectorAll('div')]
         .find(div => div.className.includes('controller_container__'));
     if (!controller) return console.error('× controller_containerが見つかりません');
 
     const speed = controller.style.getPropertyValue('--seek-bar-color') === '#ffd647' ? 16 : 1;
     document.querySelectorAll('video').forEach(video => {
         if (video.playbackRate !== speed) {
             video.playbackRate = speed;
             console.log(`${speed}xに変更しました`);
         }
     });
 }
 
 setInterval(adAccelerate, velocity);
