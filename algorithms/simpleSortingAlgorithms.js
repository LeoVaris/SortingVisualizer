async function bubbleSort(array) {  
    let n = array.length;
    let swapped = false;
    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if (await compare(array, i, i - 1)) {
                await swap(array, i - 1, i); 
                swapped = true;
            }
            accesses += 2;
        }
    } while (swapped);
    sorting = false;
}

async function insertionSort(array) {
    let n = array.length;
    for (let i = 1; i < n; ++i) {
        for (let j = i; j > 0 && await compare(array, j, j - 1); --j) { 
            await swap(array, j, j - 1);
        }
    }
    sorting = false;
}

async function selectionSort(array) {
    let n = array.length;
    for (let i = 0; i < n; ++i) {

        let m = i;
        for (let j = i + 1; j < n; ++j) {
            if (await compare(array, j, m)) {
                m = j;
            }
        }

        if (m != i) {
            await swap(array, i, m);
        }
    }
    sorting = false;
}

async function combSort(array) {
    let n = array.length;
    let gap = n;
    let shrink = 1.3;
    let sorted = false;

    while(!sorted) {
        gap = Math.floor(gap / shrink);

        if (gap <= 1) {
            gap = 1;
            sorted = true;
        }

        for (let i = 0; i + gap < n; ++i) {
            if (await compare(array, i + gap, i)) {
                await swap(array, i, i + gap);
                sorted = false;
            }
        }
    }
    sorting = false;
}

async function cocktailShakeSort(array) {
    let swapped = false;
    let n = array.length;
    do {
        for (let i = 0; i < n - 2; ++i) {
            if (await compare(array, i + 1, i)) {
                await swap(array, i, i + 1);
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
        swapped = false;
        for (let i = n - 2; i >= 0; --i) {
            if (await compare(array, i + 1, i)) {
                await swap(array, i, i + 1);
                swapped = true;
            }
        }
    } while(swapped);
    sorting = false;
}

async function gnomeSort(array) {
    let pos = 0;
    let n = array.length;
    while (pos < n) {
        if (pos == 0 || await gnomeSortCompare(array, pos, pos-1)) {
            pos++;
        } else {
            await swap(array, pos, pos-1);
            pos--;
        }
    }
    sorting = false;
}