import './index.scss'
// import Component, { mixins } from 'vue-class-component'

// console.log(mixins)
@Component({
  template: '<div><div class="btn" @click="test">Test Click</div></div>'
})
export default class Main extends Vue {
  test = evt => {
    // eslint-disable-next-line
    console.log(evt)
  }
}
