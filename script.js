let boxes=document.querySelectorAll(".box");
let announce=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let res=document.querySelector("#new-btn");
let newBtn=document.querySelector("#reset-btn");
let turnO=true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}
res.addEventListener(("click"),()=>{
    enableBoxes();
    turnO=true;
    msgContainer.classList.add("hide");
})
newBtn.addEventListener(("click"),()=>{
    enableBoxes();
    turnO=true;
    msgContainer.classList.add("hide");
})
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO) {
            box.innerText="O";
            turnO=0;
            console.log("O was clicked.");
        }
        else{
            box.innerText="X";
            turnO=1;
            console.log("X was clicked.");
        }
        box.disabled=true;
        checkWinner();
    });
});

const checkWinner =()=>{
    for(let pat of winpattern){
        let posn1=pat[0];
        let posn2=pat[1];
        let posn3=pat[2];
        if(boxes[posn1].innerText==boxes[posn2].innerText && boxes[posn2].innerText==boxes[posn3].innerText  && boxes[posn1].innerText!=""){
            showWinner(boxes[posn1].innerText);
        }
    };
};
const showWinner=(winner)=>{
    announce.innerText=`Congratulations,Winner is Player ${winner} `;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
