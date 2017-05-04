import navblock from './navBlock'
import KUTE from 'kute.js'
import 'kute.js/kute-svg'

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
    runAnim (key) {
      var resolver = [ this.animRing, this.animFront, this.animBot ];
      resolver[key]()
    },
    animBot () {
      var frontIcon = document.getElementById('bot-icon')

      var lines = frontIcon.querySelectorAll('.cls-line')
      var lines2 = frontIcon.querySelectorAll('.cls-line-secondary')
      var rects = frontIcon.querySelectorAll('.cls-rect')
      var filled = frontIcon.querySelectorAll('.cls-filled')

      var drawLine = KUTE.allFromTo(lines, {draw: '0% 0%'}, {draw: '0% 100%'}, {duration: 3000, easing: 'easingQuarticInOut', offset: 100})
      var drawLine2 = KUTE.allFromTo(lines2, {draw: '0% 0%'}, {draw: '0% 100%'}, {duration: 3000, easing: 'easingQuarticInOut', offset: 100})
      var drawRect = KUTE.allFromTo(rects, {opacity: 0}, {opacity: 0.2}, {duration: 2000, easing: 'easingQuarticInOut', offset: 50})
      var drawFilled = KUTE.allFromTo(filled, {opacity: 0}, {opacity: 1}, {duration: 1000, easing: 'easingQuarticInOut', offset: 50})

      drawRect.chain(drawFilled);
      
      drawLine.start();
      drawLine2.start();
      drawRect.start();
    },
    animFront () {
      var frontIcon = document.getElementById('front-icon')
      var lines = frontIcon.querySelectorAll('.cls-line')
      var rects = frontIcon.querySelectorAll('.cls-rect')

      var drawLine = KUTE.allFromTo(lines, {draw: '0% 0%'}, {draw: '0% 100%'}, {duration: 3000, easing: 'easingQuarticInOut', offset: 100})
      var drawRect = KUTE.allFromTo(rects, {opacity: 0}, {opacity: 0.2}, {duration: 2000, easing: 'easingQuarticInOut', offset: 100})

      drawLine.start();
      drawRect.start();
    },
    animRing () {
      var ringIcon = document.getElementById('ring-icon')
      var lines = ringIcon.querySelectorAll('.cls-line')
      var longDash = ringIcon.querySelectorAll('.cls-longDash')
      var shortDash = ringIcon.querySelectorAll('.cls-shortDash')
      var wide = ringIcon.querySelectorAll('.cls-wide')
      var lines2 = ringIcon.querySelectorAll('.cls-line-secondary')
      var lines3 = ringIcon.querySelectorAll('.cls-line3')

      var drawLine = KUTE.allFromTo(lines, {
        draw: '0 0',
        svgTransform: { rotate: 0 }
      },
      {
        draw: '0% 100%',
        svgTransform: { rotate: -90}
      },
      { duration: 3000,
        easing: 'easingQuarticInOut',
        offset: 100 
      })
      // var rotateLine = KUTE.allTo(lines, {rotate: 120}, {offset: 20, duration: 500} )
      var drawLine3 = KUTE.allFromTo(lines3, {
        draw: '-150% -150%',
        svgTransform: { rotate: 0 }
      },
      {
        draw: '0 100%',
        svgTransform: { rotate: 90 }
      },
      { duration: 3500,
        easing: 'easingQuarticInOut',
        offset: 100
      })

      var rotateLongDash = KUTE.allTo(longDash,{
        svgTransform: { rotate: 120 }
      },
      { duration: 3000,
        easing: 'easingQuarticInOut',
        offset: 100
      })

      drawLine.start();
      drawLine3.start();
      rotateLongDash.start();
      // rotateLine.start();
    }

  },
  mounted () {

  }
}


