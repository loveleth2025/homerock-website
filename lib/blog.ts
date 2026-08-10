import fs from 'fs';
import path from 'path';

const blogContentDir = path.join(process.cwd(), 'public', 'blog-content');

export async function getArticleBySlug(slug: string) {
  try {
    // Find file matching this slug
    const files = fs.readdirSync(blogContentDir);
    const file = files.find(f => f.includes(slug));
    
    if (!file) return null;
    
    const content = fs.readFileSync(path.join(blogContentDir, file), 'utf-8');
    const lines = content.split('\n');
    
    // Parse metadata
    const metadata: any = {};
    let bodyStartIndex = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('===')) {
        bodyStartIndex = i + 1;
        break;
      }
      if (line.includes(':')) {
        const [key, value] = line.split(':').map(s => s.trim());
        metadata[key.toLowerCase()] = value;
      }
    }
    
    // Get body content
    const body = lines.slice(bodyStartIndex).join('\n').trim();
    
    return {
      _id: slug,
      title: metadata.title,
      slug: metadata.slug,
      category: metadata.category,
      excerpt: metadata.excerpt,
      content: body,
      publishedAt: metadata.date,
      readTime: parseInt(metadata['read time']) || 5,
    };
  } catch (error) {
    console.error('Error reading blog file:', error);
    return null;
  }
}
