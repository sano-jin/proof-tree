"use strict";
const tree = {'consequent': "hoge1",
	      'rule': "num", 
	      "antecedents": [
		  {'consequent': "hoge2", 
		   'rule': "num", 
		   "antecedents": []},
		  {'consequent': "hoge hige -> fuga hoge fuge3", 
		   'rule': "num", 
		   "antecedents": [
		       {'consequent': "hoge4"},
		       {'consequent': "hoge5", 
			'rule': "num", 
			"antecedents": []}
		   ]},
		  {'consequent': "hoge6",
		   'rule': "num",
		   "antecedents": [
		       {'consequent': "hoge7",
			'rule': "num", 
			"antecedents": [
			    {'consequent': "hoge2", 
			     'rule': "num", 
			     "antecedents": []},
			    {'consequent': "hoge3", 
			     'rule': "num", 
			     "antecedents": [
				 {'consequent': "hoge4"},
				 {'consequent': "hoge5", 
				  'rule': "num", 
				  "antecedents": []}
		  	     ]}
			]},
		       {'consequent': "hoge8",
			'rule': "num",
			"antecedents": [
			    {'consequent': "hoge9"},
			    {'consequent': "hoge10", 
			     'rule': "num", 
			     "antecedents": []}
			]}
		   ]}
	      ]};

const createDiv = ( className ) => {
    const div = document.createElement("div");
    if ( className ) div.classList.add( className );
    return div;
}

const createTextDiv = ( str, className ) => {
    const div = createDiv( className );
    div.appendChild( document.createTextNode( str ) );
    return div;
}

const getNode = ( json ) => { 
    const nodeDiv = createDiv( "proof-tree-node" );
    const consequentDiv = createTextDiv( json.consequent, "proof-tree-consequent" );
    if ( json.rule ) {
	const antecedentsDiv = createDiv( "proof-tree-antecedents" );
	json.antecedents
	    .map( getNode )
	    .flatMap(e => [createDiv( "proof-tree-padding" ), e]).slice(1)
	    .map( aDiv => antecedentsDiv.appendChild( aDiv ) );
	const bar = createDiv( "proof-tree-bar" );
	bar.appendChild( createTextDiv ( json.rule, "proof-tree-rule" ) );
	[ antecedentsDiv, 
	  bar
	].map( child => nodeDiv.appendChild( child ) );
    }
    nodeDiv.appendChild( consequentDiv );
    return nodeDiv; 
}

window.onload = function(){
    const rootDiv = document.getElementById( "proof-tree" );
    rootDiv.removeChild(rootDiv.childNodes[0]);  
    const root = rootDiv.appendChild( getNode( tree ) );
    render( root );
}


const render = ( rootDiv ) => {
    const treeWalker = document.createTreeWalker(
	rootDiv,
	NodeFilter.SHOW_ELEMENT,
	{ acceptNode: ( node ) => {
	    if ( node.classList.contains( "proof-tree-node" ) )
		return NodeFilter.FILTER_ACCEPT;
	    else
		return NodeFilter.FILTER_SKIP;
	}},
	false
    );

    let currentNode = treeWalker.currentNode;
    while( currentNode ) {
	setBarAndRule( currentNode );
	currentNode = treeWalker.nextNode();
    }
}

const setBarAndRule = ( node ) => {
    if ( node.children.length === 3 ) {
	const consequent = node.children[ 2 ];
	const bar = node.children[ 1 ];
	const antecedents = node.children[ 0 ];
	if ( antecedents.children.length === 0 ) return;
	const left = antecedents.firstChild.lastChild;
	const right = antecedents.lastChild.lastChild;
	const leftOffset = Math.min( left.offsetLeft, consequent.offsetLeft );
	bar.style.left = leftOffset - 10 + "px";
	const rightOffset = Math.max( antecedents.lastChild.offsetLeft + right.offsetLeft + right.offsetWidth,
				      consequent.offsetLeft + consequent.offsetWidth );
	const width = rightOffset - leftOffset;
	bar.style.width = width + 20 + "px";	
    }
}


			       
