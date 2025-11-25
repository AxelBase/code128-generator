<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Best Practices for Printing Perfect Code 128 Barcodes | AxelBase</title>
  <meta name="description" content="Avoid scanning failures: learn the exact quiet zone size, DPI, contrast ratio, and printer settings that guarantee 100% scan success." />
  <meta property="og:title" content="Best Practices for Printing Perfect Code 128 Barcodes" />
  <meta property="og:description" content="The definitive guide to printing scannable, compliant Code 128 barcodes every time." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a> <span>/</span> <p>Printing Best Practices</p>
  </div>

  <article class="prose">
    <h1>Best Practices for Printing Perfect Code 128 Barcodes</h1>
    <p class="post-meta">Published: November 28, 2025</p>

    <p>Even a perfectly generated Code 128 barcode can fail if printed incorrectly. Here are the proven rules used by Amazon, FedEx, and hospitals worldwide.</p>

    <h2>1. Quiet Zones (Mandatory!)</h2>
    <p>Code 128 requires a <strong>minimum 10× bar width</strong> blank space on both sides. For a 2-pixel-wide bar, that’s <strong>20 pixels</strong> of white space left and right. No logos, no text, no borders allowed in the quiet zone.</p>

    <h3>2. Minimum Resolution & DPI</h3>
    <ul>
      <li>Thermal printers: 203–600 DPI</li>
      <li>Laser/Inkjet: Minimum 300 DPI</li>
      <li>Never resize the SVG in Word or PowerPoint — it destroys precision</li>
    </ul>

    <h2>3. Contrast & Color</h2>
    <p>Scanners see in black and white:</p>
    <ul>
      <li>Black bars on white background = 100% success</li>
      <li>Avoid red, blue, or colored bars (many scanners use red light)</li>
      <li>Minimum contrast ratio: 80% (use a contrast checker)</li>
    </ul>

    <h3>4. Physical Size Guidelines</h3>
    <ul>
      <li>Minimum height: 15% of width or 0.25 inches (6.35 mm)</li>
      <li>Recommended bar width (X-dimension): 10–20 mil (0.25–0.50 mm)</li>
      <li>GS1-128 shipping labels: Minimum magnification 50%</li>
    </ul>

    <h2>Common Printing Mistakes (and Fixes)</h2>
    <ul>
      <li>Stretching the image → Use SVG or high-res PNG</li>
      <li>Low printer resolution → Switch to “Best” quality mode</li>
      <li>Ink spread on thermal labels → Reduce print density</li>
    </ul>

    <h2>FAQ</h2>
    <details>
      <summary>Can I print Code 128 on a home inkjet?</summary>
      <p>Yes — if you use 300+ DPI and don’t resize. Download SVG for best results.</p>
    </details>
    <details>
      <summary>Why does my scanner beep but not read?</summary>
      <p>99% of the time: missing or insufficient quiet zone.</p>
    </details>

    <p class="italic-note">Print once, scan forever — follow these rules and your barcodes will never fail.</p>
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
sw