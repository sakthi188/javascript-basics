//functions
function word(Noun,adjective,verb,adverb)
{
    var r="The "+adjective+" "+Noun+" "+verb+" in the store"+" "+adverb;
    return r;
}
console.log(word("dog","big","run","quickly"));
console.log(word("bike","slow","flew","slowly"));

//arrays

var arr=[34,67,90];
console.log(arr);
arr[1]=90;
console.log(arr);
