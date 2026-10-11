import { useRouteError, isRouteErrorResponse } from "react-router";

export const CustomErrorBoundary = () => {
    const error = useRouteError();

    // Fungsi aman untuk mengubah objek/data error menjadi string yang bisa dibaca
    const getErrorMessage = (errData) => {
        if (typeof errData === "string") return errData;
        if (errData?.message) return errData.message;
        try {
            return JSON.stringify(errData, null, 2);
        } catch {
            return "Terjadi kesalahan pada server.";
        }
    };

    if (isRouteErrorResponse(error)) {
        return (
            <div className="max-w-md mx-auto my-12 p-6 bg-red-50 border border-red-200 rounded-2xl text-center shadow-sm font-sans">
                <h2 className="text-xl font-bold text-red-600 mb-2">
                    Oops! Gagal Memuat Data
                </h2>
                <p className="text-slate-600 text-sm mb-3 whitespace-pre-wrap">
                    {getErrorMessage(error.data)}
                </p>
                <p className="text-xs text-slate-400">
                    Status: {error.status} ({error.statusText})
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto my-12 p-6 bg-red-50 border border-red-200 rounded-2xl text-center shadow-sm font-sans">
            <h2 className="text-xl font-bold text-red-600 mb-2">
                Terjadi Kesalahan Tak Terduga
            </h2>
            <p className="text-slate-600 text-sm">
                {error?.message || "Silakan coba beberapa saat lagi."}
            </p>
        </div>
    );
};