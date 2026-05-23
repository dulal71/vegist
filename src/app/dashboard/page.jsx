import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


const Dashboard =async () => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const user=session?.user
if(!user){
    redirect('/auth/signUp')
    return <p>pleace sign In</p>
}
    return (
        <div className="mt-25">
            <h1>this is dashboard</h1>
        </div>
    );
};

export default Dashboard;