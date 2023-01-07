function temur(number) {
  if (number == 0)
    return 0;
  return (number % 10 + temur(parseInt(number / 10)));
  // return (number % 10 + temur(parseInt(number / 10)));
}

// Driven code
var num = 123456789;
var result = temur(num);
document.write("Your answer is" + " " + result);










// function removeElement(nums, val) {
//   if (!nums) return 0;
//   let pointer = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[pointer] = nums[i];
//       pointer++
//     }

//   }
//   return pointer;
// };




