"use strict";

console.log('Shaky Knees');

var incubusAnimateIn = new TimelineMax({ delay: .5 });
var tameAnimateIn = new TimelineMax({});
var beckAnimateIn = new TimelineMax({ delay: .9 });
var cageAnimateIn = new TimelineMax({ delay: .8 });
var switchBands = new TimelineMax({});

var otherBandsAnimatein = new TimelineMax({ delay: 1 });

tameAnimateIn.from("#Tame_Impala g path", .4, {
    y: "-400px",
    scale: .1
});

beckAnimateIn.to("#BECK", .3, {
    opacity: 1

});

beckAnimateIn.from("#BECK", .3, {
    scale: 1.25
});

incubusAnimateIn.from("#INCUBUS g path", .4, {
    x: "900px"
});

otherBandsAnimatein.to("#maggierogers", .3, {
    opacity: 1
});

otherBandsAnimatein.to("#caamp", .3, {
    opacity: 1
});

otherBandsAnimatein.to("#jimjames", .3, {
    opacity: 1
});

otherBandsAnimatein.to("#foals", .3, {
    opacity: 1
});

otherBandsAnimatein.to("#grouplove", .3, {
    opacity: 1
});

otherBandsAnimatein.to("#thestruts", .3, {
    opacity: 1
});

otherBandsAnimatein.to("#interpol", .3, {
    opacity: 1
});

cageAnimateIn.from("#cagetheelephant g path", .1, {
    y: "900px"
});

var day1Btn = document.querySelector('.day1-btn');
var day1Bands = document.querySelector('.day-1-bands');
var homepageBands = document.querySelector('.homepage');
var day2Btn = document.querySelector('.day2-btn');
var day2Bands = document.querySelector('.day-2-bands');
var day3Btn = document.querySelector('.day3-btn');
var day3Bands = document.querySelector('.day-3-bands');
console.log(day1Btn);

function animateOutInDay1() {

    switchBands.to(".day-3-bands", .2, {
        display: "none"
    });

    switchBands.to(".day-2-bands", .2, {
        display: "none"
    });

    switchBands.to(".day-1-bands", .1, {
        display: "block",
        opacity: 0
    });

    switchBands.to("#caamp,#jimjames, #foals, #grouplove, #BECK, #thestruts, #rose, #lightning3, #INCUBUS, #maggierogers, #cagetheelephant, #Tame_Impala, #interpol ", .5, {
        y: "500px",
        ease: CustomEase.create("custom", "M0,0 C0,0 0.023,0.173 0.045,0.276 0.05,0.301 0.058,0.319 0.07,0.34 0.077,0.355 0.183,0.537 0.198,0.542 0.45,0.627 0.586,0.52 0.875,0.612 0.891,0.617 0.904,0.623 0.915,0.634 0.928,0.648 0.936,0.664 0.945,0.683 0.955,0.707 0.96,0.725 0.965,0.751 0.981,0.846 1,1 1,1"),
        display: 'none'
    });

    switchBands.to(".homepage", .1, {
        display: "none"
    });

    switchBands.from(".day-1-bands", .3, {
        opacity: 1,
        y: "-100px",
        ease: Elastic.easeOut.config(1, 0.3)
    });

    switchBands.to(".day-1-bands", .3, {
        y: "0px"
    });
}

day1Btn.addEventListener('click', animateOutInDay1);

function animateOutInDay2() {
    switchBands.to(".homepage", .2, {
        display: "none"
    });

    switchBands.to(".day-1-bands", .2, {
        display: "none"
    });

    switchBands.to(".day-3-bands", .2, {
        display: "none"
    });

    switchBands.to(".day-2-bands", 2, {
        display: "block"
    });
}

day2Btn.addEventListener('click', animateOutInDay2);

function animateOutInDay3() {
    switchBands.to(".homepage", .2, {
        display: "none"
    });
    switchBands.to(".day-1-bands", .2, {
        display: "none"
    });

    switchBands.to(".day-2-bands", .2, {
        display: "none"
    });

    switchBands.to(".day-3-bands", 2, {
        display: "block"
    });
}

day3Btn.addEventListener('click', animateOutInDay3);

var btn = document.querySelector('#BECK');
var lightbox = document.querySelector('.lightbox');
var lightboxBg = document.querySelector(".lightbox-bg");
var videoTag = document.querySelector('video');
var videoAnimate = new TimelineMax({});

function animateVideoIn() {
    videoAnimate.from(".videos", 1, {});
}

function changeVideoURL() {
    animateVideoIn();
    lightbox.style.display = "block";
    lightboxBg.style.display = "block";
    videoTag.src = "dist/videos/beck-vid.mp4";
    videoTag.play();
}

window.addEventListener("click", function (e) {
    if (e.target === lightboxBg && lightbox) {
        lightboxBg.style.display = "none";
        lightbox.style.display = "none";
        videoTag.pause();
    }
});

btn.addEventListener('click', changeVideoURL);

//when beck is clicked change url
//# sourceMappingURL=main.js.map
