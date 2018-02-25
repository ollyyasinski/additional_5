module.exports = 
function check(str, bracketsConfig) {
  var array = str.split("");
  var stack = [];

  for (var i = 0; i < array.length; i++){
    for (var j = 0; j < bracketsConfig.length; j ++){
      var a = bracketsConfig[j];
      if (a[0] === a[1] && array[i] === a[0]){
        if (stack.length != 0){
          if (stack[stack.length - 1] === array[i]){
            stack.pop();
          }
          else {
            stack.push(array[i]);
          }
        }
        else {
          stack.push(array[i]);
        }
       }
      else if (array[i] === a[0]){
        stack.push(array[i])
      }
      else if (array[i] === a[1]){
        if (stack[stack.length - 1] === a[0] && array[i] === a[1] && stack.length != 0){
          stack.pop();
        }
        else{
        stack.push(array[i])
        }
      }
    }
  }
  if (stack.length === 0){
    return true
  }
  return false;
}