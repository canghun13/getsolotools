(function() {
  var tools = [
    { label: 'Invoice', href: '/' },
    { label: 'Receipt', href: '/receipt.html' },
    { label: 'Quote', href: '/quote.html' },
    { label: 'Hourly Rate', href: '/hourly-rate.html' },
    { label: 'Tax', href: '/tax-estimator.html' },
    { label: 'Late Fee', href: '/late-payment-fee.html' },
    { label: 'Profit', href: '/project-profit.html' },
    { label: 'Budget', href: '/budget-planner.html' },
  ];

  var dropdownItems = tools.map(function(t) {
    return '<a href="' + t.href + '">' + t.label + '</a>';
  }).join('\n');

  var mobileItems = tools.map(function(t) {
    return '<a href="' + t.href + '">' + t.label + '</a>';
  }).join('\n');

  var navHTML = `
<header>
  <a href="/" class="logo">Get<span>Solo</span>Tools</a>
  <div class="nav-desktop">
    <div class="nav-tools" id="navTools">
      <button class="nav-tools-btn" onclick="toggleTools()" aria-label="Tools menu">
        Tools
        <svg viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="nav-dropdown">
        ${dropdownItems}
      </div>
    </div>
    <a href="/blog/index.html" class="nav-blog-link">Blog</a>
  </div>
  <nav id="mainNav">
    ${mobileItems}
    <a href="/blog/index.html" class="nav-blog-link">Blog</a>
  </nav>
  <button class="hamburger" id="hamburger" onclick="toggleNav()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</header>`;

  var CSS = `
<style id="nav-styles">
  header {
    background: #ffffff;
    border-bottom: 1px solid #e8e6e0;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .logo {
    font-family: 'DM Serif Display', serif;
    font-size: 1.3rem;
    color: #1a1a1a;
    text-decoration: none;
    letter-spacing: -0.02em;
  }
  .logo span { color: #2d5be3; }
  .nav-desktop { display: flex; align-items: center; }
  .nav-tools { position: relative; }
  .nav-tools-btn {
    color: #555;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    margin-left: 1.5rem;
    transition: color 0.15s;
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .nav-tools-btn:hover { color: #2d5be3; }
  .nav-tools-btn svg { width: 10px; height: 10px; transition: transform 0.15s; }
  .nav-tools.open .nav-tools-btn svg { transform: rotate(180deg); }
  .nav-dropdown {
    display: none;
    position: absolute;
    top: calc(100% + 12px);
    left: 0;
    background: #ffffff;
    border: 1px solid #e8e6e0;
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
    padding: 8px 0;
    min-width: 160px;
    z-index: 200;
  }
  .nav-tools.open .nav-dropdown { display: block; }
  .nav-dropdown a {
    display: block;
    padding: 8px 16px;
    color: #555;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: background 0.1s, color 0.1s;
  }
  .nav-dropdown a:hover { background: #fafaf8; color: #2d5be3; }
  .nav-blog-link {
    color: #1a9e6e;
    font-weight: 600;
    text-decoration: none;
    font-size: 14px;
    margin-left: 1.5rem;
    transition: opacity 0.15s;
  }
  .nav-blog-link:hover { opacity: 0.8; }
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 4px;
    background: none;
    border: none;
  }
  .hamburger span {
    display: block;
    width: 22px;
    height: 2px;
    background: #1a1a1a;
    border-radius: 2px;
    transition: all 0.2s;
  }
  #mainNav {
    display: none;
  }
  @media (max-width: 768px) {
    .nav-desktop { display: none; }
    .hamburger { display: flex; }
    #mainNav {
      display: none;
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      background: #ffffff;
      border-bottom: 1px solid #e8e6e0;
      padding: 1rem 2rem;
      flex-direction: column;
      gap: 0;
      box-shadow: 0 8px 32px rgba(0,0,0,0.12);
      z-index: 100;
    }
    #mainNav.open { display: flex; }
    #mainNav a {
      color: #555;
      text-decoration: none;
      font-size: 15px;
      font-weight: 500;
      padding: 0.65rem 0;
      border-bottom: 1px solid #e8e6e0;
    }
    #mainNav a:last-child { border-bottom: none; }
    #mainNav .nav-blog-link { margin-left: 0; }
  }
</style>`;

  document.write(CSS + navHTML);

  window.toggleNav = function() {
    document.getElementById('mainNav').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('open');
  };
  window.toggleTools = function() {
    document.getElementById('navTools').classList.toggle('open');
  };
  document.addEventListener('click', function(e) {
    var tools = document.getElementById('navTools');
    if (tools && !tools.contains(e.target)) tools.classList.remove('open');
  });
})();
