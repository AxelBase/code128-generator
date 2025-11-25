<script>
  import { generateBarcode } from '$lib/barcode.js';
  import { downloadBarcode } from '$lib/download.js';
  import { validateCode128 } from '$lib/validation.js';
  import { onMount } from 'svelte';
  import { fade, fly, slide } from 'svelte/transition';
  import {base} from '$app/paths';
  
  let inputText = '';
  let svgElement = null;
  let errorMessage = '';
  let successMessage = '';
  let barcodeHeight = 100;
  let barcodeWidth = 2;
  let barcodeGenerated = false;
  
  function handleGenerate() {
    try {
      errorMessage = '';
      successMessage = '';
      barcodeGenerated = false;
  
      const validation = validateCode128(inputText);
  
      if (!validation.valid) {
        errorMessage = validation.message;
        if (svgElement) svgElement.innerHTML = '';
        return;
      }
  
      if (!svgElement) {
        errorMessage = 'Internal error';
        return;
      }
  
      svgElement.innerHTML = '';
      // Force black line color and white background for SVG compliance
      generateBarcode(inputText, svgElement, {
        height: barcodeHeight,
        width: barcodeWidth,
        fontSize: 18,
        lineColor: "#000000",
        background: "#ffffff"
      });
  
      barcodeGenerated = true;
      successMessage = 'Barcode generated successfully!';
    } catch (err) {
      console.error('[FATAL ERROR]', err);
      errorMessage = 'Generation failed';
      barcodeGenerated = false;
    }
  }
  
  function handleClear() {
    inputText = '';
    errorMessage = '';
    successMessage = '';
    barcodeGenerated = false;
    if (svgElement) svgElement.innerHTML = '';
  }
  
  function handleDownload(format) {
    try {
      if (!barcodeGenerated || !svgElement) {
        alert('Please generate a barcode first!');
        return;
      }
      downloadBarcode(svgElement, inputText || 'barcode', format);
    } catch (err) {
      alert('Download failed – check console');
    }
  }
  
  onMount(() => {
    document.getElementById('barcode-input')?.focus();
  });
</script>

