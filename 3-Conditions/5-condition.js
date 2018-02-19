//declare vars
var volume = 10;
var neighbours = 'old';

//combining conditions
if (volume > 9 && neighbours === 'old') {
  console.log('turn down your amp, dammit!')
}else if(neighbours !== 'old' && volume !== 11){
  console.log('turn that amp to 11')
}