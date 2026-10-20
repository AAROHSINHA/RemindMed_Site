import { useState } from 'react'
import appScreensImg from './assets/app-screens.jpg'
import './App.css'

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'scanning' | 'scheduling' | 'history'>('all')

  return (
    <div className="page-wrapper">
      {/* Navigation Header */}
      <header className="navbar">
        <div className="nav-container">
          <div className="brand">
            <span className="brand-dot"></span>
            <span className="brand-name">RemindMed</span>
            <span className="brand-badge">Mobile App</span>
          </div>
          <nav className="nav-links">
            <a href="#inspiration">Inspiration</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#screens">App Screens</a>
            <a href="#tech-stack">Tech Stack</a>
            <a href="#challenges">Engineering</a>
            <a href="#next">Roadmap</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-badge">AI × Healthcare Solution</div>
          <h1 className="hero-title">
            From handwritten prescriptions to smart dose reminders.
          </h1>
          <p className="hero-subtitle">
            RemindMed uses Google Cloud Vision and Gemini LLM to scan medical prescriptions, 
            convert unstructured doctor notes into editable medicine cards, and schedule timely alerts 
            so patients and loved ones never miss a dose.
          </p>

          <div className="hero-actions">
            <button 
              type="button"
              className="btn-playstore"
              onClick={() => alert('Yet to be deployed. few days more')}
            >
              View on Play Store
            </button>
          </div>

          <div className="hero-tags">
            <span className="tag">Google Cloud Vision</span>
            <span className="tag">Gemini LLM API</span>
            <span className="tag">FastAPI</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">React Native</span>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-num">01</span>
              <h3>Instant Scanning</h3>
              <p>Captures handwritten and printed prescriptions using optical text recognition.</p>
            </div>
            <div className="stat-card">
              <span className="stat-num">02</span>
              <h3>Gemini Structuring</h3>
              <p>Converts ambiguous clinical text into normalized dosage, frequency, and duration.</p>
            </div>
            <div className="stat-card">
              <span className="stat-num">03</span>
              <h3>Human-in-the-Loop</h3>
              <p>Allows patients to review, edit, and validate medicine cards before saving.</p>
            </div>
            <div className="stat-card">
              <span className="stat-num">04</span>
              <h3>Scheduled Reminders</h3>
              <p>Generates notifications synced with morning, evening, and meal timings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Screenshots Section */}
      <section id="screens" className="section screen-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">UI Design</span>
            <h2>Mobile Application Screens</h2>
            <p>A minimal, legible interface created for effortless medication management across age groups.</p>
          </div>

          <div className="screen-tabs">
            <button 
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Screens
            </button>
            <button 
              className={`tab-btn ${activeTab === 'scanning' ? 'active' : ''}`}
              onClick={() => setActiveTab('scanning')}
            >
              Scan & AI Processing
            </button>
            <button 
              className={`tab-btn ${activeTab === 'scheduling' ? 'active' : ''}`}
              onClick={() => setActiveTab('scheduling')}
            >
              Schedule & Cards
            </button>
            <button 
              className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
              onClick={() => setActiveTab('history')}
            >
              History & Tracking
            </button>
          </div>

          <div className="image-frame">
            <img 
              src={appScreensImg} 
              alt="RemindMed Mobile App Screens Sheet" 
              className="sheet-image"
            />
          </div>

          <div className="screens-feature-grid">
            <div className="feature-item">
              <h4>1. Auth & Onboarding</h4>
              <p>Streamlined login and account registration tailored for quick patient access.</p>
            </div>
            <div className="feature-item">
              <h4>2. Prescription Camera</h4>
              <p>Guided viewfinder to capture clear prescription snapshots directly on device.</p>
            </div>
            <div className="feature-item">
              <h4>3. AI Extraction Step</h4>
              <p>Real-time visual feedback while Google Cloud Vision & Gemini parse the image.</p>
            </div>
            <div className="feature-item">
              <h4>4. Review & Confirm</h4>
              <p>Editable cards for dosage, duration, and frequency to prevent errors.</p>
            </div>
            <div className="feature-item">
              <h4>5. Timing & Meal Notes</h4>
              <p>Toggle reminders linked to breakfast, dinner, or custom scheduled times.</p>
            </div>
            <div className="feature-item">
              <h4>6. Medication History</h4>
              <p>Logs taken, missed, and skipped doses for adherence tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story / Inspiration Section */}
      <section id="inspiration" className="section story-section">
        <div className="container">
          <div className="story-card">
            <div className="section-label">Background</div>
            <h2>The Inspiration Behind RemindMed</h2>
            <div className="story-content">
              <p>
                The inspiration came from the time when my grandparents lived with me. 
                My parents would constantly remind them to take their medicines, yet sometimes they would still miss their doses.
              </p>
              <p>
                Since my grandparents were quite active on their phones, I realized that a dedicated, simple app 
                could have made things much easier for them. When I thought about combining AI with healthcare, 
                this was the idea that came to mind: turning complex paper prescriptions into clear, reliable mobile routines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What it does / How it works */}
      <section id="how-it-works" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Pipeline</span>
            <h2>How RemindMed Works</h2>
            <p>From an image on paper to an active schedule in four straightforward steps.</p>
          </div>

          <div className="steps-flow">
            <div className="step-box">
              <div className="step-number">Step 01</div>
              <h3>Scan Prescription</h3>
              <p>The patient snaps a photo of their physical prescription slip or doctor note through the React Native app.</p>
            </div>

            <div className="step-arrow">→</div>

            <div className="step-box">
              <div className="step-number">Step 02</div>
              <h3>Vision OCR & Gemini LLM</h3>
              <p>Google Cloud Vision pulls raw text, and Gemini parses handwritten drug names, dosages (e.g. 500mg), frequency, and duration.</p>
            </div>

            <div className="step-arrow">→</div>

            <div className="step-box">
              <div className="step-number">Step 03</div>
              <h3>Review & Confirm</h3>
              <p>Users inspect extracted medicine cards. Any misread frequency or dosage can be verified and updated in one tap.</p>
            </div>

            <div className="step-arrow">→</div>

            <div className="step-box">
              <div className="step-number">Step 04</div>
              <h3>Schedule & Adhere</h3>
              <p>Reminders are scheduled into local notifications and synced with the backend to record daily adherence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Challenges & Learnings */}
      <section id="challenges" className="section">
        <div className="container">
          <div className="split-grid">
            <div className="card">
              <div className="section-label">Engineering Challenge</div>
              <h3>Unstructured LLM Output to Relational Database</h3>
              <p className="card-description">
                One of our biggest hurdles was converting the LLM's JSON response into the correct database structure.
                Prescriptions vary significantly in their formats, dosage instructions, and timings, making it difficult
                to establish a single universal schema.
              </p>
              <div className="solution-box">
                <strong>Our Solution:</strong>
                <p>
                  We designed a resilient verification flow where users can review, edit, validate, and confirm
                  the extracted medicine details before committing them to PostgreSQL.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="section-label">Key Takeaways</div>
              <h3>What We Learned</h3>
              <ul className="learning-list">
                <li>
                  <strong>Unstructured Text Processing:</strong> Handling inconsistent handwriting and doctor notations using combined Vision OCR + LLM prompting.
                </li>
                <li>
                  <strong>Schema Normalization:</strong> Sanitizing variable LLM JSON payloads into strict typed models with FastAPI and Pydantic.
                </li>
                <li>
                  <strong>Safe Healthcare UX:</strong> Prioritizing user verification so critical health information is always verified by human eyes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="section bg-tint">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Stack</span>
            <h2>Built With</h2>
            <p>Reliable and performant tools powering the mobile app and AI extraction backend.</p>
          </div>

          <div className="stack-grid">
            <div className="stack-card">
              <div className="stack-role">Mobile Client</div>
              <div className="stack-name">React Native</div>
              <p>Cross-platform mobile UI with camera integration and local push notification schedules.</p>
            </div>
            <div className="stack-card">
              <div className="stack-role">Backend API</div>
              <div className="stack-name">FastAPI & Python</div>
              <p>High-performance asynchronous REST endpoints orchestrating OCR, LLM prompts, and data logic.</p>
            </div>
            <div className="stack-card">
              <div className="stack-role">Database</div>
              <div className="stack-name">PostgreSQL</div>
              <p>Robust relational storage for prescriptions, medication cards, schedules, and adherence logs.</p>
            </div>
            <div className="stack-card">
              <div className="stack-role">Text Extraction</div>
              <div className="stack-name">Google Cloud Vision API</div>
              <p>High-accuracy document text and handwriting OCR from prescription photographs.</p>
            </div>
            <div className="stack-card">
              <div className="stack-role">Structured Intelligence</div>
              <div className="stack-name">Gemini LLM API</div>
              <p>Converts freeform clinical instructions into structured medication objects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section id="next" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Future Roadmap</span>
            <h2>What's Next for RemindMed</h2>
            <p>Upcoming improvements to enhance reliability, performance, and user guidance.</p>
          </div>

          <div className="roadmap-grid">
            <div className="roadmap-card">
              <span className="roadmap-badge">Phase 1</span>
              <h4>Multi-LLM Fallback & Rotation</h4>
              <p>Integrate secondary LLM providers with automatic fallback to ensure high availability during peak traffic.</p>
            </div>

            <div className="roadmap-card">
              <span className="roadmap-badge">Phase 2</span>
              <h4>Usage Credits & Rate Limiting</h4>
              <p>Introduce token budgets and scan rate limits pegged to user accounts and device endpoints.</p>
            </div>

            <div className="roadmap-card">
              <span className="roadmap-badge">Phase 3</span>
              <h4>Redis-Based Caching Layer</h4>
              <p>Cache frequent prescription patterns and duplicate queries to lower API latency and reduce processing costs.</p>
            </div>

            <div className="roadmap-card">
              <span className="roadmap-badge">Phase 4</span>
              <h4>AI Preparation Assistant</h4>
              <p>Contextual intake guidance advising users whether to take medicines with food, water, or specific intervals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div>
            <div className="footer-brand">RemindMed</div>
            <p className="footer-sub">Simple prescription scanning and dose scheduling for families.</p>
          </div>
          <div className="footer-meta">
            <span>Built with React Native, FastAPI, PostgreSQL & Gemini AI</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
