// Create a single object named "slideshow" that represents the data and functionality of a picture slideshow. 
//There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:

//PART 1:
// An array called photoList that contains the names of the photos as strings
// An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
// A nextPhoto() function that moves currentPhotoIndex to the next index ifthere is one, and:
// logs the current photo name.
// Otherwise, log "End of slideshow";
// A prevPhoto() function that does the same thing, but backwards.
// A function getCurrentPhoto() that returns the current photo from the list.

//PART 2:
// Create an empty property named playInterval
// A play() function that moves to the next photo every 2000ms until the end.
// Tip - use playInterval = setInterval(fn,ms).
// A pause() function that stops the slideshow
//  Tip - use clearInterval(playInterval)
// Automatically pause the slideshow if it gets to the end of the photolist while playing.

var slideshow = {
    photoList: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
    currentPhotoIndex: 0,
    nextPhoto(){
        if(this.currentPhotoIndex < this.photoList.length - 1){
            this.currentPhotoIndex += 1;
            console.log('Current photo is ' + this.photoList[this.currentPhotoIndex]);
        }else{
            console.log('End of slideshow');
            this.pause();
        }
    },
    prevPhoto(){
        if(this.currentPhotoIndex > 0){
            this.currentPhotoIndex -= 1;
            console.log('Current photo is ' + this.photoList[this.currentPhotoIndex]);
        }else{
            console.log('Beginning of slideshow');
        }
    },
    getCurrentPhoto(){
        return this.photoList[this.currentPhotoIndex];
    },
    playInterval: null,
    play(){
        var self = this;
        this.playInterval = setInterval(function(){self.nextPhoto()},2000);
    },
    pause(){
        clearInterval(this.playInterval);
    }

};

slideshow.play();

