let ctx = document.getElementById("canvasAnimation");
let animation = ctx.getContext("2d");

ctx.width = 800;
ctx.height = 720;
let imgUser = new Image();
imgUser.src = "https://cms-assets.tutsplus.com/cdn-cgi/image/width=600/uploads/users/33/posts/26263/image/00-final-product.png";

function User() {
    this.x = 0;
    this.y = 0;
    this.newX = function (keyX) {
        if (keyX == 68 || keyX == 39) {
            this.x += 20;
        } else {
            this.x -= 20;
        }
    }
    this.newY = function (keyY) {
        if (keyY == 83 || keyY == 40) {
            this.y += 20;
        } else {
            this.y -= 20;

        }
    }
    this.draw = function () {
        animation.drawImage(imgUser, 10, 10);
    }
    this.update = function () {
        // this.x += 10;
        animation.clearRect(0, 0, ctx.width, ctx.height);
        animation.drawImage(imgUser, this.x, this.y);

    }
}

let userPlay = new User();
function play() {
    userPlay.update();

}

setInterval(play, 1000 / 60)

window.addEventListener("keydown", move);
function move(evt) {
    console.log(evt.keyCode);
    switch (evt.keyCode) {
        case 68:
            userPlay.newX(68);
            break;
        case 39:
            userPlay.newX(39);
            break;
        case 65:
            userPlay.newX(65);
            break;
        case 37:
            userPlay.newX(37);
            break;
        case 87:
            userPlay.newY(87);
            break;
        case 38:
            userPlay.newY(38);
            break;
        case 83:
            userPlay.newY(83);
            break;
        case 40:
            userPlay.newY(40);
            break;
        default:
            break;
    }
}