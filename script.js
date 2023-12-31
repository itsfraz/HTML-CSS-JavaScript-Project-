
// Get references to the cursor elements in the HTML
var crsr = document.querySelector("#cursor"); // The main cursor element
var blur = document.querySelector("#cursor-blur"); // The cursor's blur element

// Add a mousemove event listener to the entire document
document.addEventListener("mousemove", function (event) {
    // Update the position of the main cursor element based on the mouse coordinates
    crsr.style.left = event.clientX + "px"; // Set the left position of the cursor
    crsr.style.top = event.clientY + "px"; // Set the top position of the cursor

    // Update the position of the cursor's blur element with an offset to create a blur effect
    blur.style.left = event.clientX - 250 + "px"; // Set the left position with an offset
    blur.style.top = event.clientY - 250 + "px"; // Set the top position with an offset
});
// Select all <h4> elements within the element with the ID "nav"
var h4all = document.querySelectorAll("#nav h4");

// Loop through each <h4> element
h4all.forEach(function (elem) {
    // Add an event listener for when the mouse enters the <h4> element
    elem.addEventListener("mouseenter", function () {
        // Modify cursor styles when hovering over the <h4> element
        crsr.style.scale = 3; // This line seems incorrect. It should be something like crsr.style.transform = "scale(3)"
        crsr.style.border = "0.5px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });

    // Add an event listener for when the mouse leaves the <h4> element
    elem.addEventListener("mouseleave", function () {
        // Reset cursor styles when the mouse leaves the <h4> element
        crsr.style.scale = 1; // This line seems incorrect. It should be something like crsr.style.transform = "scale(1)"
        crsr.style.border = "0px solid #99cd32bc";
        crsr.style.backgroundColor = "#99cd32bc";
    });
});


//  This can help you fine-tune the animation's start and end points. The code uses GSAP to animate the navbar's background color and height changes while scrolling, creating a visually appealing effect on your webpage.

// Use GSAP to animate the navbar
gsap.to("#nav", {
    // Change the background color of the navbar to black (#000)
    backgroundColor: "#000",

    // Set the duration of the animation to 0.5 seconds
    duration: 0.5,

    // Change the height of the navbar to 80px
    height: "80px",

    // Define the ScrollTrigger options for the animation
    scrollTrigger: {
        // The trigger element that starts the animation (in this case, the navbar)
        trigger: "#nav",

        // The scroller element (usually the body) that controls the scroll
        scroller: "body",

        // Set markers to true to see the ScrollTrigger's active range
        // markers: true,

        // Set the start point of the animation when the trigger element is 10% above the top of the viewport
        start: "top -10%",

        // Set the end point of the animation when the trigger element is 11% above the top of the viewport
        end: "top -11%",

        // Enable scrubbing for a smoother effect as you scroll
        scrub: 2,
    }
});

//Using GSAP, this code animates "#main" background to black when 30% visible, scrolling adjusts animation speed, and it halts after full exit. scrollTrigger manages with markers for visualization.

// Using GSAP to animate the "#main" element's background color
gsap.to("#main", {
    // Animating the background color to "#000" (black)
    backgroundColor: "#000",
    scrollTrigger: {
        // Setting up a scroll trigger for the animation
        trigger: "#main",   // The element that triggers the animation
        scroller: "body",   // The scrolling container (in this case, the whole body)
        //markers: true,      // Displaying markers for the trigger's start and end positions

        // The animation starts when the top of the trigger element is 30% visible from the top of the viewport
        start: "top -30%",

        // The animation ends when the top of the trigger element is 100% scrolled past (hidden) above the viewport
        end: "top -100%",

        scrub: 2,   // Scrubbing speed; animates the property smoothly as the user scrolls

        // You can add more properties here for advanced animations and interactions
    }
});


// Using GSAP to animate elements within the "about-us" section
gsap.from("#about-us img, #about-us-in", {
    // Initial position and opacity values for the animation
    y: 90,          // Move elements down by 90 pixels
    opacity: 0,     // Set initial opacity to fully transparent
    duration: 1,    // Animation duration is 1 second

    // Scroll-triggered animation settings
    scrollTrigger: {
        trigger: "#about-us",  // The trigger element for the animation
        scroller: "body",      // The scrolling container (body in this case)

        // Animation timeline markers (helpful for debugging)
        // markers: true,

        start: "top 70%",      // Animation starts when trigger is 70% from the top of the viewport
        end: "top 65%",        // Animation ends when trigger is 65% from the top of the viewport

        scrub: 2               // Slow down animation playback by a factor of 2 during scrolling
    }
});


// Using GSAP animation library to create an animation effect for elements with class "card"
gsap.from(".card", {
    // Initial properties of the animation
    scale: 0.8,         // Start with 80% of the original size
    opacity: 0,         // Start with 0% opacity (completely transparent)
    duration: 1,        // Duration of the animation in seconds
    //stagger : 0.4,
    // Scroll-triggered animation settings
    scrollTrigger: {
        trigger: ".card",       // Element that triggers the animation
        scroller: "body",       // The scrollable element (usually the body in this case)
        start: "top 70%",      // Animation starts when the top of the element is 70% in view
        end: "top 65%",        // Animation ends when the top of the element is 65% in view
        scrub: 2               // "Scrub" the animation, adjusting its progress based on scroll speed
    }
});

gsap.from("#colon1",{
    y:-90,
    x:-50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
       // markers:true,
        start:"top 40%",
        end:"top 40%",
        scrub:4
    }
});

gsap.from("#colon2",{
    y:90,
    x:50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
       // markers:true,
        start:"top 40%",
        end:"top 45%",
        scrub:4
    }
});
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
       // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})

