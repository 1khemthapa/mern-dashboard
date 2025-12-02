import UploadExcel from "./UploadExcel";
import {StoreContext} from "../context/storeContext";
import { useState } from "react";
import { useContext } from "react";
import axios from 'axios'

const ManageSales = () => {
 const [excelData,setExcelData]=useState([])
  const { data, loading, fetchData } = useContext(StoreContext);
  const [active,setActive]=useState(false)
  const [editingIndex, setEditingIndex] = useState(null);
const [editingData, setEditingData] = useState({});
const [addingData,setAddingData]=useState({
  "Product Name": "",
  Category: "",
  Quantity: 0,
  Revenue: 0,
  "Sales Date": ""
})
const [addingActive,setAddingActive]=useState(false) 

const handleEdit=(index)=>{
setEditingIndex(index)
setEditingData(data[index])
setActive(true)
}
const handleAddMore=()=>{
  setActive(true)
}

const handleSave =async () => {
     try {
    const productId = editingData._id;  
    await axios.put(`http://localhost:4000/api/product/${productId}`, editingData);
    fetchData();

    setActive(false);
  } catch (error) {
    console.log("Update error:", error);
  }
  };

const handleDelete=async(productId)=>{
try {
  
  await axios.delete(`http://localhost:4000/api/product/${productId}`)
  
  fetchData();
} catch (error) {
  console.error('Delete error',error)
}
}
const handleAddSave = async () => {
  try {
    await axios.post("http://localhost:4000/api/product", addingData);
    fetchData(); 
    setAddingActive(false);
    setAddingData({
      "Product Name": "",
      Category: "",
      Quantity: 0,
      Revenue: 0,
      "Sales Date": ""
    });
  } catch (err) {
    console.error("Add product error", err);
  }
};


  if (loading) return <p>Loading...</p>;
  return (
    <div className="w-full max-w-6xl m-5">
      
      <p className="mb-3 text-2xl font-bold p-5 bg-gray-100 text-center rounded-md"> All Products List</p>
      <div className="bg-white shadow rounded text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll">
        <div className="grid grid-cols-6 font-semibold py-3 px-6 border-b">
          
          <p>Product</p>
          <p>Categories</p>
          <p>Quantity</p>
          <p>Revenue</p>
          <p>Date</p>
          <p>Action</p>
         
          
        </div>
      {data.map((data, index) => (
  <div key={index} className="grid grid-cols-6 py-3 px-6 shadow-sm">
    <p>{data["Product Name"]}</p>
    <p>{data.Category}</p>
    <p>{data.Quantity}</p>
    <p>{data.Revenue}</p>
    <p>{data["Sales Date"]}</p>
       <div className="flex items-center gap-2">
        <button
          className="bg-yellow-400 text-white rounded-md px-3 py-1 hover:bg-yellow-500 cursor-pointer"
          onClick={() => handleEdit(index)}
        >
          Edit
        </button>
        <button className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 cursor-pointer" onClick={()=>handleDelete(data._id)}>
          Delete
        </button>
      </div>

      
      {active && (
        <div
          className="fixed inset-0 w-full h-full bg-white/50 backdrop-blur-sm z-50 flex items-center justify-center" onClick={() => setActive(false)}>
          
          <div
            className="bg-white p-6 rounded-md shadow-lg"
            onClick={(e) => e.stopPropagation()} 
          >
            <h2 className="text-lg font-bold mb-4">Edit Product</h2>
               <div className="grid grid-cols-6 gap-2 py-2 px-6 border-b">
        <input
          className="border p-1 rounded"
          type="text"
          value={editingData["Product Name"]}
          onChange={(e) =>
            setEditingData({ ...editingData, "Product Name": e.target.value })
          }
        />
        <input
          className="border p-1 rounded"
          type="text"
          value={editingData.Category}
          onChange={(e) =>
            setEditingData({ ...editingData, Category: e.target.value })
          }
        />
        <input
          className="border p-1 rounded"
          type="number"
          value={editingData.Quantity}
          onChange={(e) =>
            setEditingData({ ...editingData, Quantity: e.target.value })
          }
        />
        <input
          className="border p-1 rounded"
          type="number"
          value={editingData.Revenue}
          onChange={(e) =>
            setEditingData({ ...editingData, Revenue: e.target.value })
          }
        />
        <input
          className="border p-1 rounded"
          type="date"
          value={editingData["Sales Date"]}
          onChange={(e) =>
            setEditingData({ ...editingData, "Sales Date": e.target.value })
          }
        />
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 cursor-pointer"
          onClick={() => setActive(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
          </div>
        </div>
      )}
          </div>
        ))
      }
         <button className="bg-blue-500 p-2 mt-2 ml-1 text-white rounded-md hover:bg-blue-700 cursor-pointer" onClick={()=>setAddingActive(true)}>Add more</button>
      </div>

      {addingActive && (
        <div
          className="fixed inset-0 w-full h-full bg-white/50 backdrop-blur-sm z-50 flex items-center justify-center" onClick={() => setAddingActive(false)}>
          
          <div
            className="bg-white p-6 rounded-md shadow-lg"
            onClick={(e) => e.stopPropagation()} 
          >
            <h2 className="text-lg font-bold mb-4">Add Product</h2>
               <div className="grid grid-cols-6 gap-2 py-2 px-6 border-b">
        <input
          className="border p-1 rounded"
          type="text"
          value={addingData["Product Name"]}
          onChange={(e) =>
            setAddingData({ ...addingData, "Product Name": e.target.value })
          }
        />
        <input
          className="border p-1 rounded"
          type="text"
          value={addingData.Category}
          onChange={(e) =>
            setAddingData({ ...addingData, Category: e.target.value })
          }
        />
        <input
          className="border p-1 rounded"
          type="number"
          value={addingData.Quantity}
          onChange={(e) =>
            setAddingData({ ...addingData, Quantity: e.target.value })
          }
        />
        <input
          className="border p-1 rounded"
          type="number"
          value={addingData.Revenue}
          onChange={(e) =>
            setAddingData({ ...addingData, Revenue: e.target.value })
          }
        />
        <input
          className="border p-1 rounded"
          type="date"
          value={addingData["Sales Date"]}
          onChange={(e) =>
            setAddingData({ ...addingData, "Sales Date": e.target.value })
          }
        />
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 cursor-pointer"
          onClick={() => setAddingActive(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
          onClick={handleAddSave}
        >
          Save
        </button>
      </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageSales;

