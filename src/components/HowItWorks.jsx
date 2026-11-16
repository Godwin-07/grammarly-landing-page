import { ArrowRight, Edit3, ScanSearch, Send } from "lucide-react";

const steps = [
  { icon: Edit3, number: "01", title: "Write naturally", text: "Start with the message or document you already need to send." },
  { icon: ScanSearch, number: "02", title: "Review suggestions", text: "See simple recommendations for clarity, correctness, and tone." },
  { icon: Send, number: "03", title: "Send with confidence", text: "Apply the changes you want and share writing you feel good about." },
];

function HowItWorks() {
  return (
    <section className="section process-section" id="resources">
      <div className="section-heading section-heading-left">
        <p className="eyebrow">How it works</p>
        <h2>From first draft to final word.</h2>
        <p>Grammarly fits into the way you already communicate.</p>
      </div>
      <div className="process-grid">
        {steps.map(({ icon: Icon, number, title, text }, index) => (
          <div className="process-step" key={title}>
            <div className="process-topline">
              <span>{number}</span>
              <Icon size={20} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            {index < steps.length - 1 && <ArrowRight className="process-arrow" size={18} />}
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
