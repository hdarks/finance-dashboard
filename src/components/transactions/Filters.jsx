import Input from "../ui/Input";

export default function Filters({ search, setSearch, filterType, setFilterType }) {
    return (
        <div className="flex items-center justify-between mb-4">
            <Input placeholder="Search category..." value={search}
                onChange={(e) => setSearch(e.target.value)} />
            <select value={filterType} onChange={(e) => setFilterType(e.target.value)}
                className="border border-gray-200 px-3 py-2 rounded-lg">
                <option value="all">All</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
        </div>
    )
}