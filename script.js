// variables related to biography page
var i = 0;
var authorHeadingText = "Hi there, I'm Yunhui Zhang...";
var speed = 200;



// runs the function once the window is loaded
window.onload = function(){
    // setting the biography page author header to none
    if(document.getElementById("author-heading-bio") !== null){
        document.getElementById("author-heading-bio").innerHTML = "";
    }
    typingEffect();

}

// creates the typing effect in the biography page
function typingEffect(){
    if(i < authorHeadingText.length){
        // utilised the generic "document" object to show it usage
        if(document.getElementById("author-heading-bio") === null){
            // this if condition ensures that this typingEffect recursion works only when the author-heading id is found
            i = authorHeadingText.length;
        }
        else{
            // this code block runs only when the author-heading-bio is found in the page
            document.getElementById("author-heading-bio").innerHTML += authorHeadingText.charAt(i);
            i++;
            setTimeout(typingEffect, speed);
        }
    }
    else {
        // utilised jquery to change the styling after the type effect by adding some theme coloring
        $('#author-heading-bio').empty().append('<span class = "color-theme"></span> Have fun in my Bio <span class ="color-theme">.</span>.');
    }
}


