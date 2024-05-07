import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import axios from "axios";
import { toast } from "react-toastify";

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    description: "",
    ingredients: [],
    steps: [],
  });
  const [editIndex, setEditIndex] = useState(null);

  const [editOrAdd, setEditOrAdd] = useState("");

  const { userProfileData } = useAuth();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/profile/${userProfileData}/recipes`
        );
        console.log(res);
        if (res.status === 200) {
          setRecipes(res.data);
        } else if (res.status === 404) {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 404) {
          toast.info(error.response.data.message);
        } else {
          toast.error("An error occurred while fetching recipes.");
        }
      }
    };
    fetchRecipes();
  }, [userProfileData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleAddRecipe = async (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedRecipes = [...recipes];
      updatedRecipes[editIndex] = newRecipe;
      setRecipes(updatedRecipes);
      setEditIndex(null);
    } else {
      setRecipes([...recipes, newRecipe]);
    }
    setNewRecipe({
      name: "",
      description: "",
      ingredients: [],
      steps: [],
    });

    try {
      const res = await axios.post(
        `http://localhost:5000/api/profile/${userProfileData}/add`,
        newRecipe
      );

      toast.success("Yummy! New Recipe.");
    } catch (error) {
      toast.error("An error occured, try again.");
    }
  };

  const handleDeleteRecipe = async (recipeId) => {
    // const updatedRecipes = [...recipes];
    // updatedRecipes.splice(index, 1);
    // setRecipes(updatedRecipes);
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/recipes/${recipeId}`
      );
      const updatedRecipes = recipes.filter(
        (recipe) => recipe._id !== recipeId
      );
      setRecipes(updatedRecipes);
      toast.success("Recipe deleted!");
    } catch (error) {
      toast.error("Failed to delete recipe!");
    }
  };

  const handleEditRecipe = (index) => {
    setNewRecipe(recipes[index]);
    setEditIndex(index);
    setEditOrAdd(true);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleUpdateRecipe = async (e) => {
    e.preventDefault();
    try {
      // console.log(newRecipe._id);
      const res = await axios.patch(
        `http://localhost:5000/api/recipes/${newRecipe._id}`,
        newRecipe
      );
      const updatedRecipes = [...recipes];
      updatedRecipes[editIndex] = newRecipe;
      setRecipes(updatedRecipes);
      setNewRecipe({
        name: "",
        description: "",
        ingredients: [],
        steps: [],
      });
      setEditIndex(null);
      setEditOrAdd(false);
      toast.success("Recipe updated!");
    } catch (error) {
      toast.error("Failed to update recipe!");
    }
  };

  return (
    <div className="p-10" id="scroll-to-edit">
      <div className="flex flex-col justify-between items-center w-full md:w-[60%] mx-auto mt-5 mb-10 bg-gray-800 text-[#fff] rounded-xl shadow-[0 0 10px rgba(0, 0, 0, 0.1)]">
        <div className="font-semibold text-2xl mt-10">
          {editOrAdd ? "Edit Recipe" : "Add new recipe"}
        </div>
        <div className="w-full md:px-20">
          <form className="flex flex-col gap-5">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={newRecipe.name}
              onChange={handleInputChange}
              className="text-black"
            />
            <label>Description</label>
            <textarea
              name="description"
              value={newRecipe.description}
              onChange={handleInputChange}
              rows="4"
              className="text-black"
            />
            <label>Ingredients</label>
            <textarea
              name="ingredients"
              value={newRecipe.ingredients.join("\n")}
              onChange={(e) =>
                setNewRecipe((prevRecipe) => ({
                  ...prevRecipe,
                  ingredients: e.target.value.split("\n"),
                }))
              }
              rows="4"
              className="text-black"
            />
            <label>Steps</label>
            <textarea
              name="steps"
              value={newRecipe.steps.join("\n")}
              onChange={(e) =>
                setNewRecipe((prevRecipe) => ({
                  ...prevRecipe,
                  steps: e.target.value.split("\n"),
                }))
              }
              rows="4"
              className="text-black"
            />
            <div className="flex justify-center items-center mt-10 mb-10">
              {editIndex !== null ? (
                <button
                  onClick={handleUpdateRecipe}
                  className="w-32 font-bold bg-white text-gray-800 p-2 rounded cursor-pointer transition-[0.3s] border-solid border-[2px] hover:bg-gray-800 hover:border-[#ddd] hover:text-white"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={handleAddRecipe}
                  className="w-32 font-bold bg-white text-gray-800 p-2 rounded cursor-pointer transition-[0.3s] border-solid border-[2px] hover:bg-gray-800 hover:border-[#ddd] hover:text-white"
                >
                  Add
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* ---------------------------------horizontal-line-------------------------------------------------- */}

      <div className="flex mt-8 mb-20 pt-20 pb-5 justify-center text-center items-center">
        <div className="w-24 border-dotted border-black border-t-8"></div>
      </div>

      {/* ---------------------------------My recipes section------------------------------------------------- */}

      <div className="h-full">
        <div className="text-black font-bold text-4xl mb-10 mt-20 text-center">
          My recipes
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {recipes.map((recipe, index) => (
            <div
              key={recipe._id}
              className="border-solid border-black border-2 w-[300px] p-3 bg-gray-800 text-[#fff] rounded-xl shadow-[0 0 10px rgba(0, 0, 0, 0.1)] "
            >
              <div className="font-semibold text-lg">Name</div>
              <div className="h-[20px]">{recipe.name}</div>
              <div className="font-semibold text-lg">Description</div>
              <div className="h-[60px] overflow-scroll">
                {recipe.description}
              </div>
              <div className="font-semibold text-lg">Ingredients</div>
              <ul className="h-[100px] overflow-scroll">
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <div className="font-semibold text-lg">Steps</div>
              <ol className="h-[100px] overflow-scroll">
                {recipe.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
              <div className="flex justify-center items-center gap-5">
                <button
                  onClick={() => {
                    handleEditRecipe(index);
                    scrollToSection("scroll-to-edit");
                  }}
                  className="w-32 font-bold bg-white text-gray-800 p-2 rounded cursor-pointer transition-[0.3s] border-solid border-[2px] hover:bg-gray-800 hover:border-[#ddd] hover:text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteRecipe(recipe._id)}
                  className="w-32 font-bold bg-white text-gray-800 p-2 rounded cursor-pointer transition-[0.3s] border-solid border-[2px] hover:bg-gray-800 hover:border-[#ddd] hover:text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyRecipes;
