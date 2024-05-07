export const allIngredientsList1 = [
  {
    icon: "🍕",
    label: "Pizza",
    image: (
      <img
        className="w-60 h-56 "
        src="https://th.bing.com/th/id/OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo?rs=1&pid=ImgDetMain"
      />
    ),
  },
  {
    icon: "🍜",
    label: "Noodles",
    image: (
      <img
        className="w-60 h-56 "
        src="https://th.bing.com/th/id/OIP.iRfdU2TLvwGCDS_qSldiOQHaHa?rs=1&pid=ImgDetMain"
      />
    ),
  },
  {
    icon: "🍟",
    label: "Fries",
    image: (
      <img
        className="w-60 h-56 "
        src="https://blog.thermoworks.com/wp-content/uploads/2018/01/french_fry_atk_method-31-of-36.jpg"
      />
    ),
  },
];
export const allIngredientsList2 = [
  {
    icon: "🥗",
    label: "Salad",
    image: (
      <img
        className="w-60 h-56 "
        src="https://th.bing.com/th/id/OIP.O9GnmutLCcD6m_wDoeuT2AHaJL?rs=1&pid=ImgDetMain"
      />
    ),
  },
  {
    icon: "🥪",
    label: "Sandwich",
    image: (
      <img
        className="w-60 h-56 "
        src="https://th.bing.com/th/id/OIP.RHvOpBpCcrI11G24ilGimgHaHa?rs=1&pid=ImgDetMain"
      />
    ),
  },
  {
    icon: "🍔",
    label: "Hamburger",
    image: (
      <img
        className="w-60 h-56 "
        src="https://th.bing.com/th/id/OIP.W3IMYD5s4mCvdIr3Y5W0fQHaJH?rs=1&pid=ImgDetMain"
      />
    ),
  },
];
export const allIngredientsList3 = [
  {
    icon: "🌭",
    label: "Hotdog",
    image: (
      <img
        className="w-60 h-56 "
        src="https://nypost.com/wp-content/uploads/sites/2/2016/07/hot-dog-2.jpg?quality=90&strip=all&w=1280"
      />
    ),
  },
  {
    icon: "🌮",
    label: "Taco",
    image: (
      <img
        className="w-60 h-56 "
        src="https://th.bing.com/th/id/OIP.pelK9k5ccm6GNDcM6fEozQHaE8?rs=1&pid=ImgDetMain"
      />
    ),
  },
  {
    icon: "🍪",
    label: "Cookies",
    image: (
      <img
        className="w-60 h-56 "
        src="https://th.bing.com/th/id/OIP.-Pa2guEoiHZ5eNIF5l1weAHaHa?rs=1&pid=ImgDetMain"
      />
    ),
  },
];

const [pizza, noodles, french_fries] = allIngredientsList1;
export const initialTabs1 = [pizza, noodles, french_fries];

const [green_salad, sandwich, hamburger] = allIngredientsList2;
export const initialTabs2 = [green_salad, sandwich, hamburger];

const [hotdog, taco, cookies] = allIngredientsList3;
export const initialTabs3 = [hotdog, taco, cookies];

export const lines = {
  desc1:
    "Indulge in a world of savory delights – from cheesy pizzas to slurp-worthy noodles and crispy fries...",
  desc2:
    "Savor the freshness with our selection of salads, hearty sandwiches, and classic hamburgers...",
  desc3:
    "Enjoy the perfect bites for on-the-go – from juicy hotdogs to crunchy tacos and delightful cookies...",
};

export function getNextIngredient(ingredients) {
  const existing = new Set(ingredients);
  return allIngredientsList1.find((ingredient) => !existing.has(ingredient));
}
