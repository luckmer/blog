const uniqCategoryFilter = (categories: string[]) => {
  const category = new Set();

  const checkCategory = (element: string) => {
    if (category.has(element.toLowerCase())) return false;
    category.add(element.toLowerCase());
    return true;
  };

  const uniqCategory = categories.filter((element) => checkCategory(element));

  return uniqCategory;
};

export default uniqCategoryFilter;
