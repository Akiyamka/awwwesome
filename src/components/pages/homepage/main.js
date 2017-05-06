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
          content: 'Разработка дополнений для WordPress, сложные системы расчета стоимости заказа, прокладка маршрута и прочие непростые задачи - <span> это как раз то что мы любим </span>',
          animation: this.animRing
        },
        {
          header: 'Продвинутый Front-end',
          content: 'Полноценные <span>SPA</span> и <span>PWA</span> под Ваши задачи на базе vue.js и сопуствущего стека технологий',
          animation: this.animFront
        },
        {
          header: 'Чатботы',
          content: 'Системы оповещения, оформления заказа, отлеживания статуса, опросов и прочего на базе чат-платформы <span>Telegram</span>',
          animation: this.animBot
        },
      ],
    }
  },
  methods: {
    runAnim (key) {
      this.skills[key].animation(true)
    },
    stopAnim (key) {
      this.skills[key].animation(false)
    },
    animBot (swither) {

      var frontIcon = document.getElementById('bot-icon')
      var lines = frontIcon.querySelectorAll('.cls-line')
      var lines2 = frontIcon.querySelectorAll('.cls-line-secondary')
      var rects = frontIcon.querySelectorAll('.cls-rect')
      var filled = frontIcon.querySelectorAll('.cls-filled')

      var drawLine = KUTE.allFromTo(lines, {draw: '0% 0%'}, {draw: '0% 100%'}, {duration: 3000, easing: 'easingQuarticInOut', offset: 100})
      var drawLine2 = KUTE.allFromTo(lines2, {draw: '0% 0%'}, {draw: '0% 100%'}, {duration: 3000, easing: 'easingQuarticInOut', offset: 100})
      var drawRect = KUTE.allFromTo(rects, {opacity: 0}, {opacity: 0.2}, {duration: 2000, easing: 'easingQuarticInOut', offset: 50})
      var drawFilled = KUTE.allFromTo(filled, {opacity: 0}, {opacity: 1}, {duration: 1000, easing: 'easingQuarticInOut', offset: 50})


      if (swither) {
        drawRect.chain(drawFilled);
        drawLine.start();
        drawLine2.start();
        drawRect.start();
      }

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
    animRing (swither) {
      var ringIcon = document.getElementById('ring-icon')
      var lines = ringIcon.querySelectorAll('.cls-line')
      var longDash = ringIcon.querySelectorAll('.cls-longDash')
      var shortDash = ringIcon.querySelectorAll('.cls-shortDash')
      var wide = ringIcon.querySelectorAll('.cls-wide')
      var lines2 = ringIcon.querySelectorAll('.cls-line-secondary')
      var lines3 = ringIcon.querySelectorAll('.cls-line3')
      var glow = ringIcon.querySelectorAll('.cls-glow')
      var glowImg = ringIcon.querySelectorAll('.cls-glow-img')

      // Draw animation

      var drawLine = KUTE.allFromTo(lines, {
          draw: '0 0',
          svgTransform: { rotate: 0 }
        },
        {
          draw: '0% 100%',
          svgTransform: { rotate: -90}
        },
        {
          duration: 3000,
          easing: 'easingQuarticInOut',
          offset: 100 
        }
      )

      var drawLine3 = KUTE.allFromTo(lines3, {
          draw: '-150% -150%',
          svgTransform: { rotate: 0 }
        },
        {
          draw: '0 100%',
          svgTransform: { rotate: 90 }
        },
        {
          duration: 3500,
          easing: 'easingQuarticInOut',
          offset: 100
        }
      )

      var drawLongDash = KUTE.allFromTo(longDash, {
          opacity: 0
        },
        {
          opacity: 1
        },
        {
          duration: 3000,
          easing: 'linear',
        }
      )

      var drawShortDash = KUTE.allFromTo(shortDash, {
          opacity: 0
        },
        {
          opacity: 1
        },
        {
          duration: 1500,
          easing: 'linear',
        }
      )
      
      var drawWide = KUTE.allFromTo(wide, {
          opacity: 0
        },
        {
          opacity: 0.3
        },
        {
          duration: 1500,
          easing: 'linear',
        }
      )

      var drawGlow = KUTE.allFromTo(glow, {
          opacity: 0
        },
        {
          opacity: 1
        },
        {
          duration: 500,
          easing: 'easingQuarticOut',
        }
      )

      // Cycled animation
      
      var loopLongDash = () => setTimeout( () => rotateLongDash.start(), 50 );

      var rotateLongDash = KUTE.allTo(longDash, {
          svgTransform: { rotate: 360 }
        },
        {
          complete: loopLongDash,
          duration: 6000,
          easing: 'easingCubicInOut',
          yoyo: true,
          repeat: 1
        }
      )

      var loopShortDash = () => setTimeout( () => rotateShortDash.start(), 50 );

      var rotateShortDash = KUTE.allFromTo(shortDash, {
          svgTransform: { rotate: 0 }
        },
        {
          svgTransform: { rotate: 360 }
        },
        {
          complete: loopShortDash,
          duration: 1000,
          easing: 'linear ',
          yoyo: false,
          repeat: 1
        }
      )

      var loopWide = () => setTimeout( () => pulseWide.start(), 50 );

      var pulseWide =  KUTE.allFromTo(wide, {
          opacity: 0.3
        },
        {
          opacity: 0
        },
        {
          complete: loopWide,
          duration: 3000,
          easing: 'easingCubicInOut',
          yoyo: true,
          repeat: 1
        }
      )

      var loopGlow = () => setTimeout( () => pulseGlow.start(), 50 );

      var pulseGlow =  KUTE.allFromTo(glowImg, {
          opacity: 0
        },
        {
          opacity: 1
        },
        {
          complete: loopGlow,
          duration: 3000,
          easing: 'easingCubicInOut',
          yoyo: true,
          repeat: 1
        }
      )
      // Start animation

      if (swither) {
        drawLine.start();
        drawLine3.start();
        drawLongDash.start().chain(rotateLongDash);
        drawShortDash.start()
        rotateShortDash.start()
        drawWide.start().chain(pulseWide);
        drawGlow.start().chain(pulseGlow);
        
      }

    }

  },
  mounted () {

  }
}