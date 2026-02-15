export type Project = {
  slug: string;
  title: string;
  category: "Predictive Analytics" | "BI Dashboard" | "Data Analysis" | "Software System";
  oneLiner: string;
  dataset: string;
  metrics: string[]; // keep as placeholders if not sure
  stack: string[];
  coverImage: string; // path from /public
  repoUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "water-quality",
    title: "AI-Driven Water Quality Monitoring & Predictive Maintenance",
    category: "Predictive Analytics",
    oneLiner:
      "Decision-support workflow that converts sensor signals into CCME-WQI scores, risk tiers, and anomaly alerts; deployed as API + web interface.",
    dataset: "2.82M records",
    metrics: [
      "Explainability: SHAP + Integrated Gradients",
      "Deployment: FastAPI + Streamlit interface",
      "Model metrics: (replace with Accuracy / F1 / AUC later)",
    ],
    stack: [
      "Python",
      "Pandas/NumPy",
      "Scikit-learn",
      "XGBoost",
      "TensorFlow/Keras",
      "FastAPI",
      "Streamlit",
      "SHAP",
    ],
    coverImage: "/images/water-quality/water-quality-cover.png",
    repoUrl: "https://github.com/HUZAIFA1610/Water-Quality-Prediction-Maintenance-Service",
    featured: true,
  },
  {
    slug: "fraud-detection",
    title: "Deep Learning-Based Credit Card Fraud Detection",
    category: "Predictive Analytics",
    oneLiner:
      "Fraud analytics solution with threshold tuning to balance detection performance and customer experience.",
    dataset: "100K transactions",
    metrics: [
      "Model metrics: (replace with F1 / PR-AUC / ROC-AUC later)",
      "Decision threshold optimized for business trade-offs",
    ],
    stack: ["Python", "Scikit-learn", "TensorFlow/Keras", "PyTorch Geometric", "Keras Tuner"],
    coverImage: "/images/fraud-detection/fraud-detection-cover.png",
    repoUrl: "https://github.com/HUZAIFA1610/Credit-Card-Fraud-Detection",
    featured: true,
  },
  {
    slug: "fusion-bikes-bi",
    title: "BI Analysis for Motorbikes (Fusion Bikes Corp)",
    category: "BI Dashboard",
    oneLiner:
      "End-to-end BI solution: MySQL data source + transformations + DAX measures + Power BI dashboard for global expansion insights.",
    dataset: "10M rows",
    metrics: ["Interactive KPI dashboard", "DAX measures for performance gaps & opportunities"],
    stack: ["MySQL", "Power BI", "DAX"],
    coverImage: "/images/fusion-bikes-bi/fusion-bike-bi-cover.png",
    repoUrl: "https://github.com/HUZAIFA1610/BI-Analysis-for-Motorbikes",
    featured: true,
  },
  {
    slug: "uber-analysis",
    title: "Uber Trip Data Analysis (NYC, 2014)",
    category: "Data Analysis",
    oneLiner:
      "Time-based and frequency analysis to uncover patterns across daily/monthly/hourly trip activity.",
    dataset: "4.5M rows (6 files)",
    metrics: ["Temporal pattern discovery", "Exploratory visual analysis"],
    stack: ["R"],
    coverImage: "/images/uber-analysis/uber-analysis-cover.png",
    repoUrl: "https://github.com/HUZAIFA1610/Uber-Data-Analysis---R",
  },
  {
    slug: "amazon-sales",
    title: "Amazon Sales Analysis",
    category: "Data Analysis",
    oneLiner:
      "Sales trends and product performance insights to support strategic planning and decisions.",
    dataset: "150K rows",
    metrics: ["Revenue pattern analysis", "Product performance insights"],
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    coverImage: "/images/amazon-sales/amazon-sales-cover.png",
    repoUrl: "https://github.com/HUZAIFA1610/Amazon-Sales-Analysis",
  },
  {
    slug: "ecommerce-dashboard",
    title: "E-commerce Sales Dashboard",
    category: "BI Dashboard",
    oneLiner:
      "Interactive dashboard with time-series insight and forecasting-oriented views.",
    dataset: "100K+ rows",
    metrics: ["Multi-page dashboard", "Time-series analysis focus"],
    stack: ["Power BI"],
    coverImage: "/images/ecommerce-dashboard/ecommerce-dashboard-cover.png",
    repoUrl: "https://github.com/HUZAIFA1610/Ecommerce-Sales-Dashboard",
  },
  {
    slug: "superstore-dashboard",
    title: "Superstore Sales Dashboard",
    category: "BI Dashboard",
    oneLiner:
      "Dashboard-driven analysis of patterns, trends, and business insights for retail sales.",
    dataset: "6K rows",
    metrics: ["Interactive dashboard", "Segment & trend insights"],
    stack: ["Power BI"],
    coverImage: "/images/superstore-dashboard/superstore-dashboard-cover.png",
    repoUrl: "https://github.com/HUZAIFA1610/Superstore-Sales-Analysis",
  },
  {
    slug: "diwali-sales",
    title: "Diwali Sales Analysis",
    category: "Data Analysis",
    oneLiner:
      "Sales trend and revenue pattern analysis to support planning and performance review.",
    dataset: "11K rows",
    metrics: ["Trend discovery", "Product performance exploration"],
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    coverImage: "/images/diwali-sales/diwali-sales-cover.png",
    repoUrl: "https://github.com/HUZAIFA1610/diwali-sales-analysis",
  },
  {
    slug: "food-ordering-system",
    title: "APU Food Ordering System",
    category: "Software System",
    oneLiner:
      "Java-based ordering workflow supporting admin/vendor/customer/runner operations in a university environment.",
    dataset: "N/A",
    metrics: ["Role-based flow design", "CLI-based execution"],
    stack: ["Java", "Apache NetBeans"],
    coverImage: "/images/food-ordering-system/food-ordering-system-cover1.png",
    repoUrl: "https://github.com/HUZAIFA1610/A-Food-Ordering-System---Java",
  },
  {
    slug: "banking-cli",
    title: "Banking Service System (CLI)",
    category: "Software System",
    oneLiner:
      "Python CLI banking operations simulator; reduced manual transaction errors by 15% and lowered training time.",
    dataset: "N/A",
    metrics: ["-15% manual transaction errors", "Reduced training time"],
    stack: ["Python"],
    coverImage: "/images/banking-cli/banking-cli-cover.png",
    repoUrl: "https://github.com/HUZAIFA1610/Banking-Service-System---Python",
  },
];
