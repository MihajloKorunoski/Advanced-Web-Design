//Given n number of people in a room, calculate the probability that any two people in that room have the same birthday
// (assume 365 days every year = ignore leap year). Answers should be two decimals unless whole (0 or 1) eg 0.05

function calculateProbability(n) {
    if (n > 365)
        return 1;
    let probabilityUnique = 1;
    for (let i = 0; i < n; i++) {
        probabilityUnique *= (365 - i) / 365;
    }
    const probabilityShared = 1 - probabilityUnique;
    return probabilityShared.toFixed(2);
}