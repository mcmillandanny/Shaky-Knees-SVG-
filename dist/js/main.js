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
var homeBtn = document.querySelector(".home-btn");

function loadHome() {

    switchBands.to(".day-3-bands", .2, {
        display: "none"
    });

    switchBands.to(".day-2-bands", .2, {
        display: "none"
    });

    switchBands.to(".day-1-bands", .2, {
        display: "none"
    });

    switchBands.to("#caamp,#jimjames, #foals, #grouplove, #BECK, #thestruts, #rose, #lightning3, #INCUBUS, #maggierogers, #cagetheelephant, #Tame_Impala, #interpol ", .2, {
        ease: CustomEase.create("custom", "M0,0 C0,0 0.023,0.173 0.045,0.276 0.05,0.301 0.058,0.319 0.07,0.34 0.077,0.355 0.183,0.537 0.198,0.542 0.45,0.627 0.586,0.52 0.875,0.612 0.891,0.617 0.904,0.623 0.915,0.634 0.928,0.648 0.936,0.664 0.945,0.683 0.955,0.707 0.96,0.725 0.965,0.751 0.981,0.846 1,1 1,1"),
        display: 'block'

    });
}

homeBtn.addEventListener('click', loadHome);

function animateOutInDay1() {

    switchBands.to(".day-2-bands", .2, {
        display: "none"
    });

    switchBands.to(".day-3-bands", .2, {
        display: "none"
    });

    switchBands.to(".day-1-bands", .1, {
        display: "block",
        opacity: 0
    });

    switchBands.to("#caamp,#jimjames, #foals, #grouplove, #BECK, #thestruts, #rose, #lightning3, #INCUBUS, #maggierogers, #cagetheelephant, #Tame_Impala, #interpol ", .2, {
        ease: CustomEase.create("custom", "M0,0 C0,0 0.023,0.173 0.045,0.276 0.05,0.301 0.058,0.319 0.07,0.34 0.077,0.355 0.183,0.537 0.198,0.542 0.45,0.627 0.586,0.52 0.875,0.612 0.891,0.617 0.904,0.623 0.915,0.634 0.928,0.648 0.936,0.664 0.945,0.683 0.955,0.707 0.96,0.725 0.965,0.751 0.981,0.846 1,1 1,1"),
        display: 'none'
    });

    switchBands.to(".homepage", .1, {
        display: "none"
    });

    switchBands.from(".day-1-bands", .3, {
        opacity: 1,
        y: "-1000px",
        ease: Elastic.easeOut.config(1, 0.3)
    });

    // switchBands.to(".day-1-bands", .3, {
    //     y: "0px"
    // })
}

day1Btn.addEventListener('click', animateOutInDay1);

function animateOutInDay2() {
    switchBands.to(".homepage", .2, {
        display: "none"
    });

    switchBands.to("#caamp,#jimjames, #foals, #grouplove, #BECK, #thestruts, #rose, #lightning3, #INCUBUS, #maggierogers, #cagetheelephant, #Tame_Impala, #interpol ", .2, {
        ease: CustomEase.create("custom", "M0,0 C0,0 0.023,0.173 0.045,0.276 0.05,0.301 0.058,0.319 0.07,0.34 0.077,0.355 0.183,0.537 0.198,0.542 0.45,0.627 0.586,0.52 0.875,0.612 0.891,0.617 0.904,0.623 0.915,0.634 0.928,0.648 0.936,0.664 0.945,0.683 0.955,0.707 0.96,0.725 0.965,0.751 0.981,0.846 1,1 1,1"),
        display: 'none'
    });

    switchBands.to(".day-1-bands", .1, {
        display: "none"
    });

    switchBands.to(".day-3-bands", .1, {
        display: "none"
    });

    switchBands.to(".day-2-bands", .3, {
        display: "block"
    });

    switchBands.from(".day-2-bands", .3, {
        opacity: 1,
        y: "-1000px",
        ease: Elastic.easeOut.config(1, 0.3)
    });
}

day2Btn.addEventListener('click', animateOutInDay2);

