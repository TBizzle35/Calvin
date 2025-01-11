// This is a simplified version of generating a profile picture using a 
name.
document.getElementById('generateBtn').addEventListener('click', 
function() {
    const name = document.getElementById('name').value.trim();
    
    if (!name) {
        alert('Please enter a name!');
        return;
    }

    // Simple placeholder image generation based on the input name.
    const hash = name.split('').reduce((hash, char) => hash + 
char.charCodeAt(0), 0);
    const avatarUrl = 
`https://api.dicebear.com/6.x/avataaars/svg?seed=${hash}`;

    // Display the generated image
    const img = document.getElementById('generatedImage');
    img.src = avatarUrl;

    // Show the result section
    document.getElementById('result').style.display = 'block';
});
document.getElementById('downloadBtn').addEventListener('click', 
function() {
    const img = document.getElementById('generatedImage');
    const link = document.createElement('a');
    link.href = img.src;
    link.download = 'generated-avatar.svg';
    link.click();
});

