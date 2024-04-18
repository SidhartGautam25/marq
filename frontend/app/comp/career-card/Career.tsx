interface getprops{
    obj:{arr:Array<string>; heading:string}
}
export default function Career(props:getprops){
    return(
        <>
           <div className="flex flex-col md:justify-between p-1 md:p-6 md:flex-row gap-4 md:gap-0 border-t mt-6">
            <div className="flex flex-col gap-5 md:flex-[9] hover:bg-gray-100 p-5">
                <h1 className="text-2xl md:text-3xl font-bold w-full">{props.obj.heading}</h1>
                <span>Responsibilities</span>
                <ul className="ml-8 flex flex-col gap-2">
                    {
                        props.obj.arr.map((item,index)=>{
                            return (
                                <li className="list-disc" key={index}>{item}</li>
                            )
                         })
                    }
                </ul>
            </div>
            <div className="flex justify-center items-center mr-10 md:flex-[3]">
              <button className="border p-3 rounded-[5rem] w-[85px] border-blue-600 hover:bg-blue-500 hover:text-white ease-in duration-300">Apply</button>
            </div>
           </div>
        </>
    );
}