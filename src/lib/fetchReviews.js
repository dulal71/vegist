import reviews from '../data/reviews'
export const getReviews = async()=>{
    return reviews;
}

export const addNewReview=async(newReview)=>{
    newReview.id= reviews.length+1
    reviews.push(newReview)
    return{status:true, message:'add review successfully'}

}