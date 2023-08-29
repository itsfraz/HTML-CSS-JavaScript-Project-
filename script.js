
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
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"

    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #99cd32bc"
        crsr.style.backgroundColor = "#99cd32bc"

    })
})

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
        markers: true,      // Displaying markers for the trigger's start and end positions

        // The animation starts when the top of the trigger element is 30% visible from the top of the viewport
        start: "top -30%",

        // The animation ends when the top of the trigger element is 100% scrolled past (hidden) above the viewport
        end: "top -100%",

        scrub: 2,   // Scrubbing speed; animates the property smoothly as the user scrolls

        // You can add more properties here for advanced animations and interactions
    }
});


gsap.from("#about-us img ,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub: 2

    }
});

gsap.from(".card",{
    scale : 0.8,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub: 2

    }
})