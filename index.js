// Hamburger timeline

const upper = document.getElementsByClassName("upper");
const middle = document.getElementsByClassName("middle");
const middle1 = document.getElementsByClassName("middle1");
const lower = document.getElementsByClassName("lower");
let tl2 = new TimelineLite({ paused: true, reversed: true });

tl2
  .to(
    upper,
    0.5,
    {
      attr: { d: "M11,2 L2,11" },
      x: 1,
      stroke: `#191919`,
      strokeWidth: 2,
      ease: Power2.easeInOut
    },
    "start"
  )

  .to(middle, 0.5, { autoAlpha: 0, stroke: `#191919` }, "start")
  .to(middle1, 0.5, { autoAlpha: 0, stroke: `#CB5302` }, "start")
  .to(
    lower,
    0.5,
    {
      attr: { d: "M2,2 L11,11" },
      x: 1,
      stroke: `#CB5302`,
      strokeWidth: 2,
      ease: Power2.easeInOut
    },
    "start"
  );

document
  .querySelector(".hamburger-icon")
  .addEventListener("click", function () {
    tl2.reversed() ? tl2.play() : tl2.reverse();
    document.getElementById("container").style.transitionDuration = '0.5s';

    if (document.getElementById("container").style.opacity === '1') {
      document.getElementById("container").style.opacity = '0';
    } else {
      document.getElementById("container").style.opacity = '1';
      document.getElementById("container").style.pointerEvents = 'auto';

    }
  });
