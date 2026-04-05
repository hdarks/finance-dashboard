export default function Input({ placeholder, value, onChange }) {
    return (
        <input
            type="text" placeholder={placeholder} value={value} onChange={onChange}
            className="border border-gray-200 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}