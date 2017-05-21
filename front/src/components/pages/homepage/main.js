import navblock from './navBlock'
import KUTE from 'kute.js'
import 'kute.js/kute-svg'
import paralax from './paralax.js'
import Typed from '~/static/typed.min.js'

export default {
  name: 'hello',
  components: { navblock },
  data () {
    return {
      mobileModeOff: true,
      windowWidth: 0,
      skills: [
        {
          header: 'Нестандартные задачи',
          content: 'Разработка дополнений для WordPress, сложные системы расчета стоимости заказа, прокладка маршрута и прочие непростые задачи - <span> это как раз то что мы любим </span>',
          animation: this.animRing,
          runned: 0
        },
        {
          header: 'Продвинутый Front-end',
          content: 'Полноценные <span>SPA</span> и <span>PWA</span> под Ваши задачи на базе vue.js и сопуствущего стека технологий',
          animation: this.animFront,
          runned: 0
        },
        {
          header: 'Чатботы',
          content: 'Системы оповещения, оформления заказа, отлеживания статуса, опросов и прочего на базе чат-платформы <span>Telegram</span>',
          animation: this.animBot,
          runned: 0
        },
      ],
    }
  },
  methods: {
    runAnim (event, key) {
      this.skills[key].animation(event.target, key)
      this.skills[key].runned++
    },
    animBot (target, key) {
      var frontIcon = document.getElementById('bot-icon')
      var lines = frontIcon.querySelectorAll('.cls-line')
      var lines2 = frontIcon.querySelectorAll('.cls-line-secondary')
      var rects = frontIcon.querySelectorAll('.cls-rect')
      var filled = frontIcon.querySelectorAll('.cls-filled')
      var all = frontIcon.querySelectorAll('*')

      // In animation
      var drawLine = KUTE.allFromTo(lines, {
          opacity: 1,
          draw: '0% 0%'
        }, {
          opacity: 1,
          draw: '0% 100%'
        }, {
          duration: 3000, easing: 'easingQuarticInOut', offset: 100
        }
      )

      var drawLine2 = KUTE.allFromTo(lines2, {
          opacity: 1,
          draw: '0% 0%'
        }, {
          opacity: 1,
          draw: '0% 100%'
        }, {
          duration: 3000, easing: 'easingQuarticInOut', offset: 100
        }
      )

      var drawRect = KUTE.allFromTo(rects, {
          opacity: 0
        }, {
          opacity: 0.2
        }, {
          duration: 2000, easing: 'easingQuarticInOut', offset: 50
        }
      );

      var drawFilled = KUTE.allFromTo(filled, {
          opacity: 0
        }, {
          opacity: 1
        }, {
          duration: 1000, easing: 'easingQuarticInOut', offset: 50
        }
      );

      // Since the callback 'nowAnimStoped' is triggered for each element in the variable 'all',
      // we only need to catch the last call

      var stopCallbackCounter = 0
      var nowAnimStoped = () => {
        setTimeout( () => {
          stopCallbackCounter++
          if (stopCallbackCounter == all.length) {
            this.skills[key].runned--
          }
        }, 50)
      }

      // Out animation
      var disappear = KUTE.allTo(all, {
          opacity: 0
        }, {
          complete: nowAnimStoped,
          duration: 800,
          easing: 'easingCubicOut',
          offset: 100,
        }
      )

      // Starter and stoper animation
      drawRect.start().chain(drawFilled);
      drawLine.start();
      drawLine2.start();

      target.addEventListener('mouseleave', function() {
        drawRect.stop();
        drawFilled.stop()
        drawLine.stop();
        drawLine2.stop();

        disappear.start();
      }, false);

    },
    animFront (target, key) {
      var frontIcon = document.getElementById('front-icon')
      var lines = frontIcon.querySelectorAll('.cls-line')
      var rects = frontIcon.querySelectorAll('.cls-rect')
      var all = frontIcon.querySelectorAll('*')

      // In animation
      var drawLine = KUTE.allFromTo(lines, {draw: '0% 0%', opacity: 1 }, {draw: '0% 100%', opacity: 1 }, {duration: 3000, easing: 'easingQuarticInOut', offset: 100})
      var drawRect = KUTE.allFromTo(rects, {opacity: 0}, {opacity: 1}, {duration: 2000, easing: 'easingQuarticInOut', offset: 100})

      // Since the callback 'nowAnimStoped' is triggered for each element in the variable 'all',
      // we only need to catch the last call

      var stopCallbackCounter = 0
      var nowAnimStoped = () => {
        setTimeout( () => {
          stopCallbackCounter++
          if (stopCallbackCounter == all.length) {
            this.skills[key].runned--
          }
        }, 50)
      }

      // Out animation
      var disappear = KUTE.allTo(all,
        {
          opacity: 0
        }, {
          complete: nowAnimStoped,
          duration: 600,
          easing: 'easingCubicOut',
          offset: 50
        }
      )

      // Starter and stoper animation
      drawLine.start();
      drawRect.start();

      target.addEventListener('mouseleave', function(){
        drawLine.stop();
        drawRect.stop();
        disappear.start();
        }, false);

    },
    animRing (target, key) {
      var ringIcon = document.getElementById('ring-icon')
      var lines = ringIcon.querySelectorAll('.cls-line')
      var longDash = ringIcon.querySelectorAll('.cls-longDash')
      var shortDash = ringIcon.querySelectorAll('.cls-shortDash')
      var wide = ringIcon.querySelectorAll('.cls-wide')
      var lines2 = ringIcon.querySelectorAll('.cls-line-secondary')
      var lines3 = ringIcon.querySelectorAll('.cls-line3')
      var glow = ringIcon.querySelectorAll('.cls-glow')
      var glowImg = ringIcon.querySelectorAll('.cls-glow-img')
      var all = ringIcon.querySelectorAll('*')

      // In animation
      var drawLine = KUTE.allFromTo(lines, {
          draw: '0 0',
          svgTransform: { rotate: 0 },
          opacity: 1
        }, {
          draw: '0% 100%',
          svgTransform: { rotate: -90 },
          opacity: 1
        }, {
          duration: 3000,
          easing: 'easingQuarticInOut',
          offset: 100
        }
      );

      var drawLine3 = KUTE.allFromTo(lines3, {
          draw: '-150% -150%',
          svgTransform: { rotate: 0 },
          opacity: 1
        }, {
          draw: '0 100%',
          svgTransform: { rotate: 90 },
          opacity: 1
        }, {
          duration: 3500,
          easing: 'easingQuarticInOut',
          offset: 100
        }
      )

      var drawLongDash = KUTE.allFromTo(longDash, {
          opacity: 0
        }, {
          opacity: 1
        }, {
          duration: 3000,
          easing: 'linear',
        }
      )

      var drawShortDash = KUTE.allFromTo(shortDash, {
          opacity: 0
        }, {
          opacity: 1
        }, {
          duration: 1500,
          easing: 'linear',
        }
      )

      var drawWide = KUTE.allFromTo(wide, {
          opacity: 0
        }, {
          opacity: 1
        }, {
          duration: 1500,
          easing: 'linear',
        }
      )

      var drawGlow = KUTE.allFromTo(glow, {
          opacity: 0
        }, {
          opacity: 1
        }, {
          duration: 1000,
          easing: 'easingCubicInOut',
        }
      )

      // Cycled animation
      var loopLongDash = () => setTimeout( () => rotateLongDash.start(), 50 );

      var rotateLongDash = KUTE.allTo(longDash, {
          svgTransform: { rotate: 360 }
        }, {
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
        }, {
          svgTransform: { rotate: 360 }
        }, {
          complete: loopShortDash,
          duration: 1000,
          easing: 'linear ',
          yoyo: false,
          repeat: 1
        }
      )

      var loopWide = () => setTimeout( () => pulseWide.start(), 50 );

      var pulseWide =  KUTE.allFromTo(wide, {
          opacity: 1
        }, {
          opacity: 0
        }, {
          complete: loopWide,
          duration: 3000,
          easing: 'easingCubicInOut',
          yoyo: true,
          repeat: 1
        }
      )

      var loopGlow = () => setTimeout( () => pulseGlow.start(), 50 );

      var pulseGlow = KUTE.allFromTo(glowImg, {
          opacity: 0
        }, {
          opacity: 1
        }, {
          complete: loopGlow,
          duration: 3000,
          easing: 'easingCubicInOut',
          yoyo: true,
          repeat: 1
        }
      )

      // Since the callback 'nowAnimStoped' is triggered for each element in the variable 'all',
      // we only need to catch the last call

      var stopCallbackCounter = 0
      var nowAnimStoped = () => {
        setTimeout( () => {
          stopCallbackCounter++
          if (stopCallbackCounter == all.length) {
            this.skills[key].runned--
          }
        }, 50)
      }

      // Out animation
      var disappear = KUTE.allTo(all,
        {
          opacity: 0
        }, {
          duration: 1000,
          easing: 'easingCubicOut',
          offset: 200,
          complete: nowAnimStoped
        }
      )

      var nowAnimStoped = function () { this.animationActive = false }
      // Starter and stoper animation
        drawLine.start();
        drawLine3.start();
        drawLongDash.start().chain(rotateLongDash);
        drawShortDash.start()
        rotateShortDash.start()
        drawWide.start().chain(pulseWide);
        drawGlow.start().chain(pulseGlow);

        target.addEventListener('mouseleave', function(){
          drawLine.stop();
          drawLine3.stop();
          drawLongDash.stop();
          rotateLongDash.stop();
          drawShortDash.stop();
          rotateShortDash.stop();
          drawWide.stop()
          pulseWide.stop();
          drawGlow.stop();
          pulseGlow.stop();

          disappear.start();
        }, false);
    }

  },
  created () {
    // Optimazed resize
    // https://developer.mozilla.org/ru/docs/Web/Events/resize
    (function() {
        var throttle = function(type, name, obj) {
            obj = obj || window;
            var running = false;
            var func = function() {
                if (running) { return; }
                running = true;
                requestAnimationFrame(function() {
                    obj.dispatchEvent(new CustomEvent(name));
                    running = false;
                });
            };
            obj.addEventListener(type, func);
        };

        throttle("resize", "optimizedResize");
    })();

    window.addEventListener("optimizedResize", () => {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 580) {
        this.mobileModeOff = false
      } else {
        this.mobileModeOff = true
      }
        console.log(this.mobileModeOff)
    });
  }
}