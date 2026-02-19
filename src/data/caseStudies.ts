type Screenshot = {
  src: string;      // in /public
  alt: string;
  caption?: string;
};

type CaseStudy = {
  executiveSummary: string;
  problem: string[];
  data: {
    scale: string;
    sources?: string[];
    features?: string[];
    notes?: string[];
  };
  approach: string[];
  insights: string[];
  impact: string[];
  screenshots?: Screenshot[]; // optional
  tools: string[];
  next?: string[];
};

export const caseStudies: Record<string, CaseStudy> = {
  "water-quality": {
    executiveSummary:
      "Built a decision-support workflow that converts large-scale sensor data into CCME-WQI scores, risk tiers, and anomaly alerts, deployed as an API + interface to support faster triage and standardized maintenance planning.",
    problem: [
      "High-volume physicochemical readings are difficult to interpret quickly for operational decisions.",
      "Maintenance planning needs consistent risk tiers with explainable reasoning.",
      "Stakeholders need standardized outputs (WQI score + tier + alerts), not raw predictions.",
    ],
    data: {
      scale: "2.82M records",
      sources: ["Physicochemical sensor signals"],
      notes: [
        "Outputs include CCME-WQI scoring and tier mapping for incident prioritization.",
      ],
    },
    approach: [
      "Computed CCME-WQI and mapped it into actionable risk tiers.",
      "Trained multiple models for prediction tasks (update exact models/metrics later).",
      "Added explainability (SHAP + Integrated Gradients) to support trust and auditability.",
      "Deployed endpoints using FastAPI and surfaced results via a Streamlit interface.",
    ],
    insights: [
      "Standardized WQI + tier outputs improve clarity for operations teams.",
      "Explainability artifacts support stakeholder confidence and reporting.",
      "Anomaly-style alerts enable faster incident triage (replace with concrete timing later).",
    ],
    impact: [
      "Operational decision support: faster triage and clearer prioritization workflow.",
      "Standardized reporting: consistent scoring and tiering for maintenance planning.",
      "Scalable pipeline: handles million-scale datasets end-to-end.",
    ],
    screenshots: [
      {
        src: "/images/projects/water-quality/screen-1.png",
        alt: "Water Quality interface - overview",
        caption: "Add a screenshot of your Streamlit interface (overview).",
      },
      {
        src: "/images/projects/water-quality/screen-2.png",
        alt: "Water Quality API docs - Swagger",
        caption: "Add a screenshot of your FastAPI Swagger docs.",
      },
    ],
    tools: [
      "Python",
      "Pandas/NumPy",
      "Scikit-learn",
      "XGBoost",
      "TensorFlow/Keras",
      "SHAP",
      "FastAPI",
      "Streamlit",
    ],
    next: [
      "Replace placeholder metrics with final Accuracy/F1/AUC and add 2–3 key plots.",
      "Add interface + Swagger screenshots for a complete portfolio story.",
    ],
  },

  "fraud-detection": {
    executiveSummary:
      "Designed a fraud detection analytics solution with threshold tuning to balance detection performance and customer experience, translating business requirements into measurable evaluation decisions.",
    problem: [
      "Fraud detection must balance false positives (customer friction) vs false negatives (loss).",
      "Success depends on the right metric + threshold, not only model accuracy.",
    ],
    data: {
      scale: "100K transactions",
      notes: [
        "Fraud problems are typically imbalanced; PR-focused evaluation is often more informative (add your chosen metrics).",
      ],
    },
    approach: [
      "Built and compared multiple ML/DL approaches (update exact models later).",
      "Evaluated trade-offs using appropriate metrics for imbalance (update with your final choice).",
      "Optimized the decision threshold to align with operational/business trade-offs.",
    ],
    insights: [
      "Threshold selection materially changes operational outcomes (fraud captured vs customer friction).",
      "PR-focused analysis provides clearer signal on rare-event detection (add your plots).",
    ],
    impact: [
      "Delivered decision-threshold guidance for deployment-focused operations.",
      "Created an evaluation framework to support cost-aware risk decisions.",
    ],
    screenshots: [
      {
        src: "/images/projects/fraud-detection/screen-1.png",
        alt: "Fraud detection - PR curve or evaluation plot",
        caption: "Add PR curve / confusion matrix screenshot from your notebook.",
      },
      {
        src: "/images/projects/fraud-detection/screen-2.png",
        alt: "Fraud detection - model comparison table",
        caption: "Add model comparison result (metrics table).",
      },
    ],
    tools: ["Python", "Scikit-learn", "TensorFlow/Keras", "PyTorch Geometric", "Keras Tuner"],
    next: [
      "Replace placeholders with final metrics (PR-AUC/ROC-AUC/F1) and chosen threshold rationale.",
      "Add 2 plots: PR curve + confusion matrix at selected threshold.",
    ],
  },

  "fusion-bikes-bi": {
    executiveSummary:
      "Built an end-to-end BI solution: MySQL sales database + transformations + DAX KPIs + Power BI dashboards to highlight performance gaps and market opportunities for expansion planning.",
    problem: [
      "Leadership needed consolidated KPI visibility across regions, products, and time.",
      "Expansion planning required identifying underperformance and market opportunities quickly.",
    ],
    data: {
      scale: "10M rows",
      sources: ["Sales database in MySQL"],
      notes: ["Multiple dashboard pages with drill-down analysis (add screenshots)."],
    },
    approach: [
      "Managed and queried sales data in MySQL.",
      "Created KPI measures and comparative views using DAX.",
      "Designed Power BI dashboard pages for drill-down exploration and storytelling.",
    ],
    insights: [
      "Dashboard drill-down enables faster root-cause analysis (region/product/time).",
      "KPI views highlight gaps and opportunities for expansion strategy.",
    ],
    impact: [
      "Executive-ready BI dashboards for trend monitoring and performance gap analysis.",
      "Improved visibility across global markets and product performance.",
    ],
    screenshots: [
      {
        src: "/images/projects/fusion-bikes-bi/screen-1.png",
        alt: "Fusion Bikes dashboard - overview page",
        caption: "Add your best overview dashboard screenshot.",
      },
      {
        src: "/images/projects/fusion-bikes-bi/screen-2.png",
        alt: "Fusion Bikes dashboard - drilldown page",
        caption: "Add a drill-down page (region/product).",
      },
    ],
    tools: ["MySQL", "Power BI", "DAX"],
    next: [
      "Add 2–4 dashboard screenshots and a short KPI dictionary (what each KPI means).",
    ],
  },
};