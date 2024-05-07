import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Item = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="w-full mx-auto">
        <div className="flex max-[770px]:flex-col items-center justify-center gap-24 p-6 md:p-8 lg:p-12 bg-white rounded-lg shadow-2xl">
          <div className="h-[25rem]">
            <img
              className="w-full h-full rounded-md"
              src={recipe.image}
              alt={recipe.name}
            />
          </div>
          <div>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">{recipe.name}</h2>
              <p className="text-gray-700 text-base mb-4">
                {recipe.description}
              </p>
            </div>
            <div className="ingredients mt-6">
              <h2 className="text-lg font-semibold mb-2">Ingredients:</h2>
              <ul className="list-disc list-inside">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-700">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className="steps mt-6">
              <h2 className="text-lg font-semibold mb-2">Steps:</h2>
              <ol className="list-decimal list-inside">
                {recipe.steps.map((step, index) => (
                  <li key={index} className="text-gray-700">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
