import { users } from "../utils/dummyData"

const MemberCart = () => {
return (
    <div className="bg-slate-900 ">
        <h1 className="text-white pt-40 text-5xl text-center font-bold tracking-wider">TEAM MEMBERS</h1>
    <div className="h-screen  flex justify-center items-center shadow-lg gap-10 -mt-40">
        {users.map((user) => (
            <div className="bg-white h-[350px] w-[400px] rounded-xl relative">
        {/* Img cover */}
        <div className="">
                    <img className="h-[90px] w-full object-cover object-center rounded-t-xl" src={user.imgCover} />
        </div>
        
        {/* content */}
        <div>
            <div>
                <img className="h-20 rounded-full absolute top-14 left-40 border-2 border-white" src={user.imgProfile} />
            </div>

            <div className="mt-14 text-center font-semibold">
                <h1 className="text-xl">{user.name} </h1>
                <h1 className="text-[#6d6d6d] text-md">{user.position} </h1>
                        <p className="text-[#6d6d6d] text-md pt-2 w-4/5 m-auto">{user.desc}</p>
                <div className="flex justify-evenly w-full  mt-6">
                    <div className="bg-indigo-600 text-white w-2/5 p-2 rounded-lg cursor-pointer">Follow</div>
                    <div className="text-[#6d6d6d] border border-[#6d6d6d] w-2/5 p-2 rounded-lg cursor-pointer">Message</div>
                </div>
            </div>
        </div>
        </div>
        ))}
        
        </div>
        </div>
    )
}

export default MemberCart