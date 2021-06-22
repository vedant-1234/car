canvas = document.getElementById("mycanvas")
ctx = canvas.getContext("2d")
rover_width = 120; rover_height = 70; rover_image = "OIP.jpg"; rover_x = 10; rover_y = 10;
background_image = "bg.jpg";

function add() {
    background_imgTag = new Image()
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;

    rover_imgTag.src = rover_image; 

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() { ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height); }



window.addEventListener("keydown", my_keydown);
function my_keydown(e) { keyPressed = e.keyCode; console.log(keyPressed);
    if(keyPressed == '38') { up(); console.log("up arrow key");}
    if(keyPressed == '37') { left(); console.log("left arrow key"); }
    if(keyPressed == '40') { down(); console.log("Down arrow key"); }
    if(keyPressed == '39') {right(); console.log("right arrow key"); }}
    
    function up(){
        if(rover_y>=0){rover_y=rover_y-10;
        uploadBackground();
        uploadrover();}
        }
        function down(){
            if(rover_y<=500){rover_y=rover_y+10;
            uploadBackground();
            uploadrover();}}  
            
            function right(){
                if(rover_x<=700){rover_x=rover_x+10;
                uploadBackground();
                uploadrover();}}
                function left(){
                    if(rover_x>=0){rover_x=rover_x-10;
                    uploadBackground();
                    uploadrover();}}