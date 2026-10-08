import React from "react";

export const Keyboard = () => {
    const rows = [
        "qwertyuiop".split(""),
        "asdfghjkl".split(""),
        "zxcvbnm".split("")
    ];

    return (
        <div className="flex flex-col items-center gap-2 p-4 bg-gray-900 rounded-xl max-w-lg mx-auto shadow-2xl">
            {/* 3 Baris Huruf */}
            {rows.map((row, rowIndex) => (
                <div 
                    key={rowIndex} 
                    className="flex justify-center gap-1.5 w-full"
                >
                    {row.map((key) => (
                        <button
                            key={key}
                            onClick={() => console.log(key)}
                            className="flex-1 py-3 bg-gray-700 text-cyan-300 font-semibold rounded-md shadow hover:bg-gray-600 active:scale-95 transition text-center uppercase"
                        >
                            {key}
                        </button>
                    ))}
                </div>
            ))}

            {/* Baris Tambahan (Tombol Spasi & Aksi) */}
            <div className="flex justify-center gap-1.5 w-full">
                <button 
                    onClick={() => console.log("BACKSPACE")}
                    className="px-4 py-3 bg-gray-600 text-gray-200 font-medium rounded-md shadow hover:bg-gray-500 active:scale-95 transition text-sm"
                >
                    Del
                </button>
                <button 
                    onClick={() => console.log(" ")}
                    className="flex-1 py-3 bg-gray-700 text-gray-300 font-medium rounded-md shadow hover:bg-gray-600 active:scale-95 transition text-center tracking-widest text-sm"
                >
                    SPACE
                </button>
                <button 
                    onClick={() => console.log("ENTER")}
                    className="px-4 py-3 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-500 active:scale-95 transition text-sm"
                >
                    Enter
                </button>
            </div>
        </div>
    );
};