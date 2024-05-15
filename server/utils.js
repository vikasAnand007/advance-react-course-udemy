const paginate = (data, page, perPage) => {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  return data.slice(startIndex, endIndex);
};

module.exports = {
  paginate,
};
