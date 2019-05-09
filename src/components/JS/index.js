import Vue from 'vue';
import Message from './Message';

export var fun = (function () {
    var defaults = {
        title: '',
        city: '',
        cancle: '',
        ok: '',
        handleCancle: function () { },
        handleOk: function () { }
    }
    return function (options) {
        for (var key in options) {
            defaults[key] = options[key];
        }
        var Mycomponent = Vue.extend(Message);
        var vm = new Mycomponent({
            el: document.createElement('div'),
            data() {
                return {
                    data: { title: defaults.title, city: defaults.city, cancle: defaults.cancle, ok: defaults.ok}
                }
            },
            methods: {
                handleCancle(){
                    defaults.handleCancle && defaults.handleCancle.bind(this)();
                    document.body.removeChild(vm.$el);
                },
                handleOk(){
                    defaults.handleOk && defaults.handleOk.bind(this)();
                    document.body.removeChild(vm.$el);
                }
            }
        }); document.body.appendChild(vm.$el);
    }
})()