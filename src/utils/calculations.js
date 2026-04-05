export const getTotalIncome = (transactions) => {
    return transactions.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0);
}

export const getTotalExpenses = (transactions) => {
    return transactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0);
}

export const getTotalBalance = (transactions) => {
    const income = getTotalIncome(transactions);
    const expenses = getTotalExpenses(transactions);
    return income - expenses;
}

export const getCategoryBreakdown = (transactions) => {
    const result = {};
    transactions.forEach((t) => {
        if (t.type === "expenses") {
            if (!result[t.category]) {
                result[t.category] = 0;
            }
            result[t.category] += t.amount;
        }
    });
    return result;
}

export const getMonthlyData = (transactions) => {
    const result = {};

    transactions.forEach((t) => {
        const month = t.date.slice(0, 7);
        if (!result[month]) {
            result[month] = 0;
        }
        result[month] += t.type === "income" ? t.amount : -t.amount;
    });
    return result;
}

export const getCategoryData = (transactions) => {
    const breakdown = {};

    transactions.forEach((t) => {
        if (t.type === "expense") {
            breakdown[t.category] = (breakdown[t.category] || 0) + t.amount;
        }
    });

    return Object.keys(breakdown).map((key) => ({
        name: key,
        value: breakdown[key],
    }));
}

export const getMonthlyChartData = (transactions) => {
    const result = {};

    transactions.forEach((t) => {
        const month = t.date.slice(5, 7);
        if (!result[month]) {
            result[month] = 0;
        }
        result[month] += t.type === "income" ? t.amount : -t.amount;
    });

    return Object.keys(result).map((key) => ({
        month: key,
        balance: result[key],
    }));
}

export const getTopSpendingCategory = (transactions) => {
    const breakdown = {};

    transactions.forEach((t) => {
        if (t.type === "expense") {
            breakdown[t.category] = (breakdown[t.category] || 0) + t.amount;
        }
    });

    let maxCategory = "";
    let maxValue = 0;

    for (let key in breakdown) {
        if (breakdown[key] > maxValue) {
            maxValue = breakdown[key];
            maxCategory = key;
        }
    }

    return { category: maxCategory, amount: maxValue };
}

export const getSavingsRate = (transactions) => {
    const income = getTotalIncome(transactions);
    const expenses = getTotalExpenses(transactions);
    if (income === 0) return 0;
    return ((income - expenses) / income) * 100;
}