export default function TestPage() {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-6 text-blue-600">Tailwind Test Page</h1>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-lg text-gray-700 mb-4">
                        This is a simple test page to check if Tailwind CSS styles are working correctly.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-100 p-4 rounded">
                            <h2 className="text-xl font-semibold text-blue-800">Blue Box</h2>
                            <p className="text-blue-600">This box should have blue styling.</p>
                        </div>
                        <div className="bg-green-100 p-4 rounded">
                            <h2 className="text-xl font-semibold text-green-800">Green Box</h2>
                            <p className="text-green-600">This box should have green styling.</p>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Blue Button
                        </button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Green Button
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 