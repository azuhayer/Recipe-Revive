const filterByKeyword = (recipes, sortByKeyword) => {
    switch (sortByKeyword) {
        case 'rating':
            return [...recipes].sort((a, b) => a.rating - b.rating);
        case 'name':
            return [...recipes].sort((a, b) => a.name.localeCompare(b.name));
        case 'cookTime':
            return [...recipes].sort((a, b) => a.cookTime - b.cookTime);
        default:
            return recipes;
    }
};
  
  export default filterByKeyword;
  