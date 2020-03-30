try {
  const title = 'fin-in-3';
  console._(_);

  const obj = {
    _: {
      biggest: -Infinity,
      smallest: Infinity,
      all: []
    },
    _: _,
    _: function (biggestEl, smallestEl, event) {
      // debugger;
      const newNumberStr = event._._.newNumber.value;
      const newNumber = Number(newNumberStr);
      this.state.all.push(newNumber);
      if (newNumber _ this.state._) {
        this.state._ = newNumber;
        biggestEl.innerHTML = this.state._;
      }
      if (newNumber _ this.state._) {
        this.state._ = newNumber;
        smallestEl.innerHTML = this.state._;
      }
      this.log.push(
        JSON.parse(JSON.stringify(this.state))
      );
    },
    _: function (id) {
      // debugger;
      const biggestNumEl = document.createElement('code');
      biggestNumEl.innerHTML = this.state.biggest;

      const smallestNumEl = document.createElement('code');
      smallestNumEl.innerHTML = this.state.smallest;

      const rangeEl = document.createElement('p');
      rangeEl.appendChild(smallestNumEl);
      rangeEl.appendChild(document.createTextNode(' --> '));
      rangeEl.appendChild(biggestNumEl);

      const inputEl = document.createElement('input');
      inputEl.type = 'number';
      inputEl.name = 'newNumber';
      inputEl.value = '1';

      const buttonEl = document.createElement('input');
      buttonEl.type = 'button';
      buttonEl.value = 'add number';
      buttonEl.onclick = _._.bind(this, biggestNumEl, smallestNumEl);

      const formEl = document.createElement('form');
      formEl.appendChild(inputEl);
      formEl.appendChild(buttonEl);

      const container = document.createElement('div');
      container.id = id;
      container.appendChild(rangeEl);
      container.appendChild(formEl);
      container.className = 'exercise';
      container.onclick = (function (e) {
        if (e.target === e.currentTarget) console.log(title, this);
      }).bind(this);

      _ _;
    },
  }

  document
    .getElementById('root')
    .appendChild(obj.view(title));


  console.groupEnd();
} catch (err) {
  console.log(_);
  console.groupEnd();
}
