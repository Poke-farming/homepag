function Hakuna(i){
  ready[i] = 1;
  plant[i] = false;
   document.getElementById(imgID[i]).classList.remove('plant1')
   document.getElementById(imgID[i]).className="img ";
   console.log("Hakuna", plant[i], ready[i],  document.getElementById(imgID[i]).className, i)
}




function plantrozanas(i){
   if (plant[i] === true && rozanas > 0) {
      document.getElementById(imgID[i]).src='images/rozana-grass.png';
      document.getElementById(imgID[i]).className='plant1';
      setTimeout(function(){Hakuna(i)}, 25000)
      rozanas --;
      document.getElementById('rozanas').innerHTML = rozanas + "  rozanas";
    if (tutorial < 10) {
      tutorial6();
    }else{}
   }
   else{
    console.log('the ground is not ploughded');
   }
}



function toma(i){
   ready[i] = 2;
   document.getElementById(imgID[i]).classList.remove('plant2')
   document.getElementById(imgID[i]).className="img ";
}



function plantpinap(i){
   if (plant[i] === true && pinap>0) {
    document.getElementById(imgID[i]).src='images/pinap-grass.png';
      document.getElementById(imgID[i]).className="plant2";
    plant[i] = false;
      pinap --;
      document.getElementById('pinap').innerHTML = pinap + "  pinap";
      setTimeout(function(){toma(i)}, 25000)
   }
   else{
    console.log('the ground is not ploughd')
   }
}





function straw(i){
   ready[i] = 3;
   document.getElementById(imgID[i]).classList.remove('plant4')
   document.getElementById(imgID[i]).className="img ";
}





function plantnanab(i){
   if (plant[i] === true && nanab>0) {
    document.getElementById(imgID[i]).src='images/nanab-grass.png';
      document.getElementById(imgID[i]).className="plant4";
      plant[i] = false;
      nanab --;
      document.getElementById('nanab').innerHTML = nanab + "  nanab";
      setTimeout(function(){straw(i)}, 25000)
   }
   else{
    console.log('the ground is not ploughd')
   }
}





function pump(i){
   ready[i] = 4;
   document.getElementById(imgID[i]).classList.remove('plant3')
   document.getElementById(imgID[i]).className="img ";
}






function plantrazzberry(i){
   if (plant[i] === true && razzberry>0) {
    document.getElementById(imgID[i]).src='images/razzberry-grass.png';
      document.getElementById(imgID[i]).className="plant3";
      plant[i] = false;
      razzberry --;
      document.getElementById('razzberry').innerHTML = razzberry + "  razzberry";
      setTimeout(function(){pump(i)}, 25000)
   }
   else{
    console.log('the ground is not ploughd')
   }
}
    