// var nama = prompt();

// // membuat objek elemen
// var hasil = document.getElementById("welcome");

// //menampilkan output ke elemen hasil-output
// hasil.innerHTML = "Aku Suka Javascript "+ nama;

	inputName();
	function inputName() {
		var Name = prompt('Haloo... Siapa Namamu?');
		var greet = "Selamat Datang di Gallery Smartphone, "+ Name;
		document.getElementById('name').style.color="red";
		document.getElementById('name').innerHTML = greet;
	}
