import Button from './components/Elements/Button.vue'
import Container from './components/Elements/Container.vue'
import Flag from './components/Elements/Flag.vue'
import Icon from './components/Elements/Icon.vue'
import Image from './components/Elements/Image.vue'
import Loader from './components/Elements/Loader.vue'
import Reveal from './components/Elements/Reveal.vue'
import Divider from './Directives/Divider'

/* eslint-disable */

const VueJsSemanticUi = function (Vue, options) {
  Vue.directive(Divider.name, Divider)
  Vue.component(Button.name, Button)
  Vue.component(Container.name, Container)
  Vue.component(Flag.name, Flag)
  Vue.component(Image.name, Image)
  Vue.component(Icon.name, Icon)
  Vue.component(Loader.name, Loader)
  Vue.component(Reveal.name, Reveal)
}

export default VueJsSemanticUi
