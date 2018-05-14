import Vue from 'vue'
import App from './App'
//Modules
import BackToTop from 'vue-backtotop'
import VueCollapse from 'vue2-collapse'
import VueScrollTo from 'vue-scrollto'
Vue.use(BackToTop);
Vue.use(VueCollapse);
Vue.use(VueScrollTo,{offset:-50});
//Production Tips
Vue.config.productionTip = true
//Application
new Vue({
	el:'#app',
	components:{App},
	template:'<App/>'
});
