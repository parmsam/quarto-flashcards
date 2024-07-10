window.RevealFlashcards = function () {

  var keyCodes = {
    backspace: 8, tab: 9, enter: 13, shift: 16, ctrl: 17, alt: 18, pausebreak: 19, capslock: 20,
    esc: 27, space: 32, pageup: 33, pagedown: 34, end: 35, home: 36, leftarrow: 37, uparrow: 38,
    rightarrow: 39, downarrow: 40, insert: 45, delete: 46, 0: 48, 1: 49, 2: 50, 3: 51, 4: 52,
    5: 53, 6: 54, 7: 55, 8: 56, 9: 57, a: 65, b: 66, c: 67, d: 68, e: 69, f: 70, g: 71, h: 72,
    i: 73, j: 74, k: 75, l: 76, m: 77, n: 78, o: 79, p: 80, q: 81, r: 82, s: 83, t: 84, u: 85,
    v: 86, w: 87, x: 88, y: 89, z: 90, leftwindowkey: 91, rightwindowkey: 92, selectkey: 93,
    numpad0: 96, numpad1: 97, numpad2: 98, numpad3: 99, numpad4: 100, numpad5: 101, numpad6: 102,
    numpad7: 103, numpad8: 104, numpad9: 105, multiply: 106, add: 107, subtract: 109, decimalpoint: 110,
    divide: 111, f1: 112, f2: 113, f3: 114, f4: 115, f5: 116, f6: 117, f7: 118, f8: 119, f9: 120,
    f10: 121, f11: 122, f12: 123, numlock: 144, scrolllock: 145, semicolon: 186, equalsign: 187,
    comma: 188, dash: 189, period: 190, forwardslash: 191, graveaccent: 192, openbracket: 219,
    backslash: 220, closebracket: 221, singlequote: 222
  };

  return {
    id: "RevealFlashcards",
    init: function (deck) {
      const config = deck.getConfig();
      console.log(config);
      const options = config.flashcards || {};

      var settings = {};
      settings.flipButton = options.showFlipButton ? options.showFlipButton: false;

      // Add the flip button to each slide
      if (settings.flipButton) {
        // Create the flip button
        let flipButton = document.createElement('button');
        flipButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2a76dd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="16 3 21 3 21 8"></polyline>
          <line x1="4" y1="20" x2="21" y2="3"></line>
          <polyline points="21 16 21 21 16 21"></polyline>
          <line x1="15" y1="15" x2="21" y2="21"></line>
          <line x1="4" y1="4" x2="9" y2="9"></line>
        </svg>
      `;
        flipButton.style.position = 'fixed';
        flipButton.style.top = '0%';
        flipButton.style.left = '100%';
        flipButton.style.backgroundColor = 'transparent';
        flipButton.style.border = 'none';
        flipButton.style.width = '5rem';
        flipButton.style.height = '5rem';

        deck.getSlides().forEach((slide, index) => {
          // Ignore the first slide (main title slide)
          // if (index === 0) return;

          let flashcardFront = slide.querySelector('.flashcard-front');
          let flashcardBack = slide.querySelector('.flashcard-back');

          if (flashcardBack || flashcardFront) {
            let clone = flipButton.cloneNode(true);

            // Add a click event listener to the cloned flip button
            clone.addEventListener('click', () => {
              if (flashcardFront && flashcardBack) {
                // Toggle the active class between the front and back of the flashcard
                flashcardFront.classList.toggle('active');
                flashcardBack.classList.toggle('active');
              }
            });
            slide.appendChild(clone);
          }
        });
      }

      settings.flipKey = options.flipKey ? options.flipKey.toLowerCase() : "q";
      settings.flipKeyCode = keyCodes[settings.flipKey] || 81;

      deck.addKeyBinding({ keyCode: settings.flipKeyCode, key: settings.flipKey }, () => {
        let currentSlide = deck.getSlide(deck.getState().indexh);
        let flashcardFront = currentSlide.querySelector('.flashcard-front');
        let flashcardBack = currentSlide.querySelector('.flashcard-back');
        if (flashcardFront && flashcardBack) {
          // Toggle the active class between the front and back of the flashcard
          flashcardFront.classList.toggle('active');
          flashcardBack.classList.toggle('active');
        }
      });

      settings.shuffleKey = options.shuffleKey ? options.shuffleKey.toLowerCase() : "t";
      settings.shuffleKeyCode = keyCodes[settings.shuffleKey] || 84;

      deck.addKeyBinding({ keyCode: settings.shuffleKeyCode, key: settings.shuffleKey }, () => {
        deck.shuffle();
        deck.slide(0, 0, 0);
      });

    },
  };
};
