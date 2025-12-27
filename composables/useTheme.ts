export const useTheme = () => {
    const isDark = useState<boolean>('theme', () => false);

    const initTheme = () => {
        if (import.meta.client) {
            // Sync state with DOM (which might be set by app.vue script)
            isDark.value = document.documentElement.classList.contains('dark');
        }
    };

    const toggleTheme = () => {
        isDark.value = !isDark.value;
        if (isDark.value) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return {
        isDark,
        toggleTheme,
        initTheme,
    };
};