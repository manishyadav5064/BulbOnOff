
const btn = document.getElementById("bt");
const bulbb = document.getElementById("bpic") ;

function toggle1(){
    
   if(btn.innerText.match('On'))
   {
        document.getElementById("bpic").src = "bulbon1.png";
        btn.innerText = "Off";
        btn.classList.remove("active");
        


   }
   else{
        document.getElementById("bpic").src = "bulboff1.png";
        btn.innerText = "On";
        btn.classList.add("active");
       
   }
    
};

