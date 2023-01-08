import './bootstrap';

import Vue from 'vue'
Vue.component('app', require('/laravel/vendor/laravel/ui/src/Presets/vue-stubs/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
})
