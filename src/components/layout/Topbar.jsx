import Button from "../ui/Button";

export default function Topbar({ role, setRole, onAddClick }) {
    return (
        <div className="w-full bg-white/80 backdrop-blur border-b border-gray-100 px-6 py-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <div className="flex items-center gap-4">
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="viewer">Viewer</option>
                    <option value="admin">Admin</option>
                </select>
                {role === "admin" && (
                    <Button onClick={onAddClick}>Add Transaction</Button>
                )}
            </div>
        </div>
    )
}