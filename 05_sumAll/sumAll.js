const sumAll = function(firstTerm, lastTerm) {
    
    if(firstTerm<0 || lastTerm<0){
        return "ERROR";
    }else if(firstTerm>lastTerm){
        let temp=firstTerm;
        firstTerm=lastTerm;
        lastTerm=temp;
        let numberOfTerms = (lastTerm-firstTerm)+1;
        let sum = (numberOfTerms/2)*(2*firstTerm+(numberOfTerms-1));
        return sum;
    }else if(typeof firstTerm==="number" && typeof lastTerm==="number"){
        let numberOfTerms = (lastTerm-firstTerm)+1;
        let sum = (numberOfTerms/2)*(2*firstTerm+(numberOfTerms-1));
        return sum;
    }else{
        return "ERROR";
    }
};
sumAll(12,29);
// Do not edit below this line
module.exports = sumAll;
