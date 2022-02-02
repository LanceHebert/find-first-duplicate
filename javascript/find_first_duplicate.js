// take first input, shift number out of array and do index of. If not -1 that is a duplicate. If -1 start over at first index and search again

function findFirstDuplicate(arr) {
  // type your code here
  if (arr.length < 1){
    return -1
  }
  for (let i = 0; i < arr.length; i++) {
    let holder = arr[i];

    if (arr.indexOf(holder, i + 1) > 0) {
      return holder;
    }
    return -1
  }
}
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
