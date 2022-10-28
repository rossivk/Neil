
window.addEventListener("load", myFunction);
window.addEventListener("resize", myFunction);

function myFunction() {
  const backgroundMenu = document.getElementsByClassName("nav-container");
  let tl1 = new TimelineLite({ paused: true, reversed: true });

  if (window.innerWidth <= 1024) {
    tl1.from(backgroundMenu, 0.5, {
      opacity: 0, x: 750
    });

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

    // attach the action to the hamburger icon
    document
      .querySelector(".hamburger-icon")
      .addEventListener("click", function () {
        tl2.reversed() ? tl2.play() && tl1.play() : tl2.reverse() && tl1.reverse();
      });
  } else {

    tl1.set(backgroundMenu, { x: 0, opacity: 0.5 });
    // tl1.from(backgroundMenu, 0.5, {
    //   opacity: 1, x: 0
    // });
  }
}