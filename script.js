function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function loadingAnimation() {
  var t1 = gsap.timeline();

  t1.from(".line h1", {
    y: 150,

    delay: 0.2,

    stagger: 0.4,
  });
  gsap.from("#line1-count", {
    opacity: 0,
    delay: 0.3,
    onStart: function () {
      var h5timer = document.querySelector("#line1-count h5");
      var grow = 0;
      setInterval(() => {
        if (grow < 100) {
          h5timer.textContent = grow++;
          return;
        } else {
          h5timer.textContent = grow;
          return;
        }
      }, 20);
    },
  });
  t1.to(".line span", {
    animationName: "anime",
    opacity: 1,
  });
  t1.to("#loader", {
    y: -1600,
    opacity: 0,
    delay: 2,
    duration: 1,
    stagger: 5,
  });
  t1.from("#page1", {
    y: 1200,
    opacity: -3,
    delay: -0.5,
    stagger: 5,
    ease: Power4,
  });

  //   t1.from("crsr", {
  //     opacity: 1,
  //   });
  t1.to("#loader", {
    delay: 0,
    display: "none",
  });
  t1.from("#nav", {
    delay: -1,

    opacity: 0,
  });
  t1.from(".page1-text h1", {
    y: 150,

    delay: -0.6,

    stagger: 0.2,
  });
  var currentYear = new Date().getFullYear();
  // console.log(currentYear);
  document.querySelector("#copyright-year").textContent += currentYear;
}

function crusherAnimation() {
  // document.addEventListener("mousemove", function (mpos) {
  //   gsap.to("#crsr", {
  //     left: mpos.x,
  //     top: mpos.y,
  //   });
  // });
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.makeMagnet("#nav-part2 h4");
  var videoContainer = document.querySelector("#video-container");
  var video = document.querySelector("#video-container video");
  videoContainer.addEventListener("mouseenter", () => {
    videoContainer.addEventListener("mousemove", (dets) => {
      gsap.to(".mousefollower", {
        display: "none",
      });
      gsap.to("#video-crsr", {
        left: dets.x - 685,
        y: dets.y - 460,
      });
    });
  });
  videoContainer.addEventListener("mouseout", () => {
    // alert("hello");
    gsap.to(".mousefollower", {
      display: "initial",
    });
    gsap.to("#video-container #video-crsr", {
      top: "10%",

      left: "92%",
      // right: "18%",
      // y: "-1%",
    });
  });

  var flag = 0;
  var resumeTime = 0;
  videoContainer.addEventListener("click", () => {
    if (flag == 0) {
      video.play();
      video.style.opacity = 1;
      document.querySelector(
        "#video-container #video-crsr"
      ).innerHTML = `<i class="ri-pause-mini-line"></i>`;
      gsap.to("#video-container #video-crsr", {
        scale: 0.4,
      });
      flag = 1;
    } else {
      video.pause();
      video.style.opacity = 0;
      document.querySelector(
        "#video-container #video-crsr"
      ).innerHTML = `<i class="ri-play-mini-fill"></i>`;
      gsap.to("#video-container #video-crsr", {
        scale: 1,
      });
      flag = 0;
    }
  });
  video.addEventListener("play", () => {
    if (flag === 1 && resumeTime > 0) {
      video.currentTime = resumeTime;
      resumeTime = 0; // Reset the stored playback time
    }
  });
}

function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    config: {
      a: { value: 0.46, range: [0, 30] },
      b: { value: 0.97, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7272749691738595 },
      ignoreShapeAspect: { value: true },
      shapePosition: {
        value: { x: 0.020408163265306145, y: -0.04081632653061229 },
      },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0.03, range: [0, 0.5] },
      shapeRadius: { value: 0.03, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false },
      maskVal: { value: 1.15, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 2.06, range: [0, 10] },
      metaball: { value: 0.38, range: [0, 2] },
      discard_threshold: { value: 0.79, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 22.14, range: [0, 100] },
    },
    gooey: true,
  });
}
locomotiveAnimation();
loadingAnimation();
crusherAnimation();
sheryAnimation();

document.addEventListener("mousemove", (dets) => {
  gsap.to("#flag", {
    x: dets.x,
    y: dets.y,
  });
});
document.querySelector("#lineno3").addEventListener("mouseenter", () => {
  gsap.to("#flag", {
    opacity: 1,
  });
});
document.querySelector("#lineno3").addEventListener("mouseleave", () => {
  gsap.to("#flag", {
    opacity: 0,
  });
});
