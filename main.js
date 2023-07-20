var a=[10,20,30,56,78];
document.write("a=[10,20,30,56,78]"+"<br>"+"<br>");
var b=[65,78,34,67];
document.write("b=[65,78,34,67]"+"<br>"+"<br>");
for(let i=0;i<b.length;i++)
{
	a.push(b[i]);
}
console.log(a);
document.write("combine array using loop"+"<br>"+"<br>"+"a="+a);