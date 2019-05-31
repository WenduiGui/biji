# get传值

egg.js里获取get传值，要对应路由,传入对应的id：？aid=123
async content(){
    var query = this.ctx.query;
    conlsole.log(query);
    this.ctx,body ='query'
}


# 动态路由
路由：/123,加id
不适宜对台路由，多台路由要传入对应的值
router.get('/newsclist/:id', controller.news.newsclist)


# 获取动态路由传值

var params = this.ctx.params;
conlsole.log(params);