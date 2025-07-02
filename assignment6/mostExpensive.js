const items = [199, 499, 299, 399, 9];
console.log(
  (mostExpensive = items.reduce((max = 0, item) => (item > max ? item : max)))
);
