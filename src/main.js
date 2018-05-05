import Vue from 'vue'
import App from './App'
//Modules
import BackToTop from 'vue-backtotop'
import vueSmoothScroll from 'vue-smoothscroll'
import VueCollapse from 'vue2-collapse'
Vue.use(BackToTop);
Vue.use(vueSmoothScroll);
Vue.use(VueCollapse);
//Production Tips
Vue.config.productionTip = true
//Application
new Vue({
	el:'#app',
	components:{App},
	template:'<App/>'
});
