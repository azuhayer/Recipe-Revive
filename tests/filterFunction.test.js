import filterByKeyword from "@/components/FilterButton/FilterLogic";

describe('filterByKeyword function', () => {

    const sampleRecipes = [
        {
        name:'Miso Soup',
        rating: 2,
        cookTime:'30'
        },
        {
        name:'Brazillian Classic',
        rating: 3,
        cookTime:'120'
        },
        {
        name:'Apple Pie',
        rating: 1,
        cookTime:'60'
        }
    ];

    it('should sort by rating in ascending order', () => {
        const sortedByRating = filterByKeyword(sampleRecipes, 'rating');
        expect(sortedByRating[0].rating).toBe(1);
        expect(sortedByRating[1].rating).toBe(2);
        expect(sortedByRating[2].rating).toBe(3);
    });

    it('should sort by name in alphabetical order', () => {
        const sortedByName = filterByKeyword(sampleRecipes, 'name');
        expect(sortedByName[0].name).toBe('Apple Pie');
        expect(sortedByName[1].name).toBe('Brazillian Classic');
        expect(sortedByName[2].name).toBe('Miso Soup');
    });

    it('should sort by cookTime in ascending order', () => {
        const sortedByCookTime = filterByKeyword(sampleRecipes, 'cookTime');
        expect(sortedByCookTime[0].cookTime).toBe('30');
        expect(sortedByCookTime[1].cookTime).toBe('60');
        expect(sortedByCookTime[2].cookTime).toBe('120');
    });

    it('should return the original array for invalid inputs', () => {
        const originalArray = filterByKeyword(sampleRecipes, 'invalidKeyword');
        expect(originalArray).toEqual(sampleRecipes);
    });

});
