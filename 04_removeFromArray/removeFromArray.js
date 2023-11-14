function removeFromArray(array,...element) {
    element;
    temp=array;
    let position;
    for(let i=0;i<element.length;i++){
        if(temp.includes(element[i])){
            position=temp.indexOf(element[i]);
            temp.splice(position,1);
        }
    }
    return temp;
};

// Do not edit below this line
module.exports = removeFromArray;
