try {
  const title = 'example-5';
  console.group(title);

  const obj = {
    state: {
      words: []
    },
    log: [],
    removeWord: function (toRemove) { // logic method
      this.state.words = this.state.words
        .filter(word => word !== toRemove);
    },
    renderList: function () {
      return this.state.words
        .map(word => {
          const li = document.createElement('li');
          li.innerHTML = word;
          return li;
        })
        .reduce((list, word) => {
          list.appendChild(word);
          return list;
        }, document.createElement('ul'));
    },
    handler: function (display, event) {
      // debugger;
      const word = event.target.form.word.value;
      const action = event.target.value;
      if (action === 'add') {
        this.state.words.push(word);
      } else if (action === 'remove') {
        this.removeWord(word);
      }
      const newList = this.renderList();
      display.innerHTML = '';
      display.appendChild(newList);
      this.log.push({
        word,
        action,
        newState: JSON.parse(JSON.stringify(this.state))
      });
    },
    view: function (id) {
      // debugger;
      const displayEl = document.createElement('div');
      const wordsList = this.renderList();
      displayEl.appendChild(wordsList);

      const inputEl = document.createElement('input');
      inputEl.type = 'text';
      inputEl.name = 'word';
      inputEl.placeholder = 'type a thing';

      const addButtonEl = document.createElement('input');
      addButtonEl.type = 'button';
      addButtonEl.value = 'add';
      addButtonEl.onclick = this.handler.bind(this, displayEl);

      const removeButtonEl = document.createElement('input');
      removeButtonEl.type = 'button';
      removeButtonEl.value = 'remove';
      removeButtonEl.onclick = this.handler.bind(this, displayEl);

      const formEl = document.createElement('form');
      formEl.appendChild(inputEl);
      formEl.appendChild(addButtonEl);
      formEl.appendChild(removeButtonEl);

      const container = document.createElement('div');
      container.id = id;
      container.className = 'exercise';
      container.appendChild(formEl);
      container.appendChild(displayEl);
      container.onclick = (function (e) {
        if (e.target === e.currentTarget) console.log(title, this);
      }).bind(this);

      return container;
    },
  }

  document
    .getElementById('root')
    .appendChild(obj.view(title));


  const assert = (assertion, message) => {
    if (assertion) {
      console.log('%cPASS: ' + message, 'color:green');
    } else {
      console.log('%cFAIL: ' + message, 'color:red');
    }
  };

  assert(obj.state.words.toString() === '', 'Test 0');

  obj.state.words = ['a', 'b', 'c'];
  obj.removeWord('a');
  assert(obj.state.words.toString() === 'b,c', 'Test 1');

  obj.state.words = ['a', 'b', 'c'];
  obj.removeWord('d');
  assert(obj.state.words.toString() === 'a,b,c', 'Test 2');

  obj.state.words = ['a', 'b', 'c', 'a'];
  obj.removeWord('a');
  assert(obj.state.words.toString() === 'b,c', 'Test 3');

  obj.state.words = [];
  obj.removeWord('a');
  assert(obj.state.words.toString() === '', 'Test 4');

  console.groupEnd();
} catch (err) {
  console.log(err);
  console.groupEnd();
}
