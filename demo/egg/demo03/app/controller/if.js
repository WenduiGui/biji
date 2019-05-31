const Controller = require('egg').Controller;

class IfController extends Controller {
    // async index() {
    //     const {
    //         ctx
    //     } = this;
    //     await ctx.render("if.html",{
    //         user:{
    //             isLogin:true,  //改成false,则页面显示请登录
    //             name:"小明"
    //         }
    //     })
    // }
    async index() {
        const {
            ctx
        } = this;
        await this.ctx.render('if.html',{
            ifLogin:'判断是否登录',
            user:{
                isLogin:true,
                name:'半藏',
            },
            word:"请登录",
        })
    }
}

module.exports = IfController;
