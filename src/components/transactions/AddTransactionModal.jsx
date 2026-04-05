import { useState, useEffect } from "react";
import Button from "../ui/Button";

export default function AddTransactionsModal({ onAdd, onClose }) {
    const [form, setForm] = useState({
        date: "",
        amount: "",
        category: "",
        type: "expense",
    });

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (!form.date || !form.amount || !form.category) return;

        onAdd({
            ...form,
            id: Date.now(),
            amount: Number(form.amount),
        });

        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl border border-gray-100 animate-scaleIn"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-lg font-semibold mb-4">
                    Add Transaction
                </h2>

                <div className="flex flex-col gap-3">
                    <input type="date" name="date" onChange={handleChange} className="border p-2 rounded-lg" />
                    <input type="number" name="amount" placeholder="Amount" onChange={handleChange} className="border p-2 rounded-lg" />
                    <input type="text" name="category" placeholder="Category" onChange={handleChange} className="border p-2 rounded-lg" />

                    <select name="type" onChange={handleChange} className="border p-2 rounded-lg">
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                </div>

                <div className="flex justify-end gap-2 mt-4">
                    <Button variant="secondary" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}>
                        Add
                    </Button>
                </div>
            </div>
        </div>
    );
}