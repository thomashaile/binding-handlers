try {
  const title = 'fill-in-1';
  console.group(title);

  const obj = {
    state: {
      _: 0,
      _: 0
    },
    log: [],
    handler: function (element, _) {
      // debugger;
      const preRed = Number(event.x);
      const preBlue = Number(event.y);
      this.state.red = (_ / window.innerWidth) * 255;
      this.state.blue = (_ / window.innerHeight) * 255;
      element.style._ = `rgb(${_}, 0, ${_})`;
      this.log.push(
        JSON.parse(JSON.stringify(this.state))
      );
    },
    view: function (_) {
      // debugger;
      const container = document.createElement('div');
      container.id = id;
      container.onmousemove = this.handler.bind(_, _);
      container.style.height = '20em';

      container.className = 'exercise';
      container.onclick = (function (e) {
        if (e.target === e.currentTarget) console.log(title, this);
      }).bind(_);

      return container;
    },
  }

  document
    .getElementById('root')
    .appendChild(obj._(title));


  console.groupEnd();
} catch (err) {
  console.log(err);
  console.groupEnd();
}
