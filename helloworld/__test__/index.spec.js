test('测试Hello World', () => {
  const ret = require('../index')
  // console.log('helloworld', ret)
  expect(ret)
    .toBe('Hello world')
})