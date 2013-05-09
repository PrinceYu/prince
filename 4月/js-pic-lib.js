/* for js-pic-lib.html*/
function showPic(whichpic){
	var source = whichpic.getAttribute("href");
	var text = whichpic.getAttribute("title");
	var placeholder = document.getElementById('placeholder');
	var description = document.getElementById('description');
	placeholder.setAttribute("src",source);
	placeholder.setAttribute("title",text);
	description.firstChild.nodeValue = text;
}
function popUp(winURL){
	window.open(winURL,"new","width=320,height=480")
}
function prepareGallery(){
	if(!document.getElementsByTagName)return false;
	if(!document.getElementById)return false;
	if(!document.getElementById('ulist'))return false;
	var ul = document.getElementById('ulist');
	var a = ul.getElementsByTagName('a');
	for (var i = 0; i < a.length; i++) {
		a[i].onclick = function(){
			showPic(this);
			return false;
		};
	};
}
function dada(){
	//a标签
	var aDada = document.getElementById('athree');
	aDada.onclick = function() {
	//popUp('http://snowinmay.net/');
	popUp(this.getAttribute('href'));
	return false;
	}
}

/*window.onload = function(){
	prepareGallery();
	dada();
}*/

function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}
	else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
addLoadEvent(prepareGallery);
addLoadEvent(dada);