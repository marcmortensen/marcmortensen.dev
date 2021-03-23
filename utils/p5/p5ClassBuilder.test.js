const { P5ClassBuilder } = require('./index');

class ConcreteClass extends P5ClassBuilder {}

test("P5ClassBuilder can't be instantiated directlly", () => {
  expect.assertions(1);
  try {
    // eslint-disable-next-line no-new
    new P5ClassBuilder({}, { width: 10, height: 10 });
  } catch (e) {
    expect(e.message).toBe("Abstract classes can't be instantiated.");
  }
});

test('ConcreteClass can be instantiated directlly', () => {
  const concreteClass = new ConcreteClass('foo', { width: 100, height: 10 });

  expect(concreteClass.sketch).toBe('foo');
  expect(concreteClass.width).toBe(100);
  expect(concreteClass.height).toBe(10);
});
