* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Toned down green colors to match the image */
    --primary-green: #4ade80;
    --primary-green-light: #65d999;
    --primary-green-dark: #22c55e;
    --accent-green: #16a34a;
    --success-green: #4ade80;
    --warning-orange: #ff9500;
    --error-red: #ff4757;
    
    /* Dark theme backgrounds from reference */
    --bg-primary: #1a1d29;
    --bg-secondary: #1e2139;
    --bg-tertiary: #242940;
    --bg-dark: #151823;
    --bg-darker: #0f1115;
    --bg-card: #1e2139;
    --bg-section-alt: #1a1d29;
    
    /* Terminal colors adapted to match */
    --terminal-bg: #0f0f23;
    --terminal-surface: #1a1a2e;
    --terminal-border: #16213e;
    --terminal-text: #e2e8f0;
    --terminal-muted: #64748b;
    --terminal-accent: var(--primary-green);
    --terminal-success: var(--success-green);
    --terminal-warning: var(--warning-orange);
    --terminal-error: var(--error-red);
    
    /* Text colors from reference */
    --text-primary: #ffffff;
    --text-secondary: #a8b2d1;
    --text-muted: #6c7293;
    --text-white: #ffffff;
    --text-dark: #151823;
    
    /* Gradients using toned down green theme */
    --gradient-primary: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
    --gradient-secondary: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
    --gradient-accent: linear-gradient(135deg, #65d999 0%, #4ade80 100%);
    --gradient-text: linear-gradient(135deg, #4ade80 0%, #65d999 100%);
    --gradient-bg: linear-gradient(135deg, #1a1d29 0%, #1e2139 100%);
    
    /* Shadows with toned down green accent */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --shadow-green: 0 20px 25px -5px rgba(74, 222, 128, 0.1), 0 10px 10px -5px rgba(74, 222, 128, 0.04);
    --glow-green: 0 0 20px rgba(74, 222, 128, 0.2);
    
    /* Transitions */
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-fast: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Border radius */
    --radius-sm: 0.375rem;
    --radius: 0.5rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-2xl: 1.5rem;
    --radius-3xl: 2rem;
}

/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap');

body {
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background: var(--bg-primary);
    overflow-x: hidden;
    font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.mono {
    font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
    background: var(--primary-green);
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--primary-green-light);
}

/* Container */
.container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(26, 29, 41, 0.8);
    backdrop-filter: blur(12px) saturate(180%);
    border-bottom: 1px solid rgba(74, 222, 128, 0.2);
    z-index: 50;
    transition: var(--transition);
}

.navbar.scrolled {
    background: rgba(26, 29, 41, 0.95);
    box-shadow: var(--shadow-lg);
    border-bottom-color: rgba(74, 222, 128, 0.4);
}

.nav-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0.75rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-text {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary-green);
    letter-spacing: -0.025em;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding: 0;
}

.nav-link {
    text-decoration: none;
    color: var(--text-secondary);
    font-weight: 500;
    font-size: 0.9rem;
    transition: var(--transition-fast);
    position: relative;
    padding: 0.5rem 0;
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary-green);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-green);
    transition: var(--transition-fast);
    border-radius: 1px;
    box-shadow: var(--glow-green);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.nav-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: var(--radius);
    transition: var(--transition-fast);
}

.nav-toggle:hover {
    background: rgba(74, 222, 128, 0.1);
}

.bar {
    width: 20px;
    height: 2px;
    background: var(--text-primary);
    margin: 2px 0;
    transition: var(--transition-fast);
    border-radius: 1px;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: var(--gradient-bg);
    position: relative;
    overflow: hidden;
    padding-top: 5rem;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 20% 80%, rgba(74, 222, 128, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(101, 217, 153, 0.04) 0%, transparent 50%);
    pointer-events: none;
}

.hero-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
    position: relative;
    z-index: 2;
}

