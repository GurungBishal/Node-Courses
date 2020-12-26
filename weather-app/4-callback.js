const add = (num1, num2, sum) => {
  setTimeout(() => {
    const result = num1 + num2;
    sum(result);
  }, 2000);
};
add(1, 4, (result) => {
  console.log(result);
});
