
const getAverage = (num0: number, num1: number): number => {
    return (num0 + num1) / 2;
};


export const getTotalSorted = (numberList0: number[], numberList1: number[]) => {
    debugger;
    let index0 = 0, index1 = 0;

    const concatenated = [];
    let value0 = numberList0[index0];
    let value1 = numberList1[index1];

    while ((index0 < numberList0.length && index1 < numberList1.length)) {
        debugger;

        if (index0 === numberList0.length - 1) {
            for (; index0 < numberList0.length; index0++) {
                concatenated.push(numberList0[index0]);
            }
            continue;
        }

        if (index1 === numberList1.length - 1) {
            for (; index1 < numberList1.length; index1++) {
                concatenated.push(numberList1[index1]);
            }
            continue;
        }

        if(index0 < numberList0.length) {
            if (value0 < value1) {
                concatenated.push(value0);
                index0++;
            }
        }

        if(index1 < numberList1.length) {
            if (value0 > value1) {
                concatenated.push(value1);
                index1++;
            }
        }

        value0 = numberList0[index0];
        value1 = numberList1[index1];
    }

    return concatenated;
};

export const combine2SortedLists = (
    `*+
    `
) => {
    
};

export const findMedianSortedArrays = (numberList1: number[], mergeList: number[]) => {


    // const allSortedArray = getTotalSorted(numberList1, mergeList);
    //
    // const average = getAverage(allSortedArray[allSortedArray.length / 2], allSortedArray[allSortedArray.length / 2 - 1]);
    // const median = allSortedArray[allSortedArray.length / 2];
    // return allSortedArray.length % 2 === 0 ? average : median;
    debugger;
    const newArray = [...mergeList, ...numberList1];

    const sortedNewArray = newArray.sort((a, b) => {return a - b;});
    console.log(sortedNewArray);
    const averageOf2ValuesToComputeMedian = getAverage(sortedNewArray[sortedNewArray.length / 2], sortedNewArray[sortedNewArray.length / 2 - 1]);
    const medianFromOneValue = sortedNewArray[Math.ceil(sortedNewArray.length / 2) - 1];

    return sortedNewArray.length % 2 === 0 ? averageOf2ValuesToComputeMedian : medianFromOneValue;
}



