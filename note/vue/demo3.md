# 模板语法

 <p v-if="seen">现在我看到你了</p>
    <button v-bind:disabled="isBttonDisabled">Button</button>
    <script src="../../3-25/vue.js"></script>
    <script>
        ##原始 HTML
        双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 v-html 指令：
        <button v-bind:disabled="isButtonDisabled">Button</button>
        如果 isButtonDisabled 的值是 null、undefined 或 false，则 disabled 特性甚至不会被包含在渲染出来的 <button> 元素中。
                {{ number + 1 }}
                {{ ok ? 'YES' : 'NO' }}
                {{ message.split('').reverse().join('') }}
                <div v-bind:id="'list-' + id"></div>
        这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。有个限制就是，每个绑定都只能包含单个表达式，
        一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，v-bind 指令可以用于响应式地更新 HTML 特性：
                 <a v-bind:href="url">...</a>
        在这里 href 是参数，告知 v-bind 指令将该元素的 href 特性与表达式 url 的值绑定。
                <a v-on:click="doSomething">...</a>
        它用于监听 DOM 事件,在这里参数是监听的事件名
    </script>