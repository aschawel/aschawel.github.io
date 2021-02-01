// JavaScript Document
var arrVol = document.getElementsByName('vol');
var arrRatio = document.getElementsByName('ratio');
var arrABV = document.getElementsByName('abv');
var arrScaled = document.getElementsByName('scaled');
var tot = 0;
var totScaled = 0;
var totABV = 0;
		
		function validateVolume() {
			tot = 0;
			clearArray();
			for (var i = 0; i < arrVol.length; i++){
				if(parseFloat(arrVol[i].value))
					tot += parseFloat(arrVol[i].value);
					validateRatio();
					validateScaled();
					calcABV();
			}
			
			document.getElementById("ttl_vol").value = tot;
			document.getElementById("volPerPortion").value = tot;
			document.getElementById("scaledVol").value = tot * document.getElementById("numPortions").value + " oz";
		}
		
		function validateRatio(){
			for (var i = 0; i < arrVol.length; i++){
				if(parseFloat(arrVol[i].value))
					arrRatio[i].value = eval(arrVol[i].value / tot).toFixed(2);
			}
		}
		
		function validateScaled(){
			totScaled = 0;
			for (var i = 0; i < arrVol.length; i++){
				if(parseFloat(arrVol[i].value))	
					totScaled += parseFloat(arrScaled[i].value);
					arrScaled[i].value = eval(arrVol[i].value * document.getElementById("numPortions").value).toFixed(2);
					document.getElementById("ttl_scaled").value = totScaled;
					clearArray();
			}
		}
		
		function calcABV(){
			totABV = 0;
			for (var i = 0; i < arrVol.length; i++){
				if(parseFloat(arrVol[i].value))
					totABV += parseFloat(arrABV[i].value * arrRatio[i].value);
				document.getElementById("ttl_ABV").value = totABV
				clearArray();
			};
		}
		
		function clearArray(){
			for (var i = 0; i < arrVol.length; i++){
				if(arrVol[i].value ===''){
					arrRatio[i].value = '';
					arrScaled[i].value = '';
					arrABV[i].value = '';
				};
			};
		}