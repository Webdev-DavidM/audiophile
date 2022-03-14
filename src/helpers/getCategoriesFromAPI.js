export const getCategoriesFromAPI = async () => {
  let categoryNames = [];
  let categoriesToDisplay = [];
  let result = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
    query GetAllCategoryImages {
      getAllProducts {
        categorySummaryImages {
          category
          image
        }
      }
    }
  `,
    }),
  });
  result = await result.json();

  if (result.data) {
    categoriesToDisplay = result.data.getAllProducts.reduce(
      (categoryArray, category) => {
        if (!categoryNames.includes(category.categorySummaryImages.category)) {
          categoryArray.push(category.categorySummaryImages);
          categoryNames.push(category.categorySummaryImages.category);
        }
        return categoryArray;
      },
      []
    );
  }
  return categoriesToDisplay;
};
