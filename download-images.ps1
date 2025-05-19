$testimonialsDir = "public/testimonials"

# URLs of the images to download
$imageUrls = @(
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    "https://images.unsplash.com/photo-1600486913747-55e5470d6f40",
    "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98"
)

# File names for the downloaded images
$fileNames = @(
    "face1.jpg",
    "face2.jpg",
    "face3.jpg"
)

# Download each image
for ($i = 0; $i -lt $imageUrls.Count; $i++) {
    $url = $imageUrls[$i]
    $filePath = Join-Path -Path $testimonialsDir -ChildPath $fileNames[$i]
    
    Write-Host "Downloading $url to $filePath"
    Invoke-WebRequest -Uri $url -OutFile $filePath
}

Write-Host "All testimonial images downloaded successfully." 