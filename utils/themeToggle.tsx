export const toggleDarkMode = () => {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark")

    if (isDark) {
        root.classList.remove("dark")
        localStorage.setItem("theme", "light")
    } else {
        root.classList.add("dark")
        localStorage.setItem("theme", "dark")
    }
}

export const loadInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme")

    if(savedTheme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}