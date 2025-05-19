# Create directory if it doesn't exist
New-Item -ItemType Directory -Force -Path "public\home"

# Download service images
$imageUrls = @{
    "webflow-enterprise.png" = "https://placehold.co/350x300/212B30/FFFFFF?text=Webflow+Enterprise&font=montserrat"
    "shopify-store.png" = "https://placehold.co/350x300/212B30/FFFFFF?text=Shopify+Store&font=montserrat"
    "figma-design.png" = "https://placehold.co/350x300/212B30/FFFFFF?text=Figma+Design&font=montserrat"
    "wordpress-revamp.png" = "https://placehold.co/350x300/212B30/FFFFFF?text=WordPress+Revamp&font=montserrat"
    "wized-apps.png" = "https://placehold.co/350x300/212B30/FFFFFF?text=Wized+Apps&font=montserrat"
}

foreach ($image in $imageUrls.GetEnumerator()) {
    $outputPath = "public\home\$($image.Key)"
    Write-Host "Downloading $($image.Value) to $outputPath"
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
}

Write-Host "All service images downloaded successfully!" 