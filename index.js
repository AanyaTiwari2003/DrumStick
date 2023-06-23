// (function(){ 
//     alert("I got clicked!"); //anonymous function
// });
 
// var numberOfButtons=document.querySelectorAll(".drum").length;
// for(var i=0;i<numberOfButtons;i++){ 
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){ 
//      var audio=new Audio("sounds/crash.mp3");
//      audio.play();   
//      this.style.color="white";
//     });
// }



// document.querySelector(".w").addEventListener("click",function(){ 
//     var audio=new Audio("sounds/crash.mp3");
//     audio.play();
// });

//Upon the click of the button the sound is played
var numberOfButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfButtons;i++){ 
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){ 
        var buttonClicked=this.innerHTML;
        SoundPlayed(buttonClicked);
        buttonAnimation(buttonClicked);
    });
    }

//upon a keyboard key press the sound is played here an event listener is added to the entire document
    document.addEventListener("keydown",function(event){ 
       SoundPlayed(event.key);
       buttonAnimation(event.key);
    });


//Detecting the key pressed and playing the sound accordingly
    function SoundPlayed(key){ 
        switch(key){ 
            case "w":
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "a":
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "s":
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "d":
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "j": 
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "k":
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "l":
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            default: 
                console.log(buttonClicked);
        }
    }
    function buttonAnimation(currentKey){ 
        var currActiveButton=document.querySelector("."+currentKey)
        currActiveButton.classList.add("pressed");
        setTimeout(function(){ 
            currActiveButton.classList.remove("pressed");
        },100);
    }