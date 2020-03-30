try {
  const title = 'example-1';
  console.group(title);

  const obj = {
    state: {
      num: 0
    },
    log: [],
    handler: function (element, event) {
      // debugger;
      this.state.num = Number(event.x);
      element.innerHTML = this.state.num;
      this.log.push(
        JSON.parse(JSON.stringify(this.state))
      );
    },
    view: function (id) {
      // debugger;
      const container = document.createElement('div');
      container.id = id;
      container.innerHTML = this.state.num;
      container.onmousemove = this.handler.bind(this, container);
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
