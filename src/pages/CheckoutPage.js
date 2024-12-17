import React from 'react';

const CheckoutPage = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Checkout</h1>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Billing Details</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-600">Address</label>
                        <input
                            type="text"
                            id="address"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="card" className="block text-gray-600">Credit Card</label>
                        <input
                            type="text"
                            id="card"
                            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="flex justify-end mt-6">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                        >
                            Complete Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
