import { useState } from "react";
import type { HeaderType } from "../types/HeaderType";

export const useHeaderData = () => {
    // State sekarang berupa array. Isi array menentukan jumlah komponen Header.
    // Misalnya [0, 0] akan membuat dua komponen Header yang dimulai dari angka 0.
    const [counts, setCounts] = useState<number[]>([0]);

    // Fungsi untuk menambah komponen Header baru secara dinamis
    const addNewHeader = () => {
        setCounts((prev) => [...prev, 0]);
    };

    // Mapping state 'counts' menjadi array of 'HeaderType'
    const headersData: HeaderType[] = counts.map((count, index) => ({
        id: `${index}`,
        title: `${count}`,
        submitButton: {
            add: {
                btnText: "+",
                onClick: () => {
                    setCounts((prev) => {
                        const newCounts = [...prev];
                        newCounts[index] += 1; // Hanya menambah angka pada index yang diklik
                        return newCounts;
                    });
                }
            },
            subs: {
                btnText: "-",
                onClick: () => {
                    setCounts((prev) => {
                        const newCounts = [...prev];
                        newCounts[index] -= 1; // Hanya mengurangi angka pada index yang diklik
                        return newCounts;
                    });
                }
            },
            clear: {
                btnText: "clear",
                onClick: () => {
                    setCounts((prev) => {
                        const newCounts = [...prev];
                        newCounts[index] = 0;
                        return newCounts;
                    });
                }
            }
        }
    }));

    return { headersData, addNewHeader };
};