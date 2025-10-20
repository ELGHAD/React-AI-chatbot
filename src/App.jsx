import { useEffect, useRef, useState } from "react";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

// DEV-only: direct API call from browser. For production, proxy via backend.
async function chatComplete(messages) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages,
      temperature: 0.7,
    }),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`OpenAI error ${res.status}: ${txt}`);
  }
  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "";
}

export default function App() {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are a helpful assistant." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [light, setLight] = useState(
    () => localStorage.getItem("theme") === "light"
  );

  const listRef = useRef(null);
  const inputRef = useRef(null);

  // auto-scroll to bottom on new message
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  // persist theme
  useEffect(() => {
    localStorage.setItem("theme", light ? "light" : "dark");
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  const onSend = async () => {
    if (!input.trim() || loading) return;
    if (!API_KEY) {
      setErr(
        "Missing API key. Add VITE_OPENAI_API_KEY in .env and restart the dev server."
      );
      return;
    }
    const next = [...messages, { role: "user", content: input }];
    setMessages(next);
    setInput("");
    setLoading(true);
    setErr(null);
    try {
      const answer = await chatComplete(next);
      setMessages((m) => [...m, { role: "assistant", content: answer }]);
    } catch (e) {
      setErr(String(e.message || e));
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  const visible = messages.filter((m) => m.role !== "system");

  return (
    <div className="container">
      <div className="card">
        {/* Header */}
        <div className="header">
          <div className="logo">AI</div>
          <h1>AI Chatbot</h1>
          <div className="spacer" />
          <button className="btn" onClick={() => setLight((v) => !v)}>
            {light ? "🌙 Dark" : "☀️ Light"}
          </button>
          <button
            className="btn"
            onClick={() => setMessages((m) => m.slice(0, 1))}
            disabled={!visible.length}
            title="Clear chat"
          >
            🧹 Clear
          </button>
        </div>

        {/* Messages */}
        <div className="messages" ref={listRef}>
          {visible.length === 0 && !loading && !err && (
            <div
              className="meta"
              style={{ textAlign: "center", marginTop: 16 }}
            >
              Say hi 👋 to start
            </div>
          )}

          {visible.map((m, i) => {
            const isUser = m.role === "user";
            return (
              <div key={i} className={`msgrow ${isUser ? "user" : "ai"}`}>
                <div className={`avatar ${isUser ? "user" : "ai"}`}>
                  {isUser ? "You" : "AI"}
                </div>
                <div>
                  <div className="bubble">{m.content}</div>
                  <div className="meta">{isUser ? "You" : "Assistant"}</div>
                </div>
              </div>
            );
          })}

          {loading && (
            <div className="msgrow ai">
              <div className="avatar ai">AI</div>
              <div>
                <div className="bubble">…thinking</div>
                <div className="meta">Assistant</div>
              </div>
            </div>
          )}

          {err && (
            <div className="msgrow ai">
              <div className="avatar ai">AI</div>
              <div>
                <div
                  className="bubble"
                  style={{ borderColor: "#ef4444", color: "#fecaca" }}
                >
                  {err}
                </div>
                <div className="meta">Error</div>
              </div>
            </div>
          )}
        </div>

        {/* Composer */}
        <form
          className="composer"
          onSubmit={(e) => {
            e.preventDefault();
            onSend();
          }}
        >
          <textarea
            ref={inputRef}
            className="input"
            placeholder="Ask me anything… (Enter to send, Shift+Enter for newline)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <button className="send" disabled={loading || !input.trim()}>
            Send ➤
          </button>
        </form>
      </div>
    </div>
  );
}
