export default (from, to) => {
  let difference = new Date(to).getTime() - new Date(from).getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
};
