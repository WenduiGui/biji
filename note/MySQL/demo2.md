### has~

1、外键保存在关联表中；  
2、保存时自动更新关联表的记录；  
3、删除主表记录时自动删除关联记录。


### belongsTo

1、外键放置在主表中；  
2、保存时不会自动更新关联表的记录；  
3、删除时也不会更新关联表的记录。

### include

include是一个计算机专业术语，一指C/C++中包含头文件命令，用于将指定头文件嵌入源文件中。二指include 指令，在JSP中包含一个静态的文件，同时解析这个文件中的JSP语句。三指PHP语句。
include叫做“文件包含” / include 语句包含并运行指定文件。

功能：它的功能是用来指定文件的全部内容替换程序中的命令行，从而使指定的文件与当前源文件连成一个源文件

### 1request概述

request是Servlet.service()方法的一个参数，类型为javax.servlet.http.HttpServletRequest。在客户端发出每个请求时，服务器都会创建一个request对象，并把请求数据封装到request中，然后在调用Servlet.service()方法时传递给service()方法，这说明在service()方法中可以通过request对象来获取请求数据。

 

request的功能可以分为以下几种：

l 封装了请求头数据；

l 封装了请求正文数据，如果是GET请求，那么就没有正文；

l request是一个域对象，可以把它当成Map来添加获取数据；

l request提供了请求转发和请求包含功能。


### Session简单介绍
　　在WEB开发中，服务器可以为每个用户浏览器创建一个会话对象（session对象），注意：一个浏览器独占一个session对象(默认情况下)。因此，在需要保存用户数据时，服务器程序可以把用户数据写到用户浏览器独占的session中，当用户使用浏览器访问其它程序时，其它程序可以从用户的session中取出该用户的数据，为用户服务。

### Session和Cookie的主要区别
Cookie是把用户的数据写给用户的浏览器。
Session技术把用户的数据写到用户独占的session中。
Session对象由服务器创建，开发人员可以调用request对象的getSession方法得到session对象。
### session实现原理
3.1、服务器是如何实现一个session为一个用户浏览器服务的？
 　　服务器创建session出来后，会把session的id号，以cookie的形式回写给客户机，这样，只要客户机的浏览器不关，再去访问服务器时，都会带着session的id号去，服务器发现客户机浏览器带session id过来了，就会使用内存中与之对应的session为之服务。可以用如下的代码证明：

 