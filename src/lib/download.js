/**
 * Downloads the barcode as PNG or SVG
 * @param {SVGSVGElement} svgElement - The actual <svg> element (not a container)
 * @param {string} text - Original text for filename
 * @param {string} format - "png" or "svg"
 */
export function downloadBarcode(svgElement, text, format = "png") {
  if (!svgElement || !(svgElement instanceof SVGSVGElement)) {
    console.error('[download.js] Invalid SVG element passed');
    alert('Download failed: Invalid barcode element');
    return;
  }

  const cleanText = (text || 'barcode')
    .replace(/[^a-zA-Z0-9-_]/g, '_')
    .slice(0, 40);

  const filename = `code128_${cleanText}_${Date.now()}.${format}`;
  console.log(`[download.js] Preparing ${format.toUpperCase()} download: ${filename}`);

  try {
    if (format === 'svg') {
      const serializer = new XMLSerializer();
      let source = serializer.serializeToString(svgElement);
      
      // Fix for standalone SVG
      if (!source.match(/xmlns=\"http\:\/\/www\.w3\.org\/2000\/svg\"/)) {
        source = source.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
      }
      
      const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      triggerDownload(url, filename);
    }

    else if (format === 'png') {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Get dimensions from SVG
      const rect = svgElement.getBoundingClientRect();
      const width = rect.width || 600;
      const height = rect.height || 200;

      canvas.width = width * 2;  // 2x for crispness
      canvas.height = height * 2;

      // White background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const img = new Image();
      const svgBlob = new Blob([new XMLSerializer().serializeToString(svgElement)], {
        type: 'image/svg+xml;charset=utf-8'
      });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          const pngUrl = URL.createObjectURL(blob);
          triggerDownload(pngUrl, filename);
          URL.revokeObjectURL(pngUrl);
        }, 'image/png', 1.0);
        URL.revokeObjectURL(url);
      };

      img.onerror = (err) => {
        console.error('[download.js] PNG conversion failed:', err);
        alert('PNG download failed');
        URL.revokeObjectURL(url);
      };

      img.src = url;
    }

  } catch (err) {
    console.error('[download.js] Unexpected error:', err);
    alert('Download failed – check console');
  }
}

function triggerDownload(url, filename) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  console.log(`[download.js] ${filename} downloaded successfully`);
}