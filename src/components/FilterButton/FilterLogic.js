const filterByKeyword = (recipes, sortByKeyword) => {
    switch (sortByKeyword) {
        case 'rating':
            return [...recipes].sort((a, b) => a.rating - b.rating);
        case 'name':
            return [...recipes].sort((a, b) => (a.name || a.recipe.label).localeCompare((b.name||b.recipe.label)));
        case 'cookTime':
            //If no time is found, the recipes will be placed at the end of the array.
            return [...recipes].sort((a, b) => {
                let timeA = a.cookTime || a.recipe.totalTime || Infinity;
                let timeB = b.cookTime || b.recipe.totalTime || Infinity;
              
                return timeA - timeB;
              });
        case 'calories':
                return [...recipes].sort((a, b) => {
                    let timeA = a.recipe.calories || Infinity;
                    let timeB = b.recipe.calories || Infinity;
                    return timeA - timeB;
                  });
        case 'mealType':
            const order = ['breakfast', 'brunch', 'lunch', 'dinner', 'lunch/dinner','others'];
            return [...recipes].sort((a, b) => {
                const categoryA = order.includes(a.recipe.mealType[0]) ? a.recipe.mealType[0] : 'others';
                const categoryB = order.includes(b.recipe.mealType[0]) ? b.recipe.mealType[0] : 'others';

                return order.indexOf(categoryA) - order.indexOf(categoryB);
            });
        default:
            return recipes;
    }
};

export default filterByKeyword;
  