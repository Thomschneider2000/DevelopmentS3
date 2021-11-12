    window.onload = init;

    document.addEventListener('keydown', getKeyAndMove);
    var innerbox = document.getElementById("innerbox");
    var outerbox = document.getElementById("outerbox");
    var objImage = document.getElementById("img1");
    var textbox = document.getElementById("elementToAnimate");

    var colide = false;

     function init() {
         objImage.style.left = "200px";
         objImage.style.top = "-200px";
     }

     function textdissapear(){
         textbox.style.display = "none";
     }

     function getaudio(){
        document.getElementById('audio').play();
     }

     function getKeyAndMove(e) {
         var key_code = e.which || e.keyCode;
         switch (key_code) {
             case 37: //left arrow key
                 moveLeft();
                 break;
             case 38: //Up arrow key
                 moveUp();
                 break;
             case 39: //right arrow key
                 moveRight();
                 break;
             case 40: //down arrow key
                 moveDown();
                 break;
         }
     }
     function moveLeft() {
         objImage.style.left = parseInt(objImage.style.left) - 15 + "px";
         CheckCollision();
         textdissapear();
         getaudio();
     }
     function moveUp() {
         objImage.style.top = parseInt(objImage.style.top) - 15 + "px";
         CheckCollision();
         textdissapear();
     }
     function moveRight() {
         objImage.style.left = parseInt(objImage.style.left) + 15 + "px";
         CheckCollision();
         textdissapear();
         getaudio();
     }
     function moveDown() {
         objImage.style.top = parseInt(objImage.style.top) + 15 + "px";
         CheckCollision();
         textdissapear();
         getaudio();
     }
     //checks for collision
     function CheckCollision() {
        if(rectIntersect(objImage.x, objImage.y, objImage.width, objImage.height, innerbox.x, innerbox.y, innerbox.width, innerbox.height))
        {
            if (colide == true) {
                objImage.style.filter = "brightness(130%)";
            }
            else {
                return;
            }
        }
        else if(rectIntersect(objImage.x, objImage.y, objImage.width, objImage.height, middlebox.x, middlebox.y, middlebox.width, middlebox.height))
        {
            if (colide == true) {
                objImage.style.filter = "brightness(100%)";
            }
            else {
                return;
            }
        }
        else if(rectIntersect(objImage.x, objImage.y, objImage.width, objImage.height, outerbox.x, outerbox.y, outerbox.width, outerbox.height))
        if (colide == true) {
            objImage.style.filter = "brightness(75%)";
        }
        else {
            return;
        }
        else {
            objImage.style.filter = "brightness(50%)";
           return;
        }
    }
    
    function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
        // calculates collision overlap
        if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2){
            return colide = false;
        }
        else
        return colide = true;
    }
     