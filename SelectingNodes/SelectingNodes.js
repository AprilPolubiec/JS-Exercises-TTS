// Get the header element
// Get all the section elements
// Get the section element with class="current"
// Get the section that comes after the current section
// Get the h2 node from the section before the 'current' section
// Get the div that contains the section that has an h2 with a class of 'highlight'
// Get all the sections that contain an H2 (using a single statement);

const qs = document.querySelector.bind(document);
const qsa = document.querySelectorAll.bind(document);

var header = qs('header');
var sectionEls = qsa('section');
var currentSection = qs('section.current');
var nextSection = currentSection.nextElementSibling;
var h2FromBefore = currentSection.previousElementSibling.children[0];
var divWithHighlightH2 = qs('h2.highlight').parentElement.parentElement;

var allSectionWithH2 = Array.from(qsa('section h2')).map((headline)=>{return headline.parentElement});

console.log(allSectionWithH2)