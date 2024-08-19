function LongestSeq(arr) {
    
    arr.sort((a, b) => a - b);
   
    let long = [];
    let seq = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] === arr[i - 1] + 1) {
           
            seq.push(arr[i]);
        } else {
            
            if (seq.length > long.length) {
                long = seq;
            }
            
            seq = [arr[i]];
        }
    }
    
    
    if (seq.length > long.length) {
        long = seq;
    }
    
    return long;
}


const arr = [10,11,12,1, 2, 3, 4, 5, 8, 9, 10, 15, 16, 17, 18, 19, 20,21, 24, 25, 26, 27];
const long = LongestSeq(arr);

console.log('Longest Consecutive Sequence:', long);
