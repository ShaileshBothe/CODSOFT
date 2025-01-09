function page1Animation() {
  var tl = gsap.timeline();

  tl.from("nav h1", {
    y: -40,
    opacity: 0,
    delay: 1,
    duration: 0.7,
  });
  tl.from("nav h4, nav button", {
    y: -40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2,
  });
  tl.from(".center-part1 h1", {
    x: -300,
    opacity: 0,
    duration: 0.8,
  });
  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });
  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.5,
      x: 50,
    },
    "-=0.5"
  );
  tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
  });
}
page1Animation();

function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top -50%",
      scrub: 5,
    },
  });

  tl2.from(".services", {
    y: 30,
    opacity: 0,
  });
  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim1"
  );
  tl2.from(
    ".elem.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim1"
  );
  tl2.from(
    ".elem.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim2"
  );
  tl2.from(
    ".elem.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim2"
  );
  tl2.from(
    ".elem.line3.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim3"
  );
  tl2.from(
    ".elem.line3.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim3"
  );
  tl2.from(
    ".elem.line4.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim4"
  );
  tl2.from(
    ".elem.line4.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim4"
  );
}
page2Animation();
