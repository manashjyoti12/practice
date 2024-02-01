
const MemberCart = () => {
return (
    <div className="h-screen bg-slate-900  flex justify-center items-center shadow-lg">
        <div className="bg-white h-[350px] w-[400px] rounded-xl relative">
        {/* Img cover */}
        <div className="">
                <img className="h-[90px] w-full object-cover object-center rounded-t-xl" src="https://images.unsplash.com/photo-1596226799589-ea489243e102?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
        
        {/* content */}
        <div>
            <div>
                <img className="h-20 rounded-full absolute top-14 left-40 border-2 border-white" src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" />
            </div>

            <div className="mt-14 text-center font-semibold">
                <h1 className="text-xl">Manashjyoti Boro</h1>
                <h1 className="text-[#6d6d6d] text-md">Web Developer</h1>
                <p className="text-[#6d6d6d] text-md pt-2">Web developer based in India<br/>passionate about developing websites </p>
                <div className="flex justify-evenly w-full  mt-6">
                    <div className="bg-indigo-600 text-white w-2/5 p-2 rounded-lg cursor-pointer">Follow</div>
                    <div className="text-[#6d6d6d] border border-[#6d6d6d] w-2/5 p-2 rounded-lg cursor-pointer">Message</div>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default MemberCart