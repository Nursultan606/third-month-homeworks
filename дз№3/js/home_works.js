const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector("#gmail_button");
const gmailSpan = document.querySelector("#gmail_result");

const regExp =/[a-zA-Z0-9@]gmail.com/


gmailButton.onclick = ()=> {
    if (regExp.test(gmailInput.value)){
        gmailSpan.innerHTML = "Ok"
        gmailSpan.style.color = "green"
    }else {
        gmailSpan.innerHTML = "Not Ok"
        gmailSpan.style.color = "red"
    }
}
const childBlock = document.querySelector(".child_block");
const parentBlock = document.querySelector(".parent_block");

let positionX = 0;
let positionY = 0;
let offSetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
let offSetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;
const moveBlock = ()  => {
    requestAnimationFrame(moveBlock);
    childBlock.style.left = `${positionX}px`;
    childBlock.style.top = `${positionY}px`;

    if (positionX < offSetWidth && positionY ===0) positionX +=3;
    else if (positionX >=offSetWidth && positionY < offSetHeight) positionY +=3;
    else if (positionX > 0 && positionY > 0) positionX-=3;
    else if (positionY > 0 && positionX === 0) positionY -=3;
}
moveBlock();

