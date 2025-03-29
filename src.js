VANTA.RINGS({
    el: ".landing",
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
/////// -------> ///////
// start //
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();
tl.to(".txt",{
  x:"-90%",force3D: true,  ease: "power1.out",
  scrollTrigger:{
    pin:true, scrub:3,trigger:".page4",scroller:"body",  start: "top top",
    end:"+=1500"
  }
})
// --------> //
// text reveal //
gsap.to(".txt-area-hover>p",{
  width:"100%",stagger:.2, scrollTrigger:{
    scrub:2,pin:true,start:"20% 100%", end:"25% 55%"
  }
})
// text reveal //
//  =============== //
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