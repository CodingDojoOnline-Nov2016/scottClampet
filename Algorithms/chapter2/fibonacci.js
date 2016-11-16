// Your function should accept one argument, an index into the 
// squence (where 0 corresponds to the inital value, 4 corresponds
// to the value four later, etc);

// fibonacci sequence: 0,1,1,2,3,5,8,13,21,34,55,89,etc...

function fibonacci(num){
  var a = 0; 
  var b = 1; 
  var temp = 0;
  if(num === 0){
  	return 0;
  }
  if(num === 1){
  	return 1;
  }

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

fibonacci(7);
