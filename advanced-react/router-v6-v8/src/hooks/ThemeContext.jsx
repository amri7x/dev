import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Mengambil preferensi awal dari localStorage atau default ke "light"
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("app-theme") || "light";
    });

    useEffect(() => {
        const root = document.documentElement;
        // Menghapus kelas lama dan menambahkan kelas tema baru ke tag <html>
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        // Simpan preferensi ke localStorage
        localStorage.setItem("app-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom Hook agar mudah dipanggil di komponen mana pun
export const useTheme = () => useContext(ThemeContext);