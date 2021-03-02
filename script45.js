function calc() {
  var amt = document.getElementById('amt').value;
  var option = document.getElementById("opt").value;
  var share = document.getElementById('shr').value;


  var hp;

  if (option == "1") {
    hp = amt * (20 / 100);





  } else if (option == "2") {
    hp = amt * (10 / 100);



  } else if (option == "3") {
    hp = amt * (5 / 100);



  }
  var rslt = hp / share;
  document.getElementById('out2').innerHTML =rslt;
  document.getElementById('out1').innerHTML ="TIP AMOUNT RS";




}
