// There are all the SELL functions

function sellrozanas(){
  if (rozanas1 >0 ) {
    rozanas1 --;
    money += 30;
    document.getElementById('money').innerHTML = money;
    tutorial8();
  }else{
    console.log('nothing to sell')
  }
}

function sellpinap(){
  if (pinap1 > 0){
    pinap1 --;
    money += 60; 
    document.getElementById('money').innerHTML = money;
  }else{
    console.log('nothing to sell')
  }
}
function sellrazzberry(){
  if (razzberry1 >0) {
    razzberry1 --;
    money += 60;
    document.getElementById('money').innerHTML = money;
  }else{
    console.log('nothing to sell')
  }
}
function sellnanab(){
  if (nanab1 > 0) {
    nanab1 --;
    money +=120;
    document.getElementById('money').innerHTML = money;
  }else{
    console.log('nothing to sell')
  }
}
function sellwater(){
  if (water>0){
    water --;
    money +=7;
    document.getElementById('money').innerHTML = money;
  }else{
    console.log('nothing to sell')
  }
}
