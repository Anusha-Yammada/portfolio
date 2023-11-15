import React, { useState } from 'react';
import { Cpu, Network, ShieldCheck, Database, Play, Layers, Code, Check, Copy } from 'lucide-react';

export const AgentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'agents' | 'rag' | 'mcp' | 'code'>('agents');
  const [activeCodeSnippet, setActiveCodeSnippet] = useState<'langgraph' | 'rag' | 'mcp'>('langgraph');
  const [simulatedState, setSimulatedState] = useState<'idle' | 'running' | 'completed'>('idle');
  const [stepLogs, setStepLogs] = useState<string[]>([]);
  const [copiedCode, setCopiedCode] = useState(false);

  const runSimulatedWorkflow = () => {
    setSimulatedState('running');
    setStepLogs(['[0.00s] Initializing LangGraph Stateful Graph...']);

    setTimeout(() => {
      setStepLogs((prev) => [...prev, '[0.45s] Agent 1 (Alert Ingestion): CloudWatch alert triggered [High CPU Spike].']);
    }, 500);

    setTimeout(() => {
      setStepLogs((prev) => [...prev, '[1.10s] Agent 2 (RCA Diagnostics): Querying Vertex AI Vector Search for past telemetry logs.']);
    }, 1200);

    setTimeout(() => {
      setStepLogs((prev) => [...prev, '[1.85s] Agent 3 (Remediation Planner): Formulating action plan via Model Context Protocol (MCP).']);
    }, 1900);

    setTimeout(() => {
      setStepLogs((prev) => [...prev, '[2.40s] Execution Guardrail: PHI & Prompt Injection checks PASSED.']);
    }, 2500);

    setTimeout(() => {
      setStepLogs((prev) => [...prev, '[3.00s] Action Completed: Service restarted successfully. Alert resolved automatically.']);
      setSimulatedState('completed');
    }, 3100);
  };

  const codeSnippets = {
    langgraph: `# LangGraph Stateful Multi-Agent Incident Orchestrator
from typing import TypedDict, Annotated, Sequence
from langgraph.graph import StateGraph, END
from langchain_core.messages import BaseMessage

class IncidentState(TypedDict):
    alert_payload: dict
    logs: list[str]
    root_cause: str
    remediation_plan: str
    status: str

def ingest_alert_node(state: IncidentState):
    # Step 1: Parse incoming telemetry
    return {"status": "INGESTED"}

def rca_diagnostic_node(state: IncidentState):
    # Step 2: Query Vertex AI Vector Search
    return {"root_cause": "Memory Leak in Microservice V2"}

def remediation_agent_node(state: IncidentState):
    # Step 3: MCP Tool execution
    return {"remediation_plan": "Restart Pod via MCP", "status": "RESOLVED"}

workflow = StateGraph(IncidentState)
workflow.add_node("ingest", ingest_alert_node)
workflow.add_node("rca", rca_diagnostic_node)
workflow.add_node("remediator", remediation_agent_node)

workflow.set_entry_point("ingest")
workflow.add_edge("ingest", "rca")
workflow.add_edge("rca", "remediator")
workflow.add_edge("remediator", END)

app = workflow.compile()`,
    rag: `# Vertex AI & BigQuery Hybrid Vector Search Pipeline
from google.cloud import aiplatform
from langchain_community.vectorstores import MatchingEngine

def retrieve_context(user_query: str, tenant_id: str) -> list[str]:
    # Hybrid Dense Vector & Metadata Filtered Search
    vector_store = MatchingEngine.from_components(
        index_id="projects/gcp-ai-prod/locations/us-central1/indexes/enterprise-docs",
        embedding_model="text-embedding-004"
    )
    
    results = vector_store.similarity_search(
        query=user_query,
        k=5,
        filter=[{"namespace": "tenant", "allow_tokens": [tenant_id]}]
    )
    return [doc.page_content for doc in results]`,
    mcp: `# Model Context Protocol (MCP) Secure Tool Handler
from pydantic import BaseModel, Field
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("Enterprise-Cloud-Remediator")

class PodRestartRequest(BaseModel):
    namespace: str = Field(..., description="K8s Namespace")
    pod_name: str = Field(..., description="Target Pod Name")
    approved_by_user: bool = True

@mcp.tool()
def restart_k8s_pod(req: PodRestartRequest) -> str:
    """Executes sanitized container restart with RBAC verification"""
    if not req.approved_by_user:
        raise PermissionError("Human-in-the-loop approval required!")
    return f"Successfully restarted {req.pod_name} in {req.namespace}"`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeSnippet]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="agent-architecture" className="section-container">
      <div className="section-title-wrapper">
        <div className="section-badge">
          <Network size={14} />
          <span>GEN AI & AGENTIC ARCHITECTURE</span>
        </div>
        <h2 className="section-title">
          Autonomous Agent & <span className="gradient-text">RAG Showcase</span>
        </h2>
        <p className="section-subtitle">
          Interactive architecture diagrams demonstrating multi-agent orchestration, RAG retrieval pipelines, and MCP tool execution.
        </p>
      </div>

      {/* Main Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={() => setActiveTab('agents')}
          className={activeTab === 'agents' ? 'glow-btn' : 'outline-btn'}
          style={{ fontSize: '0.9rem' }}
        >
          <Network size={16} />
          <span>LangGraph Multi-Agent Workflow</span>
        </button>

        <button
          onClick={() => setActiveTab('rag')}
          className={activeTab === 'rag' ? 'glow-btn' : 'outline-btn'}
          style={{ fontSize: '0.9rem' }}
        >
          <Database size={16} />
          <span>Vertex AI Enterprise RAG Pipeline</span>
        </button>

        <button
          onClick={() => setActiveTab('mcp')}
          className={activeTab === 'mcp' ? 'glow-btn' : 'outline-btn'}
          style={{ fontSize: '0.9rem' }}
        >
          <ShieldCheck size={16} />
          <span>MCP Tool Sandbox & Guardrails</span>
        </button>

        <button
          onClick={() => setActiveTab('code')}
          className={activeTab === 'code' ? 'glow-btn' : 'outline-btn'}
          style={{ fontSize: '0.9rem' }}
        >
          <Code size={16} />
          <span>Production Python Code Snippets</span>
        </button>
      </div>

      {/* Interactive Showcase Box */}
      <div className="glass-panel" style={{ padding: '2.5rem', position: 'relative' }}>
        {activeTab === 'agents' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 className="font-heading" style={{ fontSize: '1.4rem', color: '#fff' }}>
                  Stateful Multi-Agent RCA Workflow (LangGraph / CrewAI)
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Simulate live execution of autonomous AI agents diagnosing cloud incidents.
                </p>
              </div>

              <button
                onClick={runSimulatedWorkflow}
                disabled={simulatedState === 'running'}
                className="glow-btn"
                style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}
              >
                <Play size={15} />
                <span>{simulatedState === 'running' ? 'Running Agents...' : 'Run Live Simulation'}</span>
              </button>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.2rem',
                marginBottom: '2rem',
              }}
            >
              {[
                { name: '1. Ingestion Agent', desc: 'Monitors alerts & telemetry data', icon: Cpu, color: '#818cf8' },
                { name: '2. RCA Diagnostic', desc: 'Queries vector search & past logs', icon: Database, color: '#06b6d4' },
                { name: '3. Remediation Planner', desc: 'Formulates safe tool execution', icon: Layers, color: '#a855f7' },
                { name: '4. Guardrail Inspector', desc: 'Verifies safety & PHI compliance', icon: ShieldCheck, color: '#10b981' },
              ].map((node, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '12px',
                    padding: '1.2rem',
                    textAlign: 'center',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: `rgba(99, 102, 241, 0.15)`,
                      margin: '0 auto 0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <node.icon size={22} color={node.color} />
                  </div>
                  <div className="font-heading" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', marginBottom: '0.3rem' }}>
                    {node.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{node.desc}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: '#07090e',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '1.2rem',
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-dim)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.6rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingBottom: '0.4rem',
                }}
              >
                <span>WORKFLOW EXECUTION LOG CONSOLE</span>
                <span>STATUS: {simulatedState.toUpperCase()}</span>
              </div>

              <div
                className="font-mono"
                style={{
                  fontSize: '0.82rem',
                  minHeight: '120px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                }}
              >
                {stepLogs.length === 0 ? (
                  <span style={{ color: 'var(--text-dim)' }}>
                    Click "Run Live Simulation" to observe state transitions across agents.
                  </span>
                ) : (
                  stepLogs.map((log, idx) => (
                    <div
                      key={idx}
                      style={{
                        color: log.includes('PASSED') || log.includes('Completed') ? '#34d399' : '#cbd5e1',
                      }}
                    >
                      {log}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rag' && (
          <div>
            <h3 className="font-heading" style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem' }}>
              Vertex AI & Azure OpenAI Enterprise RAG Pipeline
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
              Multi-modal document chunking, hybrid vector embeddings, semantic search, and prompt injection defense.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem',
              }}
            >
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontSize: '0.85rem', color: '#818cf8', fontWeight: 600, marginBottom: '0.5rem' }}>
                  1. CHUNKING & EMBEDDINGS
                </div>
                <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>Dynamic Chunking</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Recursive sentence-boundary splitting with metadata tags for HIPAA compliance and document lineage tracking.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontSize: '0.85rem', color: '#06b6d4', fontWeight: 600, marginBottom: '0.5rem' }}>
                  2. VECTOR RETRIEVAL
                </div>
                <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>Vertex AI Vector Search</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Hybrid dense/sparse retrieval with ScaNN index for sub-300ms vector similarity matching over 100k+ enterprise docs.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontSize: '0.85rem', color: '#a855f7', fontWeight: 600, marginBottom: '0.5rem' }}>
                  3. RE-RANKING & PROMPT
                </div>
                <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem' }}>Gemini & GPT-4o Synthesis</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Cross-encoder re-ranking followed by structured prompt synthesis with confidence scoring and source citations.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'mcp' && (
          <div>
            <h3 className="font-heading" style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem' }}>
              Model Context Protocol (MCP) & AI Guardrails
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
              Standardized tool execution framework enabling controlled agent actions, RBAC security, and hallucination reduction.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
              }}
              className="mcp-grid"
            >
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '1.5rem' }}>
                <h4 className="font-heading" style={{ color: '#34d399', fontSize: '1.1rem', marginBottom: '1rem' }}>
                  MCP Tool Registration
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <li>✔ Secure JSON-RPC 2.0 protocol over stdio/HTTP</li>
                  <li>✔ Strict JSON Schema input validation via Pydantic</li>
                  <li>✔ Fine-grained user approval & audit logging</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '1.5rem' }}>
                <h4 className="font-heading" style={{ color: '#818cf8', fontSize: '1.1rem', marginBottom: '1rem' }}>
                  Observability & Telemetry
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <li>✔ LangSmith & Langfuse prompt tracing</li>
                  <li>✔ Latency & token cost telemetry</li>
                  <li>✔ Human feedback & continuous model evaluation</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[
                  { key: 'langgraph', label: 'LangGraph Agent' },
                  { key: 'rag', label: 'Vertex AI Vector Search' },
                  { key: 'mcp', label: 'MCP FastMCP Tool' },
                ].map((s) => (
                  <button
                    key={s.key}
                    onClick={() => setActiveCodeSnippet(s.key as any)}
                    className={activeCodeSnippet === s.key ? 'glow-btn' : 'outline-btn'}
                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.82rem' }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <button onClick={handleCopyCode} className="outline-btn" style={{ padding: '0.4rem 0.85rem', fontSize: '0.82rem' }}>
                {copiedCode ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
                <span>{copiedCode ? 'Code Copied!' : 'Copy Code'}</span>
              </button>
            </div>

            <pre
              className="font-mono"
              style={{
                background: '#07090e',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '1.2rem',
                fontSize: '0.85rem',
                color: '#38bdf8',
                overflowX: 'auto',
                lineHeight: 1.6,
                maxHeight: '380px',
              }}
            >
              {codeSnippets[activeCodeSnippet]}
            </pre>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mcp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
