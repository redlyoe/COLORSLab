function formatColor(hex) {
  if (hex.startsWith('#') && hex.length === 4) {
    return '#' + hex[1]+hex[1] + hex[2]+hex[2] + hex[3]+hex[3];
  }
  return hex;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

test('expands shorthand hex to full hex', () => {
  expect(formatColor('#fff')).toBe('#ffffff');
});

test('leaves full hex unchanged', () => {
  expect(formatColor('#ff5733')).toBe('#ff5733');
});

test('validates a correct email', () => {
  expect(isValidEmail('test@example.com')).toBe(true);
});

test('rejects an invalid email', () => {
  expect(isValidEmail('notanemail')).toBe(false);
});
