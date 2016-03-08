function s(n) {
	if (n===1) return 1;
	var sn = s(n-1)+n;
	console.log("s(%d)=%d", n, sn);
	return sn;
}

console.log("s(10)=%d", s(10));
