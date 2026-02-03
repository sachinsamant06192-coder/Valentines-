function yesClicked(){
    alert("AWw❤️,Don't give up on us you stupid girl"
         
    );
    
}

let noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", function(){
    let x = Math.random() * 300 - 150;
    let y = Math.random() * 200 - 100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});