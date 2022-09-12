var inpcolor=document.getElementById("color");
var add=document.getElementById("coladd");
add.innerText="addcolor";

add.addEventListener("click",function(){
	var clrname=inpcolor.value;
	inpcolor.style.color=clrname;
	
})

var url=document.getElementById("inp");
var btn=document.getElementById("urladd");
btn.innerText="click";


btn.addEventListener("click",function(){
	var src=url.value;
	var Addvalue=document.getElementById("addval");
	for(var i=0;i<src.length;i++){
		var number=src.match(/[0-9]+/g);
		var str=src.match(/[a-zA-Z]+/g);
		var spl=src.match(/["@","&","/","%",":"]+/g);
	}
	console.log(number);
	console.log(str);
	console.log(spl);
	var list1=document.createElement("h3");
	var list2=document.createElement("h3");
	var list3=document.createElement("h3");
	Addvalue.appendChild(list1);
	Addvalue.appendChild(list2);
	Addvalue.appendChild(list3);
	list1.innerText=number;
	list2.innerText=str;
	list3.innerText=spl;
})