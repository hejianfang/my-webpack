/**
 * @Author: hejianfang
 * @Description:
 * @date 2020-12-18
 * @Varsion: 1.0
 * @Last modified by: 17326
 * @Last modified time: 2020-12-18
 */
const baseImport = require('./js/vuex-export')
const baseIm = {
    abc: 1,
    asd: '123456789',
    dev1: true
}
console.log(baseImport)
console.log(baseIm)
const elements = () => {
    const element = document.createElement('h3')
    element.textContent = '123000'
    element.addEventListener('click', _ => {
        alert('1230')
    })
    return element
}
const htmlElement = elements()
document.body.append(htmlElement)