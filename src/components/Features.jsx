import { FileCheck2, Gauge, MessageSquareText } from "lucide-react";

const features = [
  {
    icon: MessageSquareText,
    title: "Grammar and spelling checker",
    text: "Catch grammar, spelling, punctuation, and other writing mistakes as you type.",
  },
  {
    icon: FileCheck2,
    title: "Clarity and rewriting",
    text: "Rewrite sentences and improve word choice so your ideas are easier to understand.",
  },
  {
    icon: Gauge,
    title: "Tone detection",
    text: "See how your writing sounds to readers and adjust its tone before you send it.",
  },
];

function Features() {
  return (
    <section className="section features-section" id="product">
      <div className="section-heading">
        <p className="eyebrow">Key product features</p>
        <h2>Tools for better writing</h2>
        <p>Get practical writing support wherever you communicate.</p>
      </div>
      <div className="feature-grid">
        {features.map(({ icon: Icon, title, text }) => (
          <article className="feature-card" key={title}>
            <div className="feature-icon"><Icon size={21} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Features;
