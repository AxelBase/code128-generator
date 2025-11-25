<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Code 128 in Healthcare: UDI, HIBC, and Patient Safety | AxelBase</title>
  <meta name="description" content="How Code 128 enables Unique Device Identification (UDI) and patient wristbands — and why it’s still the global standard in hospitals." />
  <meta property="og:title" content="Code 128 in Healthcare: UDI, HIBC, and Patient Safety" />
  <meta property="og:description" content="The critical role of linear barcodes in medical device tracking and patient identification." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Healthcare & Code 128</p>
  </div>

  <article class="prose">
    <h1>Code 128 in Healthcare: UDI, HIBC, and Patient Safety</h1>
    <p class="post-meta">Published: November 30, 2025</p>

    <p>In hospitals, scanning speed and reliability save lives. That’s why <strong>Code 128</strong> remains the gold standard for patient wristbands and medical devices worldwide.</p>

    <h2>Unique Device Identification (UDI)</h2>
    <p>FDA, EU MDR, and IMDRF require UDI on all medical devices. Format:</p>
    <ul>
      <li><code>(01)GTIN(17)EXP(21)SERIAL</code> → All in one Code 128 barcode</li>
    </ul>

    <h3>Patient Wristbands</h3>
    <p>Every major hospital uses Code 128 for:</p>
    <ul>
      <li>Patient ID</li>
      <li>Blood type matching</li>
      <li>Medication administration (5 Rights)</li>
    </ul>

    <h2>Why Not QR Codes in Hospitals?</h2>
    <ul>
      <li>QR requires camera focus — too slow in emergencies</li>
      <li>Code 128 scans from any angle, even crumpled</li>
      <li>Laser scanners read Code 128 at 1000+ scans/minute</li>
    </ul>

    <h2>FAQ</h2>
    <details>
      <summary>Is Code 128 being phased out in healthcare?</summary>
      <p>No — it’s expanding. New UDI rules in 2026 require even more linear barcodes.</p>
    </details>

    <p class="italic-note">In healthcare, every millisecond counts. Code 128 delivers.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2, .prose h3 {
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }
  
  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose details {
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: background-color 0.2s ease;
  }
  
  .prose details[open] {
    background-color: var(--card-bg);
  }

  .prose summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--accent-secondary);
    list-style: none;
  }
  
  .prose summary::-webkit-details-marker {
    display: none;
  }
  
  .prose summary::before {
    content: '+';
    margin-right: 0.75rem;
    color: var(--accent-primary);
    font-weight: bold;
    display: inline-block;
    transition: transform 0.2s ease;
  }

  .prose details[open] summary::before {
    transform: rotate(45deg);
  }
  
  .prose details p {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 2px solid var(--accent-primary);
    color: var(--text-secondary);
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>
