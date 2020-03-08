

async function quickSort(array, lo, hi) {
    if (lo < hi) {
        sorting = true;
        let p = await partition(array, lo, hi);
        await quickSort(array, lo, p - 1);
        await quickSort(array, p + 1, hi);
    } else {
        sorting = false;
    }
}

async function shellSort(array) {
    let gaps = [23, 10, 4, 1];
    let n = array.length;

    for (let x = 0; x < gaps.length; ++x) {
        let gap = gaps[x];
        for (let i = gap; i < n; ++i) {
            let temp = await accessArray(array, i);
            temp = array[i];
            await swap(array, i, i);
            let j = i;
            for ( ; j >= gap && await accessArray(array, j - gap) > temp; j -= gap) {
                array[j] = await accessArray(array, j - gap);
                accesses++;
                comparisons++;
            }

            await swap(array, j, j);
            array[j] = temp;
            accesses++;
        }
    }
    sorting = false;
}

async function partition(array, lo, hi) {
    for (let i = lo; i <= hi; ++i) {
        states[i] = 3;
    }
    let middle = Math.floor((lo + hi) / 2);
    if (await compare(array, middle, lo)) {
        await swap(array, lo, middle);
    }
    if (await compare(array, hi, lo)) {
        await swap(array, lo, hi);
    }
    if (await compare(array, middle, hi)) {
        await swap(array, hi, middle);
    }
    let pivot = await accessArray(array, hi);
    let ind = lo;
    for (let j = lo; j <= hi; j++) {
        if (await accessArray(array, j) < pivot) {
            await swap(array, ind, j);
            ind++;
        }
    }
    await swap(array, ind, hi);
    for (let i = lo; i <= hi; ++i) {
        states[i] = 0;
    }
    return ind;
}

