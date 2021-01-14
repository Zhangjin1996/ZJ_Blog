/*
 * @Author: zhangjin
 * @Date: 2021-01-14 11:41:24
 * @Description: Modify here please
 */
const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withCss({})