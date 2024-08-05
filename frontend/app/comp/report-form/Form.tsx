import React from 'react'

const Form = () => {
  return (
    <div className='flex justify-center'>
        <div className="p-5 border bg-gray-50 px-5 md:w-[85%] rounded-md">
        <form action="" className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="">Name<span className="text-red-600">*</span></label>
            <input type="text" placeholder="Enter Name " className="focus: outline-none p-3 border rounded-md"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email<span className="text-red-600">*</span></label>
            <input type="email" placeholder="Enter email " className="focus: outline-none p-3 border rounded-md"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Contact Number<span className="text-red-600">*</span></label>
            <input type="number" placeholder="(Country code)-Phone-Number" className="focus: outline-none p-3 border rounded-md"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Please fill us in on your requirements<span className="text-red-600">*</span></label>
            <textarea  placeholder=" " className="focus: outline-none p-3 border rounded-md min-h-[12rem]"/>
          </div>
          
          <button className="bg-slate-500 w-[5rem] p-2 rounded-md text-white hover:bg-slate-800 ease-in-out duration-300">submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form