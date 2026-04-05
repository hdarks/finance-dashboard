export default function Button({ children, onClick, variant = "primary" }) {
    const base = "px-4 py-2 rounded-xl text-sm font-medium";

    const styles = {
        primary: "bg-black text-white hover:bg-gray-800",
        secondary: "bg-gray-100 text-black hover:bg-gray-200"
    };

    return (
        <button onClick={onClick} className={`${base} ${styles[variant]} transition hover:scale-[1.02] active:scale-[0.98]`}>
            {children}
        </button>
    );
}