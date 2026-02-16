type CaseStudy = {
  overview: string;
  problem: string[];
  approach: string[];
  results: string[];
  tools: string[];
  notes?: string[];
};

export const caseStudies: Record<string, CaseStudy> = {
  "water-quality": {
    overview:
      "Decision-support workflow that translates physicochemical water sensor data into interpretable CCME-WQI scores, risk tiers, and anomaly alerts, deployed as an API + web interface for faster triage and standardized reporting.",
    problem: [
      "Monitoring data is high-volume and difficult to interpret quickly for operational decisions.",
      "Maintenance prioritization needs consistent risk tiers and evidence-based justification.",
      "Stakeholders need standardized, explainable outputs (not just raw model predictions).",
    ],
    approach: [
      "Computed CCME-WQI scoring and mapped outputs into actionable risk tiers.",
      "Built multiple models for classification/regression style tasks (update with exact model list later).",
      "Added explainability (SHAP + Integrated Gradients) to support trust and auditability.",
      "Deployed as FastAPI endpoints with a Streamlit interface for operations-style usage.",
    ],
    results: [
      "Dataset scale handled: 2.82M records processed through the workflow.",
      "Delivered standardized reporting outputs (WQI score + tier + alerts) for faster incident triage.",
      "Model metrics: (replace with your confirmed Accuracy/F1/AUC later).",
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
    notes: [
      "Next improvement: add screenshots of the deployed interface and Swagger UI for the portfolio page.",
    ],
  },

  "fraud-detection": {
    overview:
      "Fraud detection analytics solution designed around business trade-offs, focusing on threshold tuning to balance detection performance and customer experience.",
    problem: [
      "Fraud detection requires balancing false positives (customer friction) vs. false negatives (loss).",
      "Model evaluation must align with business costs, not only raw accuracy.",
    ],
    approach: [
      "Built and compared multiple ML/DL approaches (update with exact models later).",
      "Analyzed performance trade-offs using appropriate fraud metrics (PR-focused metrics recommended).",
      "Optimized decision thresholds to support cost-effective operations.",
    ],
    results: [
      "Dataset: 100K transactions analyzed.",
      "Delivered decision-threshold guidance for operational deployment.",
      "Model metrics: (replace with your confirmed scores later).",
    ],
    tools: ["Python", "Scikit-learn", "TensorFlow/Keras", "PyTorch Geometric", "Keras Tuner"],
    notes: [
      "Next improvement: add confusion matrix + PR curve screenshots for the portfolio.",
    ],
  },

  "fusion-bikes-bi": {
    overview:
      "End-to-end BI solution for Fusion Bikes Corporation: MySQL data source, transformations, DAX measures, and Power BI dashboards to surface performance gaps and market opportunities.",
    problem: [
      "Decision-makers needed consolidated visibility into sales trends and underperforming segments.",
      "Global expansion planning required market-level insights and KPI storytelling.",
    ],
    approach: [
      "Loaded and managed the sales database in MySQL.",
      "Built DAX measures for KPIs and comparative performance views.",
      "Designed interactive Power BI pages to drill from global → regional → product-level insights.",
    ],
    results: [
      "Dataset scale: 10M rows supported in the BI workflow.",
      "Delivered interactive dashboards for trend + gap identification.",
      "Next: add dashboard screenshots (2–4 pages) to fully showcase the work.",
    ],
    tools: ["MySQL", "Power BI", "DAX"],
  },
};