import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function TransactionTable({ transactions }) {
    return (
        <Card>
            <h3 className="text-md font-semibold mb-4">Transctions</h3>

            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="text-xs text-gray-400 uppercase border-b">
                        <tr className="border-b last:border-0 hover:bg-gray-50 transition">
                            <th className="py-2">Date</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((t) => (
                            <tr key={t.id} className="border-b last:border-0 hover:bg-gray-50 transition">
                                <td className="py-3 text-gray-600">
                                    {new Date(t.date).toLocaleDateString()}
                                </td>
                                <td className="py-3 text-gray-600">{t.category}</td>
                                <td className="py-3 text-gray-600 font-medium">
                                    ₹{t.amount.toLocaleString()}
                                </td>
                                <td className="py-3 text-gray-600">
                                    <Badge type={t.type}>{t.type}</Badge>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}