// add solution here
//forloop
var musicians=["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments=["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var array=[];
  for (var i=0;i<4;i++)
  array.push(`${musicians[i]} plays ${instruments[i]}`);
  return array;
  }

  var facts=["He was the last beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  function johnLennonFacts(facts){
    while(i=0;i<facts.length;i++){
  facts.push(`${facts[i]}!!!`)}
    return facts;
  }
