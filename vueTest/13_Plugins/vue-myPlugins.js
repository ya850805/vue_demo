/*
Vue的插件庫
 */

(function(){
    //向外暴露的插件對象
    const MyPlugin = {};
    MyPlugin.install = function (Vue, options) {
        // 1. add global method or property
        Vue.myGlobalMethod = function () {
            console.log('Vue函數對象的方法');
        }

        // 2. add a global asset
        Vue.directive('my-directive', function (el, binding) {
            el.textContent = binding.value.toUpperCase();
        })

        // 3. inject some component options
        // Vue.mixin({
        //     created: function () {
        //         // some logic ...
        //     }
        //     ...
        // })

        // 4. add an instance method
        Vue.prototype.$myMethod = function (methodOptions) {
            // some logic ...
            console.log('Vue實例物件的方法$myMethod()')
        }
    }

    //向外暴露
    window.MyPlugin = MyPlugin
})()