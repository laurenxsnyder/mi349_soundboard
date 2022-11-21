var playBtn = document.getElementById('play'),
  resetBtn = document.getElementById('reset'),
  hearbeat = document.getElementById('bubbles')
	audios = document.querySelectorAll('audio');
console.log(audios);


playBtn.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);

playBtn.addEventListener('mouseleave', function() {
  bubbles.pause();
  bubbles.currentTime = 0;
}, false);

resetBtn.addEventListener('mouseover', function() {
    bubbles.play();
}, false);

resetBtn.addEventListener('mouseleave', function() {
  bubbles.pause();
  bubbles.currentTime = 0;
}, false);