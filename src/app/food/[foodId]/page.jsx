import CartButton from "@/Components/AddCartButton/CartButton";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const {foodId} = await params;
  const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`)
const data =await res.json()
const food =data.data
  return {
    title: food.dish_name,
    description: food.category,
  }
}
const FoodDetailsPage=async ({params}) => {
const {foodId}=await params
console.log(foodId);
const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`)
const data =await res.json()
const food =data.data
console.log(food);

    return (
        <div>
         <div className="max-w-4xl mx-auto p-4">

      {/* Image */}
      <div className="w-full  mb-4">
        <Image
          src={food.image_link}
          alt={food.dish_name}
          width={400}
          height={400}
         
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-2">
        {food.dish_name}
      </h1>

      {/* Alternative Names */}
      <p className="text-sm text-gray-500 mb-3">
        {food.alternative_names.join(" • ")}
      </p>

      {/* Category + Cuisine */}
      <div className="flex gap-3 mb-4">
        <span className="px-3 py-1 bg-orange-100 rounded">
          {food.category}
        </span>
        <span className="px-3 py-1 bg-green-100 rounded">
          {food.cuisine}
        </span>
      </div>

      {/* Ingredients */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-5">
          {food.main_ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Cooking Steps */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Cooking Steps</h2>
        <ol className="list-decimal pl-5 space-y-1">
          {food.cooking_steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Nutrition */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Nutrition</h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <p>Calories: {food.approximate_nutrition_per_serving.calories}</p>
          <p>Protein: {food.approximate_nutrition_per_serving.protein}</p>
          <p>Carbs: {food.approximate_nutrition_per_serving.carbohydrates}</p>
          <p>Fat: {food.approximate_nutrition_per_serving.fat}</p>
          <p>Fiber: {food.approximate_nutrition_per_serving.fiber}</p>
        </div>
      </div>

      {/* Price */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">Price in Dhaka</h2>
        <p>Home: {food.possible_price_in_dhaka.home_cooked}</p>
        <p>Street: {food.possible_price_in_dhaka.street_food_or_small_restaurant}</p>
        <p>Cafe: {food.possible_price_in_dhaka.cafe_or_healthy_eatery}</p>
      </div>

      {/* Rating */}
      <div className="mt-4 flex gap-5 items-center">
        <span className="bg-yellow-400 px-3 py-1 rounded font-semibold">
          ⭐ {food.rating}
        </span>
        <CartButton food={food}></CartButton>
      </div>
    </div>
        </div>
    );
};

export default FoodDetailsPage
;