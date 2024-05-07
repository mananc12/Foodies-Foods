import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListItem = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeButton, setActiveButton] = useState(1);
  const itemsPerPage = 8;
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);


//fetch data of all the recipes from the backend   
  useEffect(() => {
    fetch("http://localhost:5000/api/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setFilteredRecipes(data); // Initialize filteredRecipes with all recipes
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);


// Filter recipes based on searchQuery
  useEffect(() => {
    const filtered = recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.some((i) =>
          i.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
    setFilteredRecipes(filtered);
  }, [searchQuery, recipes]);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRecipes.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActiveButton(pageNumber); // Update the active button
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset pagination when search query changes
  };

  return (
    <div className="sm:pl-4 md:pl-10 lg:pl-24 sm:pr-4 md:pr-10 lg:pr-24 sm:pb-4 md:pb-10 lg:pb-24">

      {/*------------------------ Search Bar----------------------------------------------- */}
      <div className="search-bar text-center mt-12 mb-20">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-[60%] p-2 h-10 border-solid rounded-lg border-black border-2"
        />
      </div>

      {/* ------------------------------All-recipes----------------------------------------------------------*/}
      <div className="w-full h-fit grid gap-10 container-recipes">
        {currentItems.map((item) => (
          <Link to={`/item/${item._id}`} target="_blank" key={item._id}>
            <div className="recipes-card p-4 cursor-pointer flex justify-center items-center flex-col h-fit">
              <div className="image-div">
                <img
                  className="image w-full h-full"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="title font-bold w-full mt-2">{item.name}</div>
              <div className="desc overflow-y-auto text-sm mt-2">
                {item.description}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/*----------------------------- pagination------------------------------------ */}
      <div className="pagination mt-5 flex justify-end">
        {Array.from(
          { length: Math.ceil(filteredRecipes.length / itemsPerPage) },
          (_, i) => (
            <button
              className={`w-8 h-8 rounded-xl mr-2 hover:scale-105 ${
                i + 1 === activeButton ? "active" : ""
              }`}
              key={i}
              onClick={() => paginate(i + 1)}
              style={
                i + 1 === activeButton
                  ? { background: "blue", color: "white" }
                  : {}
              }
            >
              {i + 1}
            </button>
          )
        )}
      </div>
      {/* -------------------------------------------------------------------------------------- */}

    </div>
  );
};

export default ListItem;
