try {
  const title = 'mistakes-1';
  console.group(title);
  // there is a comment by each method saying how many bugs are in it
  // write a little note about each after you fix it for later study

  const obj = {
    state: {
      x: 0,
      y: 0
    },
    log: [],
    renderState: function () { // 2 mistakes
      return `{ X: ` + ${ this.state.x } +`, Y: ` + ${ this.state.y } +` }`;
    },
    handler: function (event) { // 3 mistakes
      debugger;
      this.state.x = Number(event.X);
      this.state.y = Number(event.Y);
      event.innerHTML = this.renderState();
      this.log.push(
        JSON.parse(JSON.stringify(this.state))
      );
    },
    view: function (id) { // 3 mistakes
      // debugger;
      const container = document.createElement(div);
      container.id = id;
      container.innerHTML = this.renderState.bind(this);
      container.onmousemove = this.handler(this);
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
