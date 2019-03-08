document.addEventListener('DOMContentLoaded', function(){
    let waypoint = new Waypoint({
        element: document.querySelector('#service'),
        handler: function(){
            let t2 = anime.timeline({
                easing: 'easeOutQuad'
            });
            
            t2
            .add({
                targets: '.service__arrow',
                opacity: [0,1],
                rotateZ: [40, 0],
                translateX: ['-100px', 0],
                delay: 700
            })
            .add({
                targets: '.qube-6',
                opacity: [0,1],
                height: [0, '10rem'],
                translateY: ['100px', 0],
                duration: 1000
            }, '-=1200')
            .add({
                targets: '.qube-5',
                opacity: [0,1],
                width: [0, '18rem'],
                duration: 700,
                translateX: ['-100px', 0]
            }, '-=1500')
            .add({
                targets: '.text2, .service__text__h3',
                opacity: [0,1],
                rotateZ: [-10, 0],
                translateY: ['100px', 0],
                duration:1000,
            }, '-=500')
            .add({
                targets: '.line',
                opacity: [0,1],
                width: [0,'3.5rem'],
                translateX: ['-30px', 0],
                duration: 600
            }, '-=500');
        },
        offset: '75%'
    })
})


    

