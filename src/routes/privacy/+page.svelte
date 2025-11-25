<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | AxelBase Code 128 Generator</title>
  <meta name="description" content="100% client-side barcode generator. No data collection, no tracking, no cookies — your input never leaves your device." />
  <meta property="og:title" content="Privacy Policy | AxelBase Code 128 Generator" />
  <meta property="og:description" content="We collect zero data. Everything runs in your browser — always." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a> <span>/</span> <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: November 25, 2025</p>

    <p>Welcome to the <strong>AxelBase Code 128 Barcode Generator</strong> — a completely <strong>client-side</strong>, <strong>privacy-first</strong> web tool. This Privacy Policy explains how we handle your information when you use our free barcode generator. The short version: <strong>we collect nothing</strong>.</p>

    <h2>1. No Data We Do NOT Collect</h2>
    <p>This tool runs 100% in your browser using JavaScript. That means:</p>
    <ul>
      <li><strong>No text input</strong> is ever sent to our servers</li>
      <li><strong>No IP addresses</strong> are logged</li>
      <li><strong>No browser fingerprints</strong> or device info collected</li>
      <li><strong>No analytics</strong> — we don’t use Google Analytics, Plausible, or any tracking</li>
      <li><strong>No cookies</strong>, localStorage persistence, or session tracking</li>
    </ul>
    <p>Your barcode text, downloads, and settings exist only in your browser’s memory and disappear when you close the tab.</p>

    <h2>2. How the Generator Works</h2>
    <p>When you type or paste text and click <em>Generate</em>:</p>
    <ul>
      <li>All processing happens instantly in your browser using <strong>JsBarcode</strong></li>
      <li>SVG and PNG exports are created locally using Canvas and Blob APIs</li>
      <li>Nothing is uploaded, transmitted, or stored</li>
    </ul>
    <p>This design makes the tool perfect for <strong>sensitive data</strong> like serial numbers, medical codes, or proprietary identifiers.</p>

    <h2>3. Third-Party Services</h2>
    <p>We use only two CDNs for performance and reliability:</p>
    <ul>
      <li>Bootstrap 5.3.8 CSS & JS (jsDelivr CDN)</li>
      <li>Bootstrap Icons (jsDelivr CDN)</li>
    </ul>
    <p>These are static files only — <strong>no tracking scripts</strong> are loaded. No data is sent to third parties.</p>

    <h2>4. Security & Responsibility</h2>
    <p>Since no data leaves your device, the security of your input depends on your browser and device. We recommend:</p>
    <ul>
      <li>Using the latest version of Chrome, Firefox, Safari, or Edge</li>
      <li>Avoiding public or shared computers for sensitive barcodes</li>
      <li>Clearing your browser cache if needed</li>
    </ul>

    <h2>5. Children’s Privacy</h2>
    <p>This tool is safe for all ages and collects no personal information from anyone, including children under 13.</p>

    <h2>6. Changes to This Policy</h2>
    <p>We may update this policy if we add new features. Changes will be posted here with the updated effective date.</p>

    <h2>7. Contact</h2>
    <p>Questions? Open an issue on our <a href="https://github.com/axelbase/code128-generator" target="_blank" rel="noopener">GitHub repository</a>.</p>

    <p class="italic-note">
      <strong>Your privacy is not a feature — it’s the foundation.</strong> We built this tool so you never have to trust us with your data.
    </p>
  </article>
</div>

<style>
  /* Same shared styles as blog posts */
  .post-layout { max-width: 800px; padding: 2rem 1rem 4rem; margin: 0 auto; }
  .breadcrumbs { display: flex; align-items: center; gap: .5rem; margin-bottom: 1.5rem; font-size: .9rem; color: var(--text-secondary); }
  .breadcrumbs a { color: var(--accent-secondary); }
  .prose h1 { font-size: 2.6rem; color: var(--accent-secondary); }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: .5rem; }
  .prose ul { list-style-type: '→ '; padding-left: 1.5rem; }
  .prose ul li::marker { color: var(--accent-primary); }
  .italic-note { font-style: italic; text-align: center; margin-top: 3rem; color: var(--text-secondary); font-size: 1.1rem; }
  .post-meta { color: var(--text-secondary); font-size: .9rem; margin-bottom: 2rem; }
</style>