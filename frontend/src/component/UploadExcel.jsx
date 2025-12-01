import React, { useState } from 'react'
import  { StoreContext } from '../context/storeContext'
import { useContext } from 'react'


const UploadExcel =({setExcelData}) => {
  const [file,setFile]=useState(null)
  const {fetchData} =useContext(StoreContext)

  const handleSubmit= async (e)=>{
    e.preventDefault();
    if(!file){
      alert ('No file Selected')
      return;
    }
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch("http://localhost:4000/api/uploads", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    
    console.log("Server response:", data);
    fetchData()
    setFile(null);
      e.target.reset();

  } catch (err) {
    console.error(err);
  }

  }


  return (
    <div className='h-screen flex flex-col items-center bg-gray-100 justify-center'>
      
      <h1 className='font-bold text-2xl bg-white   p-6 rounded-xl' >
        Upload your excel file
      </h1>
      <form encType='multipart/form-data' className="bg-white p-6 mt-5 rounded-2xl " onSubmit={handleSubmit}>
        <input type='file' name='file' accept='.xlsx' required className='shadow bg-gray-100 hover:bg-gray-200 rounded-md  w-full cursor-pointer p-2' placeholder='Choose a file'onChange={(e)=>setFile(e.target.files[0])}/>
        <br />
        <button type='submit' className='bg-blue-700 text-white rounded-md w-full mt-4 p-2 cursor-pointer hover:bg-blue-800' >Submit Excel</button>
      </form>
      
    </div>
  )
}


export default UploadExcel

