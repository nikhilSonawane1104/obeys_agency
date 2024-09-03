




var tl = gsap.timeline()
tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5
})
tl.from("#line-part1, .line h2", {
    opacity: 0,
    onStart: function () {
        var h1timer = document.querySelector("#line-part1 h5")
        var grow = 0;
        setInterval(function () {
            if (grow < 100) {
                h1timer.innerHTML = grow++
            }
            else {
                grow = 100;
                h1timer.innerHTML = grow

            }
        }, 35)

    }
})
tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay:3.5 
})

tl.from("page1",{
    y:1600,
    opacity:0,
    duration:0.2,
    delay:0.3,
    ease:Power3

    
})

tl.to("#loader",{
    display:"none"
})