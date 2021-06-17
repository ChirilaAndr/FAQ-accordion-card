/* var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function rotateImg() {
    document.querySelector("#img").style.transform = "rotate(90deg)";
  }

*/

function expand(image, answer, question){
    if (answer.style.display === 'block'){
    question.style.fontWeight = '400';   
    image.style.transform= 'rotate(0deg)'; 
    answer.style.display='none';
    }
    else {
        question.style.fontWeight = '700';   
        image.style.transform= 'rotate(180deg)'; 
        answer.style.display='block';
    }
}  

/* let rotation1=0;
function rotateImg1(){
    rotation1+=180;
    if (rotation1===360){
        rotation1=0;
        document.getElementById("output1").style.fontWeight = '400';
        document.getElementById("output1").style.color = 'hsl(237, 12%, 33%)'; 

    }
    else{ document.getElementById("output1").style.fontWeight = '700';
    document.getElementById("output1").style.color = 'black'; 
    }
    document.querySelector("#img1").style.transform = `rotate(${rotation1}deg)`;

}

function rotateImg(id){
    rotation1+=180;
    if (rotation1===360){
        rotation1=0;
        document.getElementById(id).style.fontWeight = '400';
        document.getElementById(id).style.color = 'hsl(237, 12%, 33%)'; 

    }
    else{ document.getElementById(id).style.fontWeight = '700';
    document.getElementById(id).style.color = 'black'; 
    }
    document.querySelector("#img1").style.transform = `rotate(${rotation1}deg)`;

}

let rotation2=0;
function rotateImg2(){
    rotation2+=180;
    if (rotation2===360){
        rotation2=0;
        document.getElementById("output2").style.fontWeight = '400';
        document.getElementById("output2").style.color = 'hsl(237, 12%, 33%)';
    }
    else{ document.getElementById("output2").style.fontWeight = '700';
    document.getElementById("output2").style.color = 'black'; 
    }
    document.querySelector("#img2").style.transform = `rotate(${rotation2}deg)`;
}

let rotation3=0;
function rotateImg3(){
    rotation3+=180;
    if (rotation3===360){
        rotation3=0;
        document.getElementById("output3").style.fontWeight = '400';
        document.getElementById("output3").style.color = 'hsl(237, 12%, 33%)';
    }
    else{ document.getElementById("output3").style.fontWeight = '700';
    document.getElementById("output3").style.color = 'black'; 
    }
    document.querySelector("#img3").style.transform = `rotate(${rotation3}deg)`;
}

let rotation4=0;
function rotateImg4(){
    rotation4+=180;
    if (rotation4===360){
        rotation4=0;
        document.getElementById("output4").style.fontWeight = '400';
        document.getElementById("output4").style.color = 'hsl(237, 12%, 33%)';
    }
    else{ document.getElementById("output4").style.fontWeight = '700';
    document.getElementById("output4").style.color = 'black'; 
    }
    document.querySelector("#img4").style.transform = `rotate(${rotation4}deg)`;
}

let rotation5=0;
function rotateImg5(){
    rotation5+=180;
    if (rotation5===360){
        rotation5=0;
        document.getElementById("output5").style.fontWeight = '400';
        document.getElementById("output5").style.color = 'hsl(237, 12%, 33%)';
    }
    else{ document.getElementById("output5").style.fontWeight = '700';
    document.getElementById("output5").style.color = 'black'; 
    }
    document.querySelector("#img5").style.transform = `rotate(${rotation5}deg)`;
}

*/ 