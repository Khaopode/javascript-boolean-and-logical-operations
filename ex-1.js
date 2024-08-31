let isOver18 = true;
let hasCriminalBlacklist = true;
let isAllow = true;

// Start coding here
hasCriminalBlacklist = false
isAllow = isOver18 && !hasCriminalBlacklist ;
console.log(isAllow);
console.log(!isOver18 && !hasCriminalBlacklist);

