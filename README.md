# proof-tree

Displays the proof tree on browser according to the given JSON file.

![Image of the proof tree](proof-tree-img.png)

## How to use
1. just copy files in src ( or clone this repository )
   - there should be `yourHtml.html`, `yourScript.js`, `yourStyle.css`, `proofTree.js` and `proofTree.css`.
1. Customize it!
   - Dont't touch `proofTree.js` and `proofTree.css`.
   - Customize `yourHtml.html`, `yourScript.js` and `yourStyle.css`
     - Basically, it just draws the given proof tree to the given DOM element.

### renderProofTree function
The only function you will use is the `renderProofTree ( yourDOMElement, yourJSON )`.
Here is a code from `yourScript.js`.

```javascript
window.addEventListener('DOMContentLoaded', ( event ) => {
    const yourDOMElement = document.getElementById( "proof-tree" );

    /* Rendering the proof tree MUST be done AFTER all style sheets (for styling the proof tree) are loaded */
    yourDOMElement.onclick = ( event ) =>
	renderProofTree( event.target, yourJSON ); 
});

const yourJSON =
      { /* Here comes yourJSONFile */ }

```

### JSON format
The proof tree must be given with the following JSON format.

```javascript
{'consequent': "Here comes the consequent",
 'rule': "Here is the rule to derive the consequent. Give an empty string if you dont't want to show the name",
 'antecedents': [ // Here comes the list of antecendents. you MUST give an empty list even there is no antecedents if you gave a rule name.
    {'consequent': "Hypothesis" } // If you ommit the rule, then it won't show the horizontal bar (and the antecedents) on the consequent.
    {'consequent': "Axiom",
     'rule': "" // If you want the bar to be drawn, you MUST give a rule name. Again, If you dont't want to show the name, just give an empty string.
     'antecedents': []
     }
}
```
Have a look at `yourScript.js` file for more detailed example.






