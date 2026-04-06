import './App.css'
import {findMedianSortedArrays, getTotalSorted} from "./Service.ts";

const nums1 =
    [1, 3];
const nums2 =
    [2];

let array0 = [0], array1 = [2];

// const totalSorted = getTotalSorted(nums1, nums2);

function App() {

    return (
        <>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div>First Array: {nums1}</div>
                <div>Second Array: {nums2}</div>
                {/*<div>Sorted Array:: {totalSorted}</div>*/}
                <div>Median of Sorted Arrays: {findMedianSortedArrays(nums1, nums2)}</div>
            </div>
        </>)
}

export default App
