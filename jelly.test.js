const jelly = require('./jelly');

test('the data should be peanut butter', () => {
  return jelly(true).then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the promise rejects lonely jelly', () => {
  expect.assertions(1);
  return jelly(false).catch(e => expect(e).toMatch('lonely jelly'))
});
