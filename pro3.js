const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


function firstPage(){
  var tl=gsap.timeline();

  tl.from(".nav",{
    y:"-10",
    opacity: 0,
    duration:1.5,
    ease:Expo.easeInOut
  })

  .to(".boundingelem",{
    y:0,
    ease:Expo.easeInOut,
    duration:2,
    delay:-1,
    stagger:.2,

  })

  .from(".page1-footer",{
    y:-10,
    opacity: 0,
    duration:1.5,
    delay:-1,
    ease:Expo.easeInOut
  })
}
var timer;
function  hover(){
  var xScale=1;
  var yScale=1;

  var xPrev=0;
  var yPrev=0;
  window.addEventListener("mousemove",function(dets){
    clearTimeout(timer);

    xScale=  gsap.utils.clamp(.8,1,2,dets.clientX-xPrev);
    yScale=  gsap.utils.clamp(.8,1.2,dets.clientY-yPrev);
   
   
    xPrev=dets.clientX;
    yPrev=dets.clientY;


    circle(xScale,yScale);
    timer=setTimeout(function(){
      document.querySelector('#mini-circle').style.transform=`translate(${dets.clientX}px ,${dets.clientY}px)  scale(${1,1})`;
    },100)
  })
}

function circle(xScale,yScale){
  window.addEventListener("mousemove",function(dets){
    document.querySelector('#mini-circle').style.transform=`translate(${dets.clientX}px ,${dets.clientY}px)  scale(${xScale},${yScale})`;
  })
}
circle();
firstPage();
hover();

document.querySelectorAll(".elem").forEach(function(elem){

  var rotate=0;
  var differe=0;


  elem.addEventListener("mouseleave",function(dets){
  
      gsap.to(elem.querySelector("img"),{
        opacity:0,
        ease:Power3,
        duration:.5,
  
      });
    });

  elem.addEventListener("mousemove",function(dets){
  var diff=   dets.clientY-elem.getBoundingClientRect().top;
  differe=dets.clientX-rotate;
  rotate=dets.clientY;
  

    gsap.to(elem.querySelector("img"),{
      opacity:1,
      ease:Power3,
      top:top,
      left: dets.clientX,
      rotate:gsap.utils.clamp(-10,10,differe)
    });
  });
});
