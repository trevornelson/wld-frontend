export default (dow) => {
  var today = new Date();
  const todayDow = today.getDay();
  const diff = today.getDate() + (dow - todayDow);

  return new Date(today.setDate(diff));
};
