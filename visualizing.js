
async function visualizeSelectionSort() {
    resetValues();
    if (!sorting) {
        sorting = true;
        selectionSort(array);
    }
}

async function visualizeInsertionSort() {
    resetValues();
    if (!sorting) {
        sorting = true;
        insertionSort(array);
    }
}

async function visualizeBubbleSort() {
    resetValues();
    if (!sorting) {
        sorting = true;
        bubbleSort(array);
    }
}

async function visualizeCombSort() {
    resetValues();
    if (!sorting) {
        sorting = true;
        combSort(array);
    }
}

async function visualizeCocktailSort() {
    resetValues();
    if (!sorting) {
        sorting = true;
        cocktailShakeSort(array);
    }
}

async function visualizeGnomeSort() {
    resetValues();
    if (!sorting) {
        sorting = true;
        gnomeSort(array);
    }
}

async function visualizeQuickSort() {
    resetValues();
    if (!sorting) {
        sorting = true;
        quickSort(array, 0, array.length - 1);
    }
}

async function visualizeShellSort() {
    resetValues();
    if (!sorting) {
        sorting = true;
        shellSort(array);
    }
}

async function visualizeMergeSort() {
    resetValues();
    if (!sorting) {
        sorting = true;
        mergeSort(array, array.slice(), array.length);
    }
}

async function visualizeCycleSort() {
    resetValues();
    if (!sorting) {
        sorting = true;
        cycleSort(array);
    }
}

function resetValues() {
    accesses = 0;
    comparisons = 0;
}