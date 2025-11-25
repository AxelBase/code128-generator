<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>What is Code 128 and Why It Still Dominates in 2025 | AxelBase</title>
  <meta name="description" content="Discover why Code 128 remains the most widely used linear barcode in logistics, healthcare, and retail — and how this free generator helps you create compliant barcodes instantly." />
  <meta property="og:title" content="What is Code 128 and Why It Still Dominates in 2025" />
  <meta property="og:description" content="The complete guide to Code 128 — the high-density barcode standard used by UPS, FedEx, Amazon, and hospitals worldwide." />
  <meta property="og:url" content="{base}/blog/posts/post1" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="What is Code 128 and Why It Still Dominates in 2025" />
  <meta name="twitter:description" content="Still the king of linear barcodes in 2025. Here’s why." />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>What is Code 128?</p>
  </div>

  <article class="prose">
    <h1>What is Code 128 and Why It Still Dominates in 2025</h1>
    <p class="post-meta">Published: November 25, 2025</p>

    <p>Introduced in 1981, <strong>Code 128</strong> is a high-density linear barcode symbology capable of encoding all 128 ASCII characters — including letters, numbers, and special symbols. Unlike older standards like Code 39, Code 128 uses three different character sets (A, B, and C) to achieve maximum data density, making it the preferred choice for logistics, healthcare, and retail worldwide.</p>

    <h2>Why Code 128 Remains Unbeatable</h2>
    <p>Despite the rise of QR codes, Code 128 continues to dominate in enterprise environments for three key reasons:</p>
    <ul>
      <li><strong>Superior data density</strong> — encodes twice as much data per inch as Code 39</li>
      <li><strong>Built-in error detection</strong> — includes a mandatory check digit</li>
      <li><strong>Global standards compliance</strong> — required for GS1-128, SSCC, HIBC, and UDI</li>
    </ul>

    <p>Major carriers like UPS, FedEx, and DHL require Code 128 for shipping labels. Hospitals use it for patient wristbands and medical device tracking (UDI). Even Amazon uses Code 128 on warehouse pallets and FBA labels.</p>

    <h3>The Three Code Sets Explained</h3>
    <p>Code 128 intelligently switches between three character sets:</p>
    <ul>
      <li><strong>Set A</strong>: Uppercase + control characters (used in GS1-128)</li>
      <li><strong>Set B</strong>: Uppercase + lowercase + standard symbols</li>
      <li><strong>Set C</strong>: Double-density numeric (00–99 pairs = 100 values per two digits)</li>
    </ul>

    <h2>Real-World Use Cases in 2025</h2>
    <p>Code 128 powers:</p>
    <ul>
      <li>SSCC-18 shipping container codes</li>
      <li>GTIN-14 product identification</li>
      <li>Patient identification wristbands</li>
      <li>Pharmaceutical unit-dose packaging</li>
      <li>Library and asset tracking</li>
    </ul>

    <h2>FAQ</h2>
    <details>
      <summary>Is Code 128 being replaced by QR codes?</summary>
      <p>No. QR codes complement Code 128. Linear barcodes are faster to scan in high-volume environments and require less precise alignment.</p>
    </details>
    <details>
      <summary>Can Code 128 encode lowercase letters?</summary>
      <p>Yes — using Code Set B. This generator automatically selects the optimal encoding.</p>
    </details>
    <details>
      <summary>Is this generator GS1-compliant?</summary>
      <p>Yes. It supports FNC1 and all Application Identifiers for GS1-128 labels.</p>
    </details>

    <p class="italic-note">Code 128 isn’t going anywhere — it’s the backbone of global logistics and healthcare identification.</p>
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
