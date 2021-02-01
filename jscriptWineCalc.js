// JavaScript Document
		function validateBtlForm() {
			var btlCost = document.getElementById("btl_cost").value;
			var btlCostOutput = btlCost / document.getElementById("btl_pc").value;
			document.getElementById("price").value = "$ " + btlCostOutput.toFixed(0);
		}

		function btlCostAction(){
			var btlPC = eval(document.getElementById("btl_pc").value * 100);
			
				if(document.getElementById("btlSelPC").selected){
					document.getElementById("btl_pc_text").value = btlPC.toFixed(1) + "%";
				} else if(document.getElementById("btlSelMarkup").selected){
					document.getElementById("btl_pc_text").value = eval(100/ btlPC).toFixed(2) + "x";
				}
			validateBtlForm();
		}

		function validateGlsForm(){
			var pourSize = document.getElementById("gls_portion").value;
			var btlSize = document.getElementById("gls_btl_size").value;
			var btlCost = document.getElementById("gls_btl_cost").value;
			var glsPC = document.getElementById("gls_pc").value;
			var glsPourBtl = eval(btlSize*0.033814/pourSize);
			var glsPourCost = eval(btlCost / glsPourBtl);
			var glsPrice = eval(glsPourCost / glsPC);
			var glsRev = eval(glsPrice * glsPourBtl);
			
			document.getElementById("gls_ppb").value = glsPourBtl.toFixed(2);
			document.getElementById("gls_cpp").value = "$ " + glsPourCost.toFixed(2);
			document.getElementById("gls_price").value = "$ " + glsPrice.toFixed(0);
			document.getElementById("gls_rev").value = "$ " + glsRev.toFixed(0);
			document.getElementById("gls_profit").value = "$ " + eval(glsRev - btlCost).toFixed(0);

		}
		
		function glsCostAction(){
			var glsPC = eval(document.getElementById("gls_pc").value * 100);
			
				if(document.getElementById("glsSelPC").selected){
					document.getElementById("gls_pc_text").value = glsPC.toFixed(1) + "%";
				} else if(document.getElementById("glsSelMarkup").selected){
					document.getElementById("gls_pc_text").value = eval(100/ glsPC).toFixed(2) + "x";
				}
			validateGlsForm()
		}