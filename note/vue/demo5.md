# 计算属性和监听器

 <div id="app">
        <p>{{message}}</p>
        <p>{{reversedMessage}}</p>
    </div>
    <script src="../../3-25/vue.js"></script>
    <script>
        new Vue({
            el:"#app",
            data:{
                message:"fdsoigh ",
            },
            我们可以使用 methods 来替代 computed，效果上两个都是一样的
            ，但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。
            而使用 methods ，在重新渲染的时候，函数总会重新调用执行。
            computed:{
                computed 属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：
                reversedMessage:function(){
                    return this.message.split('').reverse().join('')
                }
            }
        })
    </script>
    <div id="demo">{{ fullName }}</div>
    <script>
    new Vue({
        el:"#demo",
        data:{
            firstName:"john Doe",
            lastName:"Ber",
        },
        computed:{
            fullName:function(){
                return  this.firstName + this.lastName
            }
        }
        computed:{
            fullName:{
                get:function(){
                    return this.firstName+ '' +this.lastName
                },
                set:function (newValue) {
                    let names = newValue.split('')
                    split() 方法用于把一个字符串分割成字符串数组
                    this.firstName = names[0]
                    this.lastName = nemse[namse.length - 1]
                    虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。
                    这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。
                    当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
                }
            }
        }
    })
                Vue.js提供了一个方法watch,它用于观察Vue实例上的数据变动。对应一个对象,
                indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置
    </script>