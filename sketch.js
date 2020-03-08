let cw;
let ch;

let elementCount = 75;
let swapDelay = 10;
let compareDelay = 0;

let accesses = 0;
let comparisons = 0;

let array = [];
let states = [];

let sorting = false;

let shuffleBtn;
let resetArrayBtn;

let bubbleSortBtn;
let insertionSortBtn;
let selectionSortBtn;
let combSortBtn;
let cocktailSortBtn;
let gnomeSortBtn;
let quickSortBtn;
let shellSortBtn;
let mergeSortBtn;
let cycleSortBtn;

let elementCountSlider;
let elemCntInfo;

let arrAccessCount;
let comparisonCount;

let delaySlider;
let delaySliderInfo;
let compareSlider;
let compareInfo;

function setup() {

    const sortBtnPos = 370;

	cw = windowWidth - windowWidth / 4;
	ch = windowHeight - windowHeight / 4;

	var cnv = createCanvas(cw, ch);
	cnv.position(200, 20);

	createArray();

	shuffleBtn = createButton('Shuffle');
	shuffleBtn.mousePressed(shuffleArray);
    shuffleBtn.position(20, 20);
    
    bubbleSortBtn = createButton('Bubble sort');
	bubbleSortBtn.mousePressed(visualizeBubbleSort);
    bubbleSortBtn.position(20, sortBtnPos);
    
    insertionSortBtn = createButton('Insertion sort');
	insertionSortBtn.mousePressed(visualizeInsertionSort);
    insertionSortBtn.position(20, sortBtnPos + 30);
    
    selectionSortBtn = createButton('Selection sort');
	selectionSortBtn.mousePressed(visualizeSelectionSort);
    selectionSortBtn.position(20, sortBtnPos + 60);
    
    combSortBtn = createButton('Comb sort');
	combSortBtn.mousePressed(visualizeCombSort);
    combSortBtn.position(20, sortBtnPos + 90);

    cocktailSortBtn = createButton('Gnome sort');
	cocktailSortBtn.mousePressed(visualizeGnomeSort);
    cocktailSortBtn.position(20, sortBtnPos + 120);

    gnomeSortBtn = createButton('Cocktail shaker sort');
	gnomeSortBtn.mousePressed(visualizeCocktailSort);
    gnomeSortBtn.position(20, sortBtnPos + 150);
    
    quickSortBtn = createButton('Quicksort');
	quickSortBtn.mousePressed(visualizeQuickSort);
    quickSortBtn.position(20, sortBtnPos + 180);

    shellSortBtn = createButton('Shellsort');
	shellSortBtn.mousePressed(visualizeShellSort);
    shellSortBtn.position(20, sortBtnPos + 210);

    mergeSortBtn = createButton('Merge sort');
	mergeSortBtn.mousePressed(visualizeMergeSort);
    mergeSortBtn.position(20, sortBtnPos + 240);

    cycleSortBtn = createButton('Cycle sort');
	cycleSortBtn.mousePressed(visualizeCycleSort);
    cycleSortBtn.position(20, sortBtnPos + 270);

	resetArrayBtn = createButton('ResetArray');
	resetArrayBtn.mousePressed(createArray);
	resetArrayBtn.position(20, 50);

	elemCntInfo = createP('Element count: ' + elementCount);
    elemCntInfo.position(20, 70);
    
    arrAccessCount = createP('Array accesses: ' + accesses);
    arrAccessCount.position(20, sortBtnPos - 40);

    comparisonCount = createP('Comparisons: ' + comparisons);
    comparisonCount.position(20, sortBtnPos - 60);
    
    delaySlider = createSlider(0, 100, swapDelay, 1);
	delaySlider.input(changeDelay);
    delaySlider.position(20, 185);

    compareSlider = createSlider(0, 100, compareDelay, 1);
	compareSlider.input(changeCompareDelay);
    compareSlider.position(20, 270);

    delaySliderInfo = createP('Delay between </br>swaps (ms): ' + swapDelay);
    delaySliderInfo.position(20, 130);

    compareInfo = createP('Delay in comparing</br>elements (ms): ' + compareDelay);
    compareInfo.position(20, 210);

	elementCountSlider = createSlider(3, 100, 75, 1);
	elementCountSlider.input(changeElementCount);
    elementCountSlider.position(20, 110);
}

function changeDelay() {
    swapDelay = delaySlider.value();
    delaySliderInfo.html('Delay between </br>swaps (ms): ' + swapDelay);
}

function changeCompareDelay() {
    compareDelay = compareSlider.value();
    compareInfo.html('Delay in comparing</br>elements (ms): ' + compareDelay);
}

function changeElementCount() {
    elementCount = elementCountSlider.value();
    elemCntInfo.html('Element count: ' + elementCount);
	createArray();
}

function createArray() {
    array = [];
    states = [];
	for (let i = 1; i <= elementCount; ++i) {
        array.push(i);
        states.push(0);
    }
}

function shuffleArray() {
    shuffle(array, true);
}

function windowResized() {
	cw = windowWidth - windowWidth / 4
	ch = windowHeight - windowHeight / 4
    resizeCanvas(cw, ch);
}


function draw() {
    arrAccessCount.html('Array accesses: ' + accesses);
    comparisonCount.html('Comparisons: ' + comparisons);
	background(0);
	let objW = (cw - 5) / elementCount;
	let objH = (ch - 10) / elementCount;

	for (let i = 0; i <= elementCount; ++i) {
        if (states[i] === 0) {
            fill(255);
        } else if (states[i] === 1) {
            fill(255, 0, 0);
        } else if (states[i] === 2) {
            fill(0, 0, 255);
        } else {
            fill(0, 255, 0);
        }
        rect(objW * i, ch - array[i] * objH, objW, array[i] * objH);
    }
}