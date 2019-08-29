// Create a Form and add validations using jQuery
// Utilize the html and css provided
// Create a function that will fire when the submit <button> is clicked
// Make sure the function loaded after the DOM
// Inside the function do the following:
// create variables for each of the form inputs
// use jQuery to accomplish this task
// (think about querySelector)
// create an array named required
// store the variables you've name, email, and phone number
// Utilize a for loop to iterate of the entire required array
// Inside the for loop:
// Use an if statement to check the value of each array item
// If the array item is equal to an empty string ("")
// Populate the message <p> with the following text: "Please Fill Out Required Fields"
// Add the warning class to this message
// Attach the warning class to the array item's <label> note: You want the label to turn red, if the field is empty
// Once the field has something other than a blank string. make sure the warning class is removed
// Close out the for loop​
// utilize another if statement
// verify that no <label>'s have the warning class
// if true
// remove the form from the DOM
// manipulate the <h2> to say: "Thanks for your feedback!"
// close out your function
// test it out!

$(document).ready(function(){

    $('#submit').on('click', function(){
        var nameInput = $('#name');   
        var emailInput = $('#email');
        var phoneInput = $('#phone');
        var msgOutput = $('p#message');
        
    
        var required = [nameInput, emailInput, phoneInput];
    
        for (let i=0;i<required.length;++i){
            if (required[i].val() === ""){
                console.log(required[i])
                msgOutput.text("Please fill out required fields").addClass("warning");
                required[i].prev().addClass("warning");
            } else {
                required[i].prev().removeClass("warning");
            }
        }

        if (!$("#form label").hasClass('warning')) {
            $("#form")[0].remove();
            $("#pre-form h2").text("Thanks for your feedback!")
          }
    })
})
