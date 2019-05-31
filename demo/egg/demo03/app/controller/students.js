const Controller = require('egg').Controller;

class StudentsController extends Controller {
    // async index() {
    //     const {
    //         ctx
    //     } = this;
    //     await ctx.render("students.html",{
    //         studentsData:[
    //             {name:"小明",age:10},
    //             {name:"小亮",age:12},
    //             {name:"小红",age:31},
    //             {name:"小蓝",age:14},
    //             {name:"小绿",age:25},
    //         ]
    //     })
    // }
    async index() {
        const {
            ctx
        } = this;
        await ctx.render('students.html',{
            studentsData:[
                {name:'半藏',age:"22"},
                {name:"瑞破",age:"33"},
                {name:"76",age:'44'},
            ]
        })
    }
}

module.exports = StudentsController;
