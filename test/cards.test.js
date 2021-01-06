const getCards = require('../js/cards');

test('check card', () => {

    let gfgObj = {
        "suit": "clubs",
        "name": "2",
        "src": "Clubs-2.png",
        "value": 2
    };

    let testObj = {
        "suit": "clubs",
        "name": "2",
        "src": "Clubs-2.png",
        "value": 2
    };
    expect(gfgObj).toEqual(testObj);

});