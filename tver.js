const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.tagName === 'VIDEO') {
                handleVideo(node); 
            }
        });
    });
});

observer.observe(document.body, { childList: true, subtree: true });
document.querySelectorAll('video').forEach(handleVideo);

function handleVideo(video) {
    const videoSrc = video.src || [...video.querySelectorAll('source')].map(source => source.src).find(src => src.includes('https://i.socdm.com'));
    if (videoSrc && videoSrc.includes('https://i.socdm.com')) {
        video.playbackRate = 16; // たぶん16以上だと弾かれます
        console.log(`Set playback speed to 30x for video with src: ${videoSrc}`);
    }
}
