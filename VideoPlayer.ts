// 获取视频播放器元素
const videoPlayer = document.getElementById('videoPlayer') as HTMLVideoElement;

// 获取功能按钮元素
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const speedControl = document.getElementById('speedControl') as HTMLInputElement;
const volumeControl = document.getElementById('volumeControl') as HTMLInputElement;

// 设置初始值
videoPlayer.playbackRate = 1.0;
videoPlayer.volume = 1.0;

// 播放按钮点击事件处理程序
playButton.addEventListener('click', () => {
  videoPlayer.play();
});

// 暂停按钮点击事件处理程序
pauseButton.addEventListener('click', () => {
  videoPlayer.pause();
});

// 速度控制输入事件处理程序
speedControl.addEventListener('input', () => {
  const speed = parseFloat(speedControl.value);
  videoPlayer.playbackRate = speed;
});

// 音量控制输入事件处理程序
volumeControl.addEventListener('input', () => {
  const volume = parseFloat(volumeControl.value);
  videoPlayer.volume = volume;
});
