import { useEffect, useState } from "react";


const useTheme = () => {
   
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "dark";
        }
        return "dark";
    });

    useEffect(() => {
        const root = window.document.documentElement;

        
        const applyTheme = () => {
            if (theme === "system") {
                const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                root.classList.toggle("dark", isDark);
            } else {
                root.classList.toggle("dark", theme === "dark");
            }
        };

        applyTheme();

        localStorage.setItem("theme", theme);

       
        if (theme === "system") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const handleChange = () => applyTheme();
            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, [theme]);

    
    return { theme, setTheme };
};

export default useTheme;