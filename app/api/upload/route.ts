import { writeFile, mkdir } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import sharp from 'sharp';

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;
    const type: string | null = data.get('type') as string;
    const title: string | null = data.get('title') as string;

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Define upload directory
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'blog');

    // Create upload directory if it doesn't exist
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (err) {
      console.error('Error creating directory:', err);
      return NextResponse.json(
        { success: false, error: 'Failed to create upload directory' },
        { status: 500 }
      );
    }

    // Generate unique filename
    const timestamp = Date.now();
    const sanitizedTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const filename = `${sanitizedTitle}-${type}-${timestamp}.webp`;
    const filePath = path.join(uploadDir, filename);

    try {
      // Process and optimize image with sharp
      const processedImage = await sharp(buffer)
        .resize(1920, 1080, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: 80 })
        .toBuffer();

      // Save the processed image
      await writeFile(filePath, processedImage);

      // Return the path relative to the public directory
      return NextResponse.json({
        success: true,
        imagePath: `/uploads/blog/${filename}`
      });

    } catch (err) {
      console.error('Error processing image:', err);
      return NextResponse.json(
        { success: false, error: 'Failed to process image' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error handling upload:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to handle upload' },
      { status: 500 }
    );
  }
}

// Set the maximum file size (10MB)
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
