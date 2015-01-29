var Synth = (function() {
  var canvas,
      audioContext,
      oscillator,
      gainNode

  // notes
  var lowNote = 261.63
  var highNote = 493.88

  // constructor
  var Synth = function() {
    canvas = document.getElementById('synth-pad')
    audioContext = new webkitAudioContext();
    Synth.setupEventListeners();
  };

  Synth.setupEventListeners = function() {
    document.body.addEventListener('touchmove', function(event) {
      event.preventDefault();
    }, false);

    canvas.addEventListener('mousedown', Synth.playSound)
    canvas.addEventListener('touchstart', Synth.playSound)
    canvas.addEventListener('mouseup', Synth.stopSound)
    document.addEventListener('mouseleave', Synth.stopSound)
    canvas.addEventListener('touchend', Synth.stopSound)
  };

  Synth.playSound = function(event) {
    oscillator = audioContext.createOscillator();
    gainNode = audioContext.createGainNode();
    oscillator.type = 'triangle';

    gainNode.connect(audioContext.destination);
    oscillator.connect(gainNode);
    Synth.updateFrequency(event);
    oscillator.start(0);

    canvas.addEventListener('mousemove', Synth.updateFrequency);
    canvas.addEventListener('touchmove', Synth.updateFrequency);
    canvas.addEventListener('mouseout', Synth.stopSound);
  };

  Synth.stopSound = function(event) {
    oscillator.stop(0);
    canvas.removeEventListener('mousemove', Synth.updateFrequency);
    canvas.removeEventListener('touchmove', Synth.updateFrequency);
    canvas.removeEventListener('mouseout', Synth.stopSound);
  };

  return Synth
});

window.onload = function() {
  var synth = new Synth()
  console.log('loaded')
}
