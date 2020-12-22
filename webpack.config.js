/**
 * @Author: hejianfang
 * @Description:
 * @date 2020-12-18
 * @Varsion: 1.0
 * @Last modified by: 17326
 * @Last modified time: 2020-12-18
 */
const ConsoleLogOnBuildWebpackPlugin = require('./src/plugins/ConsoleLogOnBuildWebpackPlugin')
module.exports = {
    entry: {
        main: './src/main.js'
    },
    plugins: [
        new ConsoleLogOnBuildWebpackPlugin()
    ]
}
