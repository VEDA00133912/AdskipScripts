let lastTime = null;

function adSetStartPosition() {
    const controller = [...document.querySelectorAll('div')].find(div => div.className.includes('controller_container__'));
    if (!controller) return;

    const seekBarColor = controller.style.getPropertyValue('--seek-bar-color');
    
    document.querySelectorAll('video').forEach(video => {
        if (seekBarColor === '#ffd647' && video.currentTime !== 999) {
            lastTime = video.currentTime;
            video.currentTime = 999;
            console.log(`開始位置を999に変更しました`);
        } else if (lastTime !== null && video.currentTime !== lastTime) {
            video.currentTime = lastTime;
            console.log(`開始位置を記録された秒数(${lastTime})に戻しました`);
        }
    });

    if (seekBarColor !== '#ffd647') lastTime = null;
}

new MutationObserver(adSetStartPosition).observe(document.body, { childList: true, subtree: true, attributes: true });
