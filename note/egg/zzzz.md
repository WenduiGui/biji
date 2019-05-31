### const
第一部分：const的初始化

Const值一旦创建后就不能修改，所以const对象必须初始化。

Const int i=0;//正确

Constint i;//错误

Const对象可以用非const对象初始化，也可以付给非const对象，同时也能参与运算，只要初始化后不改变它的值就没问题。

Int i;

Constint j=i;//正确

Intm=j;//正确

第二部分：const的作用域

默认状态下，Const对象仅在文件内有效。所以不同文件的const对象不是同一个对象，即使名字相同，因为这样才能避免重复定义。

那为了使一个非常量表达式的const变量在不同文件之间可以共享，可以使用extern来解决问题。

我们知道关键字extern可以用作对象的声明而不定义。所以我们按如下的方式：

//file.cpp

extern constint temp=fun();

//file.h

extern constint temp;//正确

### forward（转发）与redirect（重定向）的区别

1.forward

request.getRequestDispatcher("new.jsp").forward(request, response);   //转发到new.jsp

2.redirect

response.sendRedirect("new.jsp");   //重定向到new.jsp

很明显一个是用request对象调用，一个是用response对象调用，那么，这两者有什么区别呢？

一、数据共享方面

forward:转发页面和转发到的页面可以共享request里面的数据
redirect:不能共享数据

二、地址栏显示方面

forward是服务器请求资源,服务器直接访问目标地址的URL,把那个URL的响应内容读取过来,然后把这些内容再发给浏览器.浏览器根本不知道服务器发送的内容从哪里来的,所以它的地址栏还是原来的地址.
redirect是服务端根据逻辑,发送一个状态码,告诉浏览器重新去请求那个地址.所以地址栏显示的是新的URL.

三、本质区别

转发是服务器行为，重定向是客户端行为。为什么这样说呢，这就要看两个动作的工作流程： 

转发过程：客户浏览器发送http请求--->web服务器接受此请求--->调用内部的一个方法在容器内部完成请求处理和转发动作--->将目标资源 发送给客户；在这里，转发的路径必须是同一个web容器下的url，其不能转向到其他的web路径上去，中间传递的是自己的容器内的request。在客 户浏览器路径栏显示的仍然是其第一次访问的路径，也就是说客户是感觉不到服务器做了转发的。转发行为是浏览器只做了一次访问请求。 

重定向过程：客户浏览器发送http请求--->web服务器接受后发送302状态码响应及对应新的location给客户浏览器--->客户浏览器发现 是302响应，则自动再发送一个新的http请求，请求url是新的location地址--->服务器根据此请求寻找资源并发送给客户。在这里 location可以重定向到任意URL，既然是浏览器重新发出了请求，则就没有什么request传递的概念了。在客户浏览器路径栏显示的是其重定向的 路径，客户可以观察到地址的变化的。重定向行为是浏览器做了至少两次的访问请求的。

### ctx
ctx是context的缩写中文一般叫成上下文，这个在所有语言里都有的名词，可以理解为上(request)下(response)沟通的环境，所以koa中把他们两都封装进了ctx对象，koa官方文档里的解释是为了调用方便，ctx.req=ctx.request,ctx.res=ctx.response，类似linux系统中的软连接？最终执行还是request和response对象

所以第二个问题：
body是http协议中的响应体，header是指响应头
ctx.body = ctx.res.body = ctx.response.body