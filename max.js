a=55; b=555; c=5555;

function max(a,b,c) {               //function functionName(parameters參數) { code to be executed 要執行的程式 }
  if (a>b && a>c)                   // X a > b && c
    return a;
  if (b>a && b>c)
    return b;
  if (c>a && c>b)
    return c;
}

z = max(a,b,c);
console.log("max("+b+","+c+","+a+")="+z);

//desktop nqu$ node a.js max(555,5555,55)=5555
