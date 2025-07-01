function tempDifference(t1, t2) {
  t1 = Number(t1);
  t2 = Number(t2);
  if (!isFinite(t1) || !isFinite(t2)) return false;
  let diff = Math.abs(t1 - t2);
  return `Temperature difference is ${diff.toFixed(1)}`;
}
