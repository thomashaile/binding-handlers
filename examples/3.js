try {
  const title = 'example-3';
  console.group(title);

  const obj = {
    state: {
      average: 0,
      sum: 0,
      howMany: 0
    },
    log: [],
    handler: function (element, event) {
      // debugger;
      const newNumberStr = event.target.form.newNumber.value;
      const newNumber = Number(newNumberStr);
      this.state.sum += newNumber;
      this.state.howMany += 1;
      this.state.average = this.state.sum / this.state.howMany;
      element.innerHTML = this.state.average;
      this.log.push({
        newNumber,
        newState: JSON.parse(JSON.stringify(this.state))
      });
    },
    view: function (id) {
      // debugger;
      const outputEl = document.createElement('p');
      outputEl.innerHTML = this.state.average;

      const inputEl = document.createElement('input');
      inputEl.type = 'number';
      inputEl.name = 'newNumber';
      inputEl.value = '1';

      const buttonEl = document.createElement('input');
      buttonEl.type = 'button';
      buttonEl.value = 'include in average';
      buttonEl.onclick = this.handler.bind(this, outputEl);

      const formEl = document.createElement('form');
      formEl.appendChild(inputEl);
      formEl.appendChild(buttonEl);

      const container = document.createElement('div');
      container.id = id;
      container.appendChild(formEl);
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
