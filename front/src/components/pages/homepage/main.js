// document.addEventListener('load', setsize())
// function setsize () {
//   let items = document.querySelectorAll('.menu>div> article')
//   console.log('setsize()', items)
//   for (let item of items) {
//     let currentSize = item.offsetHeight
//     console.log(item, currentSize)
//     item.addEventListener('click', function () {
//       item.style.height = currentSize + 'px'
//     })
//     item.style.height = '0px'
//   }
// }
import navblock from './navBlock'
export default {
  name: 'hello',
  components: { navblock },
  data () {
    return {
      skills: [
        { 
          header: 'Нестандартные задачи',
          content: 'Разработка дополнений для WordPress, сложные системы расчета стоимости заказа, прокладка маршрута и прочие непростые задачи - <span> это как раз то что мы любим </span>'
        },
        {
          header: 'Продвинутый Front-end',
          content: 'Полноценные <span>SPA</span> и <span>PWA</span> под Ваши задачи на базе vue.js и сопуствущего стека технологий',
        },
        {
          header: 'Чатботы',
          content: 'Системы оповещения, оформления заказа, отлеживания статуса, опросов и прочего на базе чат-платформы <span>Telegram</span>',
        },
      ]
    }
  },
  methods: {
      // test: function () {
      //   let items = document.querySelectorAll('.menu>div> article')
      //   for (let item of items) {
      //     let currentSize = item.offsetHeight
      //     item.addEventListener('click', function () {
      //       item.style.height = currentSize + 'px'
      //     })
      //     item.style.height = '0px'
      //   }
      // },

  },
  mounted () {
    // let items = document.querySelectorAll('.menu>div> article')
    // console.log('setsize()', items)
    // for (let item of items) {
    //   let currentSize = item.offsetHeight
    //   console.log(item, currentSize)
    //   item.addEventListener('click', function () {
    //     console.log('test')
    //     item.style.height = currentSize + 'px'
    //   })
    //   item.style.height = '0px'
    // }
  }
}