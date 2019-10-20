// There are all "BUY" functions


function buyrazzberry(){
	if (money >= 50) {
	razzberry ++;
	money -= 50;
  document.getElementById('money').innerHTML = money;
	document.getElementById('razzberry').innerHTML = razzberry + "  razzberrys";
    }else{
    	console.log('You dont have enough Money')
    }
}
function buyrozanas(){
	if (money >= 20) {
	rozanas ++;
	money -= 20;
  document.getElementById('money').innerHTML = money;
	document.getElementById('rozanas').innerHTML = rozanas + "  rozanas";
     if (tutorial = 2) {
          tutorial5();
     }
  }else{
    	console.log('You dont have enough Money')
    }
}
function buynanab(){
   if (money >= 80) {
	nanab ++;
	money -= 80;
    document.getElementById('money').innerHTML = money;
	document.getElementById('nanab').innerHTML = nanab + "  nanab";
    }else{
    	console.log('You dont have enough Money')
    }
}
function buypinap(){
	if (money >= 40) {
	pinap ++;
	money -= 40;
  document.getElementById('money').innerHTML = money;
	document.getElementById('pinap').innerHTML = pinap + "  pinap";
    }else{
    	console.log('You dont have enough Money')
    }
}
function buywater(){
   if (wata1 === false) {
    setTimeout(wata, 2000)
    wata1 = true;
   }else{
    console.log('water create error')
   }
}
function wata(){
  water ++;
  wata1 = false;
  document.getElementById('water').innerHTML = water + "  water";
  tutorial7();
}