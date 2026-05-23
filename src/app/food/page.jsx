import CategoryFilter from '@/Components/CategoryFilter/CategoryFilter';
import FoodCard from '@/Components/FoodCard';
import MarqueeTitle from '@/Components/MarqueeTitle';

import SearchBar from '@/Components/SearchBar/SearchBar';

import React from 'react';

const getFoods=async(category='',search='')=>{
  const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`)
  const data = await res.json()
  return data.data;
}
const Foods =async ({searchParams}) => {
    const sp=await searchParams
    console.log(sp.category);
   const Foods =await getFoods(sp.category,sp.search)
    console.log(Foods);
    return (
        <div className=' max-w-7xl mx-auto p-4 mt-14'>
<MarqueeTitle></MarqueeTitle>
<div className='flex justify-center items-center'>
  
<SearchBar></SearchBar>
<CategoryFilter></CategoryFilter>
</div>

         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
         {
            Foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
         }
            </div>   
        </div>
    );
};

export default Foods;