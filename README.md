# TypeScript-VideoPlayer
TypeScript视频播放器
1. 获取视频播放器元素：

   const videoPlayer = document.getElementById('videoPlayer') as HTMLVideoElement;

   这行代码获取具有id为`videoPlayer`的HTML元素，并将其类型断言为`HTMLVideoElement`。这将允许我们访问视频播放器的属性和方法。

2. 获取功能按钮元素：

   const playButton = document.getElementById('playButton');
   const pauseButton = document.getElementById('pauseButton');
   const speedControl = document.getElementById('speedControl') as HTMLInputElement;
   const volumeControl = document.getElementById('volumeControl') as HTMLInputElement;

   这些代码获取具有相应id的HTML元素，例如`playButton`、`pauseButton`、`speedControl`和`volumeControl`。这些元素将用于触发不同的功能。

3. 设置初始值：

   videoPlayer.playbackRate = 1.0;
   videoPlayer.volume = 1.0;

   这些代码设置视频播放器的初始速度为1.0，音量为1.0。可以根据需要修改这些初始值。

4. 播放按钮点击事件处理程序：

   playButton.addEventListener('click', () => {
     videoPlayer.play();
   });

   这段代码添加了一个点击事件处理程序，当点击`playButton`时，视频播放器将开始播放。

5. 暂停按钮点击事件处理程序：

   pauseButton.addEventListener('click', () => {
     videoPlayer.pause();
   });

   这段代码添加了一个点击事件处理程序，当点击`pauseButton`时，视频播放器将暂停播放。

6. 速度控制输入事件处理程序：

   speedControl.addEventListener('input', () => {
     const speed = parseFloat(speedControl.value);
     videoPlayer.playbackRate = speed;
   });

   这段代码添加了一个输入事件处理程序，当更改`speedControl`的值时，视频播放器的速度将相应地调整为输入值。

7. 音量控制输入事件处理程序：

   volumeControl.addEventListener('input', () => {
     const volume = parseFloat(volumeControl.value);
     videoPlayer.volume = volume;
   });

   这段代码添加了一个输入事件处理程序，当更改`volumeControl`的值时，视频播放器的音量将相应地调整为输入值。
