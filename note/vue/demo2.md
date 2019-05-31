# class与style绑定

<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>
<script src="../../3-25/vue.js"></script>
    <script>
        new Vue({
            el:"div",
            data:{
                isActive:"true",
                hasError:"false"
            }
        })
        结果渲染为：<div class="static active"></div>
        当 isActive 或者 hasError 变化时，class 列表将相应地更新。例如，如果 hasError 的值为 true，class 列表将变为 "static active text-danger"
    </script>
    <div v-bind:class="classObject"></div>
    <script>
        渲染的结果和上面一样。我们也可以在这里绑定一个返回对象的计算属性。这是一个常用且强大的模式：
        new VUe({
            data: {
                isActive: true,
                error: null
            },
            computed: {
                classObject: function () {
                    return {
                    active: this.isActive && !this.error,
                    'text-danger': this.error && this.error.type === 'fatal'
                    }
                }
            }
        })
    </script>