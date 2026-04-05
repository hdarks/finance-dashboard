export default function Badge({ children, type = "default" }) {
    const styles = {
        income: "bg-green-100 text-green-600",
        expense: "bg-red-100 text-red-600",
        default: "bg-gray-100 text-gray-600"
    };

    return (
        <span className={`px-2 py-1 text-xs rounded-lg ${styles[type]}`}>
            {children}
        </span>
    );
}