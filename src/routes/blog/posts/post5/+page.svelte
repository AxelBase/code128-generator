<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Creating GS1-128 (EAN-128) Shipping Labels in 2025 | AxelBase</title>
  <meta name="description" content="Step-by-step guide to generating fully compliant GS1-128 labels with Application Identifiers, FNC1, and check digits — no paid software needed." />
  <meta property="og:title" content="Creating GS1-128 (EAN-128) Shipping Labels in 2025" />
  <meta property="og:description" content="Free, instant, and 100% GS1-compliant barcode generation for pallets and cartons." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>GS1-128 Labels</p>
  </div>

  <article class="prose">
    <h1>Creating GS1-128 (EAN-128) Shipping Labels in 2025</h1>
    <p class="post-meta">Published: November 29, 2025</p>

    <p>GS1-128 is the global standard for logistics barcodes. This free generator creates fully compliant labels — no ZPL, no Bartender, no subscription required.</p>

    <h2>Format: ~FNC1 + Application Identifiers</h2>
    <p>Every GS1-128 barcode starts with FNC1, followed by data in parentheses:</p>
    <ul>
      <li><code>~FNC1(01)00012345678909(17)301225(10)BATCH123</code></li>
    </ul>

    <h3>Most Common AIs (Copy-Paste Ready)</h3>
    <ul>
      <li>SSCC-18: <code>~FNC1(00)001234567890123456</code></li>
      <li>GTIN + Exp + Batch: <code>~FNC1(01)01234567890128(17)301225(10)ABC123</code></li>
      <li>Serial + Lot: <code>~FNC1(01)01234567890128(21)SER123(10)LOT789</code></li>
    </ul>

    <h2>Compliance Checklist</h2>
    <ul>
      <li>FNC1 as first character</li>
      <li>Correct AI parentheses</li>
      <li>Valid check digit (automatically calculated)</li>
      <li>Minimum X-dimension: 0.25 mm</li>
      <li>Human-readable text below barcode</li>
    </ul>

    <h2>FAQ</h2>
    <details>
      <summary>Do I need a GS1 membership to use this?</summary>
      <p>No — this generator is free for all. You only need GS1 numbers for real products.</p>
    </details>
    <details>
      <summary>Will Amazon accept these labels?</summary>
      <p>Yes — if you follow their size and placement rules.</p>
    </details>

    <p class="italic-note">Stop paying $99/month for label software. Generate GS1-128 labels instantly, for free, forever.</p>
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
