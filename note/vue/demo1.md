# vue基础

<div id="app">
        <button @click="changeImg">切换图片</button>
        <div>
            <img v-bind:src="imgSrc">
        </div>
    </div>
    <script src="vue.js"></script>
    <script>
        通过v-bind可以将data中的数据绑定到html元素属性上
        data属性是数据可以指定Vue实例的数据并将其绑定到html，
        v-for指令，可以绑定数组的数据来渲染一个项目列表，v-for后面的值需要有in，in的后面是一个集合类型的数据，in前面的是集合中的每一个元素
        v-model指令，他能轻松实现表单输入和应用之间的双向绑定
        v-on：click是可以为元素绑定点击事件，可以简写成@click=""
        var app = new Vue({
            el:"#app",
            data:{
                imgSrc:"sucai/11.jpg"
            },
            methods:{
                changeImg:function(){
                    this.imgSrc="sucai/12.jpg"
                    在methods中的changeImg方法内，
                    我们可以使用this获取到vue实例，
                    这样就可以进一步获取到vue实例的data，
                    然后通过赋值的方式修改data的内容。
                    这样就可以实现数据的变更，数据内容变更后，页面也会随之改变。
                }
            }
        })
        通过上面的例子，我们可以很直观地观察到vue与jQuery的差异，
        在实现一个页面效果的时候，jQuery更倾向于操作DOM，
        而vue主要是通过操作数据来实现页面的变化
    </script>

### 绑定属性

在上面的例子中，我们将vue中的数据绑定在html的文本节点上，我们其实还可以绑定html的属性节点，
<body>
    <div id="app">
        <p title="未绑定的title属性">我的title属性没有绑定数据</p>
        <p v-bind:title="tit">我的title属性绑定了数据</p>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data:{
                tit:"绑定的title属性"
            }
        })
    </script>
</body>
通过v-bind可以将data中的数据绑定到html元素属性上
v-bind：冒号后面可以设置需要绑定的属性，我们可以使用它绑定任何属性。

### 绑定事件
我们可以通过vue为元素绑定事件，

<body>
    <div id="app">
        <button v-on:click="myEvent">按钮</button>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            methods:{
                myEvent:function(){
                    alert("hello world")
                }
            }
        })
    </script>
</body>
在html中，为需要绑定事件的元素添加v-on:click=""可以为元素绑定点击事件。
如果感觉这样写比较麻烦，可以简写成@click=""。
<body>
	<div id="app">
		<button v-on:click="changeImg">切换图片</button>
		<div>
			<img v-bind:src="imgSrc">
		</div>
	</div>
	<script src="../../script/vue.js"></script>
	<script>
		new Vue({
			el:"#app",
			data:{
				imgSrc:"../../images/img1.jpg"
			},
			methods:{
				changeImg:function(){
					this.imgSrc = "../../images/img2.jpg";
				}
			}
		})
	</script>
</body>
在methods中的changeImg方法内，我们可以使用this获取到vue实例，这样就可以进一步获取到vue实例的data，然后通过赋值的方式修改data的内容。这样就可以实现数据的变更，数据内容变更后，页面也会随之改变。

### 列表

显示列表

var fruits = ["香蕉","苹果","鸭梨"];
通过js，将数组中的所有元素在html的列表中显示，jQuery的代码这里不再演示。我们的目标是用vue来实现显示列表的功能，在vue中，fruits不再是一个变量，而是data中的一个属性

<body>
    <div id="app">
        <ul>
            <li v-for="fruit in fruits">{{fruit}}</li>
        </ul>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data:{
                fruits:["香蕉","苹果","鸭梨"]
            }
        })
    </script>
</body>

### 获取索引

通过v-for可以实现列表的显示
v-for后面的值需要有in，in的后面是一个集合类型的数据，in前面的是集合中的每一个元素
在上面的例子中"fruit in fruits"中的fruit代表集合中的每个元素，集合中有多少个元素，就会有多少个li被生成，这些不用我们手动操作，vue都为我们做好了。
如果将代码改成下面的样子，我们还可以获取到数据元素的索引

<div id="app">
    <ul>
        <li v-for="(val,index) in fruits">
            <p>水果名字是 {{val}}</p>
            <p>水果序号是 {{index}}</p>
        </li>
    </ul>
</div>

### 列表操作

接下来我们要做一个例子，仍然是显示一个普通的水果列表，当我们点击水果列表中的元素时，可以在控制台输出这个元素的索引

<body>
    <div id="app">
        <ul>
            <li 
                v-on:click="showIndex(index)" 
                v-for="(val,index) in fruits">
                    {{val}}
            </li>
        </ul>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data:{
                fruits:["香蕉","苹果","鸭梨"]
            },
            methods:{
                showIndex:function(index){
                    console.log(index);
                }   
            }
        })
    </script>
</body>
通过上面的例子我们可以知道v-onclick="showIndex(index)"代码中,事件是可以传递参数的，通过这种方式可以将数据元素的索引传递到methods中，再通过形参来获取这个索引，既然可以获取到数据元素的索引，那么我们就可以实现一个“删除列表元素的功能”（demo10.html）

<body>
    <div id="app">
        <ul>
            <li v-for="(val,index) in fruits">
                {{val}}
                <span v-on:click="del(index)">删除</span>
            </li>
        </ul>
    </div>
    <script src="../../script/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data:{
                fruits:["香蕉","苹果","鸭梨"]
            },
            methods:{
                del:function(index){
                    this.fruits.splice(index,1);
                }   
            }
        })
    </script>
</body>
上面的例子在li中添加了另一个span元素，我们为span绑定单击事件，并添加了删除元素的功能。