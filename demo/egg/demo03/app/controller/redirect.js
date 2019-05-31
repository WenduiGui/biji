// const Controller = require('egg').Controller;

// class RedirectController extends Controller {
//     async index() {
//         const {
//             ctx
//         } = this;
//         await ctx.render("redirect.html")
//     }
//     async login(){
//         const username = this.ctx.request.body.username;
//         const password = this.ctx.request.body.password;
//         if(username === "123" && password === "456"){
//             await this.ctx.redirect("/success")
//         }else{
//             await this.ctx.redirect("/fail")
//         }
//     }

//     async fail(){
//         await this.ctx.render("fail.html")
//     }
//     async success(){
//         await this.ctx.render("success.html")
//     }
// }

// module.exports = RedirectController;
const Controller = require('egg').Controller;

class RedirectController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render('redirect.html')
    }
    async login() {
        const u = this.ctx.request.body.u;
        const p = this.ctx.request.body.p;
        if(u === "123" && p === "456"){
            await this.ctx.render('/success')
        }else{
            await this.ctx.render('/fail')
        }
    }
    async fail() {
        await this.ctx.render("fail.html")
    }
    async success() {
        await this.ctx.render("success.html")
    }
}

    module.exports = RedirectController;
