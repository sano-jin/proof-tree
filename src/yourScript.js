"use strict";
window.addEventListener('DOMContentLoaded', ( event ) => {
    const yourDOMElement = document.getElementById( "proof-tree" ); // <- custamize here
    renderProofTree( yourDOMElement, yourJSON );
});

const yourJSON =
      {'consequent': "hoge1",
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
		 'rule': "", 
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

