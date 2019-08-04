angular.module('MyApp')
	.directive('dropexcel', ['Food', function (Food) {
	    return {
	        scope: { },
	        link: function(scope, element) {

	        	/* set up drag-and-drop event */
				function handleDrop(e) {
					console.log("start loading")
					// read excel worksheet
					e.stopPropagation();
					e.preventDefault();
					var alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z AA AB AC AD AE AF AG AH AI AJ AK AL AM AN AO AP AQ AR AS AT AU".split(" ");
					var food = []
					var workbook, worksheet, first_sheet_name;
					var files = e.dataTransfer.files;
					var i = 0;
					var f = files[i];
				    var reader = new FileReader();
				    var name = f.name;
				    reader.onload = function(e) {
				      	var data = e.target.result;

						/* if binary string, read with type 'binary' */
						workbook = XLSX.read(data, {type: 'binary'});
						/* get the first sheet name */
						first_sheet_name = workbook.SheetNames[0];
						/* Get worksheet */
						worksheet = workbook.Sheets[first_sheet_name];

				    	// save worksheet data to database
				    	var B2 = worksheet['B2'].v
				    	var worksheet_length = Object.keys(worksheet).length;			    	
				    	// check if B2 is Shrt_Desc
				    	if (B2 == 'Shrt_Desc') {

				    		for(var i=3; i<(worksheet_length+1)/47+1; i++) {

								// console.log(i);

								var singleFood = []
								var j = 0
								alphabet.forEach(function(element) {
									/* desired address */
									var address_of_cell = element+i;
									// console.log(address_of_cell);
									/* Find desired cell */
									var desired_cell = worksheet[address_of_cell];
									// console.log(desired_cell);
									/* Get the value */
									var desired_value;
									if (desired_cell) {
										desired_value = desired_cell.v
									};
									
									// console.log(desired_value);
									singleFood[j] = desired_value;
									j++
								})

								food[i-3] = {
									NDB_No: singleFood[0],
									Shrt_Desc: singleFood[1],
									Shrt_Desc_zh_CN: singleFood[2],
									Water: singleFood[3],
									Energ_Kcal: singleFood[4],
									Protein: singleFood[5],
									Lipid_Tot: singleFood[6],
									Ash: singleFood[7],
									Carbohydrt: singleFood[8],
									Fiber_TD: singleFood[9],
									Sugar_Tot: singleFood[10],
									Calcium: singleFood[11],
									Iron: singleFood[12],
									Magnesium: singleFood[13],
									Phosphorus: singleFood[14],
									Potassium: singleFood[15],
									Sodium: singleFood[16],
									Zinc: singleFood[17],
									Copper: singleFood[18],
									Manganese: singleFood[19],
									Selenium: singleFood[20],
									Vit_C: singleFood[21],
									Thiamin: singleFood[22],
									Riboflavin: singleFood[23],
									Niacin: singleFood[24],
									Panto_Acid: singleFood[25],
									Vit_B6: singleFood[26],
									Folate_Tot: singleFood[27],
									Folic_Acid: singleFood[28],
									Food_Folate: singleFood[29],
									Choline_Tot: singleFood[30],
									Vit_B12: singleFood[31],
									Vit_A_IU: singleFood[32],
									Vit_A_RAE: singleFood[33],
									Retinol: singleFood[34],
									Alpha_Carot: singleFood[35],
									Beta_Carot: singleFood[36],
									Lycopene: singleFood[37],
									Lut_Zea: singleFood[38],
									Vit_E: singleFood[39],
									Vit_D_mcg: singleFood[40],
									Vit_D_IU: singleFood[41],
									Vit_K: singleFood[42],
									FA_Sat: singleFood[43],
									FA_Mono: singleFood[44],
									FA_Poly: singleFood[45],
									Cholestrl: singleFood[46]
								}
								// console.log(food[i-3])

								Food.createBatch(food[i-3]);	
							}

				    	} else {
				    		console.log("excle format wrong")
				    	}

			    	};
			    	reader.readAsBinaryString(f);			  	

				}

	            var el = element[0];
	            el.addEventListener('drop',handleDrop,false);
	        }
	    }
	}]);