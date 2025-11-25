<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | AxelBase Code 128 Generator</title>
  <meta name="description" content="Terms of use for the free, open-source Code 128 barcode generator. No warranties, no liability, use at your own risk." />
  <meta property="og:title" content="Terms and Conditions | AxelBase Code 128 Generator" />
  <meta property="og:description" content="Free to use, no warranties, MIT licensed — full terms." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a> <span>/</span> <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>
    <p class="post-meta">Last Updated: November 25, 2025</p>

    <p>By using the <strong>AxelBase Code 128 Barcode Generator</strong> ("the Tool"), you agree to these Terms and Conditions. This is a free, open-source, client-side web application provided "as is" for personal and commercial use.</p>

    <h2>1. Acceptance of Terms</h2>
    <p>Using this website constitutes acceptance of these terms. If you do not agree, please do not use the Tool.</p>

    <h2>2. Nature of Service</h2>
    <p>The Tool generates Code 128 barcodes entirely in your browser using open-source libraries. <strong>No data is transmitted</strong> to any server. We provide no guarantees about accuracy, scan reliability, or compliance with specific standards (GS1, HIBC, UDI, etc.).</p>

    <h2>3. License to Use</h2>
    <p>You are granted a <strong>worldwide, royalty-free, perpetual license</strong> to:</p>
    <ul>
      <li>Use the Tool for personal or commercial projects</li>
      <li>Generate unlimited barcodes</li>
      <li>Download PNG and SVG files</li>
      <li>Embed or redistribute generated barcodes</li>
    </ul>
    <p>The Tool itself is released under the <strong>MIT License</strong> — see GitHub repository for details.</p>

    <h2>4. No Warranties</h2>
    <p>The Tool is provided <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> without warranties of any kind, express or implied, including but not limited to:</p>
    <ul>
      <li>Merchantability</li>
      <li>Fitness for a particular purpose</li>
      <li>Non-infringement</li>
      <li>Barcode scannability or standards compliance</li>
    </ul>
    <p>We are not liable for misprinted labels, scanning failures, or any resulting damages.</p>

    <h2>5. Limitation of Liability</h2>
    <p>In no event shall AxelBase or its contributors be liable for any direct, indirect, incidental, special, exemplary, or consequential damages arising from use of the Tool — even if advised of the possibility.</p>

    <h2>6. Accuracy of Generated Barcodes</h2>
    <p>While we use the trusted <strong>JsBarcode</strong> library and follow Code 128 specifications, <strong>you are solely responsible</strong> for verifying that generated barcodes scan correctly in your environment.</p>

    <h2>7. Changes & Availability</h2>
    <p>We may modify, suspend, or discontinue the Tool at any time without notice. The service is hosted on GitHub Pages and may occasionally be unavailable.</p>

    <h2>8. Governing Law</h2>
    <p>These terms are governed by the laws of the Republic of Cyprus, without regard to conflict of law principles.</p>

    <p class="italic-note">
      <strong>Simple rule:</strong> Use freely. Verify your barcodes. We’re not responsible if they don’t scan.
    </p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 2rem 1rem 4rem; margin: 0 auto; }
  .breadcrumbs { display: flex; align-items: center; gap: .5rem; margin-bottom: 1.5rem; font-size: .9rem; color: var(--text-secondary); }
  .breadcrumbs a { color: var(--accent-secondary); text-decoration: underline; }
  .prose h1 { font-size: 2.6rem; color: var(--accent-secondary); }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: .5rem; }
  .prose ul { list-style-type: '→ '; padding-left: 1.5rem; }
  .italic-note { font-style: italic; text-align: center; margin-top: 3rem; color: var(--text-secondary); font-size: 1.15rem; }
  .post-meta { color: var(--text-secondary); font-size: .9rem; margin-bottom: 2rem; }
</style>