function animateOutInDay3() {
    switchBands.to("#caamp,#jimjames, #foals, #grouplove, #BECK, #thestruts, #rose, #lightning3, #INCUBUS, #maggierogers, #cagetheelephant, #Tame_Impala, #interpol ", .2, {
        ease: CustomEase.create("custom", "M0,0 C0,0 0.023,0.173 0.045,0.276 0.05,0.301 0.058,0.319 0.07,0.34 0.077,0.355 0.183,0.537 0.198,0.542 0.45,0.627 0.586,0.52 0.875,0.612 0.891,0.617 0.904,0.623 0.915,0.634 0.928,0.648 0.936,0.664 0.945,0.683 0.955,0.707 0.96,0.725 0.965,0.751 0.981,0.846 1,1 1,1"),
        display: 'none'

    });

    switchBands.to(".day-1-bands", .2, {
        display: "none"
    });

    switchBands.to(".day-2-bands", .2, {
        display: "none"
    });

    switchBands.to(".day-3-bands", .3, {
        display: "block"
    });

    switchBands.from(".day-3-bands", .3, {
        opacity: 1,
        y: "-1000px",
        ease: Elastic.easeOut.config(1, 0.3)
    });

    switchBands.to(menu, .3, {
        y: "0px",
        x: "0px"
    });
}

day3Btn.addEventListener('click', animateOutInDay3);

var bodyWrapper = document.querySelector(".svg-wrapper");
var footerBtn = document.querySelector(".footer-btn");
var menu = document.querySelector(".slide-in-menu");
var btn = document.querySelector('#BECK');
var lightbox = document.querySelector('.lightbox');
var lightboxBg = document.querySelector(".lightbox-bg");
var videoAnimate = new TimelineMax({});
var menuAnimate = new TimelineMax({});

function openMenu() {

    menuAnimate.to(bodyWrapper, .3, {
        x: "-1000px",
        display: "none",
        ease: Power1.easeOut
    });

    menuAnimate.to(menu, .7, {
        display: "block",
        position: "absolute",
        top: "0%",
        left: "0%",
        y: "0px"

    });

    switchBands.to(".day-1-bands", .01, {
        display: "none"
    });
    switchBands.to(".day-2-bands", .01, {
        display: "none"
    });
    switchBands.to(".day-3-bands", .01, {
        display: "none"
    });
}

footerBtn.addEventListener("click", openMenu);

var tixAndInfoHover = document.querySelectorAll("#tickets_and_information path");
var tixInfo = document.querySelector("#tickets_and_information");
var fillTixAndInfo = new TimelineMax({});

function loopOverTixText() {
    tixAndInfoHover.forEach(function (letter) {
        tixInfo.addEventListener("mouseover", function () {
            fillTixAndInfo.to(letter, .03, {
                fill: "#65a6af"
            });
            tixInfo.addEventListener("mouseout", function () {
                fillTixAndInfo.to(letter, .03, {
                    fill: "white"
                });
            });
        });
    });
}
loopOverTixText();

var aniHomeBtns = new TimelineMax({});

var day1MenuBtn = document.querySelector(".day1-menu-btn");
var day2MenuBtn = document.querySelector(".day2-menu-btn");
var day3MenuBtn = document.querySelector(".day3-menu-btn");

function animateDay1In() {
    aniHomeBtns.to(menu, .3, {
        display: 'none',
        x: "1000px"
    });

    aniHomeBtns.to(".svg-wrapper", 1, {
        display: "block",
        opacity: 1,
        x: "0px"
    });
    switchBands.to("#caamp,#jimjames, #foals, #grouplove, #BECK, #thestruts, #rose, #lightning3, #INCUBUS, #maggierogers, #cagetheelephant, #Tame_Impala, #interpol ", .001, {
        ease: CustomEase.create("custom", "M0,0 C0,0 0.023,0.173 0.045,0.276 0.05,0.301 0.058,0.319 0.07,0.34 0.077,0.355 0.183,0.537 0.198,0.542 0.45,0.627 0.586,0.52 0.875,0.612 0.891,0.617 0.904,0.623 0.915,0.634 0.928,0.648 0.936,0.664 0.945,0.683 0.955,0.707 0.96,0.725 0.965,0.751 0.981,0.846 1,1 1,1"),
        display: 'none'
    });

    switchBands.to(".day-1-bands", .2, {
        display: "block"
    });

    aniHomeBtns.to(menu, .3, {
        x: "0px"
    });
};

