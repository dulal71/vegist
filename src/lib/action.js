 'use server'
import { revalidatePath } from "next/cache";
import { addNewReview } from "./fetchReviews";
import { redirect } from "next/navigation";

export const  addReview = async(formData)=>{
   
    const data = Object.fromEntries(formData.entries())
console.log(data);
const res = await addNewReview(data)
if(res.status){
    revalidatePath('/review')
    redirect('/review')
}
}