try {
  const title = 'fill-in-5';
  console.group(title);

  const _ = {
    state: {
      word: ''
    },
    log: [],
    get _() { return _ },
    set _(newOne) { this.state.word = newOne },
    _: function () {
      this.word = this.word
        .split('').reverse().join('');
    },
    keepLetters: function () {
      this.word = this.word.replace(/[^a-zA-Z]/gi, '');
    },
    handler: function (element, event) {
      // debugger;
      const newWord = event.target._;
      this.word = newWord;
      if (this.word.length > 20) {
        this.reverseWord();
      } else {
        this._();
      }
      element.innerHTML = this.word;
      this._.push({
        newWord,
        length: newWord.length,
        thisWord: this.word
      });
    },
    view: function (id) {
      // debugger;
      const outputEl = document.createElement('p');
      outputEl.innerHTML = this.word;

      const inputEl = document.createElement('input');
      inputEl.type = 'text';
      inputEl.placeholder = 'type here';
      inputEl.onkeyup = this.handler._(_, outputEl);

      const container = document.createElement('div');
      container.id = id;
      container.appendChild(inputEl);
      container.appendChild(outputEl);
      container.className = 'exercise';
      container.onclick = (function (e) {
        if (e.target === e.currentTarget) console.log(title, this);
      }).bind(this);

      return _;
    },
  }

  document
    .getElementById('root')
    .appendChild(_.view(title));



  const assert = (assertion, message) => {
    if (assertion) {
      console.log('%cPASS: ' + message, 'color:green');
    } else {
      console.log('%cFAIL: ' + message, 'color:red');
    }
  };

  assert(obj.word === '', 'Test 0');

  obj.word = 'asdf';
  obj.reverseWord();
  assert(obj.word === 'fdsa', 'Test 1 - reverseWord');

  obj.word = 'abcdefghijklmnopqrstuvwxyz';
  obj.reverseWord();
  assert(obj.word === 'zyxwvutsrqponmlkjihgfedcba', 'Test 2 - reverseWord');

  obj.word = '--987--|';
  obj.reverseWord();
  assert(obj.word === '|--789--', 'Test 3 - reverseWord');

  obj.word = 'asdf';
  obj.keepLetters();
  assert(obj.word === 'asdf', 'Test 4 - keepLetters');

  obj.word = '1@2-5+6';
  obj.keepLetters();
  assert(obj.word === '', 'Test 5 - keepLetters');

  obj.word = 'a_s0d`f';
  obj.keepLetters();
  assert(obj.word === 'asdf', 'Test 6 - keepLetters');

  obj.word = '';
  assert(obj.word === '', 'Test 7');

  console.groupEnd();
} catch (err) {
  console.log(err);
  console.groupEnd();
}
