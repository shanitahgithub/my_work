function sequence(limit) {
    let fibSeq = [0, 1];
    let nextFib = 1;
    while (nextFib <= limit) {
        nextFib = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
        if (nextFib <= limit) {
            fibSeq.push(nextFib);
        }
    }
    return fibSeq;
}

let fibNumbers = sequence(100);
console.log("Fibonacci numbers up to 100:", fibNumbers);