import { LayoutDashboard, Receipt, BarChart } from "lucide-react";

export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-white border-r p-5 flex flex-col">
            <h1 className="text-xl font-bold mb-8">Finance</h1>

            <nav className="flex flex-col gap-2">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer">
                    <LayoutDashboard size={18} />
                    <span>Dashboard</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer">
                    <Receipt size={18} />
                    <span>Transactions</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer">
                    <BarChart size={18} />
                    <span>Insights</span>
                </div>
            </nav>
            <div className="mt-auto text-sm text-gray-400">v1.0</div>
        </div>
    );
}