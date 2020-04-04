try {
    const title = 'mistakes-3';
    console.group(title);
    // there is a comment by each method saying how many mistakes are in it
    // write a little note about each after you fix it for later study

    const obj = {
        state: {
            num: 0,
            charCode: 0
        },
        log: [],
        numToCharCode: function() { // 1 mistake
            this.state.charCode = ((this.state.num % 256) + 256) % 256;
        },
        renderCharCode: function() { // 1 mistake
            return `<text>${String.fromCharCode(this.charCode)}</text>`; //change state.num
        },
        handler: function(display, event) { // 2 mistakes
            // debugger;
            this.state.num = Number(event.target.value);
            this.numToCharCode(); //call numtocharcode
            display.innerHTML = this.renderCharCode(); //to display the result
            this.log.push(
                JSON.parse(JSON.stringify(this.state))
            );
        },
        view: function(id) { // 3 mistakes
            // debugger;
            const outputEl = document.createElement('code');
            outputEl.style.marginLeft = '8%';
            outputEl.innerHTML = this.state.charCode; //aadded

            const inputEl = document.createElement('input');
            inputEl.type = 'number';
            inputEl.value = '0';
            inputEl.onchange = this.handler.bind(this, outputEl); //change call to bind

            const container = document.createElement('div');
            container.id = id;
            container.appendChild(inputEl);
            container.appendChild(outputEl);
            container.className = 'exercise';
            container.onclick = function(e) {
                if (e.target === e.currentTarget) console.log.bind(title, this);
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

    assert(JSON.stringify(obj.state) === '{"num":0,"charCode":0}', 'Test 0');

    obj.numToCharCode();
    assert(JSON.stringify(obj.state) === '{"num":0,"charCode":0}', 'Test 1');

    obj.state.num = 1;
    obj.numToCharCode();
    assert(JSON.stringify(obj.state) === '{"num":1,"charCode":1}', 'Test 2');

    obj.state.num = -1;
    obj.numToCharCode();
    assert(JSON.stringify(obj.state) === '{"num":-1,"charCode":255}', 'Test 3');

    obj.state.num = -2;
    obj.numToCharCode();
    assert(JSON.stringify(obj.state) === '{"num":-2,"charCode":254}', 'Test 4');

    obj.state.num = 140;
    obj.numToCharCode();
    assert(JSON.stringify(obj.state) === '{"num":140,"charCode":140}', 'Test 5');

    obj.state.num = 0;
    obj.state.charCode = 0;
    assert(JSON.stringify(obj.state) === '{"num":0,"charCode":0}', 'Test 6');

    console.groupEnd();
} catch (err) {
    console.log(err);
    console.groupEnd();
}