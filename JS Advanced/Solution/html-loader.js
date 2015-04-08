function plovdivMapFix () {
	var iframe = document.getElementById('tabs-2').getElementsByTagName('iframe')[0];
	var src = iframe.src;
	iframe.src = "";
	iframe.src = src;
}

function sofiaMapFix () {

	var iframe = document.getElementById('tabs-1').getElementsByTagName('iframe')[0];
	var src = iframe.src;
	iframe.src = "";
	iframe.src = src;

	 iframe = document.getElementById('tabs-1').getElementsByTagName('iframe')[1];
	 src = iframe.src;
	iframe.src = "";
	iframe.src = src;
}



document.querySelector("[href=\\#tabs-2]").addEventListener('click', plovdivMapFix);
document.querySelector("[href=\\#tabs-1]").addEventListener('click', sofiaMapFix);


