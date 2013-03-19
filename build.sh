echo "Cleaning filesystem..."
rm -f extension/.DS_Store
rm -f extension/*~

echo "Compressing extension to hacker.zip..."
zip -r hacker extension/*

echo "Chrome extension compiled successfully to hacker.zip. Did you remember to update the version number in manifest.json?"
exit 0

