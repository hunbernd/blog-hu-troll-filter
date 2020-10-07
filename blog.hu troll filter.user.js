// ==UserScript==
// @name     Blog.hu user blocker
// @version  1
// @grant    none
// @include  http://*.blog.hu/*
// @include  https://*.blog.hu/*
// ==/UserScript==

var blockedusers = ["math0", "kvadrillio", "hasdrubal barcas"];

var toberemoved = [];
var comments = document.getElementsByClassName("commentAuthor");
var c;
for(c of comments){
	if(blockedusers.includes(c.innerText.toLowerCase().trim())){
		toberemoved.push(c);  
  }
}

for(c of toberemoved){
	c.parentElement.parentElement.remove();
}
