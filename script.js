


function loadingAnimation()
{
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
            }, 25)
    
        }
    })
    tl.to("#loader", {
        opacity: 0,
        duration: 0.2,
        // delay:3.5 
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

    tl.from("#nav",{
        opacity:0
    })
    tl.from("#hero1 h1, #hero2 h1 , #hero3 h2 ,  #hero4 h1",{
        y:120,
        stagger:0.1,
        

    })
}

loadingAnimation()

// cursor code


function cursorAnimation(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#crsr", {
            left:dets.x,
            top:dets.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
}

cursorAnimation()

