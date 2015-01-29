var Synth = (function() {
  var canvas,
      audioContext,
      oscillator,
      gainNode

  // notes
  var lowNote = 261.63
  var highNote = 493.88

  var Synth = function() {
    myCanvas = document.getElementById('synth-pad')
    myAudioContext = new webkitAudioContext();
  };

});

window.onload = function() {
  var synth = new Synth()
  console.log('loaded')
}
