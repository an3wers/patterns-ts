// отсортировать только нечетные числа

const input = [5, 4, 1, 6, 3, 8];
const output = [1, 4, 3, 6, 5, 8];

function sortOddNumbers(nums: number[]): number[] {
  const copy = [...nums];
  const oddNums = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      oddNums.push(nums[i]);
      copy[i] = -1;
    }
  }

  oddNums.sort();

  for (let i = copy.length; i >= 0; i--) {
    if (copy[i] === -1) {
      copy[i] = oddNums.pop()!;
    }
  }

  return copy;
}

export default sortOddNumbers;