.hero-content {
    max-width: 600px;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(74, 222, 128, 0.1);
    border: 1px solid rgba(74, 222, 128, 0.2);
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--primary-green);
    margin-bottom: 1.5rem;
    backdrop-filter: blur(8px);
}

.hero-badge::before {
    content: '🔒';
    font-size: 1rem;
}

.hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
    letter-spacing: -0.025em;
}

.hero-title .gradient-text {
    background: var(--gradient-text);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-subtitle {
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.7;
    max-width: 500px;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius-lg);
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.btn-primary {
    background: var(--gradient-primary);
    color: var(--text-dark);
    box-shadow: var(--shadow-green);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--glow-green);
}

.btn-secondary {
    background: transparent;
    color: var(--primary-green);
    border: 2px solid var(--primary-green);
}

.btn-secondary:hover {
    background: var(--primary-green);
    color: var(--text-dark);
    box-shadow: var(--glow-green);
}

/* Terminal Command Line */
.terminal-command {
    background: var(--terminal-bg);
    border: 1px solid var(--terminal-border);
    border-radius: var(--radius-lg);
    padding: 1rem 1.25rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.875rem;
    color: var(--terminal-text);
    box-shadow: var(--shadow-xl);
    backdrop-filter: blur(8px);
}

.terminal-command .prompt {
    color: var(--primary-green);
    margin-right: 0.5rem;
}

.terminal-command .command {
    color: var(--primary-green-light);
}

/* Warp Terminal Window */
.warp-terminal {
    background: var(--terminal-surface);
    border: 1px solid var(--terminal-border);
    border-radius: var(--radius-2xl);
    box-shadow: var(--shadow-2xl);
    overflow: hidden;
    position: relative;
    backdrop-filter: blur(20px);
    max-width: 700px;
}

.warp-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background: var(--terminal-bg);
    border-bottom: 1px solid var(--terminal-border);
}

.warp-controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.warp-dots {
    display: flex;
    gap: 0.5rem;
}

.warp-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.warp-dot.red { background: var(--error-red); }
.warp-dot.yellow { background: var(--warning-orange); }
.warp-dot.green { background: var(--success-green); }

.warp-title {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--terminal-text);
    font-family: 'JetBrains Mono', monospace;
}

.warp-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    color: var(--terminal-muted);
}

.warp-tabs {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    background: var(--terminal-bg);
    border-bottom: 1px solid var(--terminal-border);
    min-height: 2.5rem;
}

.warp-tab {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    color: var(--terminal-muted);
    background: var(--terminal-surface);
    border-radius: 0.375rem 0.375rem 0 0;
    margin-right: 0.25rem;
    font-family: 'JetBrains Mono', monospace;
    transition: var(--transition-fast);
}

.warp-tab.active {
    color: var(--terminal-text);
    background: var(--terminal-bg);
}

.warp-tab:hover {
    color: var(--primary-green);
}

.warp-content {
    padding: 1.25rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    line-height: 1.5;
    min-height: 350px;
    background: var(--terminal-bg);
    color: var(--terminal-text);
}

.terminal-line {
    margin-bottom: 0.25rem;
    display: flex;
    align-items: flex-start;
}

.terminal-prompt {
    color: var(--terminal-muted);
    margin-right: 0.5rem;
    flex-shrink: 0;
}

.terminal-path {
    color: var(--primary-green);
    margin-right: 0.5rem;
}

.terminal-git {
    color: var(--success-green);
    margin-right: 0.5rem;
}

.terminal-cmd {
    color: var(--terminal-text);
}

.terminal-output {
    color: var(--terminal-muted);
    margin-left: 1rem;
}

.terminal-success {
    color: var(--success-green);
}

.terminal-warning {
    color: var(--warning-orange);
}

.terminal-error {
    color: var(--error-red);
}

