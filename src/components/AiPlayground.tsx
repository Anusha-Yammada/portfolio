import React, { useState } from 'react';
import { AI_BOT_FAQS, PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, Send, User, Sparkles, RefreshCw, MessageSquare } from 'lucide-react';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export const AiPlayground: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'bot',
      text: `Welcome! Ask any question about Anusha's technical experience in Python backend, agentic systems, RAG pipelines, or cloud architecture.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (queryText?: string) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      let botAnswer = `Anusha Yammada is a Senior Gen AI & Python Engineer specializing in multi-agent architectures, RAG search systems, FastAPI microservices, and cloud deployments on GCP, AWS, and Azure. Feel free to reach out directly at ${PERSONAL_INFO.email}!`;

      const matchedFaq = AI_BOT_FAQS.find(
        (faq) =>
          textToSend.toLowerCase().includes(faq.category.toLowerCase()) ||
          faq.question.toLowerCase().split(' ').some((word) => word.length > 3 && textToSend.toLowerCase().includes(word))
      );

      if (matchedFaq) {
        botAnswer = matchedFaq.answer;
      }

      const botMsg: ChatMessage = {
        sender: 'bot',
        text: botAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <section id="ai-playground" className="section-container">
      <div className="section-title-wrapper">
        <div className="section-badge">
          <MessageSquare size={14} />
          <span>INTERACTIVE Q&A CONSOLE</span>
        </div>
        <h2 className="section-title">
          Interactive <span className="gradient-text">Knowledge Assistant</span>
        </h2>
        <p className="section-subtitle">
          Query Anusha's technical background, architecture patterns, or project experience in real-time.
        </p>
      </div>

      <div
        className="glass-panel"
        style={{
          maxWidth: '850px',
          margin: '0 auto',
          padding: '0',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '520px',
        }}
      >
        <div
          style={{
            padding: '1.2rem 1.5rem',
            background: 'rgba(15, 23, 42, 0.9)',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(99, 102, 241, 0.5)',
              }}
            >
              <Terminal size={18} color="#fff" />
            </div>
            <div>
              <div className="font-heading" style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>
                Technical Knowledge Console
              </div>
              <div className="font-mono" style={{ fontSize: '0.75rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }} />
                Online • Indexing Resume & Architecture Details
              </div>
            </div>
          </div>

          <button
            onClick={() => setMessages([messages[0]])}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.8rem',
            }}
          >
            <RefreshCw size={14} />
            <span>Reset</span>
          </button>
        </div>

        <div
          style={{
            padding: '0.75rem 1.2rem',
            background: 'rgba(7, 9, 14, 0.5)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
          }}
        >
          {AI_BOT_FAQS.map((faq, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(faq.question)}
              style={{
                whiteSpace: 'nowrap',
                padding: '0.3rem 0.75rem',
                borderRadius: '999px',
                background: 'rgba(99, 102, 241, 0.1)',
                border: '1px solid rgba(99, 102, 241, 0.25)',
                color: '#a5b4fc',
                fontSize: '0.78rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {faq.question}
            </button>
          ))}
        </div>

        <div
          style={{
            flex: 1,
            padding: '1.5rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            background: 'rgba(7, 9, 14, 0.4)',
          }}
        >
          {messages.map((msg, index) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: isUser ? 'flex-end' : 'flex-start',
                  gap: '0.6rem',
                }}
              >
                {!isUser && (
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: 'rgba(99, 102, 241, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Terminal size={15} color="#818cf8" />
                  </div>
                )}

                <div
                  style={{
                    maxWidth: '75%',
                    padding: '0.85rem 1.2rem',
                    borderRadius: isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: isUser
                      ? 'linear-gradient(135deg, #4f46e5 0%, #0284c7 100%)'
                      : 'rgba(30, 41, 59, 0.8)',
                    color: '#fff',
                    fontSize: '0.92rem',
                    lineHeight: 1.5,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  }}
                >
                  <div>{msg.text}</div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '0.7rem',
                      color: isUser ? 'rgba(255,255,255,0.7)' : 'var(--text-dim)',
                      textAlign: 'right',
                      marginTop: '0.4rem',
                    }}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {isUser && (
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: 'rgba(6, 182, 212, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <User size={16} color="#06b6d4" />
                  </div>
                )}
              </div>
            );
          })}

          {isTyping && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <Sparkles size={16} className="pulse-circle" color="#818cf8" />
              <span>Fetching response...</span>
            </div>
          )}
        </div>

        <div
          style={{
            padding: '1rem 1.2rem',
            background: 'rgba(15, 23, 42, 0.95)',
            borderTop: '1px solid var(--border-light)',
            display: 'flex',
            gap: '0.75rem',
          }}
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your question about Anusha's background or skills..."
            style={{
              flex: 1,
              background: '#07090e',
              border: '1px solid var(--border-light)',
              borderRadius: '8px',
              padding: '0.75rem 1rem',
              color: '#fff',
              fontSize: '0.9rem',
              outline: 'none',
            }}
          />

          <button
            onClick={() => handleSend()}
            className="glow-btn"
            style={{ padding: '0.75rem 1.2rem', borderRadius: '10px' }}
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
