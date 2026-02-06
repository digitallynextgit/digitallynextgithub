# Image Compression Script

## PowerShell commands to compress large files using external tools

# Option 1: Using compression websites (recommended for one-time use)
# - https://squoosh.app (best for images, supports WebP)
# - https://handbrake.fr (for video compression)
# - https://ezgif.com/gif-to-webp (convert GIF to WebP)

# Option 2: Install sharp-cli for local compression
# npm install -g sharp-cli

# Compress large WebP images:
# sharp -i public/images/benefits-team.webp -o public/images/benefits-team-optimized.webp --quality 80
# sharp -i public/images/approch.webp -o public/images/approch-optimized.webp --quality 80

# Option 3: Using FFmpeg for video compression (install from https://ffmpeg.org)
# Compress video to 720p with good quality:
# ffmpeg -i public/phone.mp4 -vf scale=720:-2 -crf 28 -preset slow public/phone-compressed.mp4

# Convert GIF to WebP (much smaller):
# ffmpeg -i public/aboutus.gif -c:v libwebp -lossless 0 -q:v 75 -loop 0 public/aboutus.webp

Write-Host "Manual steps required:"
Write-Host "1. Go to https://squoosh.app"
Write-Host "2. Upload these files and compress:"
Write-Host "   - public/images/benefits-team.webp (11.6MB -> target <200KB)"
Write-Host "   - public/images/approch.webp (1.3MB -> target <150KB)"
Write-Host "3. For aboutus.gif (28MB), convert to WebP at https://ezgif.com/gif-to-webp"
Write-Host "4. For phone.mp4 (29MB), use HandBrake to compress to <2MB"
Write-Host "5. Replace favicon.ico with a proper 32x32 ICO file"
