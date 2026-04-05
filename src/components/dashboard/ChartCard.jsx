import Card from "../ui/Card";

export default function ChartCard({ title, children }) {
    return (
        <Card>
            <h3 className="text-sm font-medium text-gray-600 mb-4">{title}</h3>
            {children}
        </Card>
    );
}