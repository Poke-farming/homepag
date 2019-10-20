//There are all the plough functions




function asd1(i){
   ready[i] = 5;
   document.getElementById(imgID[i]).classList.remove('plant1');
   document.getElementById(imgID[i]).className="img ";
   console.log("asd", ready[i] , document.getElementById(imgID[i]).className, i)
}
function asd2(i){
   ready[i] = 6;
   document.getElementById(imgID[i]).classList.remove('plant1');
   document.getElementById(imgID[i]).className="img ";
}
function asd3(i){
   ready[i] = 7;
   document.getElementById(imgID[i]).classList.remove('plant1');
   document.getElementById(imgID[i]).className="img ";
}
function asd4(i){
   ready[i] = 8;
   document.getElementById(imgID[i]).classList.remove('plant1');
   document.getElementById(imgID[i]).className="img ";
}

function plough(i){
    if (ready[i] === 0 && plant[i] === false) {
	     document.getElementById(imgID[i]).src='images/0.png';
	     document.getElementById(li[i]).innerHTML="<b>water</b>";
       document.getElementById(imgID[i]).className="img";
        ready[i] = 10;
        plant[i] = true;
        tutorial4()
        console.log('plough',i);
        console.log(ready[i] , plant[i])
    }else if (ready[i] === 1 && plant[i] === false) {
      if (water>0) {
         document.getElementById(imgID[i]).src='images/rozana.png';
         document.getElementById(imgID[i]).className="plant1";
         document.getElementById(li[i]).innerHTML="<b>take it</b>";
         tutorial4();
         water -=1;
         ready[i] = 10;
         setTimeout(function(){asd1(i)}, 25000);
         console.log(ready[i] , plant[i] ,  document.getElementById(imgID[i]).className, i);
         document.getElementById('water').innerHTML = water + "  water";
      }else{console.log("no water")}
    }else if (ready[i] === 2 && plant[i] === false) {
      if (water>0) {
        document.getElementById(imgID[i]).src='images/pinap.png';
        document.getElementById(imgID[i]).className="plant1";
        document.getElementById(li[i]).innerHTML="<b>take it</b>";
        ready[i] = 10;
        water -=1
        setTimeout(function(){asd2(i)}, 25000)
        document.getElementById('water').innerHTML = water + "  water";
      }else{console.log("no water")}
    }else if (ready[i] === 3 && plant[i] === false){
      if (water > 0) {
        document.getElementById(imgID[i]).src='images/nanab.png';
        document.getElementById(imgID[i]).className="plant1";
        document.getElementById(li[i]).innerHTML="<b>take it</b>";
        ready[i] = 10;
        water -=1
        setTimeout(function(){asd3(i)}, 25000);
        document.getElementById('water').innerHTML = water + "  water";
        console.log(ready[i] , plant[i]);
      }else{console.log("no water")}  
    }else if (ready[i] === 4 && plant[i] === false) {
      if (water > 0) {
        document.getElementById(imgID[i]).src='images/razzberry.png';
        document.getElementById(imgID[i]).className="plant1";
        document.getElementById(li[i]).innerHTML="<b>take it</b>";
        ready[i] = 10;
        water -=1;
        setTimeout(function(){asd4(i)}, 25000)
        document.getElementById('water').innerHTML = water + "  water";
        console.log(ready[i] , plant[i])
      }else{console.log("no water")}
    }else if (ready[i] === 5  && plant[i] === false) {
      document.getElementById(imgID[i]).src='images/0.png';
      document.getElementById(li[i]).innerHTML="<b>water</b>";
      tutorial4()
      rozanas1 += 1;
      ready[i] = 0;
      plant[i] = true;
       console.log(ready[i] , plant[i])
    }else if (ready[i] === 6 && plant[i] === false) {
      document.getElementById(imgID[i]).src='images/0.png';
      document.getElementById(li[i]).innerHTML="<b>water</b>";
      pinap1 += 1;
      ready[i] = 0;
      plant[i] = true;
       console.log(ready[i] , plant[i])
    }else if (ready[i] === 7 && plant[i] === false) {
      document.getElementById(imgID[i]).src='images/0.png';
      document.getElementById(li[i]).innerHTML="<b>water</b>";
      nanab1 += 1;
      ready[i] = 0;
      plant[i] = true;
       console.log(ready[i] , plant[i])
    }else if (ready[i] === 8 && plant[i] === false) {
      document.getElementById(imgID[i]).src='images/0.png';
      document.getElementById(li[i]).innerHTML="<b>water</b>";
      razzberry1 += 1;
      ready[i] = 0;
      plant[i] = true;
       console.log(ready[i] , plant[i])
    }else{
      console.log("ciot ne to");
    }
}
