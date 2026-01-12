<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { fly, slide } from 'svelte/transition';
  import { onMount } from 'svelte';

  // PayPal Configuration (kept from file 2)
  const paypalUsername = 'AxelLab427';
  const donationAmounts = [1, 3, 5, 10];

  // Buy Me a Coffee link (from file 1)
  const bmacLink = 'https://buymeacoffee.com/axelbase';

  let isDropdownOpen = false;
  let currentTheme = 'light';

  onMount(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  });

  function setTheme(theme: string) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }

  function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  // Click Outside Action
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }

  const currentYear = new Date().getFullYear();
</script>

<svelte:head>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
    rel="stylesheet"
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
  />
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
    crossorigin="anonymous">
  </script>
</svelte:head>

<div class="min-vh-100 d-flex flex-column">

  <header class="fixed-top p-3 w-100" style="pointer-events: none; z-index: 1040;">
    <nav class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center shadow-sm"
         style="pointer-events: auto; max-width: 1200px;">

      <div class="d-flex align-items-center gap-3">
        <a href="{base}/" aria-label="Home" class="d-flex align-items-center gap-2 logo-group text-decoration-none">
          <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="navbar-brand-logo" />
          <span class="fw-bold fs-5 d-none d-sm-inline" style="color: var(--color-accent);">AxelBase</span>
        </a>

        <!-- Buy Me a Coffee + Bitcoin Dropdown -->
        <div class="position-relative ms-2" use:clickOutside on:click_outside={closeDropdown}>
          <button
            class="btn btn-coffee d-flex align-items-center gap-2"
            on:click={toggleDropdown}
            aria-label="Support options"
          >
            <i class="bi bi-cup-hot-fill"></i>
            <span class="d-none d-md-inline">Support</span>
          </button>

          {#if isDropdownOpen}
            <div
              class="bmac-dropdown glass mt-2"
              transition:slide={{ duration: 220 }}
              style="min-width: 220px; right: 0; left: auto;"
            >
              <!-- Fixed amounts via Buy Me a Coffee -->
              <a href="{bmacLink}" target="_blank" rel="noopener" on:click={closeDropdown} class="bmac-option">
                <span class="amount">☕ $3</span> One Coffee
              </a>
              <a href="{bmacLink}" target="_blank" rel="noopener" on:click={closeDropdown} class="bmac-option">
                <span class="amount">☕☕ $5</span> Two Coffees
              </a>
              <a href="{bmacLink}" target="_blank" rel="noopener" on:click={closeDropdown} class="bmac-option">
                <span class="amount">☕☕☕ $10</span> Three Coffees
              </a>

              <!-- Custom amount -->
              <a
                href="{bmacLink}"
                target="_blank"
                rel="noopener"
                on:click={closeDropdown}
                class="bmac-option custom-amount"
              >
                Custom Amount
              </a>

              <!-- Bitcoin -->
              <a
                href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
                target="_blank"
                rel="noopener"
                on:click={closeDropdown}
                class="bmac-option custom-amount bitcoin-option"
              >
                ⚡ Bitcoin
              </a>
            </div>
          {/if}
        </div>
      </div>

      <div class="d-flex align-items-center gap-3">
        <ul class="nav d-none d-lg-flex align-items-center gap-3 m-0">
          <li><a class="nav-link-custom" href="{base}/">Home</a></li>
          <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
          <li><a class="nav-link-custom" href="{base}/#how-to">How to use</a></li>
          <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
          <li><a class="nav-link-custom" href="{base}/blog">Blog</a></li>
        </ul>

        <button
          class="btn btn-theme-toggle"
          on:click={toggleTheme}
          aria-label="Toggle Dark Mode"
        >
          {#if currentTheme === 'dark'}
            <i class="bi bi-sun-fill text-warning"></i>
          {:else}
            <i class="bi bi-moon-stars-fill text-primary"></i>
          {/if}
        </button>

        <button
          class="navbar-toggler d-lg-none border-0 bg-transparent"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mobileMenu"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-grid-fill fs-2" style="color: var(--color-accent);"></i>
        </button>
      </div>
    </nav>
  </header>

  <div style="height: 100px;"></div>

  <main class="flex-grow-1 position-relative" style="z-index: 1;">
    <slot />
  </main>

  <footer class="custom-footer py-4 mt-auto position-relative" style="z-index: 1030;">
    <div class="container text-center text-muted">
      <div class="mb-2">
        <span class="fw-bold" style="color: var(--color-accent);">AxelBase</span> © {currentYear}
      </div>
      <div class="d-flex justify-content-center gap-4 text-small">
        <a href="{base}/privacy" class="footer-link">Privacy Policy</a>
        <a href="{base}/terms" class="footer-link">Terms of Service</a>
      </div>
    </div>
  </footer>
</div>

<style>
  /* ── Buy Me a Coffee / Support Dropdown ── */
  .btn-coffee {
    background: linear-gradient(45deg, #FFDD00, #FFC107);
    color: #333;
    font-weight: 700;
    border: none;
    box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
    transition: all 0.25s ease;
  }

  .btn-coffee:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 193, 7, 0.5);
  }

  .bmac-dropdown {
    position: absolute;
    top: 120%;
    right: 0;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    min-width: 220px;
    z-index: 1000;
    border-radius: 16px;
    font-size: 0.95rem;
  }

  .bmac-option {
    padding: 10px 16px;
    text-decoration: none;
    color: var(--color-text-main);
    font-weight: 500;
    border-radius: 10px;
    transition: all 0.2s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bmac-option:hover {
    background: var(--color-accent);
    color: white;
  }

  .bmac-option .amount {
    font-weight: 700;
    color: #FFC107;
    min-width: 70px;
  }

  .custom-amount {
    font-weight: 600;
    color: var(--color-accent);
    border-top: 1px solid var(--glass-border);
    margin-top: 6px;
    padding-top: 12px !important;
    justify-content: center !important;
  }

  .bitcoin-option {
    color: #f7931a !important;
  }

  .bitcoin-option:hover {
    background: #f7931a !important;
    color: white !important;
  }

  /* Rest of your existing styles remain here... */
  .navbar-brand-logo {
    height: 40px;
    width: auto;
    transition: transform 0.3s ease;
  }
  .logo-group:hover .navbar-brand-logo { transform: rotate(10deg); }

  .nav-link-custom {
    color: var(--color-text-main);
    text-decoration: none;
    font-weight: 500;
    position: relative;
    padding: 5px 0;
    transition: color 0.3s;
  }
  .nav-link-custom::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--color-accent);
    transition: width 0.3s ease;
  }
  .nav-link-custom:hover { color: var(--color-accent); }
  .nav-link-custom:hover::after { width: 100%; }

  .btn-theme-toggle {
    background: rgba(0,0,0,0.05);
    border: 1px solid var(--glass-border);
    width: 40px;
    height: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .btn-theme-toggle:hover {
    background: var(--glass-border);
    transform: rotate(15deg);
  }

  .footer-link { color: var(--color-text-muted); text-decoration: none; }
  .footer-link:hover { color: var(--color-accent); }
</style>