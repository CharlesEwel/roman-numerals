$(document).ready(function() {
  $("form#romannumeral").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#numberinput").val());
    var numeralOutput = numberToNumeral(numberInput);
    $("#result").text(numeralOutput);
  });

  var numberToNumeral=function(num){
    var numeralString="";
    for(i = 1; i<=num/1000; i=1){
      numeralString=numeralString.concat("M");
      num-=1000;
    }
    for(i = 1; i<=num/500; i=1){
      numeralString=numeralString.concat("D");
      num-=500;
    }
    for(i = 1; i<=num/100; i=1){
      numeralString=numeralString.concat("C");
      num-=100;
    }
    for(i = 1; i<=num/50; i=1){
      numeralString=numeralString.concat("L");
      num-=50;
    }
    for(i = 1; i<=num/10; i=1){
      numeralString=numeralString.concat("X");
      num-=10;
    }
    for(i = 1; i<=num/5; i=1){
      numeralString=numeralString.concat("V");
      num-=5;
    }
    for(i = 1; i<=num; i=1){
      numeralString=numeralString.concat("I");
      num-=1;
    }
    return numeralString;
  }
});
