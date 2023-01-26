

	
			var data = 0;

			
			document.getElementById("counting").innerText = data;
           let incr =  document.getElementById("increment");
			
                incr.addEventListener('click',()=>{
                data = data + 1;
                color();
				document.getElementById("counting").innerText = data;
                })

			
            
			function decrement() {
				data = data - 1;
                color();
				document.getElementById("counting").innerText = data;

			}
            function reset(){
                data = 0;
                document.getElementById("counting").innerText = data;
            }


            function color(){
                if(data > 0){
				document.getElementById("counting").style.color ="green" ;
                }else if(data < 0){
				document.getElementById("counting").style.color ="red" ;
                }else{
				document.getElementById("counting").style.color ="black" ;
                }
            }