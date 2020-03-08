

async function swap(array, ind1, ind2) {
    states[ind1] = 1;
    states[ind2] = 1;
    if (swapDelay != 0) {
        await sleep(swapDelay);
    }
    accesses += 4;
	let temp = array[ind1];
	array[ind1] = array[ind2];
    array[ind2] = temp;
    states[ind1] = 0;
    states[ind2] = 0;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function accessArray(arr, i) {
    accesses++;
    return arr[i];
}

async function compare(array, ind1, ind2) {
    comparisons++;
    accesses += 2;
    if (states[ind1] !== 1)
        states[ind1] = 2;
    if (states[ind2] !== 1)
        states[ind2] = 2;
    if (compareDelay != 0) {
        await sleep(compareDelay);
    }
    if (states[ind1] === 2)
        states[ind1] = 0;
    if (states[ind2] === 2)
        states[ind2] = 0;
    return array[ind1] < array[ind2];
}

async function mergeSortCompare(array, ind1, ind2) {
    comparisons++;
    accesses += 2;
    if (states[ind1] !== 1)
        states[ind1] = 2;
    if (states[ind2] !== 1)
        states[ind2] = 2;
    await sleep(compareDelay);
    if (states[ind1] === 2)
        states[ind1] = 0;
    if (states[ind2] === 2)
        states[ind2] = 0;
    return array[ind1] <= array[ind2];
}

async function mergeSortSwap(array, workArray, ia, iw) {
    states[ia] = 1;
    states[iw] = 1;
    await sleep(swapDelay);
    accesses += 4;
	workArray[iw] = array[ia];
    states[ia] = 0;
    states[iw] = 0;
}

async function gnomeSortCompare(array, ind1, ind2) {
    comparisons++;
    accesses += 2;
    if (states[ind1] !== 1)
        states[ind1] = 2;
    if (states[ind2] !== 1)
        states[ind2] = 2;
    await sleep(compareDelay);
    if (states[ind1] === 2)
        states[ind1] = 0;
    if (states[ind2] === 2)
        states[ind2] = 0;
    return array[ind1] >= array[ind2];
}