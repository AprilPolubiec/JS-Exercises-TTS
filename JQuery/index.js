// Using jQuery:

// Load jQuery (using a CDN)
// Get the top-level header element
// Get all the section elements
// Get the section element with class="current"
// Get the section that comes after the current section
// Get the h2 node from the section before the 'current' section
// Get the div that contains the section that has an h2 with a class of 'highlight'
// Get all the sections that contain an h2 and store them in an Array

$(document).ready(function(){
    const header = $("header");
    const sections = $("section");
    const currentSection = $("section.current");
    const nextSection = currentSection.next();
    const sectionBeforeH2 = currentSection.prev().find("h2");
    const div = currentSection.parent();
    var allh2s = Array.from($("h2").parent());


})