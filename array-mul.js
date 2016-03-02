function mul(x,y) {
  r=[];
  for (i=0;i<b.length;i++)
  r[i]=a[i]*b[i]
  return r;
}

a=[1,2,3,4];
b=[4,3,2,1,3];

c=mul(a,b);
console.log(c);

//result NQU-192-168-61-162:desktop mac043$ node e.js [ 4, 6, 6, 4, NaN ]
