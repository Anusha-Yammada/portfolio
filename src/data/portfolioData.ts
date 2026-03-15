export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: { name: string; level: number; tag?: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  architecture: string[];
  techStack: string[];
  metrics: string[];
  category: 'genai' | 'backend' | 'cloud' | 'healthcare';
  featured: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const PERSONAL_INFO = {
  name: "Anusha Y",
  title: "Senior Gen AI & Python Engineer",
  subtitle: "Specializing in Agentic AI Systems, RAG Pipelines & Scalable Cloud Architecture",
  location: "Atlanta, GA",
  email: "anushayammadav@gmail.com",
  github: "https://github.com/Anusha-Yammada",
  summary: "Senior AI/ML Engineer specializing in architecting and deploying production-grade Generative AI applications, autonomous multi-agent systems, and cloud-native Python platforms across healthcare, enterprise automation, and predictive analytics domains.",
  education: {
    degree: "Master of Science",
    institution: "Kennesaw State University",
    year: "2022"
  },
  stats: [
    { label: "Agentic AI Frameworks", value: "LangGraph / CrewAI" },
    { label: "Production AI Systems", value: "25+ Deployed" },
    { label: "Cloud Platforms", value: "AWS / GCP / Azure" },
    { label: "Enterprise RAG", value: "Vertex AI / Vector Search" }
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "leapgen-ai",
    role: "AI/ML Engineer",
    company: "LeapGen AI",
    location: "Ashburn, VA",
    period: "Apr 2023 - Present",
    isCurrent: true,
    highlights: [
      "Led the architecture, design, and delivery of production-grade Generative AI applications using Python, FastAPI, Vertex AI, Azure OpenAI, Claude, LangChain, and LangGraph.",
      "Designed cloud-native AI services on Google Cloud Platform (Cloud Run, AlloyDB, Cloud Storage, GCP API Gateway) for high-scale backend API integration.",
      "Developed enterprise-grade LLM applications leveraging Google Gemini API, featuring advanced prompt engineering, function calling, structured outputs, and RAG pipelines.",
      "Designed and implemented Agentic AI multi-agent workflows using LangGraph, LangChain, AutoGen, and CrewAI, featuring tool orchestration, long-term context memory, and multi-step reasoning.",
      "Built autonomous AI agent workflows for alert analysis, root cause analysis (RCA), and automated remediation while establishing strict AI guardrails (prompt injection defense, hallucination prevention).",
      "Implemented full-stack AI observability using LangSmith, Langfuse, CloudWatch, and cloud logging to trace model behavior, token usage, latency, and retrieval quality.",
      "Integrated enterprise AI applications with external tools via secure REST APIs and Model Context Protocol (MCP)-based tool execution.",
      "Configured and deployed Darwin AI inventory system for enterprise AI asset registration, governance tracking, and lifecycle monitoring."
    ],
    technologies: ["Python", "FastAPI", "Vertex AI", "Gemini API", "LangGraph", "CrewAI", "Azure OpenAI", "RAG", "LangSmith", "MCP", "Docker", "GCP"]
  },
  {
    id: "carbon3d-us",
    role: "Senior Python AI/ML Engineer",
    company: "Carbon 3D",
    location: "Redwood City, CA",
    period: "Aug 2022 - Apr 2023",
    highlights: [
      "Developed Python-based AI/ML applications for predictive analytics, process optimization, and intelligent manufacturing solutions.",
      "Built high-performance FastAPI REST APIs and backend microservices integrating ML inference models into production workflows.",
      "Designed and optimized PostgreSQL database schemas, indexing strategies, and data models supporting scalable high-volume backend operations.",
      "Implemented Redis-based caching layers for API responses, session management, and hot data retrieval to reduce database latency.",
      "Built cloud data processing pipelines using GCP Vertex AI, BigQuery, Dataflow, Spark, and Cloud Storage for ML workload preparation.",
      "Developed cloud-native microservices integrating AWS components (S3, Lambda, ECS, API Gateway) for automated ML model deployments.",
      "Automated infrastructure provisioning and deployments using Docker, GitHub Actions, Terraform, and CI/CD pipelines.",
      "Created analytics monitoring dashboards with React.js for model performance tracking and operational telemetry."
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "GCP Vertex AI", "BigQuery", "Dataflow", "AWS ECS/S3", "Docker", "Terraform", "React.js"]
  },
  {
    id: "carbon3d-india",
    role: "Python AI/ML Engineer",
    company: "Carbon 3D",
    location: "India",
    period: "Jun 2018 - Nov 2021",
    highlights: [
      "Developed machine learning models for predictive analytics, anomaly detection, and process automation using Pandas, NumPy, and Scikit-learn.",
      "Built Python backend microservices using Django and REST framework, managing authentication, DB integrations, and business logic layers.",
      "Architected event-driven asynchronous communication channels between microservices using Apache Kafka and RabbitMQ.",
      "Developed FastAPI endpoints exposing real-time ML model predictions for enterprise business applications.",
      "Built end-to-end NLP data processing pipelines utilizing embeddings, text classification, and semantic search algorithms.",
      "Collaborated with cross-functional Agile engineering teams through iterative development, unit testing, CI/CD, and production support."
    ],
    technologies: ["Python", "Django", "FastAPI", "Scikit-Learn", "Kafka", "RabbitMQ", "NLP", "Pandas/NumPy", "SQL", "Docker"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Generative AI & LLM Systems",
    description: "Multi-Agent Architectures, RAG Pipelines, Guardrails & LLM Orchestration",
    iconName: "Brain",
    skills: [
      { name: "LangGraph / CrewAI", level: 95, tag: "Agentic AI" },
      { name: "Azure OpenAI / GPT-4o", level: 95, tag: "LLMs" },
      { name: "Vertex AI / Gemini API", level: 90, tag: "GCP AI" },
      { name: "AWS Bedrock & Agents", level: 88, tag: "AWS" },
      { name: "RAG & Vector Search", level: 95, tag: "Embeddings" },
      { name: "LangSmith / Langfuse", level: 90, tag: "Observability" },
      { name: "MCP (Model Context Protocol)", level: 85, tag: "Tool Execution" }
    ]
  },
  {
    category: "Python & Backend Engineering",
    description: "High-throughput APIs, Async Systems & Scalable Microservices",
    iconName: "Terminal",
    skills: [
      { name: "Python 3.x", level: 98, tag: "Core" },
      { name: "FastAPI Framework", level: 95, tag: "REST API" },
      { name: "Django & Flask", level: 90, tag: "Backend" },
      { name: "GraphQL APIs", level: 85, tag: "API Design" },
      { name: "Asyncio / Pydantic", level: 92, tag: "Async" },
      { name: "PostgreSQL / SQLAlchemy", level: 90, tag: "SQL" },
      { name: "Redis Caching", level: 90, tag: "Performance" }
    ]
  },
  {
    category: "Cloud Platforms & DevOps",
    description: "Multi-cloud Architecture, Containerization & CI/CD Pipelines",
    iconName: "Server",
    skills: [
      { name: "Google Cloud Platform (GCP)", level: 92, tag: "Cloud" },
      { name: "Amazon Web Services (AWS)", level: 88, tag: "Cloud" },
      { name: "Microsoft Azure", level: 85, tag: "Cloud" },
      { name: "Docker & Kubernetes (GKE/ECS)", level: 90, tag: "Containers" },
      { name: "Terraform & IaC", level: 85, tag: "DevOps" },
      { name: "GitHub Actions & CI/CD", level: 92, tag: "Automation" }
    ]
  },
  {
    category: "Data Engineering & Messaging",
    description: "Distributed Data Pipelines, Event Streaming & Vector Stores",
    iconName: "Database",
    skills: [
      { name: "Apache Spark / PySpark", level: 88, tag: "Big Data" },
      { name: "Databricks", level: 85, tag: "Analytics" },
      { name: "BigQuery & Dataflow", level: 90, tag: "GCP Data" },
      { name: "Apache Kafka / RabbitMQ", level: 88, tag: "Streaming" },
      { name: "Vector Search & OpenSearch", level: 92, tag: "Vector Store" }
    ]
  },
  {
    category: "Healthcare & Security Compliance",
    description: "Interoperability Standards, HIPAA Data Security & Responsible AI",
    iconName: "Shield",
    skills: [
      { name: "FHIR / SMART on FHIR", level: 88, tag: "Healthcare" },
      { name: "HIPAA & PHI Security", level: 92, tag: "Compliance" },
      { name: "RBAC & Secrets Manager", level: 90, tag: "Security" },
      { name: "AI Guardrails & Governance", level: 95, tag: "Safety" }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "rag-enterprise-search",
    title: "Enterprise Multi-Modal RAG Search Engine",
    tagline: "Semantic vector search platform built on Vertex AI, BigQuery & Azure OpenAI",
    description: "Architected a multi-tenant enterprise knowledge retrieval system using advanced RAG techniques including dynamic document chunking, hybrid vector/keyword search, metadata filtering, and re-ranking models.",
    architecture: [
      "Vertex AI Vector Search & BigQuery indexing pipeline",
      "FastAPI middleware with Redis response caching",
      "LangGraph orchestration layer for dynamic document re-ranking",
      "Prompt injection defense & hallucination reduction guardrails"
    ],
    techStack: ["Python", "FastAPI", "Vertex AI", "Azure OpenAI", "BigQuery", "Redis", "LangGraph"],
    metrics: ["99.4% Retrieval Precision", "< 350ms Query Latency", "100k+ Docs Indexed"],
    category: "genai",
    featured: true
  },
  {
    id: "agentic-rca-remediation",
    title: "Autonomous Agentic RCA & Alert Remediation System",
    tagline: "Multi-agent LangGraph workflow for incident diagnosis and auto-healing",
    description: "Designed and deployed a multi-agent system (CrewAI & LangGraph) that listens to cloud incident alerts, fetches distributed traces, executes root cause analysis (RCA), and suggests/executes automated remediation scripts via Model Context Protocol (MCP).",
    architecture: [
      "LangGraph stateful workflow with persistent checkpointing",
      "MCP-based secure tool execution sandbox",
      "LangSmith & Langfuse observability and token telemetry",
      "Human-in-the-loop approval workflow for critical actions"
    ],
    techStack: ["Python", "LangGraph", "CrewAI", "FastAPI", "MCP", "LangSmith", "CloudWatch"],
    metrics: ["70% Reduction in Mean-Time-To-Resolution", "Fully Automated RCA", "Zero Unsanitized Execution"],
    category: "genai",
    featured: true
  },
  {
    id: "fhir-ai-clinical-platform",
    title: "HIPAA-Compliant FHIR AI Clinical Assistant",
    tagline: "Clinical decision support system integrating FHIR resources & Gen AI",
    description: "Built a secure, HIPAA-compliant clinical decision support platform using FastAPI, Azure OpenAI, and FHIR standard APIs (Epic / Athena Health integration) for instant medical chart summaries and risk assessment.",
    architecture: [
      "FHIR API integration layer with SMART on FHIR OAuth2",
      "PHI redaction & tokenization pipeline before LLM context ingestion",
      "Azure Container Apps cloud deployment with Audit Logging",
      "CDS Hooks trigger integration for real-time EHR alerts"
    ],
    techStack: ["Python", "FastAPI", "FHIR", "Azure OpenAI", "Docker", "PostgreSQL", "SMART on FHIR"],
    metrics: ["100% HIPAA Compliant", "Sub-second EHR Patient Insights", "Zero PHI Exposure"],
    category: "healthcare",
    featured: true
  },
  {
    id: "darwin-ai-governance",
    title: "Darwin AI Asset Registration & Governance System",
    tagline: "Enterprise AI model inventory tracking and lifecycle management system",
    description: "Co-developed an enterprise AI governance portal that logs registered model artifacts, prompt templates, evaluation benchmarks, drift telemetry, and security access controls across organization-wide AI initiatives.",
    architecture: [
      "GCP Cloud Run microservice architecture with PostgreSQL",
      "RBAC & IAM role enforcement for AI asset access",
      "Automated evaluation benchmark suite using PySpark & MLflow",
      "Interactive analytics dashboard built with React.js"
    ],
    techStack: ["Python", "GCP Cloud Run", "PostgreSQL", "React.js", "MLflow", "IAM", "Docker"],
    metrics: ["Unified 50+ AI Assets", "Continuous Compliance Tracking", "Real-time Drift Detection"],
    category: "cloud",
    featured: false
  }
];

export const FORKABLE_REPOS = [
  {
    name: "langchain-ai/langgraph",
    description: "Build resilient language agent architectures as graphs",
    stars: "12.4k",
    language: "Python",
    url: "https://github.com/langchain-ai/langgraph"
  },
  {
    name: "crewAIInc/crewAI",
    description: "Framework for orchestrating role-playing, autonomous AI agents",
    stars: "23.1k",
    language: "Python",
    url: "https://github.com/crewAIInc/crewAI"
  },
  {
    name: "fastapi/fastapi",
    description: "FastAPI framework, high performance, easy to learn, fast to code",
    stars: "78.9k",
    language: "Python",
    url: "https://github.com/fastapi/fastapi"
  },
  {
    name: "GoogleCloudPlatform/generative-ai",
    description: "Sample code and notebooks for Generative AI on Google Cloud",
    stars: "8.5k",
    language: "Python / Jupyter",
    url: "https://github.com/GoogleCloudPlatform/generative-ai"
  },
  {
    name: "run-llama/llama_index",
    description: "LlamaIndex is a data framework for your LLM applications",
    stars: "36.2k",
    language: "Python",
    url: "https://github.com/run-llama/llama_index"
  }
];

export const AI_BOT_FAQS: FaqItem[] = [
  {
    question: "What is Anusha's core technical specialization?",
    answer: "Anusha is a Senior Gen AI & Python Engineer. Her core focus is building autonomous Agentic AI systems (LangGraph, CrewAI), enterprise RAG pipelines, FastAPI microservices, and cloud-native AI platforms on GCP, AWS, and Azure.",
    category: "Specialization"
  },
  {
    question: "What experience does Anusha have with Agentic AI and RAG?",
    answer: "At LeapGen AI, Anusha built stateful multi-agent workflows using LangGraph and CrewAI for automated RCA and incident remediation. She has also built multi-modal RAG search platforms using Vertex AI Vector Search, Gemini API, Azure OpenAI, dynamic chunking, re-ranking, and LangSmith observability.",
    category: "Gen AI"
  },
  {
    question: "Which backend and cloud technologies does Anusha use?",
    answer: "Anusha is highly proficient in Python 3.x, FastAPI, Django, Flask, GraphQL, PostgreSQL, Redis, Apache Spark/Databricks, Apache Kafka, Docker, Kubernetes, Terraform, and GCP (Cloud Run, Vertex AI, BigQuery), AWS (Bedrock, ECS, S3), and Azure.",
    category: "Tech Stack"
  },
  {
    question: "Does Anusha have experience in healthcare or security compliance?",
    answer: "Yes! Anusha has hands-on experience building HIPAA-compliant healthcare applications integrating FHIR, SMART on FHIR, CDS Hooks, and PHI security redaction workflows for EHR systems like Epic and Athena Health.",
    category: "Healthcare & Security"
  },
  {
    question: "How can I get in touch with Anusha?",
    answer: "You can reach out directly via email at anushayammadav@gmail.com or visit her GitHub profile at https://github.com/Anusha-Yammada.",
    category: "Contact"
  }
];
