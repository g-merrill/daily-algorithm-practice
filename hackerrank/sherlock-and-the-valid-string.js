const isValid = s => {
    s = s.split('');
    let hashMap = {};
    s.forEach(char => hashMap[char] ? hashMap[char]++ : hashMap[char] = 1);
// want to store first value temporarily as the max value
    let maxVal = hashMap[s[0]];
    let takeawayCount = 0;
    let sameMaxCount = -1;
// iterate through values
    for (let key in hashMap) {
        let val = hashMap[key];
// immediately breaking cases
        if (takeawayCount > 1 
            || (val !== 1 && maxVal - val > 1) 
            || (sameMaxCount > 0 && takeawayCount > 0 && maxVal > val)
        ) return 'NO';
// ways to reach breaking case conditions
// count increasing
// seeing one less or greater than max value when count = 0
        if (takeawayCount === 0 && Math.abs(maxVal - val) === 1) {
            if (maxVal > val) {
                takeawayCount++;
            } else {
                takeawayCount++;
                sameMaxCount = 0;
                maxVal = val;
            }
// encountering a diff greater than one where the smaller val = 1
        } else if (Math.abs(maxVal - val) > 1 && (maxVal === 1 || val === 1)) {
            if (val === 1) {
                takeawayCount++;
            } else {
                maxVal = val;
                takeawayCount++;
            }
// seeing one greater than max value when count = 1
        } else if (takeawayCount === 1 && maxVal - val === -1) {
            takeawayCount++;
            maxVal = val;
// keeping track of whether there are multiple max values or not
        } else if (val === maxVal) {
            sameMaxCount++;
        }
    }
//   if it passes through the entire loop without reaching a breaking case, return YES!
    return 'YES';
}