// 캔버스 세팅 

let canvas;
let ctx;

canvas = document.createElement("canvas")
ctx = canvas.getContext("2d")

canvas.width= 1440;
canvas.height= 1024;
document.body.appendChild(canvas);

//이미지
let backgroundImage, spaceshipImage, bulletImage, starImage

//우주선 좌표 
let spaceshipX = canvas.width/2 -56;
let spaceshipY = canvas.height -120;


let bulletList =[];
//총알 좌표
function bullet(){
    this.x=0;
    this.y=0;
    //총알 시작점 
    this.init= function(){
        this.x=spaceshipX;
        this.y=spaceshipY;

        bulletList.push(this);
    }
}

function loadImage() {
    backgroundImage = new Image();
    backgroundImage.src ="img/background.png"

    spaceshipImage = new Image();
    spaceshipImage.src ="img/spaceship.png"

    bulletImage = new Image();
    bulletImage.src ="img/bullet.png"

    starImage =new Image();
    starImage.src = "img/star.png"

}

function setupMouseListener(){
    document.addEventListener("mousemove", (e)=>{
        spaceshipX = e.clientX;
        spaceshipImage.left = spaceshipX + 'px'});
}

//클릭
let clickEvent = document.addEventListener("click", function(){
        createBullet();
    });

//그려줌
function render(){
    ctx.drawImage(backgroundImage, 0,0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
    
    for(let i=0; i<bulletList.length; i++){
        ctx.drawImage(bulletImage, bulletList[i].x, bulletList[i].y);
    }
}  

function main(){
    render();
    requestAnimationFrame(main); 
}


setupMouseListener();
loadImage();
main();

//총알
//클릭시 총알 발사
//총알 y값 줄어들기, x값 총알 발사시 우주선 좌표
//빌사된 총알은 총알 배열에 저장( x,y ) -> render 
function createBullet(){
    let b= new bullet(); //bullet 함수를 하나 더 생성, b에 저장
    b.init();



}
