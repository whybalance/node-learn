const path = require('path');
module.exports = class TestNow {
  getTestSource(methodName, classFile, isClass = false) {
    console.log('getTestSource:', methodName)
    return `
      test('${'TEST' + methodName}', () => {
        const ${isClass ? '{' + methodName + '}' : methodName} = require('${'../' + classFile}')
        const ret = ${methodName}()
        // expect(ret)
        //   .toBe('test return)
      })
    `
  }

  /**
   * 生成 测试文件名
   * @param {*} filename */
  getTestFileName(filename) {
    const dirName = path.dirname(filename)
    const baseName = path.basename(filename)
    const extName = path.extname(filename)
    const testName = baseName.replace(extName, `.spec${extName}`)
    return path.format({
      root: dirName + '/__test__/',
      base: testName
    })
  } 
}