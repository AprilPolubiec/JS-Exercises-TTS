//https://www.youtube.com/watch?v=rJesac0_Ftw
//Loading content on the fly - content is not in the HTML file
//it is loaded from an external API

var counter = 1;
var button = document.getElementById('btn');
var animalSection = document.getElementById('animal-info');

button.addEventListener('click', function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${counter}.json`);
    
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
    counter += 1;

    if(counter > 3){
        button.classList.add("hide-me");
    }

});


function renderHTML(data){
    var htmlString = '';

    for(let i=0;i<data.length;++i){
        htmlString += `<p>${data[i].name} is a ${data[i].species} that likes to eat </br>`;
        
        for (let j=0; j<data[i].foods.likes.length; j++){
            if(j === 0){
                htmlString += data[i].foods.likes[j];
            } else {
            htmlString += ' and ' + data[i].foods.likes[j];
            }
        }
        htmlString += ' and dislikes '

        for (let j=0; j<data[i].foods.dislikes.length; j++){
            if(j === 0){
                htmlString += data[i].foods.dislikes[j];
            } else {
            htmlString += ' and ' + data[i].foods.dislikes[j];
            }
        }
        
        htmlString += '.</p>';
    }

    animalSection.innerHTML += htmlString;
}

