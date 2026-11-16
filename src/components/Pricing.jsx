import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Essential writing support for everyday communication.",
    features: ["Grammar and spelling checks", "Tone suggestions", "Works across your favorite apps"],
  },
  {
    name: "Pro",
    price: "$12",
    description: "More control and stronger suggestions for important work.",
    features: ["Everything in Free", "Full-sentence rewrites", "Advanced tone and clarity suggestions"],
    featured: true,
  },
];

function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="section-heading">
        <p className="eyebrow">Simple pricing</p>
        <h2>Start writing better today.</h2>
        <p>Choose the support that fits your workflow. Upgrade when you need more.</p>
      </div>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article className={`pricing-card${plan.featured ? " featured" : ""}`} key={plan.name}>
            {plan.featured && <span className="plan-badge">Recommended</span>}
            <h3>{plan.name}</h3>
            <p className="plan-description">{plan.description}</p>
            <div className="plan-price">{plan.price}<span>/ month</span></div>
            <ul>
              {plan.features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}
            </ul>
            <a className={`btn ${plan.featured ? "btn-primary" : "btn-secondary"}`} href="#get-started">Choose {plan.name}</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
