import { ArrowRight, Check, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";

function Hero() {
  const [isSuggestionApplied, setIsSuggestionApplied] = useState(false);

  return (
    <section className="hero" id="top">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-label">
            <Sparkles size={14} />
            AI-powered communication
          </div>
          <h1>Great writing, <span>simplified.</span></h1>
          <p className="hero-description">
            Grammarly helps you write clearly and confidently everywhere you
            communicate. Make every message, document, and post stand out.
          </p>
          <div className="hero-buttons">
            <a className="btn btn-primary" href="#get-started">
              Try Grammarly for free
              <ArrowRight size={16} />
            </a>
            <a className="btn btn-secondary" href="#product">Learn more</a>
          </div>
          <p className="hero-note">
            <CheckCircle2 size={16} />
            No credit card required
          </p>
        </div>

        <div className="hero-visual" aria-label="Grammarly writing assistant preview">
          <div className="editor-window">
            <div className="editor-header">
              <div className="window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="editor-title">project-update.doc</span>
              <Sparkles className="editor-sparkle" size={16} />
            </div>
            <div className="editor-body">
              <div className="editor-text">
                <h3>Project update</h3>
                <p>
                  We&apos;re excited to share that our latest project is
                  <span className="highlight-green"> making great progress</span>.
                </p>
                <p>
                  The team has worked hard to deliver a clear, effective
                  solution for our customers.
                </p>
              </div>
              <div className="suggestion-card">
                <div className="suggestion-heading">
                  <Sparkles size={14} />
                  Clarity suggestion
                </div>
                <p>Make your writing more direct</p>
                <div className="suggestion-change">
                  <span className="old-text">worked hard to deliver</span>
                  <ArrowRight size={13} />
                  <span className="new-text">delivered</span>
                </div>
                <div className="suggestion-footer">
                  {isSuggestionApplied ? (
                    <span><Check size={12} /> Applied</span>
                  ) : (
                    <button className="suggestion-action" type="button" onClick={() => setIsSuggestionApplied(true)}>
                      Apply suggestion
                    </button>
                  )}
                  {isSuggestionApplied && (
                    <button className="suggestion-action" type="button" onClick={() => setIsSuggestionApplied(false)}>
                      Undo
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="editor-footer">
              <span><span className="status-dot">●</span> Grammarly is ready</span>
              <span>125 words</span>
            </div>
          </div>
          <div className="floating-card">
            <div className="floating-check"><Check size={18} /></div>
            <div>
              <strong>Writing looks great!</strong>
              <p>Clear and confident</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
