//Tutorial
function tutorial1(){
  if (tutorialend === false) {
  document.getElementById('tut1').style.display = "none";
  document.getElementById('ash1').style.display = "none";
  document.getElementById('tut2').style.display = "inline-block";
  document.getElementById('pika1').style.display = "inline-block";
 }else{}
}
function tutorial2(){
  if (tutorialend === false) {
  document.getElementById('tut2').style.display =  "none";
  document.getElementById('pika1').style.display =  "none";
  document.getElementById('tut3').style.display = "inline-block";
  document.getElementById('farmer1').style.display = "inline-block";
  }else{}
}
function tutorial3(){
  if (tutorialend === false) {
   document.getElementById('tutut1').style.display =  "none";
   document.getElementById('tutut2').style.display = "inline-block"
 }else{}
}
function tutorial4(){
 if (tutorial === 1) {
          document.getElementById('tutut2').style.display = "none";
          document.getElementById('tutut3').style.display = "inline-block"
          tutorial = 2;
          console.log('fuck off')
        }else if (tutorial === 4) {
          document.getElementById('tutut3').style.display = "none";
          document.getElementById('tutut2').style.display = "inline-block";
          document.getElementById('tut4').style.display = "none";
          document.getElementById('tut7').style.display = "inline-block";
          document.getElementById('resource').style.border = "0px "
          tutorial = 5;
          console.log('fuck You')
        }else if(tutorial === 5) {
          document.getElementById('tut9').style.display = "none";
          document.getElementById('tut10').style.display = "inline-block";
          tutorial = 6;
        }else if(tutorial === 6){
          document.getElementById('tutut2').style.display = "none";
          document.getElementById('tutut3').style.display = "inline-block";
          document.getElementById('tut8').style.display = "none";
          document.getElementById('tut11').style.display = "inline-block";
            tutorial = 200;
        }else{}
}
function tutorial5(){
  if (tutorialend === false) {
   document.getElementById('tut5').style.display = "none";
    document.getElementById('tut6').style.display = "inline-block";
    tutorial = 4;
  }else{}
}
function tutorial6(){
  if (tutorialend === false) {
  document.getElementById('tutut3').style.display = "inline-block";
  document.getElementById('tutut2').style.display = "none";
  document.getElementById('tut6').style.display = "none";
  document.getElementById('tut8').style.display = "inline-block";
  console.log('nr6')
  }else{}
}
function tutorial7(){
  if (tutorialend === false) {
  document.getElementById('tutut3').style.display = "none";
  document.getElementById('tutut2').style.display = "inline-block";
  document.getElementById('tut7').style.display = "none";
  document.getElementById('tut9').style.display = "inline-block";
  document.getElementById('tut8').style.display = "none";
}else{}
}
function tutorial8(){
  document.getElementById('Block').style.display = "none";
  document.getElementById('tutut3').style.display = "none";
  tutorialend = true;
}
