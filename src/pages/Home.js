import React from 'react';
import './Home.css';

const skills = [
  { category: 'Languages', items: ['C', 'Java', 'JavaScript', 'Python'] },
  { category: 'Frameworks & Tools', items: ['React.js', 'Node.js', 'JDBC', 'Git'] },
  { category: 'Databases', items: ['MySQL'] },
  { category: 'ML / Data', items: ['Clustering', 'Classification', 'Regression', 'Time Series'] },
];

function Home() {
  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__noise" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />

        <div className="hero__content">
          <div className="hero__text">
            <p className="hero__eyebrow">hey, I'm</p>
            <h1 className="hero__name">
              Beerelli<br /><span>Anvesh</span>
            </h1>
            <p className="hero__tagline">
              B.Tech CSE · Mahindra University · CGPA 9.2
            </p>
            <p className="hero__desc">
              I build things — full-stack apps, ML pipelines, the occasional
              hackathon project. Still figuring a lot out, but that's kind of the point.
            </p>
            <div className="hero__cta">
              <a href="#about" className="btn btn--primary">About Me</a>
              <a href="mailto:anvesh8102@gmail.com" className="btn btn--outline">Say Hi ↗</a>
            </div>
          </div>

          <div className="hero__photo-wrap">
            <div className="hero__photo-ring" />
            <img
              src={process.env.PUBLIC_URL + '/profile.jpg'}
              alt="Beerelli Anvesh"
              className="hero__photo"
            />
            <div className="hero__badge">
              <span>9.2</span>
              <small>CGPA</small>
            </div>
          </div>
        </div>

        <div className="hero__scroll-hint">scroll ↓</div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section__title">About Me</h2>
          <div className="about__grid">
            <div className="about__text">
              <p>
                I'm a third-year Computer Science student at Mahindra University, Hyderabad.
                I like building things that actually work — web apps, ML models, database systems.
                Not always elegant at first, but I get there.
              </p>
              <p>
                Outside academics, I'm Vice Chair of the IEEE Computer Society chapter here.
                I've won a couple of hackathons which was exciting, but mostly I just enjoy the
                process of taking an idea from zero to something you can actually click through.
              </p>
              <p>
                Currently interested in how ML and traditional software engineering can coexist
                in real-world systems — not just as separate demos, but actually integrated.
              </p>
            </div>

            <div className="about__details-card">
              <h3>Quick Info</h3>
              <ul className="details__list">
                <li>
                  <span className="details__label">📱 Phone</span>
                  <span>+91 8919873622</span>
                </li>
                <li>
                  <span className="details__label">✉️ Email</span>
                  <a href="mailto:anvesh8102@gmail.com" className="details__link">anvesh8102@gmail.com</a>
                </li>
                <li>
                  <span className="details__label">🏛️ College ID</span>
                  <a href="mailto:se23ucse035@mahindrauniversity.edu.in" className="details__link">
                    se23ucse035@mu.edu.in
                  </a>
                </li>
                <li>
                  <span className="details__label">🎓 University</span>
                  <span>Mahindra University, Hyd</span>
                </li>
                <li>
                  <span className="details__label">🏅 IEEE Role</span>
                  <span>Vice Chair, CS Chapter</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERESTS ── */}
      <section className="section interests">
        <div className="container">
          <h2 className="section__title">What I'm into</h2>
          <div className="interests__grid">
            <div className="interest-card">
              <div className="interest-card__icon">🌐</div>
              <h3>Web Development</h3>
              <p>
                Full-stack with React and Node. I like the frontend-backend handshake —
                getting data to actually show up right in a UI is oddly satisfying.
              </p>
            </div>
            <div className="interest-card">
              <div className="interest-card__icon">🤖</div>
              <h3>Machine Learning</h3>
              <p>
                Predictive modelling, anomaly detection, time-series. Mostly Python,
                mostly real datasets. I prefer applied ML over pure theory.
              </p>
            </div>
            <div className="interest-card">
              <div className="interest-card__icon">🗄️</div>
              <h3>Systems & Databases</h3>
              <p>
                Enjoy designing schemas and thinking about how data flows through an
                application. MySQL is my go-to, though I want to explore NoSQL more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section skills-section">
        <div className="container">
          <h2 className="section__title">Skills</h2>
          <div className="skills__grid">
            {skills.map((group) => (
              <div key={group.category} className="skill-group">
                <h4 className="skill-group__label">{group.category}</h4>
                <div className="skill-group__tags">
                  {group.items.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="section achievements">
        <div className="container">
          <h2 className="section__title">Awards</h2>
          <div className="achievements__list">
            <div className="achievement-item">
              <span className="achievement-item__icon">🏆</span>
              <div>
                <strong>3rd Place — AI Hackathon 2025</strong>
                <p>Ivy Software · ₹10,000 prize</p>
              </div>
            </div>
            <div className="achievement-item">
              <span className="achievement-item__icon">🥇</span>
              <div>
                <strong>Winner — Advanced Level Hackathon</strong>
                <p>Qubit Club, Mahindra University · ₹8,000 prize</p>
              </div>
            </div>
            <div className="achievement-item">
              <span className="achievement-item__icon">🎓</span>
              <div>
                <strong>Merit Scholarship</strong>
                <p>₹1 Lakh for two consecutive years based on academic performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;