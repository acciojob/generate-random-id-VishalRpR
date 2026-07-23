function makeid(l) {
  // write your code here
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let str=""
	for(let i=0;i<l;i++){
      const index=Math.floor(Math.random*chars.length)
		str+=chars[index]
	}

	return str;
}

// // Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));
