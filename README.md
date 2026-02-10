# ⚖️ Asylum Office Grant Rate Tracker

An interactive data visualization platform built to provide asylum seekers, researchers, and policymakers with a user-friendly way to explore USCIS Asylum Office decision data between FY 2016 and May 2021.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=flat-square&logo=tailwind-css)

---

## 🚀 Key Features

* **Interactive Dashboard:** Visualize asylum grant rates by Office, Nationality, and Time using dynamic charting.
* **Performance Optimization:** Utilizes Server-Side Rendering (SSR) and parallel `Promise.all` fetching to minimize load times.
* **Data Portability:** Export summary statistics and case data directly to **CSV files** for local research.
* **Live Query Management:**
    * **Update Query:** Refetch fresh data from the API with a synchronized loading state.
    * **Clear Query:** Instantly wipe the view to reset research parameters.
* **Systemic Insights:** Pre-calculated metrics highlighting critical trends, such as the 36% grant rate decline in recent years.

## 🛠 Tech Stack

* **Frontend:** Next.js 14 (App Router)
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Styling:** Tailwind CSS (Responsive Design)
* **Data Visualization:** Custom Graph Components (Bar, Pie, Line)
* **Environment:** Node.js
