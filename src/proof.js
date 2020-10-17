"use strict";
const tree = {'str': "hoge"
	      , 'trans': "num"
	      , "children": [
		  {'str': "hoge"
		   , 'trans': "num"
		   , "children": []}, 
		  {'str': "hoge"
		   , 'trans': "num"
		   , "children": [
		       {'str': "hoge"
			, 'trans': "num"
			, "children": []},
		       {'str': "hoge"
			, 'trans': "num"
			, "children": []}
		   ]},
		  {'str': "hoge"
		   , 'trans': "num"
		   , "children": []}
	      ]};

const h = 1;
console.log("hello");
console.log(tree);


const createDiv = () => document.createElement("div"); 

const node = document.createElement("span"); 
console.log( node );
const strTextNode = document.createTextNode("hgehogehoge"); 
node.appendChild( strTextNode );
console.log( node.scrollWidth );


/*
function getNodeAndWidth ( str, trans, children ) { 
    const nodeDiv = createDiv;
    const strDiv = createDiv;
    const transDiv = createDiv;
    // const childrenDiv = createDiv;
    const strTextNode = document.createTextNode( str ); 
    const transTextNode = document.createTextNode( trans ); 
    
    
    nodeDiv.appendChild(newContent);
    return [ newDiv, width ];
  const currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}
*/
