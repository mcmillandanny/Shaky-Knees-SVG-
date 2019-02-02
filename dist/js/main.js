"use strict";

console.log('Shaky Knees');

var incubusAnimateIn = new TimelineMax({ delay: 1.5 });
var tameAnimateIn = new TimelineMax({});
var beckAnimateIn = new TimelineMax({ delay: 1.3 });
var cageAnimateIn = new TimelineMax({ delay: 1.9 });

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

console.log(day1Btn);
//# sourceMappingURL=main.js.map
