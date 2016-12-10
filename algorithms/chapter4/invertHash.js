//Convert hash keys and values, and values to keys.
// Given {'name' : 'Zaphod', 'charm' : 'high', 'morals' : 'dicey'},
// return {'Zaphod':'name', 'high':'charm', 'dicey':'morals'}


function invertHash(obj){
	var new_obj = {};

  	for (var prop in obj) {
      	new_obj[obj[prop]] = prop;
  	}
  	console.log(obj1)
	return new_obj;
};


var obj1 = {'name' : 'Zaphod', 'charm' : 'high', 'morals' : 'dicey'}
// return {'Zaphod':'name', 'high':'charm', 'dicey':'morals'} 
console.log(invertHash(obj1))