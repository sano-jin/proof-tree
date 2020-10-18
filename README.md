# proof-tree

Draws proof tree according to given JSON file.

# How to use
1. just copy files in src ( or clone this repository )
   - there should be `index.html`, `yourScript.js`, `yourStyle.css`, `proofTree.js` and `proofTree.css`.
1. Customize it!
   - Dont't touch `proofTree.js` and `proofTree.css`.
   - Customize `index.html`, `yourScript.js` and `yourStyle.css`

## JSON format
The proof tree must be given with json file.
Here is the format.

```
{'consequent': "Here comes the consequent",
 'rule': "Here is the rule to derive the consequent",
 'antecedents': [ // Here comes the antecendents. you MUST give an empty list even this is an axiom if you gave a rule name.
    {'consequent': "Hypothesis" } // If you ommit the rule, then it won't show the horizontal bar (and antecedents) on the conqecuent.
    {'consequent': "Axiom",
     'rule': "" // If you want the bar to be drawn, you must give a rule name. If you dont't want to show the name, just give an empty string.
     'antecedents': []
     }
}
```


