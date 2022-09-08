function show1() {
    var x = document.getElementById("box1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function show2() {
    var x = document.getElementById("box2");
    var b = document.getElementById("box1");
    var b3 = document.getElementById("box3");
    var b4 = document.getElementById("box4");
    var b5 = document.getElementById("box5");
    if (x.style.display === "none") {
      x.style.display = "block";
      b.style.display = "none";
      b3.style.display = "none";
      b4.style.display = "none";
      b5.style.display = "none";
    } else {
      x.style.display = "none";
      b.style.display = "block";
    }
  }

  function show3() {
    var x = document.getElementById("box3");
    var b = document.getElementById("box1");
    var b3 = document.getElementById("box2");
    var b4 = document.getElementById("box4");
    var b5 = document.getElementById("box5");
    if (x.style.display === "none") {
      x.style.display = "block";
      b.style.display = "none";
      b3.style.display = "none";
      b4.style.display = "none";
      b5.style.display = "none";
    } else {
      x.style.display = "none";
      b.style.display = "block";
    }
  }

  function show4() {
    var x = document.getElementById("box4");
    var b = document.getElementById("box1");
    var b3 = document.getElementById("box3");
    var b4 = document.getElementById("box2");
    var b5 = document.getElementById("box5");
    if (x.style.display === "none") {
      x.style.display = "block";
      b.style.display = "none";
      b3.style.display = "none";
      b4.style.display = "none";
      b5.style.display = "none";
    } else {
      x.style.display = "none";
      b.style.display = "block";
    }
  }

  function show5() {
    var x = document.getElementById("box5");
    var b = document.getElementById("box1");
    var b3 = document.getElementById("box3");
    var b4 = document.getElementById("box4");
    var b5 = document.getElementById("box2");
    if (x.style.display === "none") {
      x.style.display = "block";
      b.style.display = "block";
      b3.style.display = "none";
      b4.style.display = "none";
      b5.style.display = "none";
    } else {
      x.style.display = "none";
      b.style.display = "block";
    }
  }

  var m, f, v;

f = document.getElementById("files");
v = document.getElementById("viewport");

f.addEventListener("change", function(e){
	m = new FileReader();
	m.onload = function(e){
		v.src = e.target.result;
	};
	m.readAsDataURL(this.files[0]);
});


let colorpicker = document.getElementById('colorpicker');



  setInterval(()=>{
      let color = colorpicker.value;
      document.body.style.backgroundColor = color;
  }, 200);


  function files() {
    document.getElementById("files").click();
  }

function mute(){
  document.getElementById("audio").muted = true;
}

function unmute(){
  document.getElementById("audio").muted = false;
}


document.addEventListener("DOMContentLoaded", function(event) {
  var button = document.getElementById('plus');
  var elem = document.getElementById('shake');
  var count = 0;

  button.addEventListener('click', function(e) {
      e.preventDefault();
      count++;
 
      if(count == 5){
          setTimeout(function(){elem.style.backgroundImage = 'url(face.png)'},500)
      }
   }, false); 
});

document.addEventListener("DOMContentLoaded", function(event) {
  var button = document.getElementById('plus');
  var elem = document.getElementById('shake');
  var count = 0;

  button.addEventListener('click', function(e) {
      e.preventDefault();
      count++;
 
      if(count == 10){
          setTimeout(function(){elem.style.backgroundImage = 'url(shake.png)'},500)
      }
   }, false); 
});

