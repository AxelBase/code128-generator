<script>
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'What is Code 128 and Why It Matters',
      description: 'A complete introduction to the most widely used barcode symbology in logistics and retail.'
    },
    {
      href: '/blog/posts/post2',
      title: 'Code 128 vs QR Code: Which Should You Use?',
      description: 'Compare linear vs 2D barcodes for inventory, shipping labels, and product tracking.'
    },
    {
      href: '/blog/posts/post3',
      title: 'How to Encode Special Characters in Code 128',
      description: 'Learn FNC1–FNC4, GS1 formatting, and encoding non-printable characters correctly.'
    },
    {
      href: '/blog/posts/post4',
      title: 'Best Practices for Printing Code 128 Barcodes',
      description: 'Avoid common printing errors: quiet zones, resolution, contrast, and scanner compatibility.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Generating Code 128 for GS1-128 (EAN-128) Labels',
      description: 'Step-by-step guide to creating compliant shipping labels with Application Identifiers.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Using Code 128 in Healthcare and Pharmaceuticals',
      description: 'UDI, HIBC, and why Code 128 is the standard for medical device tracking worldwide.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Building Your Own Offline Barcode Generator',
      description: 'Why client-side tools like this one are perfect for privacy, speed, and offline use.'
    }
  ];
</script>

<svelte:head>
  <title>Blog | AxelBase Code 128 Insights</title>
  <meta name="description" content="Learn everything about Code 128 barcodes: best practices, GS1 standards, printing tips, and real-world applications." />
</svelte:head>

<div class="container py-5 blog-index">
  <header class="blog-header text-center">
    <h1><i class="bi bi-journal-text"></i> Blog: Code 128 Insights</h1>
    <p class="subtitle">
      Deep dives, tutorials, and best practices for generating and using Code 128 barcodes in inventory, logistics, healthcare, and beyond.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card border-0 shadow-sm h-100 text-decoration-none">
        <div class="card-body d-flex flex-column">
          <h2 class="post-title h5 fw-bold text-primary mb-3">{post.title}</h2>
          <p class="post-description text-muted flex-grow-1 small">{post.description}</p>
          <span class="read-more text-primary fw-semibold mt-3">
            Read Article →
          </span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    min-height: 80vh;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    font-weight: 800;
  }

  .subtitle {
    max-width: 760px;
    margin: 1.5rem auto 0;
    font-size: 1.15rem;
    line-height: 1.7;
    color: #555;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .post-card {
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .post-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.12) !important;
  }

  .post-card:hover .read-more {
    transform: translateX(6px);
  }

  .read-more {
    transition: transform 0.2s ease;
  }
</style>