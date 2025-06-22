import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { asynccreateproduct } from '../../features/actions/ProductAction';
import { nanoid } from 'nanoid';

const CreateProduct = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

const onSubmit = (data)=>{
    data.id = nanoid();
    dispatch(asynccreateproduct(data))
    navigate("/");
};

return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create New Product</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <input
                {...register("image")}
                className="w-full text-lg border-b-2 border-gray-300 focus:border-blue-400 outline-none p-2"
                type="url"
                placeholder="Product Image URL"
            />
            <input
                {...register("title")}
                className="w-full text-lg border-b-2 border-gray-300 focus:border-blue-400 outline-none p-2"
                type="text"
                placeholder="Product Name"
            />
            <input
                {...register("price")}
                className="w-full text-lg border-b-2 border-gray-300 focus:border-blue-400 outline-none p-2"
                type="text"
                placeholder="Price (₹)"
            />
            <input
                {...register("category")}
                className="w-full text-lg border-b-2 border-gray-300 focus:border-blue-400 outline-none p-2"
                type="text"
                placeholder="Product Category"
            />
            <textarea
                {...register("description")}
                className="w-full text-lg border-b-2 border-gray-300 focus:border-blue-400 outline-none p-2 resize-none"
                rows="4"
                placeholder="Enter description here..."
            ></textarea>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white text-lg py-3 rounded-lg transition"
            >
                Create Product
            </button>
        </form>
    </div>
);
}

export default CreateProduct;
