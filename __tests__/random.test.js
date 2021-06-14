const randomNumber = require('randomNumber');
    test('gets random number from 1 to 10', () => {
        expect(randomNumber()).toBeGreaterThanOrEqual(1);
        expect(randomNumber()).toBeLessThanOrEqual(10);
    });