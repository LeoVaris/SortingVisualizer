

async function mergeSort(array, workArray, n) {
    await copyArray(array, 0, n, workArray);
    await splitMerge(workArray, 0, n, array);

    sorting = false;
}

async function splitMerge(workArray, begin, end, array) {
    if (end - begin < 2) {
        return;
    }

    let middle = Math.floor((end + begin) / 2);

    await splitMerge(array, begin, middle, workArray);
    await splitMerge(array, middle, end, workArray);

    await merge(workArray, begin, middle, end, array);
}

async function merge(array, begin, middle, end, workArray) {
    let i = begin;
    let j = middle;

    for (let k = begin; k < end; ++k) {

        if (i < middle && (j >= end || await mergeSortCompare(array, i, j))) {
            await mergeSortSwap(array, workArray, i, k);
            i++;
        } else {
            await mergeSortSwap(array, workArray, j, k);
            j++;
        }
    }
}

async function copyArray(array, begin, end, workArray) {
    for (let i = begin; i < end; ++i) {
        workArray[i] = array[i];
    }
}