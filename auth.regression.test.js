const login = require('./auth');

test('Regression - Wrong password', () => {
    expect(login('admin', '9999')).toBe(false);
});

test('Regression - Empty username', () => {
    expect(login('', '123')).toBe(false);
});

test('Regression - Special characters in password', () => {
    expect(login('admin', '@#$%')).toBe(false);
});

test('Regression - Locked account', () => {
    expect(login('locked', '123')).toBe(false);
});

test('Regression - Wrong username', () => {
    expect(login('user', '123')).toBe(false);
});
