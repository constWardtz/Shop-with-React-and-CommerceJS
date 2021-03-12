const truncate = (str) => {
  const num = 70;
  if (str <= num) return str;
  return `${str.substring(num, 0)}...`;
};

export { truncate };
