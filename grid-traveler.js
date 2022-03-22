// Since we are using an empty object set... IN JS its only strings or symbols.. concatinte both of the integers together 

// Function of parameters m and n for the grid size
const gridTraveler = (m,n, memo = {}) => {
    const key =  m + ',' + n;
    //Check if the arguments in the memo
    if (key in memo) return memo[key]; 
    // First base case checking whether or not if the pos is the start/end
    if (m == 1 && n == 1) return 1;
    // Second base case checking whether or not its an grid or not or if         it can continue
    if (m == 0 || n == 0) return 0;
    // Going down u subtract number of row, going right subtracting the         number of columns
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
};

console.log(gridTraveler(1,1));
console.log(gridTraveler(2,3));
console.log(gridTraveler(3,2));
console.log(gridTraveler(3,3));
console.log(gridTraveler(18,18));
    