"use strict";

console.log('Shaky Knees');

var incubusAnimateIn = new TimelineMax({ delay: 1.5 });
var tameAnimateIn = new TimelineMax({});
var beckAnimateIn = new TimelineMax({ delay: 1.3 });
var cageAnimateIn = new TimelineMax({ delay: 1.9 });
var switchBands = new TimelineMax({});

var otherBandsAnimatein = new TimelineMax({ delay: 4 });

tameAnimateIn.from("#Tame_Impala g path", .7, {
    y: "-400px",
    scale: .1
});

beckAnimateIn.to("#BECK", 1, {
    opacity: 1

});

beckAnimateIn.from("#BECK", 1, {
    scale: 1.25
});

incubusAnimateIn.from("#INCUBUS g path", .8, {
    x: "900px"
});

cageAnimateIn.from("#cagetheelephant g path", 2, {
    y: "900px"
});

otherBandsAnimatein.to("#maggierogers", .5, {
    opacity: 1
});

otherBandsAnimatein.to("#caamp", .5, {
    opacity: 1
});

otherBandsAnimatein.to("#jimjames", .5, {
    opacity: 1
});

otherBandsAnimatein.to("#foals", .5, {
    opacity: 1
});

otherBandsAnimatein.to("#grouplove", .5, {
    opacity: 1
});

otherBandsAnimatein.to("#thestruts", .5, {
    opacity: 1
});

otherBandsAnimatein.to("#interpol", .5, {
    opacity: 1
});

var day1Btn = document.querySelector('.day1-btn');
var day1Bands = document.querySelector('.day-1-bands');
var homepageBands = document.querySelector('.homepage');

console.log(day1Bands);

function animateOutIn() {

    switchBands.to("#Tame_Impala, #interpol", .5, {
        y: "200px",
        ease: Circ.easeOut,
        display: 'none'
    });

    switchBands.to("#maggierogers, #cagetheelephant", .5, {
        x: "-200px",
        ease: Circ.easeOut, y: -500,
        display: 'none'

    });

    switchBands.to(".day-1-bands", .1, {
        display: "block",
        opacity: 0
    });

    switchBands.to("#caamp,#jimjames, #foals, #grouplove, #BECK ", .5, {
        y: "500px",
        ease: CustomEase.create("custom", "M0,0 C0,0 0.023,0.173 0.045,0.276 0.05,0.301 0.058,0.319 0.07,0.34 0.077,0.355 0.183,0.537 0.198,0.542 0.45,0.627 0.586,0.52 0.875,0.612 0.891,0.617 0.904,0.623 0.915,0.634 0.928,0.648 0.936,0.664 0.945,0.683 0.955,0.707 0.96,0.725 0.965,0.751 0.981,0.846 1,1 1,1"),
        display: 'none'
    });

    switchBands.to("#thestruts, #rose, #lightning3, #INCUBUS", .4, {
        opacity: 0,
        display: 'none'

    });

    switchBands.to(".homepage", .1, {
        display: "none"
    });

    switchBands.from(".day-1-bands", .3, {
        opacity: 1,
        y: "-500px",
        ease: Elastic.easeOut.config(1, 0.3)
    });

    switchBands.to(".day-1-bands", .3, {
        y: "0px"
    });

    // switchBands.to(".homepage", .3, {
    //     y: "2000px",
    //     opacity: 0,
    //     display: "none"
    // });

    // switchBands.to("#INCUBUS", 1, {
    //     display: "block"
    // })

    // switchBands.to(".day-1-bands", 1, {
    //     display: "block",
    //     y: "0px"
    // });
}

// function dayOnetoggle() {
//     animateOut();

//     homepageBands.style.display = "none";
//     day1Bands.style.display = "block";
// }

day1Btn.addEventListener('click', animateOutIn);
//# sourceMappingURL=main.js.map
