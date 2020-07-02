//fungsi menapilkan text bergelombang
     function textGelombang(nama){
     	//mengambil text
	     var hi = document.querySelector(".hi");
	     var txt = nama;
	     
	     //memecah text menjadi array perkarakter
	      var arr = txt.split("");	     
	     //looping array dam menampilkan nya menjadi tag span
	      for(var i = 0; i < arr.length; i++){
	     	 hi.innerHTML += "<span>"+arr[i]+"</span>";
	      }     
	      var kar = 0;
	     //memulai animasi
	      var anim = setInterval(function(){ 
	      // mengambil tag span    	
	     	var spn = document.querySelectorAll("span")[kar]; 
	     	//membberi class fade pada span
	     	   	
	     	spn.classList.add("fade");     		
	     	kar++;
	     	 //memberhentikan interval ketika span sudah tampil semua
	     	if(kar === arr.length){
	     		clearInterval(anim);
	     	} 
	     	//memberikan class animasi setelah 2detik 
	     	setTimeout(function(){
	     			spn.classList.add("animasi");
	     			spn.style.color="#00A8FF";
	     	},2000)   	
	     },100)
     } 