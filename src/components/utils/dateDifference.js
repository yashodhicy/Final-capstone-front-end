export default (from, to) => {
  let difference = Math.abs(new Date(from).getTime() - new Date(to).getTime())
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
};
