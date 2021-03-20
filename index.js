let isBalanced = (input) => {

  let brackets = "[]{}()<>"
  let stack = []

  for(let bracket of input) {
    let bracketsIndex = brackets.indexOf(bracket)

    // if bracket is an opening bracket
     if(bracketsIndex % 2 === 0) {
       // push the closing bracket onto the stack
      stack.push(bracketsIndex + 1)
    } else {
      //do something
    }
  }
  return true ? true : false
}


