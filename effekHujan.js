//effek hujan
     function effekHujan() {
     	 var box = document.querySelector(".container");
     
	      var crt = setInterval(function(){
	      //membuat elemen div
	      var div = document.createElement("div"); 
	      
	      //memberikan elemen class div    
	      div.classList.add('div'); 
	      
	      //membuat angka random untk posisis jatuh titik    
	      var sz = Math.round(Math.random()*99); 
	      var r = Math.round(Math.random()*255+1);
	      var g = Math.round(Math.random()*255+1);
	      var b = Math.round(Math.random()*255+1);
	      //memeberi style left untuk menentukan titik jatu     
	      div.style.left=sz+"%";
	    	  //div.style.background="rgb("+r+","+g+","+b+")"; 	      
	      //memasukan div tadi ke dalam container         
	      box.appendChild(div); 
	      
	      //menentukan waktu setelah beberapa detik titik hilang      
	      setTimeout(function(){
	        div.remove();
	      },1000)  	            
	     },10)
	     
     }  
     