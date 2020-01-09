const asyncJelly = require('./asyncjelly');

test('the data should be peanut butter', async () => {
  const data = await asyncJelly(true);
  expect(data).toBe('peanut butter');
})
