# Finance Dashboard

A modern, responsive **Finance Dashboard** built with React and Tailwind CSS.
It helps users track income, expenses, and financial insights with a clean UI inspired by Stripe/Notion.

---

## Features

### Dashboard

* Total Balance, Income, and Expenses summary cards
* Monthly balance trend (line chart)
* Spending breakdown by category (pie chart)
* Smart financial insights

### Transactions

* View all transactions in a structured table
* Search by category
* Filter by type (Income / Expense)

### Add Transactions

* Modal-based form
* Admin-only access
* Instant UI updates

### Role-Based UI

* Viewer → Read-only access
* Admin → Can add transactions

### Fully Responsive

* Works seamlessly on:

  * Mobile
  * Tablet
  * Desktop

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **Charts:** Recharts
* **Icons:** Lucide React

---

## Project Structure

```
src/
│
├── components/
│   ├── layout/         # Sidebar, Topbar
│   ├── dashboard/      # SummaryCard, ChartCard, InsightsCard
│   ├── transactions/   # Table, Filters, Modal
│   └── ui/             # Reusable UI components
│
├── data/
│   └── mockData.js     # Transaction dataset
│
├── utils/
│   └── calculations.js # Financial calculations
│
├── App.jsx
└── main.jsx
```

---

## Installation & Setup

### Clone the repository

```bash
git clone https://github.com/your-username/finance-dashboard.git
cd finance-dashboard
```

---

### Install dependencies

```bash
npm install
```

---

### Run the development server

```bash
npm run dev
```

---

### Open in browser

```
http://localhost:5173
```

---

## Data & Logic

* Uses mock data for 6 months
* Utility functions handle:

  * Total balance calculation
  * Income & expense aggregation
  * Category-wise grouping
  * Monthly trends
  * Savings rate

---

## UI Highlights

* Clean, minimal design (Stripe-inspired)
* Soft shadows and rounded cards
* Consistent spacing system
* Blur modal overlay
* Smooth animations

---

## Future Improvements

* Edit & delete transactions
* LocalStorage / backend integration
* Dark mode 🌙
* Toast notifications
* Advanced analytics (monthly comparisons)

---

## 👨‍💻 Author

**Your Name**

* GitHub: https://github.com/hdarks

---

## Acknowledgements

* Inspired by modern fintech dashboards (Stripe, Notion)
* Built as part of a frontend assignment

---

## License

This project is open-source and available under the MIT License.