.terminal-cursor {
    display: inline-block;
    width: 8px;
    height: 16px;
    background: var(--primary-green);
    margin-left: 2px;
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

/* Sections */
.section {
    padding: 6rem 0;
    position: relative;
}

.section:nth-child(even) {
    background: var(--bg-section-alt);
}

.section-title {
    font-size: clamp(2.25rem, 4vw, 3.5rem);
    font-weight: 900;
    text-align: center;
    margin-bottom: 1rem;
    color: var(--text-primary);
    letter-spacing: -0.025em;
}

.section-title .gradient-text {
    background: var(--gradient-text);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.section-subtitle {
    font-size: 1.125rem;
    color: var(--text-secondary);
    text-align: center;
    margin-bottom: 5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
}

/* Cards */
.card {
    background: var(--bg-card);
    border: 1px solid rgba(74, 222, 128, 0.1);
    border-radius: var(--radius-2xl);
    padding: 2rem;
    box-shadow: var(--shadow);
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-primary);
    opacity: 0;
    transition: var(--transition);
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-green);
    border-color: rgba(74, 222, 128, 0.3);
}

.card:hover::before {
    opacity: 1;
}

/* Grid layouts */
.grid {
    display: grid;
    gap: 2rem;
}

.grid-2 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
.grid-3 { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
.grid-4 { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }

/* Stats */
.stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin: 2.5rem 0;
}

.stat {
    text-align: center;
    padding: 2rem 1.5rem;
    background: var(--bg-card);
    border: 1px solid rgba(74, 222, 128, 0.1);
    border-radius: var(--radius-2xl);
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.stat::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gradient-primary);
    opacity: 0;
    transition: var(--transition);
}

.stat:hover {
    transform: translateY(-4px);
    border-color: rgba(74, 222, 128, 0.3);
    box-shadow: var(--shadow-green);
}

.stat:hover::before {
    opacity: 1;
}

.stat-number {
    font-size: 3rem;
    font-weight: 900;
    color: var(--primary-green);
    display: block;
    margin-bottom: 0.5rem;
    font-family: 'JetBrains Mono', monospace;
    text-shadow: var(--glow-green);
}

.stat-label {
    font-size: 0.875rem;
    color: var(--text-secondary);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

/* Skills */
.skill-category h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.skill-category i {
    color: var(--primary-green);
    font-size: 1.5rem;
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.skill-tag {
    padding: 0.5rem 1rem;
    background: rgba(74, 222, 128, 0.1);
    border: 1px solid rgba(74, 222, 128, 0.2);
    border-radius: var(--radius-lg);
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--primary-green);
    transition: var(--transition-fast);
    font-family: 'JetBrains Mono', monospace;
}

.skill-tag:hover {
    background: var(--primary-green);
    color: var(--text-dark);
    transform: translateY(-2px);
    border-color: var(--primary-green);
    box-shadow: var(--glow-green);
}

/* Timeline */
.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 2rem;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--gradient-primary);
    border-radius: 1.5px;
    box-shadow: var(--glow-green);
}

.timeline-item {
    position: relative;
    margin-bottom: 3rem;
    padding-left: 5rem;
}

.timeline-dot {
    position: absolute;
    left: 1.25rem;
    top: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    background: var(--primary-green);
    border: 4px solid var(--bg-primary);
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(74, 222, 128, 0.2), var(--glow-green);
}

.timeline-content {
    background: var(--bg-card);
    border: 1px solid rgba(74, 222, 128, 0.1);
    border-radius: var(--radius-2xl);
    padding: 2rem;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.timeline-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gradient-primary);
    opacity: 0;
    transition: var(--transition);
}

.timeline-content:hover {
    transform: translateX(0.5rem);
    border-color: rgba(74, 222, 128, 0.3);
    box-shadow: var(--shadow-green);
}

.timeline-content:hover::before {
    opacity: 1;
}

.timeline-date {
    font-size: 0.8rem;
    color: var(--primary-green);
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-family: 'JetBrains Mono', monospace;
}

.timeline-title {
    font-size: 1.375rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
}

.timeline-company {
    font-size: 1rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
}

