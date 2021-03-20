isBalanced("()[]")
//true
isBalanced("([])")
//true
isBalanced("({)}")
//false
isBalanced("{[}")
//false

function isMatch( left, right ) {
 return ( left === '(' && right === ')' || left === '[' && right === ']' || left === '{' && right === '}' )
}

