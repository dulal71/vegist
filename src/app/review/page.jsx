import ReviewCard from "@/Components/Review/ReviewCard";
import { getReviews } from "@/lib/fetchReviews";
import { Button } from "@heroui/react";
import Link from "next/link";



const Review = async() => {
    const reviews = await getReviews()
    console.log(reviews);
    return (
        <div className="max-w-5xl mx-auto my-5">

<h2 className="font-bold text-4xl text-center my-3">Our satisfied customers</h2>
<div className="flex justify-center items-center my-2">
<Link href='/review/addReview'>
<Button variant="secondary"> add review</Button>
</Link>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
    {
        reviews.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)
    }
</div>
        </div>
    );
};

export default Review;