function animateDay2In() {
    aniHomeBtns.to(menu, .3, {
        display: 'none',
        x: "1000px"
    });

    aniHomeBtns.to(".svg-wrapper", 1, {
        display: "block",
        opacity: 1,
        x: "0px"
    });
    switchBands.to("#caamp,#jimjames, #foals, #grouplove, #BECK, #thestruts, #rose, #lightning3, #INCUBUS, #maggierogers, #cagetheelephant, #Tame_Impala, #interpol ", .001, {
        ease: CustomEase.create("custom", "M0,0 C0,0 0.023,0.173 0.045,0.276 0.05,0.301 0.058,0.319 0.07,0.34 0.077,0.355 0.183,0.537 0.198,0.542 0.45,0.627 0.586,0.52 0.875,0.612 0.891,0.617 0.904,0.623 0.915,0.634 0.928,0.648 0.936,0.664 0.945,0.683 0.955,0.707 0.96,0.725 0.965,0.751 0.981,0.846 1,1 1,1"),
        display: 'none'
    });

    switchBands.to(".day-2-bands", .2, {
        display: "block"
    });

    aniHomeBtns.to(menu, .3, {
        x: "0px"
    });
};

function animateDay3In() {
    aniHomeBtns.to(menu, .3, {
        display: 'none',
        x: "1000px"
    });

    aniHomeBtns.to(".svg-wrapper", 1, {
        display: "block",
        opacity: 1,
        x: "0px"
    });
    switchBands.to("#caamp,#jimjames, #foals, #grouplove, #BECK, #thestruts, #rose, #lightning3, #INCUBUS, #maggierogers, #cagetheelephant, #Tame_Impala, #interpol ", .001, {
        ease: CustomEase.create("custom", "M0,0 C0,0 0.023,0.173 0.045,0.276 0.05,0.301 0.058,0.319 0.07,0.34 0.077,0.355 0.183,0.537 0.198,0.542 0.45,0.627 0.586,0.52 0.875,0.612 0.891,0.617 0.904,0.623 0.915,0.634 0.928,0.648 0.936,0.664 0.945,0.683 0.955,0.707 0.96,0.725 0.965,0.751 0.981,0.846 1,1 1,1"),
        display: 'none'
    });

    switchBands.to(".day-3-bands", .2, {
        display: "block"
    });
    aniHomeBtns.to(menu, .3, {
        x: "0px"
    });
};

day1MenuBtn.addEventListener("click", animateDay1In);
day2MenuBtn.addEventListener("click", animateDay2In);
day3MenuBtn.addEventListener("click", animateDay3In);

var backBtn = document.querySelector(".back-btn");
var backbtnTween = new TimelineMax({});

function animateHomeIn() {
    aniHomeBtns.to(menu, .3, {
        display: 'none',
        x: "1400px"
    });

    aniHomeBtns.to(".svg-wrapper", 1, {
        display: "block",
        opacity: 1,
        x: "0px"
    });
    switchBands.to("#caamp,#jimjames, #foals, #grouplove, #BECK, #thestruts, #rose, #lightning3, #INCUBUS, #maggierogers, #cagetheelephant, #Tame_Impala, #interpol ", .3, {
        ease: CustomEase.create("custom", "M0,0 C0,0 0.023,0.173 0.045,0.276 0.05,0.301 0.058,0.319 0.07,0.34 0.077,0.355 0.183,0.537 0.198,0.542 0.45,0.627 0.586,0.52 0.875,0.612 0.891,0.617 0.904,0.623 0.915,0.634 0.928,0.648 0.936,0.664 0.945,0.683 0.955,0.707 0.96,0.725 0.965,0.751 0.981,0.846 1,1 1,1"),
        display: 'block'
    });
    aniHomeBtns.to(menu, .3, {
        x: "0px"
    });
}

backBtn.addEventListener("click", animateHomeIn);

