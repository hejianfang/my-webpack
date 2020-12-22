/**
 * @Author: hejianfang
 * @Description:
 * @date 2020-12-18
 * @Varsion: 1.0
 * @Last modified by: 17326
 * @Last modified time: 2020-12-18
 */
const baseIm = {}
const baseImport = (r) => {
    r.keys().forEach(key => {
        baseIm[key.replace(/^\.\//, '').replace(/\.\w+$/, '')] = r(key).default
    })
    return baseIm
}
module.exports = {
    baseImport
}
