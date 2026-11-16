import { X } from "lucide-react";
import { useState } from "react";

function LoginModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="login-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" aria-label="Close login form" onClick={onClose}>
          <X size={20} />
        </button>
        {submitted ? (
          <div className="success-message">
            <h2 id="login-title">You&apos;re signed in.</h2>
            <p>This demo does not connect to a backend, but your form was validated successfully.</p>
            <button className="btn btn-primary" type="button" onClick={onClose}>Continue</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <p className="eyebrow">Welcome back</p>
            <h2 id="login-title">Log in to Grammarly</h2>
            <p className="modal-description">This is a demo form to explore the login interaction.</p>
            <label htmlFor="login-email">Email</label>
            <input id="login-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
            <label htmlFor="login-password">Password</label>
            <input id="login-password" name="password" type="password" placeholder="At least 8 characters" minLength="8" autoComplete="current-password" required />
            <button className="btn btn-primary" type="submit">Log in</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginModal;
