// The first function works but uses a temp array and .splice() method, so not as clean
/*
function insertionSort(array) {
  // temp array to start adding each element
  var sortedArray = [array[0]];

  // iterate through array
  for (let i = 1; i < array.length; i++) {
    // variable to save index of sortedArray where element will be inserted, starting from end
    let index = sortedArray.length - 1;
    // check if current element of array is less than each of sortedArray, until it isn't
    while (array[i] < sortedArray[index]) {
      --index;
    }

    // insert element into sortedArray at the stored index
    sortedArray.splice(index + 1, 0, array[i]);
  }
  return sortedArray;
}
*/

function insertionSort(array) {
  // iterate through array
  for (let i = 1; i < array.length; i++) {
    // save (extract) current element for use later
    let current = array[i];

    // work backwards from j - 1 until 0 or until we reach number lower than current
    for (var j = i - 1; j >= 0 && array[j] > current; j--) {
      // continually update the one higher up, ie shift whole list along by one
      array[j + 1] = array[j];
    }

    // finally insert our saved variable
    array[j + 1] = current;
  }
  return array;
}

console.log(
  insertionSort([
    1,
    4,
    2,
    8,
    345,
    123,
    43,
    32,
    5643,
    63,
    123,
    43,
    2,
    55,
    1,
    234,
    92,
  ])
);
