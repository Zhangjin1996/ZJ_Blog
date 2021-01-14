/*
 * @Author: zhangjin
 * @Date: 2021-01-14 17:29:10
 * @Description: Modify here please
 */

'use strict';

const Controller = require('egg').Controller

class HomeController extends Controller{

    async index(){
        this.ctx.body="api接口"
    }
}

module.exports = HomeController