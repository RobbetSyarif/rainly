//user memasukan text
    var ulg = true;
    var nama = prompt("Masukan Nama/Teks");
    
    while(ulg)	{
				  if(nama.includes("anjing") || nama.includes("babi") || nama.includes("tai") || nama.includes("meme") || nama.includes("kontol")){
					alert("kata tidak pantas");
					nama = prompt("Harap Masukan Teks / kata yang pantas");
				}else{
					ulg = false;
				}
			}
			
			if(nama.length > 15 && nama.length < 22){
				$(".hi").css("font-size","40px");
			}else if(nama.length > 22 && nama.length < 30){
				alert("Teks anda terlalu panjang mungkin ukuran huruf akan kecil");
				$(".hi").css("font-size","20px");
			}
			$(".hi").hide();
			//membuat tombol mulai
			setTimeout(function(){
				var par = document.querySelector(".cntn");
				var btn = document.createElement("button");
				var tbtn= document.createTextNode("M U L A I");
				
				btn.appendChild(tbtn);				
				btn.classList.add("btn");
				par.appendChild(btn);
				
				//ketika button mulai di klik
				$(".btn").on("click",function(){
					$(this).css("transform","scale(-0.5)");
					setTimeout(function(){
						$(".btn").remove();
					},300);		
					setTimeout(function(){
							 //menampilkan huruf	
						$(".hi").show();
			    //jeda animasi selama 1 detik dan hujan 3 detik				
						setTimeout(function(){
							textGelombang(nama);
							setTimeout(effekHujan,3000);
							$(".container").css("background","#6F6F6F");
						},1500)
					},700)
				})						 							
			},500)
			//cek jumlah karakter text yang user masukan
			