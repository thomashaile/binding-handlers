try {
    const title = 'mistakes-4';
    console.group(title);
    // there is a comment by each method saying how many bugs are in it
    // write a little note about each after you fix it for later study

    const obj = {
        state: {
            num: 0,
            step: 1
        },
        log: [],
        add: function() { // 1 mistake
            this.state.num += this.state.step;
        },
        subtract: function() { // 1 mistake
            this.state.num -= this.state.step;
        },
        handleClick: function(display, event) { // 1 mistake
            // debugger;
            const action = event.target.innerHTML;
            this[action](event);
            display.innerHTML = this.state.num;
            this.log.push({
                action: action,
                newState: JSON.parse(JSON.stringify(this.state))
            });
        },
        handleStepChange: function(event) { // 1 mistake
            this.state.step = event.target.event.value;
            this.log.push({
                action: 'set step',
                newState: JSON.parse(JSON.stringify(this.state))
            });
        },
        view: function(id) { // 5 mistakes
            // debugger;
            const displayEl = document.createElement('code');
            displayEl.innerHTML = this.state.num;

            const upButtonEl = document.createElement('button');
            upButtonEl.innerHTML = 'add';
            upButtonEl.onclick = this.handleClick.bind(this, displayEl); // bind this to display element;

            const downButtonEl = document.createElement('button');
            downButtonEl.innerHTML = 'subtract';
            downButtonEl.onclick = this.handleClick.bind(this, displayEl); // bind this to display element;

            const stepSizeEl = document.createElement('input');
            stepSizeEl.type = 'number';
            stepSizeEl.value = this.state.step;
            stepSizeEl.onchange = this.handleStepChange.bind(this, displayEl); // bind this to display element

            const container = document.createElement('div');
            container.id = id;
            container.appendChild(displayEl);
            container.appendChild(document.createElement('br'));
            container.appendChild(upButtonEl);
            container.appendChild(downButtonEl);
            container.appendChild(document.createElement('br'));
            container.className = 'exercise';

            container.onclick = function(e) {
                if (e.target === e.currentTarget) console.log(title, this);
            };

            return container;
        },
    }

    document
        .getElementById('root')
        .appendChild(obj.view(title));


    // there are no mistakes in the tests
    const assert = (assertion, message) => {
        if (assertion) {
            console.log('%cPASS: ' + message, 'color:green');
        } else {
            console.log('%cFAIL: ' + message, 'color:red');
        }
    };

    assert(JSON.stringify(obj.state) === '{"num":0,"step":1}', 'Test 0');

    obj.add();
    assert(JSON.stringify(obj.state) === '{"num":1,"step":1}', 'Test 1 - add');

    obj.state.step = 2;
    obj.add();
    assert(JSON.stringify(obj.state) === '{"num":3,"step":2}', 'Test 2 - add');

    obj.state.step = 0;
    obj.add();
    assert(JSON.stringify(obj.state) === '{"num":3,"step":0}', 'Test 3 - add');

    obj.state.step = -3;
    obj.add();
    assert(JSON.stringify(obj.state) === '{"num":0,"step":-3}', 'Test 4 - add');

    obj.state = { num: 0, step: 1 };
    assert(JSON.stringify(obj.state) === '{"num":0,"step":1}', 'Test 5');

    obj.subtract();
    assert(JSON.stringify(obj.state) === '{"num":-1,"step":1}', 'Test 6 - subtract');

    obj.state.step = 2;
    obj.subtract();
    assert(JSON.stringify(obj.state) === '{"num":-3,"step":2}', 'Test 7 - subtract');

    obj.state.step = 0;
    obj.subtract();
    assert(JSON.stringify(obj.state) === '{"num":-3,"step":0}', 'Test 8 - subtract');

    obj.state.step = -3;
    obj.subtract();
    assert(JSON.stringify(obj.state) === '{"num":0,"step":-3}', 'Test 9 - subtract');

    obj.state = { num: 0, step: 1 };
    assert(JSON.stringify(obj.state) === '{"num":0,"step":1}', 'Test 10');

    console.groupEnd();
} catch (err) {
    console.log(err);
    console.groupEnd();
}