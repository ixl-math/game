window.onload=function(){
    var minusBtn = document.getElementById("minus"),
        plusBtn = document.getElementById("plus"),
        numberPlace = document.getElementById("numberPlace"),
        submitBtn = document.getElementById("submit"),
        number = 0, /// number value
        min = 0, /// min number
        max = Infinity; /// max number
        plusBtn11 = document.getElementById("buy"),
        buyBtn = document.getElementById("buy2"),
        price = document.getElementById("buy2"),
        
    minusBtn.onclick = function(){
        if (number>min){
           number = number-15; /// Minus 1 of the number
           numberPlace.innerText = number ; /// Display the value in place of the number
           price.style.color="black";  
        }
        if(number == min) {     
            price.style.color="red";     
            numberPlace.style.color= "red";
            setTimeout(function(){numberPlace.style.color= "black"},500)
        }
        else {
          numberPlace.style.color="black";    
          price.style.color="black";          
           }
                
    }
    plusBtn.onclick = function(){
        if(number<max){
           number = number+1;
           numberPlace.innerText = number ; /// Display the value in place of the number
        }     
           
        else {
               numberPlace.style.color= "black";
               
        }
     
           
    }

    buyBtn.onclick = function(){
        if (number>min){
           number = number-15; /// Minus 1 of the number
           numberPlace.innerText = number ; /// Display the value in place of the number
           
        }
        if(number == min) {        
            numberPlace.style.color= "red";
            setTimeout(function(){numberPlace.style.color= "black"},500)
        }
        else {
          numberPlace.style.color="black";  
          var intervalId = window.setInterval(function(){
        if(number<max){
           number = number+10;
           numberPlace.innerText = number ; /// Display the value in place of the number
        }
}, 10000);

if(number<max){
           number = "black" + number +15;
           price.innerText = number ; /// Display the value in place of the number
        }
          
           }
                
    }


    }

    function scale1(){
        document.getElementById("plus").style.width = "850px";
        document.getElementById("plus").style.marginTop = "-200px";
        document.getElementById("plus").style.marginLeft = "-155px";
      }

      function scale2(){
        document.getElementById("plus").style.width = "750px";
        document.getElementById("plus").style.marginTop = "-140px";
        document.getElementById("plus").style.marginLeft = "-125px";
      }

      function scale3(){
        document.getElementById("plus").style.width = "600px";
        document.getElementById("plus").style.marginTop = "-50px";
        document.getElementById("plus").style.marginLeft = "-50px";
      }

      function scale4(){
        document.getElementById("plus").style.width = "0.1px";
        document.getElementById("plus").style.marginTop = "-50px";
        document.getElementById("plus").style.marginLeft = "-50px";
        document.getElementById("plus").style.paddingBottom = "700px";

      }

      function rmback(){
        document.getElementById("viewport").src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Wolf%E2%80%93Lundmark%E2%80%93Melotte_%28transparent_background%29.png/2048px-Wolf%E2%80%93Lundmark%E2%80%93Melotte_%28transparent_background%29.png";
    }