const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', downloadFiles)

function downloadFiles() {
    const downloadUrl = 'Background.jpg'

    const a = document.createElement('a');
    a.href = downloadUrl;

    a.setAttribute('download', 'File');

    document.body.appendChild(a);

    a.click();

    document.removeChild(a);
};