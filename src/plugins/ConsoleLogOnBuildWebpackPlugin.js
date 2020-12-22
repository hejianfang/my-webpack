/**
 * @Author: hejianfang
 * @Description:
 * @date 2020-12-18
 * @Varsion: 1.0
 * @Last modified by: 17326
 * @Last modified time: 2020-12-18
 */
const pluginName = 'ConsoleLogOnBuildWebpackPlugin'

class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, compilation => {
            console.log("webpack 构建过程开始！")
        })
    }
}
module.exports = ConsoleLogOnBuildWebpackPlugin
