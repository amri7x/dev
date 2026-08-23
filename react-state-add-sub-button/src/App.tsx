import { Header, useHeaderData } from "./utils";

export const App = () => {
    const { headersData, addNewHeader } = useHeaderData();

    return (
        <div className="flex flex-col items-center pb-10">
            {/* Proses Mapping Array menjadi deretan Komponen */}
            {headersData.map((data) => (
                <Header key={data.id} {...data} />
            ))}

            {/* Tombol uji coba untuk menambah Header baru di layar */}
            <button 
                onClick={addNewHeader}
                className="mt-10 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 cursor-pointer"
            >
                Tambah Header Baru
            </button>
        </div>
    );
};