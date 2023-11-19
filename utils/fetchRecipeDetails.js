const fetchRecipeById = async (recipeId) => {
    const baseUrl = `https://api.edamam.com/api/recipes/v2/${recipeId}`;
    const queryParams = new URLSearchParams({
      type: 'public',
      app_id: process.env.NEXT_PUBLIC_APP_ID,
      app_key: process.env.NEXT_PUBLIC_APP_KEY
    });

    const response = await fetch(`${baseUrl}?${queryParams.toString()}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
};

export default fetchRecipeById;
