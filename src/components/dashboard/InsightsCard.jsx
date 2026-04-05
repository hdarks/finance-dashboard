import Card from "../ui/Card";

export default function InsightsCard({ insights }) {
    return (
        <Card>
            <h3 className="text-md font-semibold mb-4">Insights</h3>
            <div className="flex flex-col gap-3">
                {insights.map((item, index) => (
                    <div key={index} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-700">
                        {item}
                    </div>
                ))}
            </div>
        </Card>
    );
}