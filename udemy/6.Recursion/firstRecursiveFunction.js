function firstRecursiveFunction(num) {
  if (num <= 0) {
    console.log("this is where it ends .....");
    return;
  }

  console.log(num);
  num--;

  firstRecursiveFunction(num);
}
firstRecursiveFunction(5)