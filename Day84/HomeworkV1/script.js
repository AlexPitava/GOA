const child = document.getElementById("child-container");

let left = 0;
let y = 0;
let direction = "right";

const move = setInterval(() => {
    switch (direction) {
        case "right":
            left++;
            if (left === 300) direction = "bottom";
            break;
        case "bottom":
            y++;
            if (y === 300) direction = "left";
            break;
        case "left":
            left--;
            if (left === 0) direction = "top";
            break;
        case "top":
            y--;
            if (y === 0 && left === 0) clearInterval(move);
            break;
    }
    child.style.left = `${left}px`;
    child.style.top = `${y}px`;
}, 10);
