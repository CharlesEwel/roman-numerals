$(document).ready(function() {
  $("form#romannumeral").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#numberinput").val());
    if(numberInput>0 && 4000>numberInput){
      var numeralOutput = numberToNumeral(numberInput);
      $("#result").text(numeralOutput);
    } else {
      alert("Please enter a number under 4,000");
    }
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
    var four = /IIII/
    numeralString=numeralString.replace(four,"IV");
    var forty = /XXXX/
    numeralString=numeralString.replace(forty,"XL");
    var fourHundred = /CCCC/
    numeralString=numeralString.replace(fourHundred,"CD");
    var nine = /VIV/
    numeralString=numeralString.replace(nine,"IX");
    var ninety = /LXL/
    numeralString=numeralString.replace(ninety,"XC");
    var nineHundred = /DCD/
    numeralString=numeralString.replace(nineHundred,"CM");
    return numeralString;
  }
});
