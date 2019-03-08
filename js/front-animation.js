document.addEventListener('DOMContentLoaded', function () {
  var preloader = anime.timeline();
  document.querySelector('html').style.overflow = 'hidden';

  preloader.add({
    targets: '.first-word',
    delay: 1000,
    translateX: [90, -70],
    easing: 'easeOutCubic'
  }).add({
    targets: '.third-word',
    translateX: [-70, 70],
    easing: 'easeOutCubic'
  }).add({
    targets: '#third',
    rotate: 180,
    duration: 700,
    easing: "easeOutCubic"
  }).add({
    targets: '.preloader .letter',
    translateY: [20, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2500,
    delay: function (el, i) {
      return 600 + 30 * i;
    },

  }).add({
    targets: '.arrow svg',
    translateX: {
      value: 1500,
      duration: 1500,
    },
    easing: "easeOutExpo",
  }, '-=1600').add({
    targets: '.preloader',
    opacity: {
      value: 0,
      duration: 800,
    },
    easing: "easeOutExpo"
  }, '-=1400').add({
    targets: '.container-preloader',
    translateX: '100%',
    duration: 700,
    easing: 'easeOutQuad',
    complete: function(){
      document.querySelector('html').style.overflow = 'auto';
      
    }
  }, '-=800')



  let t1 = anime.timeline({
    easing: 'easeOutQuad',
    delay: 1000
  });

  t1
    .add({
      targets: '.dot-1',
      opacity: [0, 1, 0, 1, 0, 1],
      duration: 1300,
      translateY: '-100px',
      easing: 'easeInOutExpo',
      delay: 8000
    }, '-=500')
    .add({
      targets: '.dots',
      opacity: [1, 0, 1, 0, 1, 0, 1],
      duration: 1300,
      translateX: '-70px',
      easing: 'easeInOutExpo'
    }, '-=2200')
    .add({
      targets: '.lines .vertical',
      height: [0, '4rem'],
      duration: 600,
      translateY: ['80px', 0],
      delay: anime.stagger(500)
    }, '-=1500')
    .add({
      targets: '.lines .vertical_last',
      height: [0, '3rem'],
      duration: 600,
      translateY: ['80px', 0],
    }, '-=1800')
    .add({
      targets: '.hero__content__title',
      translateY: ['100px', 0],
      duration: 700,
      opacity: [0, 0.75]
    }, '-=1700')
    .add({
      targets: '.background-block',
      width: [0, '9rem'],
      height: [0, '14rem'],
      duration: 600
    }, '-=2500')
    .add({
      targets: '.qube-1',
      width: [0, '7.5rem'],
      translateX: ['100px', 0],
      duration: 1000,
      opacity: 1
    }, '-=1500')
    .add({
      targets: '.qube-2',
      width: [0, '8.5rem'],
      translateX: ['140px', 0],
      duration: 1000,
      opacity: 1
    }, '-=2000')
    .add({
      targets: '.qube-3',
      width: [0, '15rem'],
      translateX: ['-100px', 0],
      duration: 1000,
      opacity: 1
    }, '-=2300')
    .add({
      targets: '.hero__arrow',
      opacity: [1, 0, 1, 0, 1],
      duration: 1500,
      rotateZ: 180,
      translateX: ['100px', '10px']
    }, '-=2300')
    .add({
      targets: '.random-arrow',
      opacity: [1, 0, 1, 0, 1],
      duration: 1200,
      rotateX: 180,
      translateX: ['-100px', 0]
    }, '-=2500')
    .add({
      targets: '.hidetext',
      translateY: "-85px",
      duration: 700,
      delay: anime.stagger(400)
    }, '-=1000')



})

var preloaderAnime = anime.timeline()
//    .add({
//        targets: '.first-word',
//        delay: 1000,
//        translateX: [90, -70],
//        easing: 'easeOutCubic'
//    }).add({
//        targets: '.third-word',
//        translateX: [-70, 70],
//        easing: 'easeOutCubic'
//    }).add({
//        targets: '#third',
//        rotate: 180,
//        duration: 700,
//        easing: "easeOutCubic"
//    }).add({
//    targets: '.preloader .letter',
//    translateY: [20,0],
//    translateZ: 0,
//    opacity: [0,1],
//    easing: "easeOutExpo",
//    duration: 2500,
//    delay: function(el, i) {
//      return 600 + 30 * i;
//    }
//  }).add({
//    targets: '.arrow svg',
//    translateX: {
//    value: 1500,
//    duration: 1500,
//    },
//    offset: '-=1300',
//    easing: "easeOutExpo"       
//    }).add({
//    targets: '.preloader',
//    opacity: {
//    value: 0,
//    duration: 800,
//    },
//    offset: '-=1300',
//    easing: "easeOutExpo"       
//    })
// .add({
//     targets: '.container',
//     translateX: ['-100%', 0],
//     easing: "easeOutCubic",
//     offset: '-=1000'
//     }).add({
//     targets: 'nav ul li a',
//     translateY: [20,0],
//     opacity: [0,1],
//     delay: (el,i) => 100 * i,
//     offset: '-=500',
//     easing: "easeOutCubic"
// })