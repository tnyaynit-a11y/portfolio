const cards = [
  { icon: "</>", title: "Frontend", text: "Responsive, pixel-perfect UIs" },
  { icon: "⚙", title: "Backend", text: "APIs, auth and server logic" },
  { icon: "▤", title: "Database", text: "Clean, scalable data design" },
];

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about__inner">
        {/* Left: code editor */}
        <div className="about__visual">
          <div className="editor">
            <div className="editor__bar">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
              <span className="editor__file">about.js</span>
            </div>
            <pre className="editor__code">
              <code>
                <span className="c-key">const</span> <span className="c-var">developer</span> = {"{"}
                {"\n  "}name: <span className="c-str">"Tejal Nyaynit"</span>,
                {"\n  "}role: <span className="c-str">"Full Stack Developer"</span>,
                {"\n  "}frontend: [<span className="c-str">"React"</span>, <span className="c-str">"JavaScript"</span>],
                {"\n  "}backend: [<span className="c-str">"Python"</span>, <span className="c-str">"PHP"</span>],
                {"\n  "}database: [<span className="c-str">"MongoDB"</span>, <span className="c-str">"MySQL"</span>],
                {"\n  "}<span className="c-fn">build</span>() {"{"}
                {"\n    "}<span className="c-key">return</span> <span className="c-str">"End-to-end products"</span>;
                {"\n  }"}
                {"\n};"}
              </code>
            </pre>
          </div>

          <span className="badge badge--react">⚛ React</span>
          <span className="badge badge--node">🟢 Node.js</span>
          <span className="badge badge--mongo">🗄 MongoDB</span>
        </div>

        {/* Right: content */}
        <div className="about__content">
          <span className="about__tag">👋 About Me</span>
          <h2 className="about__title">
            I'm a <span className="accent">Full Stack</span> Developer
          </h2>
          <p>
            I build complete web applications, from the interface people see to
            the server and database behind it. I turn ideas into fast, secure
            and easy-to-use products.
          </p>
          <p>
            I write clean code, design simple APIs and care about performance,
            so each project is reliable and ready to grow.
          </p>

          <div className="about__cards">
            {cards.map((c) => (
              <div className="about-card" key={c.title}>
                <div className="about-card__icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </div>
            ))}
          </div>

          <div className="about__actions">
            <a href="/cv.pdf" download className="btn-main">Download CV</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
