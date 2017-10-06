import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false

//--------------------------------------------------
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// ElementUIでの言語設定、datePickerとかで適用される
import locale from 'element-ui/lib/locale/lang/ja'

Vue.use(ElementUI, {locale});
//--------------------------------------------------

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
