try {
  const title = 'example-4';
  console.group(title);

  const obj = {
    state: {
      current: 0,
      past: []
    },
    log: [],
    handler: function (display, event) {
      // debugger;
      const newCurrentStr = event.target.form.increment.value;
      const newCurrent = Number(newCurrentStr);

      this.state.past.push(this.state.current);
      this.state.current += newCurrent;

      display.innerHTML = this.state.current;

      this.log.push(
        JSON.parse(JSON.stringify(this.state))
      );
    },
    view: function (id) {
      // debugger;
      const displayEl = document.createElement('p');
      displayEl.innerHTML = this.state.current;

      const buttonEl = document.createElement('input');
      buttonEl.type = 'button';
      buttonEl.value = 'increment by: ';
      buttonEl.onclick = this.handler.bind(this, displayEl);

      const inputEl = document.createElement('input');
      inputEl.type = 'number';
      inputEl.name = 'increment';
      inputEl.value = '1';

      const formEl = document.createElement('form');
      formEl.appendChild(buttonEl);
      formEl.appendChild(inputEl);

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


  console.groupEnd();
} catch (err) {
  console.log(err);
  console.groupEnd();
}