.timeline-description {
    color: var(--text-secondary);
    line-height: 1.6;
}

.timeline-description ul {
    margin: 1rem 0;
    padding-left: 1.25rem;
}

.timeline-description li {
    margin-bottom: 0.5rem;
    position: relative;
}

.timeline-description li::marker {
    color: var(--primary-green);
}

/* Contact */
.contact-info {
    display: grid;
    gap: 1.25rem;
    margin-bottom: 2rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    background: var(--bg-card);
    border: 1px solid rgba(74, 222, 128, 0.1);
    border-radius: var(--radius-2xl);
    transition: var(--transition-fast);
    position: relative;
    overflow: hidden;
}

.contact-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gradient-primary);
    opacity: 0;
    transition: var(--transition);
}

.contact-item:hover {
    border-color: rgba(74, 222, 128, 0.3);
    transform: translateY(-2px);
    box-shadow: var(--shadow-green);
}

.contact-item:hover::before {
    opacity: 1;
}

.contact-item i {
    color: var(--primary-green);
    font-size: 1.25rem;
    width: 1.5rem;
    text-align: center;
}

/* Social Links */
.social-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    background: var(--bg-card);
    border: 2px solid rgba(74, 222, 128, 0.2);
    border-radius: var(--radius-lg);
    color: var(--primary-green);
    text-decoration: none;
    transition: var(--transition-fast);
    font-size: 1.25rem;
}

.social-link:hover {
    background: var(--primary-green);
    border-color: var(--primary-green);
    color: var(--text-dark);
    transform: translateY(-2px);
    box-shadow: var(--glow-green);
}

/* Footer */
.footer {
    background: var(--bg-darker);
    border-top: 1px solid var(--primary-green);
    padding: 3rem 0;
    text-align: center;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.footer-command {
    background: var(--terminal-bg);
    border: 1px solid var(--terminal-border);
    border-radius: var(--radius-lg);
    padding: 0.75rem 1rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: var(--terminal-text);
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        top: 4.5rem;
        left: -100%;
        width: 100%;
        height: calc(100vh - 4.5rem);
        background: rgba(26, 29, 41, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 2.5rem 0;
        border-right: 1px solid rgba(74, 222, 128, 0.2);
        transition: var(--transition);
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-toggle {
        display: flex;
    }

    .hero-container {
        grid-template-columns: 1fr;
        gap: 3rem;
        text-align: left;
    }

    .warp-terminal {
        max-width: 100%;
        margin: 0;
    }

    .section {
        padding: 5rem 0;
    }

    .timeline {
        padding-left: 0;
    }

    .timeline::before {
        left: 1rem;
    }

    .timeline-item {
        padding-left: 3rem;
    }

    .timeline-dot {
        left: 0.5rem;
    }

    .footer-content {
        flex-direction: column;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 1rem;
    }

    .nav-container {
        padding: 0.75rem 1rem;
    }

    .hero-title {
        font-size: 2.25rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .btn {
        padding: 0.75rem 1.25rem;
        font-size: 0.875rem;
    }

    .card {
        padding: 1.5rem;
    }

    .warp-content {
        padding: 1rem;
        font-size: 0.75rem;
    }

    .warp-header {
        padding: 0.625rem 0.75rem;
    }

    .warp-tabs {
        padding: 0 0.75rem;
    }
}

/* Additional green glow animations */
@keyframes greenGlow {
    0%, 100% { 
        box-shadow: 0 0 5px rgba(74, 222, 128, 0.2); 
    }
    50% { 
        box-shadow: 0 0 20px rgba(74, 222, 128, 0.4), 0 0 30px rgba(74, 222, 128, 0.2); 
    }
}

.animate-glow {
    animation: greenGlow 2s ease-in-out infinite;
}

/* Text selection */
::selection {
    background: rgba(74, 222, 128, 0.3);
    color: var(--text-primary);
}

::-moz-selection {
    background: rgba(74, 222, 128, 0.3);
    color: var(--text-primary);
}
