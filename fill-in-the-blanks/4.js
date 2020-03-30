try {
  const title = 'fill-in-4';
  console.group(title);

  const obj = {
    state: {},
    log: [],
    set: function (key, value) {
      _;
    },
    remove: function (key) {
      _;
    },
    renderState: function () {
      const liElements = Object.keys(this.state)
        .map(key => `\n <li><code>${key}: ${_}</code></li>`)
        .reduce((allLis, liStr) => allLis + liStr, '');
      return '<ul>' + liElements + '\n</ul>';
    },
    handler: function (display, event) {
      // debugger;
      const action = event.target.value;
      const key = event.target.form.keyInput.value;
      const value = event.target.form.valueInput.value;

      if (action === 'set key') {
        this.set(key, value);
      } else if (action === 'remove key') {
        this.remove(key);
      };

      display.innerHTML = this.renderState();

      this.log.push({
        action, key, value,
        newState: JSON.parse(JSON.stringify(this.state))
      });
    },
    view: function (id) {
      // debugger;
      const displayEl = document.createElement('p');
      displayEl.innerHTML = _._();

      const keyInputEl = document.createElement('input');
      keyInputEl.type = 'text';
      keyInputEl.name = _;
      keyInputEl.placeholder = 'key';

      const valueInputEl = document.createElement('input');
      valueInputEl.type = 'text';
      valueInputEl.name = _;
      valueInputEl.placeholder = 'value';

      const setButtonEl = document.createElement('input');
      setButtonEl.type = 'button';
      setButtonEl.value = _;
      setButtonEl.onclick = _._._(_, _);

      const removeButtonEl = document.createElement('input');
      removeButtonEl.type = 'button';
      removeButtonEl.value = _;
      removeButtonEl.onclick = _._._(_, _);

      const formEl = document.createElement('form');
      formEl.appendChild(keyInputEl);
      formEl.appendChild(valueInputEl);
      formEl.appendChild(document.createElement('br'));
      formEl.appendChild(setButtonEl);
      formEl.appendChild(removeButtonEl);

      const container = document.createElement('div');
      container.id = id;
      container.className = 'exercise';
      container.appendChild(formEl);
      container.appendChild(displayEl);
      container.onclick = (function (e) {
        if (e.target === e.currentTarget) console.log(_, _);
      }).bind(this);

      return container;
    },
  }

  document
    .getElementById('root')
    .appendChild(obj.view(title));


  const assert = (_, _) => {
    if (_) {
      console.log('%cPASS: ' + _, 'color:green');
    } else {
      console.log('%cFAIL: ' + _, 'color:red');
    }
  };

  assert(JSON.stringify(obj.state) === '{}', 'Test 0');

  obj.set('a', 'x');
  assert(JSON.stringify(obj.state) === '{"a":"x"}', 'Test 2 - obj.set');

  obj.set('b', 'y');
  assert(JSON.stringify(obj.state) === '{"a":"x","b":"y"}', 'Test 2 - obj.set');

  obj.set('a', 'z');
  assert(JSON.stringify(obj.state) === '{"a":"z","b":"y"}', 'Test 3 - obj.set');

  obj.remove('a');
  assert(JSON.stringify(obj.state) === '{"b":"y"}', 'Test 4 - obj.remove');

  obj.remove('b');
  assert(JSON.stringify(obj.state) === '{}', 'Test 5 - obj.remove');

  obj.remove('a');
  assert(JSON.stringify(obj.state) === '{}', 'Test 6 - obj.remove');

  obj.state = {};
  assert(JSON.stringify(obj.state) === '{}', 'Test 7');

  console.groupEnd();
} catch (err) {
  console.log(err);
  console.groupEnd();
}
