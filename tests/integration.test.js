test('API returns expected JSON structure', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();

  expect(res.status).toBe(200);
  expect(data).toHaveProperty('id');
  expect(data).toHaveProperty('title');
  expect(data).toHaveProperty('body');
  expect(typeof data.title).toBe('string');
});
