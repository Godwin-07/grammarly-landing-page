import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section demo-section" id="get-started">
      <div className="demo-copy">
        <p className="eyebrow">Ready when you are</p>
        <h2>Make your next message your best one.</h2>
        <p>Try a clearer way to write with a free Grammarly account. No credit card required.</p>
      </div>
      <div className="demo-panel">
        {submitted ? (
          <div className="success-message" role="status">
            <CheckCircle2 size={30} />
            <h3>You&apos;re on the list.</h3>
            <p>Thanks for your interest. We&apos;ll be in touch with next steps.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" placeholder="Alex Morgan" required />
            <label htmlFor="email">Work email</label>
            <input id="email" name="email" type="email" placeholder="alex@company.com" required />
            <button className="btn btn-primary" type="submit">Request a demo</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default DemoForm;
