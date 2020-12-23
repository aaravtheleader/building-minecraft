

var canvas = new fabric.Canvas('myCanvas');
bw=30;
bh=30;
px=10;
py=10;
var player="";
var block="";
function playerupdate(){
    fabric.Image.fromURL("player.png",function (Img){
    player=Img;
    player.scaleToWidth(150)  ;
    player.scaleToHeight(140);
    player.set({
        top:py,
        left:px
    });
canvas.add(player);
//source.addEventListener("type_of_event,callback_function");
    });
}
function blockupdate(getImage){
    fabric.Image.fromURL(getImage,function (Img){
    block=Img;
    block.scaleToWidth(bw)  ;
    block.scaleToHeight(bh);
    block.set({
        top:py,
        left:px
    });
canvas.add(block);

    });
}

window.addEventListener("keydown",myKeydown);
function myKeydown(e){
     keyPressed=e.keyCode;
    if (e.shiftKey==true&&keyPressed=='87'){
        bw=bw+10;
        bh=bh+10;
        document.getElementById("ch").innerHTML=bh;
        document.getElementById("cw").innerHTML=bw;
    }
    if (e.shiftKey==true&&keyPressed=='65'){
        bw=bw-10;
        bh=bh-10;
        document.getElementById("ch").innerHTML=bh;
        document.getElementById("cw").innerHTML=bw;
}
if (keyPressed=='38'){
up();
console.log('up');
}
if (keyPressed=='37'){
    left();
    console.log('left');
    }
    if (keyPressed=='39'){
        right();
        console.log('right');
    
        }
        if (keyPressed=='40'){
            down();
            console.log('down');
            }
            if (keyPressed=='80'){
                blockupdate('wall.jpg');
                console.log('p');
                }
                if (keyPressed=='79'){
                    blockupdate('yellow_wall.png');
                    console.log('o');
                    }
                    if (keyPressed=='73'){
                        blockupdate('trunk.jpg');
                        console.log('i');
                        }
                        if (keyPressed=='85'){
                            blockupdate('unique.png');
                            console.log('u');
                            }
                            if (keyPressed=='89'){
                                blockupdate('roof.jpg');
                                console.log('y');
                                }
                                if (keyPressed=='84'){
                                    blockupdate('light_green.png');
                                    console.log('t');
                                    }
                                    if (keyPressed=='82'){
                                        blockupdate('ground.png');
                                        console.log('r');
                                        }
                                        if (keyPressed=='69'){
                                            blockupdate('cloud.jpg');
                                            console.log('e');
                                            }
                            
        }
        function up(){
            if (py>=0){
                py=py-bh;
                canvas.remove(player);
                playerupdate();

            }

        }
        function down(){
            if (py<=560){
                py=py+bh;
                canvas.remove(player);
                playerupdate();

            }

        }
        function left(){
            if (px>=0){
                px=px-bw;
                canvas.remove(player);
                playerupdate();

            }

        }
        function right(){
            if (px<=850){
                px=px+bw;
                canvas.remove(player);
                playerupdate();

            }

        }

        