var beck = document.querySelector(".beck-btn");
var incubus = document.querySelector(".incubus-btn");
var tame = document.querySelector(".tame-btn");
var maggie = document.querySelector(".maggie-btn");
var caaamp = document.querySelector(".caamp-btn");
var jim = document.querySelector(".jim-btn");
var foals = document.querySelector(".foals-btn");
var grouplove = document.querySelector(".grouplove-btn");
var cage = document.querySelector(".cage-btn");
var interpol = document.querySelector(".interpol-btn");
var struts = document.querySelector(".struts-btn");

// let artistClicked = document.querySelectorAll(".video-play");


var videoChange = document.querySelector("body");
var videoTag = document.querySelector('video');

function animateVideoIn() {
    videoAnimate.from(".videos", .7, {
        ease: Bounce.easeOut,
        y: -500

    });
}

// function changeVideoURL() {
//     artistClicked.forEach(function(artist) {
//         artist.addEventListener("click", function() {
//             if (artist.classList.contains("beck-btn")) {
//                 console.log("beck clicked")
//                 // videoTag.src = "dist/videos/beck-vid.mp4";
//                 // videoTag.play()
//             }
//             else if (artist.classList.contains("incubus-btn")) {
//                 console.log("incubus clciked");
//             }
//             else if (artist.classList.contains("tame-btn")) {
//                 console.log("tame cclicked")
//             }
//         })
//     })
// check if the artist clicked has the right class on it
// if the artist is clicked change the video src file to the right artist

// animateVideoIn();
// lightbox.style.display = "block";
//  lightboxBg.style.display = "block";

// }


// videoChange.addEventListener('click', changeVideoURL);


window.addEventListener("click", function (e) {
    if (e.target === lightboxBg && lightbox) {
        lightboxBg.style.display = "none";
        lightbox.style.display = "none";
        videoTag.pause();
    }
});

beck.addEventListener("click", function () {
    animateVideoIn();
    lightbox.style.display = "block";
    lightboxBg.style.display = "block";
    videoTag.src = "dist/videos/beck-vid.mp4";
    videoTag.play();
});

incubus.addEventListener("click", function () {
    animateVideoIn();
    lightbox.style.display = "block";
    lightboxBg.style.display = "block";
    videoTag.src = "dist/videos/incubus-vid.mp4";
    videoTag.play();
});

tame.addEventListener("click", function () {
    animateVideoIn();
    lightbox.style.display = "block";
    lightboxBg.style.display = "block";
    videoTag.src = "dist/videos/tame-vid.mp4";
    videoTag.play();
});

maggie.addEventListener("click", function () {
    animateVideoIn();
    lightbox.style.display = "block";
    lightboxBg.style.display = "block";
    videoTag.src = "dist/videos/maggie-vid.mp4";
    videoTag.play();
});

caamp.addEventListener("click", function () {
    animateVideoIn();
    lightbox.style.display = "block";
    lightboxBg.style.display = "block";
    videoTag.src = "dist/videos/caamp-vid.mp4";
    videoTag.play();
});
jim.addEventListener("click", function () {
    animateVideoIn();
    lightbox.style.display = "block";
    lightboxBg.style.display = "block";
    videoTag.src = "dist/videos/jim-vid.mp4";
    videoTag.play();
});

foals.addEventListener("click", function () {
    animateVideoIn();
    lightbox.style.display = "block";
    lightboxBg.style.display = "block";
    videoTag.src = "dist/videos/foals-vid.mp4";
    videoTag.play();
});

grouplove.addEventListener("click", function () {
    animateVideoIn();
    lightbox.style.display = "block";
    lightboxBg.style.display = "block";
    videoTag.src = "dist/videos/grouplove-vid.mp4";
    videoTag.play();
});
cage.addEventListener("click", function () {
    animateVideoIn();
    lightbox.style.display = "block";
    lightboxBg.style.display = "block";
    videoTag.src = "dist/videos/cage-vid.mp4";
    videoTag.play();
});
interpol.addEventListener("click", function () {
    animateVideoIn();
    lightbox.style.display = "block";
    lightboxBg.style.display = "block";
    videoTag.src = "dist/videos/interpol-vid.mp4";
    videoTag.play();
});
struts.addEventListener("click", function () {
    animateVideoIn();
    lightbox.style.display = "block";
    lightboxBg.style.display = "block";
    videoTag.src = "dist/videos/struts-vid.mp4";
    videoTag.play();
});
//# sourceMappingURL=main.js.map
