import Vant from 'vant';
import 'vant/lib/index.css';
import {
  Toast,
  Lazyload
} from 'vant';


let lazyloadOptions = {
  preload: '1.3'
}


export default (Vue) => {
  Vue.use(Vant)
  Vue.use(Toast);
  Vue.use(Lazyload, lazyloadOptions)
}
