const greet = require('./app');

test('greets world when no name', () => {
    expect(greet()).toBe("Hello, World!");
});

test('greets person by name', () => {
    expect(greet("Alice")).toBe("Hello, Alice!");
});

test('handles empty string', () => {
    expect(greet("")).toBe("Hello, World!");
});