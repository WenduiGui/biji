const Controller = require('egg').Controller;

// class ListContrller extends Controller {
//     async index() {
//         const {
//             ctx
//         } = this;
//         await ctx.render("list.html",{
//             fruits:["香蕉","苹果","鸭梨"],
//             sposts:["枪","饼","球"] //空数组
//         })
//     }
// }
class ListContrller extends Controller{
    async index() {
        const {
            ctx
        } = this;
        await ctx.render('list.html',{
            list:"显示列表",
            fruitList:'水果列表',
            fruit:["香蕉","苹果","鸭梨"],
            spostsList:"运动列表",
            sposts:[],
        })
    }
}

module.exports = ListContrller;