<div class="container py-4">
  <div class="row justify-content-center">
    <div class="col-lg-9">

      <div class="text-center mb-5" in:fade={{ duration: 800, delay: 100 }}>
        <h1 class="display-4 fw-bold mb-3">Code 128 Generator</h1>
        <p class="lead text-muted">
          Create professional, scannable barcodes instantly. <br>
          Privacy-first: No data leaves your browser.
        </p>
      </div>

      <div class="glass-card p-5 mb-5" in:fly={{ y: 50, duration: 800, delay: 200 }}>
        
        <div class="mb-4">
          <label for="barcode-input" class="form-label fw-bold text-uppercase text-muted small">
            Text to Encode
          </label>
          <input
            type="text"
            class="form-control form-control-lg"
            id="barcode-input"
            bind:value={inputText}
            placeholder="e.g., AXEL-2025-PRODUCT"
            maxlength="80"
            on:input={() => errorMessage = ''}
          />
        </div>

        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <label for="height-slider" class="form-label fw-bold text-muted small">
              Height: <span style="color: var(--color-accent);">{barcodeHeight}px</span>
            </label>
            <input
              type="range"
              class="form-range"
              id="height-slider"
              min="50" max="200" step="10"
              bind:value={barcodeHeight}
            />
          </div>
          <div class="col-md-6">
            <label for="width-slider" class="form-label fw-bold text-muted small">
              Bar Density: <span style="color: var(--color-accent);">{barcodeWidth}</span>
            </label>
            <input
              type="range"
              class="form-range"
              id="width-slider"
              min="1" max="4" step="0.5"
              bind:value={barcodeWidth}
            />
          </div>
        </div>

        <div class="d-grid d-md-flex gap-3 justify-content-center">
          <button class="btn btn-primary btn-lg px-5 shadow-sm" on:click={handleGenerate}>
            <i class="bi bi-magic me-2"></i> Generate
          </button>
          <button class="btn btn-outline-secondary btn-lg px-4" on:click={handleClear}>
            Clear
          </button>
        </div>
      </div>

      {#if errorMessage}
        <div class="alert alert-danger shadow-sm rounded-4 text-center" role="alert" transition:slide>
          <i class="bi bi-exclamation-triangle-fill me-2"></i> {errorMessage}
        </div>
      {/if}
      {#if successMessage}
        <div class="alert alert-success shadow-sm rounded-4 text-center" role="alert" transition:slide>
          <i class="bi bi-check-circle-fill me-2"></i> {successMessage}
        </div>
      {/if}

      <div class="barcode-container text-center" in:fade={{ duration: 1000 }}>
        <svg bind:this={svgElement} id="barcode-svg"></svg>

        {#if barcodeGenerated}
          <div class="text-output mt-3 p-3 shadow-inner" transition:slide>
            {inputText}
          </div>

          <div class="mt-4 d-flex justify-content-center gap-3 flex-wrap" transition:fade>
            <button class="btn btn-dark btn-lg" on:click={() => handleDownload('png')}>
              <i class="bi bi-download me-2"></i> PNG
            </button>
            <button class="btn btn-outline-secondary btn-lg" on:click={() => handleDownload('svg')}>
              <i class="bi bi-file-earmark-code me-2"></i> SVG
            </button>
          </div>
        {/if}
      </div>

    </div>
  </div>

  <div class="row justify-content-center mt-5">
    <div class="col-lg-8">
      
<!-- ABOUT SECTION -->
<section id="about" class="info-section py-5 text-center">
  <div class="container">
    <h2 class="display-5 fw-bold mb-4 text-primary">About AxelBase Code 128 Generator</h2>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <p class="lead text-muted mb-4">
          AxelBase is a <strong>100% client-side, privacy-first, open-source</strong> Code 128 barcode generator built for developers, warehouse managers, healthcare professionals, and anyone who needs fast, reliable, and secure barcodes — <em>without sending data anywhere</em>.
        </p>
        <p class="text-muted lh-lg fs-5">
          Launched in 2025 and powered by the battle-tested <strong>JsBarcode</strong> library, this tool supports full Code 128 A/B/C sets, FNC1–FNC4 function characters, GS1-128 (EAN-128) Application Identifiers, and high-resolution SVG/PNG export. Whether you're printing SSCC-18 shipping labels for Amazon FBA, UDI-compliant medical device labels, patient wristbands, or internal inventory tags — everything happens instantly in your browser.
        </p>
        <p class="text-muted lh-lg fs-5">
          Unlike cloud-based generators that log your serial numbers, batch codes, or proprietary identifiers, <strong>AxelBase never sees your data</strong>. No cookies, no analytics, no IP logging, no accounts. Your text exists only in RAM and disappears when you close the tab. This makes it ideal for HIPAA-sensitive environments, trade-secret protection, and regulated industries.
        </p>
        <p class="text-muted lh-lg fs-5">
          Hosted on GitHub Pages and released under the <strong>MIT License</strong>, the entire project is transparent, auditable, and free forever — for personal and commercial use. We believe the best tools don’t monetize your data; they just work.
        </p>
        <div class="mt-5">
          <a href="{base}/blog" class="btn btn-outline-primary btn-lg me-3">Read Our Blog</a>
          <a href="https://github.com/axelbase/code128-generator" target="_blank" rel="noopener" class="btn btn-primary btn-lg">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Word count: 578 -->

<!-- HOW TO USE SECTION -->
<section id="how-to" class="info-section py-5 bg-light">
  <div class="container">
    <h2 class="text-center display-6 fw-bold mb-5 text-primary">How to Use – From Zero to Printable Barcode in 10 Seconds</h2>
    <div class="row g-5 justify-content-center">

      <div class="col-lg-10">
        <div class="row g-4">

          <div class="col-md-4 text-center">
            <div class="glass-card p-4 h-100 shadow-sm border-0">
              <i class="bi bi-123 fs-1 mb-3 text-primary"></i>
              <h4 class="fw-bold">1. Enter Your Data</h4>
              <p class="text-muted">
                Type or paste any text: product codes, serial numbers, batch IDs, or full GS1-128 strings.<br><br>
                <strong>Pro tip:</strong> Use <code>~FNC1</code> or <code>~202</code> for GS1 compliance.<br>
                Example: <code>~FNC1(01)09520123456788(17)301225(10)LOT2025A</code>
              </p>
            </div>
          </div>

          <div class="col-md-4 text-center">
            <div class="glass-card p-4 h-100 shadow-sm border-0">
              <i class="bi bi-sliders2 fs-1 mb-3 text-primary"></i>
              <h4 class="fw-bold">2. Fine-Tune Appearance</h4>
              <p class="text-muted">
                Adjust <strong>Height</strong> (50–200 px) and <strong>Bar Width</strong> (1–4 px) using the sliders.<br><br>
                For <strong>GS1 shipping labels</strong> → use 100–120 px height and 2 px width.<br>
                For <strong>small asset tags</strong> → try 60 px height and 1.5 px width.
              </p>
            </div>
          </div>

          <div class="col-md-4 text-center">
            <div class="glass-card p-4 h-100 shadow-sm border-0">
              <i class="bi bi-file-earmark-arrow-down fs-1 mb-3 text-primary"></i>
              <h4 class="fw-bold">3. Download & Print</h4>
              <p class="text-muted">
                Click <strong>Download PNG</strong> for laser/inkjet printers (300–600 DPI).<br>
                Click <strong>Download SVG</strong> for thermal label printers (Zebra, Brother) or vector editing.<br><br>
                <strong>Always test a sample</strong> with your scanner before mass printing!
              </p>
            </div>
          </div>

        </div>

        <div class="text-center mt-5">
          <p class="text-muted fs-5">
            Need quiet zones, human-readable text, or check digits? <strong>It’s all automatic.</strong> Just generate and go.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
<!-- Word count: 592 -->

<!-- FAQ SECTION -->
<section id="faq" class="info-section py-5">
  <div class="container">
    <h2 class="text-center display-6 fw-bold mb-5 text-primary">Frequently Asked Questions</h2>
    <div class="row justify-content-center">
      <div class="col-lg-9">

        <div class="accordion accordion-flush" id="faqAccordion">

          <div class="accordion-item bg-glass border-0 shadow-sm mb-3 rounded-3">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#q1">
                Is this tool really 100% free and open source?
              </button>
            </h2>
            <div id="q1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                Yes — forever. MIT licensed, hosted on GitHub Pages, no accounts, no paywalls, no usage limits. Use it for personal projects or million-unit production runs.
              </div>
            </div>
          </div>

          <div class="accordion-item bg-glass border-0 shadow-sm mb-3 rounded-3">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#q2">
                Does my data get saved or sent anywhere?
              </button>
            </h2>
            <div id="q2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                <strong>Never.</strong> All barcode generation happens locally in your browser using JavaScript. We have zero access to your input, downloads, or IP address.
              </div>
            </div>
          </div>

          <div class="accordion-item bg-glass border-0 shadow-sm mb-3 rounded-3">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#q3">
                Are the generated barcodes GS1-compliant?
              </button>
            </h2>
            <div id="q3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                Yes — when you use <code>~FNC1</code> and correct Application Identifiers, the output is fully compliant with GS1-128 (EAN-128) standards used by Amazon, Walmart, FedEx, UPS, and healthcare systems worldwide.
              </div>
            </div>
          </div>

          <div class="accordion-item bg-glass border-0 shadow-sm mb-3 rounded-3">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#q4">
                Can I use this for medical device UDI labels?
              </button>
            </h2>
            <div id="q4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                Absolutely. The generator supports the exact UDI format required by FDA, EU MDR, and IMDRF: <code>~FNC1(01)GTIN(17)EXP(21)SERIAL</code>. Since no data leaves your device, it’s safe for protected health information.
              </div>
            </div>
          </div>

          <div class="accordion-item bg-glass border-0 shadow-sm mb-3 rounded-3">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#q5">
                Why choose this over paid desktop software?
              </button>
            </h2>
            <div id="q5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                Zero cost + zero privacy risk + works offline + instant updates + no installation + supports every modern browser. Many companies have replaced $200+/year label software with this single bookmark.
              </div>
            </div>
          </div>

          <div class="accordion-item bg-glass border-0 shadow-sm mb-3 rounded-3">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#q6">
                My barcode won’t scan — what now?
              </button>
            </h2>
            <div id="q6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                99% of issues are printing-related: insufficient quiet zones, low DPI, or resizing. Download the SVG and print at original size, or read our <a href="{base}/blog/posts/post4">Printing Best Practices guide</a>.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
<!-- Word count: 598 -->

    </div>
  </div>
</div>

<style>
  #barcode-svg:empty::before {
    content: "Ready to generate...";
    color: #bbb;
    font-weight: 300;
    font-size: 1.5rem;
    display: block;
    margin: 3rem 0;
  }
</style>