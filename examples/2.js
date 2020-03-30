try {
  const title = 'example-2';
  console.group(title);

  const obj = {
    state: {
      word: ''
    },
    log: [],
    handler: function (element, event) {
      // debugger;
      const newWord = event.target.value;
      this.state.word = newWord;
      element.innerHTML = this.state.word;
      this.log.push(
        JSON.parse(JSON.stringify(this.state))
      );
    },
    view: function (id) {
      // debugger;
      const outputEl = document.createElement('p');
      outputEl.innerHTML = this.state.word;

      const inputEl = document.createElement('input');
      inputEl.type = 'text';
      inputEl.placeholder = 'type here';
      inputEl.onkeyup = this.handler.bind(this, outputEl);

      const container = document.createElement('div');
      container.id = id;
      container.appendChild(inputEl);
      container.appendChild(outputEl);
      container.className = 'exercise';
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
