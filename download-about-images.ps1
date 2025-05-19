$aboutDir = "public/about"

# URLs of the images to download
$imageUrls = @(
    "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=3027&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2970&auto=format&fit=crop"
)

# File names for the downloaded images
$fileNames = @(
    "design-interior.jpg",
    "office-space.jpg"
)

# Download each image
for ($i = 0; $i -lt $imageUrls.Count; $i++) {
    $url = $imageUrls[$i]
    $filePath = Join-Path -Path $aboutDir -ChildPath $fileNames[$i]
    
    Write-Host "Downloading $url to $filePath"
    Invoke-WebRequest -Uri $url -OutFile $filePath
}

Write-Host "All about section images downloaded successfully." 