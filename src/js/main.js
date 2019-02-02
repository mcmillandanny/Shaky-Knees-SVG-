console.log('Shaky Knees')


var incubusAnimateIn = new TimelineMax({delay: 1.5});
var tameAnimateIn = new TimelineMax({});
var beckAnimateIn = new TimelineMax({delay: 1.3});
var cageAnimateIn = new TimelineMax({delay: 1.9});

var otherBandsAnimatein = new TimelineMax({delay: 4});

tameAnimateIn.from("#Tame_Impala g path", 1, {
    y: "-400px", 
    scale: .1
});

beckAnimateIn.to("#BECK", 1, {
    opacity: 1, 

});

beckAnimateIn.from("#BECK", 1, {
    scale: 1.25 
});

incubusAnimateIn.from("#INCUBUS g path", 2 ,{
    x: "900px"
})

cageAnimateIn.from("#cagetheelephant g path", 2 ,{
    y: "900px"
})

otherBandsAnimatein.to("#maggierogers", 1.5, {
    opacity: 1
});

