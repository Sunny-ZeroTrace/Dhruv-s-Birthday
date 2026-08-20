(function () {
  'use strict';

  var intro = document.getElementById('intro');
  var enterBtn = document.getElementById('enterBtn');
  var audio = document.getElementById('anthem');
  var audioBtn = document.getElementById('audioBtn');
  var audioState = document.getElementById('audioState');

  var hasError = false;
  var isPlaying = false;

  function setAudioUI() {
    if (hasError) {
      audioState.textContent = 'N/A';
      audioBtn.setAttribute('aria-pressed', 'false');
      audioBtn.setAttribute('aria-label', "Dhruv's anthem unavailable");
      audioBtn.disabled = true;
      return;
    }
    audioState.textContent = isPlaying ? 'ON' : 'OFF';
    audioBtn.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
    audioBtn.setAttribute(
      'aria-label',
      isPlaying ? "Turn off Dhruv's anthem" : "Turn on Dhruv's anthem"
    );
  }

  audio.addEventListener('error', function () {
    hasError = true;
    isPlaying = false;
    setAudioUI();
  });

  enterBtn.addEventListener('click', function () {
    intro.classList.add('intro--closed');
    setTimeout(function () {
      intro.style.display = 'none';
    }, 200);

    if (hasError) return;

    audio.volume = 0.6;
    var playPromise = audio.play();
    if (playPromise && playPromise.then) {
      playPromise
        .then(function () {
          isPlaying = true;
          setAudioUI();
        })
        .catch(function () {
          hasError = true;
          isPlaying = false;
          setAudioUI();
        });
    }
  });

  audioBtn.addEventListener('click', function () {
    if (hasError) return;

    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      setAudioUI();
      return;
    }

    var playPromise = audio.play();
    if (playPromise && playPromise.then) {
      playPromise
        .then(function () {
          isPlaying = true;
          setAudioUI();
        })
        .catch(function () {
          hasError = true;
          isPlaying = false;
          setAudioUI();
        });
    } else {
      isPlaying = true;
      setAudioUI();
    }
  });

  // Easter eggs on the stats cards
  var eggButtons = document.querySelectorAll('.stats__card-btn[data-egg]');
  eggButtons.forEach(function (btn) {
    var valueEl = btn.querySelector('.stats__value');
    var noteEl = btn.querySelector('.stats__note');
    var originalValue = valueEl.textContent;
    var originalNote = noteEl.textContent;
    var open = false;

    btn.addEventListener('click', function () {
      open = !open;
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        valueEl.textContent = '⚠';
        noteEl.textContent = btn.getAttribute('data-egg');
      } else {
        valueEl.textContent = originalValue;
        noteEl.textContent = originalNote;
      }
    });
  });

  setAudioUI();
})();
