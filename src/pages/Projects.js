import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Hostel Management System',
    period: 'Jan 2025 – Mar 2025',
    tech: ['Java', 'MySQL', 'JDBC', 'Java Swing'],
    description:
      'A desktop application I built to handle day-to-day hostel operations — things like room allotments, student records, fee tracking, and complaints. Started as a DBMS course project but ended up being something I actually put effort into making usable.',
    highlights: [
      'Room allotment with availability tracking across floors and blocks',
      'Student registration, check-in / check-out records',
      'Fee payment tracking with due-date alerts',
      'Complaint logging and status updates for wardens',
      'Admin dashboard with basic reporting',
    ],
    github: 'https://github.com/BeerelliAnvesh-git/Hostel-Management-System',
    color: '#60a5fa',
    emoji: '🏠',
    featured: true,
  },
  {
    id: 2,
    title: 'Expense Tracker',
    period: 'Oct 2024 – Dec 2024',
    tech: ['React.js', 'Node.js', 'MySQL'],
    description:
      'A full-stack app to track personal expenses. Built this to get comfortable with connecting a React frontend to a Node backend with a real database. Has login, category-wise tracking, and a monthly summary dashboard.',
    highlights: [
      'JWT-based user auth with secure login',
      'Add, edit, delete expenses with category tagging',
      'MySQL for persistent storage with relational schema',
      'Monthly breakdown chart on the dashboard',
    ],
    github: 'https://github.com/BeerelliAnvesh-git/expense-tracker',
    color: '#a78bfa',
    emoji: '💰',
  },
  {
    id: 3,
    title: 'NexaChain – Supply Chain Platform',
    period: '2025 · Nexathon Hackathon',
    tech: ['React.js', 'Algorand', 'Python', 'ML'],
    description:
      'Built this at a 24-hour hackathon with a team. Combines ML-based anomaly detection with Algorand blockchain to flag supply chain risks and keep tamper-proof audit logs. Rushed, but the core idea worked.',
    highlights: [
      'Anomaly detection model to flag supply chain irregularities',
      'Algorand smart contracts for immutable audit trails',
      'React dashboard showing risk scores in real time',
    ],
    github: 'https://github.com/BeerelliAnvesh-git/nexathon',
    color: '#fb923c',
    emoji: '⛓️',
  },
];

function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="projects-page">

      <div className="projects-page__hero">
        <div className="container">
          <p className="projects-page__eyebrow">— things I've built</p>
          <h1 className="projects-page__title">Projects</h1>
          <p className="projects-page__subtitle">
            A mix of coursework, personal exploration, and hackathon sprints.
            Nothing too fancy — just trying to build things that actually work.
          </p>
        </div>
      </div>

      <div className="projects-container container">

        {/* ── FEATURED CARD ── */}
        <div className="project-card project-card--featured" style={{ '--card-color': featured.color }}>
          <div className="project-card__top">
            <span className="project-card__emoji">{featured.emoji}</span>
            <span className="project-card__period">{featured.period}</span>
          </div>
          <h2 className="project-card__title">{featured.title}</h2>
          <p className="project-card__desc">{featured.description}</p>
          <ul className="project-card__highlights">
            {featured.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
          <div className="project-card__footer">
            <div className="project-card__tags">
              {featured.tech.map((t) => <span key={t} className="project-tag">{t}</span>)}
            </div>
            <a href={featured.github} target="_blank" rel="noreferrer" className="project-card__link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </div>

        {/* ── REGULAR CARDS ── */}
        <div className="projects-grid">
          {rest.map((p, i) => (
            <div key={p.id} className="project-card" style={{ '--card-color': p.color, animationDelay: `${i * 0.1}s` }}>
              <div className="project-card__top">
                <span className="project-card__emoji">{p.emoji}</span>
                <span className="project-card__period">{p.period}</span>
              </div>
              <h2 className="project-card__title">{p.title}</h2>
              <p className="project-card__desc">{p.description}</p>
              <ul className="project-card__highlights">
                {p.highlights.map((h, idx) => <li key={idx}>{h}</li>)}
              </ul>
              <div className="project-card__footer">
                <div className="project-card__tags">
                  {p.tech.map((t) => <span key={t} className="project-tag">{t}</span>)}
                </div>
                <a href={p.github} target="_blank" rel="noreferrer" className="project-card__link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="projects-page__cta container">
        <p>More stuff lives on my GitHub — some finished, some not.</p>
        <a href="https://github.com/BeerelliAnvesh-git" target="_blank" rel="noreferrer" className="btn btn--primary">
          See all on GitHub ↗
        </a>
      </div>

    </div>
  );
}

export default Projects;