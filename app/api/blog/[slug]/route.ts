import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  try {
    const blogContentDir = path.join(process.cwd(), 'public', 'blog-content')
    
    const files = fs.readdirSync(blogContentDir)
    const file = files.find((f: string) => f.includes(slug))
    
    if (!file) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 })
    }
    
    const content = fs.readFileSync(path.join(blogContentDir, file), 'utf-8')
    const lines = content.split('\n')
    
    const metadata: any = {}
    let bodyStartIndex = 0
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      if (line.includes('===')) {
        bodyStartIndex = i + 1
        break
      }
      if (line.includes(':')) {
        const [key, value] = line.split(':').map(s => s.trim())
        metadata[key.toLowerCase()] = value
      }
    }
    
    const body = lines.slice(bodyStartIndex).join('\n').trim()
    
    return NextResponse.json({
      _id: slug,
      title: metadata.title,
      slug: metadata.slug,
      category: metadata.category,
      excerpt: metadata.excerpt,
      content: body,
      publishedAt: metadata.date,
      readTime: parseInt(metadata['read time']) || 5,
    })
  } catch (error) {
    console.error('Error reading blog file:', error)
    return NextResponse.json({ error: 'Error reading article' }, { status: 500 })
  }
}