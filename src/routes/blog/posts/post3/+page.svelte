<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How to Encode Special Characters & FNC1 in Code 128 | AxelBase</title>
  <meta name="description" content="Master FNC1, FNC2, FNC3, FNC4, and GS1 Application Identifiers in Code 128 — essential for compliant shipping and healthcare labels." />
  <meta property="og:title" content="How to Encode Special Characters & FNC1 in Code 128" />
  <meta property="og:description" content="The definitive guide to GS1-128 (EAN-128) formatting and special function characters." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Special Characters in Code 128</p>
  </div>

  <article class="prose">
    <h1>How to Encode Special Characters & FNC1 in Code 128</h1>
    <p class="post-meta">Published: November 27, 2025</p>

    <p>Code 128 isn’t just for text — it includes four special <strong>Function Characters (FNC1–FNC4)</strong> that enable powerful features like GS1 compliance and message concatenation. This generator supports all of them.</p>

    <h2>FNC1: The GS1 Magic Character</h2>
    <p>Insert <code>~FNC1</code> or <code>~202</code> at the start of your data to create a valid GS1-128 barcode. Example:</p>
    <ul>
      <li><code>~FNC1(01)00012345678909(17)301225</code> → GTIN + Expiration Date</li>
    </ul>

    <h3>Common Application Identifiers (AIs)</h3>
    <ul>
      <li><code>(01)</code> — Global Trade Item Number</li>
      <li><code>(10)</code> — Batch/Lot Number</li>
      <li><code>(17)</code> — Expiration Date</li>
      <li><code>(21)</code> — Serial Number</li>
    </ul>

    <h2>FNC2–FNC4: Advanced Features</h2>
    <p>Use <code>~FNC2</code>, <code>~FNC3</code>, or <code>~FNC4</code> for:</p>
    <ul>
      <li>Message concatenation (scanner buffering)</li>
      <li>Structured append</li>
      <li>Extended character set switching</li>
    </ul>

    <h2>Practical Examples</h2>
    <p>Copy-paste these into the generator:</p>
    <ul>
      <li>SSCC-18: <code>~FNC1(00)123456789012345678</code></li>
      <li>Pharma UDI: <code>~FNC1(01)01234567890128(17)301225(21)ABC123</code></li>
      <li>Simple text with tilde: <code>Hello~FNC1World</code></li>
    </ul>

    <h2>FAQ</h2>
    <details>
      <summary>How do I type FNC1 in this generator?</summary>
      <p>Type <code>~FNC1</code> or <code>~202</code> — both work.</p>
    </details>
    <details>
      <summary>Will regular scanners read FNC1?</summary>
      <p>Yes — if configured for GS1 mode.</p>
    </details>

    <p class="italic-note">Master FNC1 = Master global supply chain compliance.</p>
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
