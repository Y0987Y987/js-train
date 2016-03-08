function max(a,b,c) {               //function functionName(parameters參數) { code to be executed 要執行的程式 }
  if (a>b && a>c)                   // X a > b && c
    return a;
  if (b>a && b>c)
    return b;
  if (c>a && c>b)
    return c;
}

m = max(55,555,5555);
console.log("max(55,555,5555)="+m);
