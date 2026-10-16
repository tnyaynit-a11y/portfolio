import { useState } from "react";
import "./Portfolio.css";
import AboutSection from "./AboutSection";

/*
  Portfolio hero – React recreation.
  Put your own illustration/photo path in HERO_IMAGE (e.g. "/hero.png")
  to replace the CSS/SVG scene on the right side.
*/
const HERO_IMAGE = "/hero.png"; // copy hero.png into your /public folder

const I = ({ d, size = 22, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>{d}</svg>
);
const Download = <I size={18} d={<><path d="M12 3v12m0 0l-4-4m4 4l4-4"/><path d="M4 20h16"/></>} />;
const Arrow = <I size={20} d={<path d="M5 12h14m-6-6l6 6-6 6" />} />;
const Mail = <I size={18} d={<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>} />;
const Moon = <I size={18} d={<path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />} />;
const Sun = <I size={18} d={<><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/></>} />;

const stats = [
  { icon: <I d={<path d="M4 20V10a8 8 0 0116 0v10M4 20h16" />} />, num: "5+", label: "Projects Completed" },
  { icon: <I d={<><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></>} />, num: "1+", label: "Years Experience" },
  { icon: <I d={<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z" />} />, num: "100%", label: "Client Satisfaction" },
  { icon: <I d={<path d="M12 20s-8-5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 9c0 6-8 11-8 11z" />} />, num: "∞", label: "Passion for Tech" },
];

export default function Portfolio() {
  const [light, setLight] = useState(false);

  return (
    <div className={`pf ${light ? "light" : ""}`}>
      {/* NAVBAR */}
      <nav className="nav">
        <div className="logo">
          <span className="logo-mark">DJ</span>
          <div>
            <b>Tejal Nyaynit</b>
            <small>DESIGNER • DEVELOPER</small>
          </div>
        </div>
        <ul className="links">
          {["Home", "About", "Skills", "Projects", "Contact"].map((l, i) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className={i === 0 ? "active" : ""}>{l}</a></li>
          ))}
        </ul>
        <div className="nav-right">
          <a href="/cv.pdf" download className="btn-outline">{Download} Download CV</a>
          <button className="theme" onClick={() => setLight(!light)} aria-label="Toggle theme">
            {light ? Sun : Moon}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div>
          <p className="hello"><span>👋</span> Hello, I'm</p>
          <h1>Tejal <span>Nyaynit</span></h1>
          <h2>Designer <span>&amp;</span> Developer</h2>
          <p className="about">
            I'm a passionate designer and developer, creating digital experiences
            that are both beautiful, functional and user-friendly.
          </p>
          <div className="cta">
            <a href="#projects" className="btn-main">View My Work {Arrow}</a>
            <a href="#contact" className="btn-outline">Get In Touch {Mail}</a>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                {s.icon}
                <strong>{s.num}</strong>
                <small>{s.label}</small>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE ARTWORK (girl, laptop, code card, icons, books) */}
        <div className="scene" />
        <img className="hero-art" src={HERO_IMAGE} alt="Tejal working on a laptop" />
      </section>
      <AboutSection />
    </div>
    
  );
}
