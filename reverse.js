let input = process.argv[2];

const reverse = function(original) {
  return original.split('').reverseList().join('');
};

if (input) {
  console.log(reverse(input));
}

