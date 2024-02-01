import { Link } from "react-router-dom"

const Home = () => {
return (
    <div className="h-screen flex justify-center items-center bg-slate-800 text-white flex-col">
        <h1 className="text-4xl">Daily Practice</h1>
            <div className="mt-10">
                <Link to={"memberCart"} >
                    <div className="bg-orange-600 p-2 rounded-lg">Member Cart</div>
                </Link>
            </div>
    </div>
)}

export default Home