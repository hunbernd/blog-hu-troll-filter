// ==UserScript==
// @name     Blog.hu user blocker
// @version  1
// @grant    none
// @include  http://*.blog.hu/*
// @include  https://*.blog.hu/*
// @updateURL https://github.com/hunbernd/blog-hu-troll-filter/raw/main/blog.hu%20troll%20filter.user.js
// @downloadURL https://github.com/hunbernd/blog-hu-troll-filter/raw/main/blog.hu%20troll%20filter.user.js
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
