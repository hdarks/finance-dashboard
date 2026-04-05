import Card from "../ui/Card";

export default function SummaryCard({ title, amount, icon, color = "gray" }) {
    const colorStyles = {
        green: "bg-green-100 text-green-600",
        red: "bg-red-100 text-red-600",
        blue: "bg-blue-100 text-blue-600",
        gray: "bg-gray-100 text-gray-600"
    };

    return (
        <Card className="flex items-center justify-between">
            <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">{title}</p>
                <h3 className="text-xl font-semibold tracking-tight mt-1">
                    ₹{amount}
                </h3>
            </div>

            <div className={`p-3 rounded-xl ${colorStyles[color]} shadow-sm`}>
                {icon}
            </div>
        </Card>
    );
}