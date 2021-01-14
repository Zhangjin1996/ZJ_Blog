/*
 * @Author: zhangjin
 * @Date: 2021-01-14 17:31:11
 * @Description: Modify here please
 */
module.exports = app => {
    const { router, controller } = app
    router.get('/default/index', controller.default.home.index)
}