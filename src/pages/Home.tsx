import { Link } from "react-router-dom"

const Home = () => {
return (
    <div className="h-screen flex justify-center items-center bg-slate-800 text-white flex-col">
        <h1 className="text-4xl">Daily Practice</h1>
            <div className="mt-10 flex gap-10">
                <Link to={"memberCart"} >
                    <div className="bg-orange-600 p-2 rounded-xl">Member Cart</div>
                </Link>
                <Link to={"accordion"} >
                    <div className="bg-orange-600 p-2 rounded-xl">Accordion</div>
                </Link>
                <Link to="https://ecommerce-admin-delta-one.vercel.app/">
                    <div className="bg-orange-600 p-2 rounded-xl " >Ecommerce Admin Panel</div>
                </Link>
                <Link to={"Sign-in"}>
                    <div className="bg-orange-600 p-2 rounded-xl " >SignIn</div>
                </Link>
                <Link to={"Sign-up"}>
                    <div className="bg-orange-600 p-2 rounded-xl " >SignUp</div>
                </Link>
                <Link to={"comingsoon"}>
                    <div className="bg-orange-600 p-2 rounded-xl " >Coming Soon</div>
                </Link>
            </div>
    </div>
)}

export default Home