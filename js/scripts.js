$(document).ready(function() {
  $("form#romannumeral").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#numberinput").val());
    if(numberInput>0 && 4000>numberInput){
      var numeralOutput = numberToNumeral(numberInput);
      $("#numeralResult").text(numeralOutput);
    } else {
      alert("Please enter a number under 4,000");
    }
  });

  $("form#cryptosquare").submit(function(event) {
    event.preventDefault();
    var phraseInput = $("input#phraseinput").val();
    var codeOutput = encodeSquare(phraseInput);
    $("#codeOutput").text(codeOutput);
  });

  $("button#binaryClick").click(function(event) {
    event.preventDefault();
    var binaryInput = $("input#baseinput").val();
    if (invalidBinary.test(binaryInput) === true) {
      alert("Please enter binary numbers only")
    } else {
      var convertedOutput = binaryConvert(binaryInput);
      $("#baseOutput").text(convertedOutput);
    }
  });

  $("button#trinaryClick").click(function(event) {
    event.preventDefault();
    var trinaryInput = $("input#baseinput").val();
    if (invalidTrinary.test(trinaryInput) === true) {
      alert("Please enter trinary numbers only")
    } else {
      var convertedOutput = trinaryConvert(trinaryInput);
      $("#baseOutput").text(convertedOutput);
    }
  });

  $("button#hexadecimalClick").click(function(event) {
    event.preventDefault();
    var hexadecimalInput = $("input#baseinput").val();
    var capitalHexadecimalInput=hexadecimalInput.toUpperCase();
    if (invalidHexadecimal.test(capitalHexadecimalInput) === true) {
      alert ("Please enter hexadecimal numbers only")
    } else {
      var convertedOutput = hexadecimalConvert(capitalHexadecimalInput);
      $("#baseOutput").text(convertedOutput);
    }
  });

  var encodeSquare = function(phrase){
    var spaces = /(\s)/ig
    var punctuation = /(\W)/ig
    var groupOfFive = /(\w{5})/ig
    phrase=phrase.replace(spaces, "");
    phrase=phrase.replace(punctuation, "");
    phrase=phrase.toLowerCase();
    var squareSize=Math.ceil(Math.sqrt(phrase.length));
    console.log(squareSize);
    //var test = /(\w{squareSize})/ig
    var phraseArray=phrase.split("");
    var encodedPhrase="";
    for(column=1; column<=squareSize; column++){
      for(row=1; (row<=squareSize)&& ((column-1+(squareSize*(row-1)))<=(phraseArray.length-1)); row++){
        encodedPhrase=encodedPhrase.concat(phraseArray[column-1+(squareSize*(row-1))])
      }
      console.log(encodedPhrase)
    }
    encodedPhrase=encodedPhrase.replace(groupOfFive, "$1 ")
    //var encodedPhrase=phrase.replace(test, "test");
    return encodedPhrase
  }

  var numberToNumeral=function(num){
    var numeralString="";
      // for(i = 1; i<=num/1000; i=1){
      //   numeralString=numeralString.concat("M");
      //   num-=1000;
      // }
      // for(i = 1; i<=num/500; i=1){
      //   numeralString=numeralString.concat("D");
      //   num-=500;
      // }
      // for(i = 1; i<=num/100; i=1){
      //   numeralString=numeralString.concat("C");
      //   num-=100;
      // }
      // for(i = 1; i<=num/50; i=1){
      //   numeralString=numeralString.concat("L");
      //   num-=50;
      // }
      // for(i = 1; i<=num/10; i=1){
      //   numeralString=numeralString.concat("X");
      //   num-=10;
      // }
      // for(i = 1; i<=num/5; i=1){
      //   numeralString=numeralString.concat("V");
      //   num-=5;
      // }
    for(i = 1; i<=num; i++){
      numeralString=numeralString.concat("I");
    }
    var five = /IIIII/g
    numeralString=numeralString.replace(five,"V");
    var ten = /VV/g
    numeralString=numeralString.replace(ten,"X");
    var fifty = /XXXXX/g
    numeralString=numeralString.replace(fifty,"L");
    var oneHundred = /LL/g
    numeralString=numeralString.replace(oneHundred,"C");
    var fiveHundred = /CCCCC/g
    numeralString=numeralString.replace(fiveHundred,"D");
    var oneThousand = /DD/g
    numeralString=numeralString.replace(oneThousand,"M");
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

  var binaryConvert = function(binary) {
    var binaryArray = binary.split("");
    var convertedOutput = 0;
    for (i = 0; i < binaryArray.length; i++) {
      convertedOutput += Math.pow(2,binaryArray.length-i-1)*binaryArray[i];
    }
    return convertedOutput;
  }

  var trinaryConvert = function(trinary) {
    var trinaryArray = trinary.split("");
    var convertedOutput = 0;
    for (i = 0; i < trinaryArray.length; i++) {
      convertedOutput += Math.pow(3,trinaryArray.length-i-1)*trinaryArray[i];
    }
    return convertedOutput;
  }

  var hexadecimalConvert = function(hexadecimal) {
    var hexadecimalArray = hexadecimal.split("");
    var numericHexadecimalArray = hexadecimalArray.map(function(hex) {
      if (hex ==="A") {
        return 10;
      } else if (hex === "B"){
        return 11;
      } else if (hex === "C"){
        return 12;
      } else if (hex === "D"){
        return 13;
      } else if (hex === "E"){
        return 14;
      } else if (hex === "F"){
        return 15;
      } else {
        return hex;
      }
    });
    var convertedOutput = 0;
    for (i = 0; i < numericHexadecimalArray.length; i++) {
      convertedOutput += Math.pow(16,numericHexadecimalArray.length-i-1)*numericHexadecimalArray[i];
    }
    return convertedOutput;
  }

    var invalidBinary = /[^01]/;
    var invalidTrinary = /[^012]/;
    var invalidHexadecimal = /[^0-9A-F]/;
});
