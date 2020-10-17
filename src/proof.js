"use strict";
const tree = {'consequent': "hoge"
	      , 'rule': "num"
	      , "antecedents": [
		  {'consequent': "hoge"
		   , 'rule': "num"
		   , "antecedents": []}, 
		  {'consequent': "hoge"
		   , 'rule': "num"
		   , "antecedents": [
		       {'consequent': "hoge"},
		       {'consequent': "hoge"
			, 'rule': "num"
			, "antecedents": []}
		   ]},
		  {'consequent': "hoge"
		   , 'rule': "num"
		   , "antecedents": [
		       {'consequent': "hoge"
			, 'rule': "num"
			, "antecedents": []}, 
		       {'consequent': "hoge"
			, 'rule': "num"
			, "antecedents": [
			    {'consequent': "hoge"},
			    {'consequent': "hoge"
			     , 'rule': "num"
			     , "antecedents": []}
			]}
		   ]}
	      ]};

const h = 1;
console.log("hello");
console.log(tree);


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
    
function getNode ( json ) { 
    const nodeDiv = createDiv( "proof-tree-node" );
    const consequentDiv = createTextDiv( json.consequent, "proof-tree-consequent" );
    if ( json.rule ) {
	const antecedentsDiv = createDiv( "proof-tree-antecedents" );
	json.antecedents
	    .map(a => getNode( a ))
	    .map(aDiv => antecedentsDiv.appendChild( aDiv ) );
	nodeDiv.appendChild( antecedentsDiv );
	nodeDiv.appendChild( createDiv( "proof-tree-bar" ) );
	nodeDiv.appendChild( createTextDiv ( json.rule, "proof-tree-rule" ) );
    }
    nodeDiv.appendChild( consequentDiv );
    return nodeDiv; 
}

window.onload = function(){
    const rootDiv = document.getElementById( "proof-tree" );
    console.log( rootDiv );
    rootDiv.removeChild(rootDiv.childNodes[0]);  
    rootDiv.appendChild( getNode( tree ) );
    console.log( rootDiv.offsetHeight );
}

			       
