var numOfButton = document.querySelectorAll(".drum").length;

for(var i = 0; i < numOfButton; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", gotclicked);
    // document.querySelectorAll("button")[i].addEventListener("keypress", gotclicked);
};
    function gotclicked (){
       
        var buttonInnerhtml = this.innerHTML;

        switch (buttonInnerhtml) {
            case 'w':
                var crash = new Audio("sounds/tom-1.mp3");
                crash.play();
                break;
            
            case 'a':
                var kickbass = new Audio("sounds/tom-2.mp3");
                kickbass.play();
                break;

            case 's':
                var snare = new Audio("sounds/tom-3.mp3");
                snare.play();
                break;

            case 'd':
                var tom1 = new Audio("sounds/tom-4.mp3");
                tom1.play();
                break;

            case 'k':
                var tom2 = new Audio("sounds/crash.mp3");
                tom2.play();
                break;

            case 'j':
                var tom3 = new Audio("sounds/kick-bass.mp3");
                tom3.play();
                break;

            case 'l':
                var tom4 = new Audio("sounds/snare.mp3");
                tom4.play();
                break;
            
        
            default:
                break;
        }

};