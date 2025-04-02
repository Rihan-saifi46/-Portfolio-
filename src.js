VANTA.RINGS({
    el: ".footer",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x203,
    color: 0x410c79
  })

  VANTA.NET({
    el: ".landing",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xdecfd7,
    backgroundColor: 0x30008,
    points: 12.00
  })
/////// -------> ///////
// start //
gsap.registerPlugin(ScrollTrigger);
gsap.to(".landing",{
 height:0, scrollTrigger:{
  scrub:2,pin:true,start:"8% 67%", end:"15% 60%"
}
})


// --------> //
// text reveal //
gsap.to(".txt-area-hover>p",{
  width:"100%",stagger:.2, scrollTrigger:{
    scrub:2,pin:true,start:"11% 72%", end:"13% 60%"
  }
})
// text reveal //
//  =============== //
let sl = gsap.timeline();
sl.to(".p2-u>p ",{
  x:-340,scrollTrigger:{
   scrub:2,pin:true,start:"16% 57%", end:"20% 52%",
 }
})
sl.from(".p2-u",{
  opacity:0, height:0,y:300,x:200,scrollTrigger:{
    scrub:2,pin:true,start:"12% 57%", end:"16% 45%"
  }
})
sl.from(".tt",{
    opacity:0,y:200,scrollTrigger:{
    scrub:2,pin:true,start:"23% 65%", end:"24% 75%"
  }
})
sl.from(".tools",{
    opacity:0,x:-300,scrollTrigger:{
    scrub:2,pin:true,start:"24% 74%", end:"24% 73%"
  }
})
sl.from(".s-rght>img",{
    opacity:0,x:300,scrollTrigger:{
    scrub:2,pin:true,start:"24% 74%", end:"24% 73%"
  }
})
// ========== //
//  projects //
let play = document.querySelectorAll(".up0");
play.forEach(function (elem) {
  let targetElem = elem.childNodes[5]; // Adjust if needed
  let hoverElem = elem.childNodes[3]; // Adjust if needed

  elem.addEventListener("mouseenter", function () {
    // Show hover element
    gsap.to(hoverElem, { opacity: 1 });

    // Scale animation
    gsap.to(targetElem, {
      scale: 1.5,
      opacity: 1,
      ease: "elastic.out(1,0.3)",
    });
  });

  elem.addEventListener("mouseleave", function () {
    // Hide hover element
    gsap.to(hoverElem, { opacity: 0 });

    // Properly fade out childNodes[5]
    gsap.to(targetElem, {
      opacity: 0,
      scale: 1, // Reset scale
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    gsap.to(targetElem, {
      x: dets.x - elem.getBoundingClientRect().x - 40,
      y: dets.y - elem.getBoundingClientRect().y - 10,
      overwrite: "auto", // Ensures no conflicting animations
    });
  });
});
//  projects //
// ============= //

// selected //
let cl = gsap.timeline();
cl.from(".p5u",{
  opacity:0,y:200,x:400,height:0,scrollTrigger:{
    scrub:2,pin:true,start:"60% 77%", end:"62% 67%"
  }
})
cl.from(".v1",{
  opacity:0,x:-400,y:0,scrollTrigger:{
    scrub:2,pin:true,start:"64% 68%", end:"66% 67%"
  }
})
cl.from(".v2",{
  opacity:0,x:400,y:0,scrollTrigger:{
    scrub:2,pin:true,start:"66% 68%", end:"68% 67%"
  }
})
cl.from(".v3",{
  opacity:0,x:-400,y:0,scrollTrigger:{
    scrub:2,pin:true,start:"68% 68%", end:"70% 67%"
  }
})
let vplay = document.querySelectorAll(".v-con");
vplay.forEach(function (elem1) {
  let targetvElem = elem1.childNodes[5]; // Adjust if needed // Adjust if needed
  elem1.addEventListener("mouseenter", function () {
    // Scale animation
    gsap.to(targetvElem, {
      scale: 1.5,
      opacity: 1,
      ease: "elastic.out(1,0.3)",
    });
  });
  elem1.addEventListener("mouseleave", function () {
    // Properly fade out childNodes[5]
    gsap.to(targetvElem, {
      opacity: 0,
      scale: 1, // Reset scale
      duration: 0.5,
    });
  });
  elem1.addEventListener("mousemove", function (dets) {
    gsap.to(targetvElem, {
      x: dets.x - elem1.getBoundingClientRect().x - 40,
      y: dets.y - elem1.getBoundingClientRect().y - 450,
      overwrite: "auto", // Ensures no conflicting animations
    });
  });
});
// selected //
// footer //

// footer //

