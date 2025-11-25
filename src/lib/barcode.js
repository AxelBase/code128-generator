import JsBarcode from 'jsbarcode';

export function generateBarcode(text, svgElement, options = {}) {
  if (!text || !svgElement) {
    console.error('[barcode.js] Missing text or svgElement');
    return;
  }

  try {
    console.log('[barcode.js] Generating barcode for:', text);

    const defaultOptions = {
      format: "CODE128",
      lineColor: "#000000",
      background: "#ffffff",
      width: 2,
      height: 100,
      fontSize: 16,
      textMargin: 10,
      font: "monospace",
      textAlign: "center",
      displayValue: true,
      valid: function(valid) {
        console.log('[JsBarcode] Validity check:', valid ? 'Valid' : 'Invalid');
      },
      ...options
    };

    JsBarcode(svgElement, text.trim(), defaultOptions);
    console.log('[barcode.js] Barcode successfully rendered');
  } catch (err) {
    console.error('[barcode.js] JsBarcode failed:', err);
    svgElement.innerHTML = `
      <text x="10" y="30" font-size="16" fill="red">
        Generation Error: ${err.message || 'Unknown'}
      </text>
    `;
  }
}