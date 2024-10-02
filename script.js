function generateCoverPage() {
    const logoFile = document.getElementById('logo').files[0];
    const courseTitle = document.getElementById('courseTitle').value;
    const courseCode = document.getElementById('courseCode').value;
    const submittedBy = document.getElementById('submittedBy').value;
    const idNo = document.getElementById('idNo').value;
    const section = document.getElementById('section').value;
    const department = document.getElementById('department').value;
    const submittedTo = document.getElementById('submittedTo').value;
    const submissionDate = document.getElementById('submissionDate').value;

    let logoURL = '';
    if (logoFile) {
        const reader = new FileReader();
        reader.onloadend = function () {
            logoURL = reader.result;
            renderCoverPage(logoURL);
        };
        reader.readAsDataURL(logoFile);
    } else {
        renderCoverPage(logoURL);
    }
}

function previewLogo() {
    const file = document.getElementById('logo').files[0];
    const logoPreview = document.getElementById('logoPreview');
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            logoPreview.src = e.target.result;
        };
        
        reader.readAsDataURL(file);
    } else {
        logoPreview.src = "";
    }
}

function renderCoverPage(logoURL) {
    const courseTitle = document.getElementById('courseTitle').value;
    const courseCode = document.getElementById('courseCode').value;
    const submittedBy = document.getElementById('submittedBy').value;
    const idNo = document.getElementById('idNo').value;
    const section = document.getElementById('section').value;
    const department = document.getElementById('department').value;
    const submittedTo = document.getElementById('submittedTo').value;
    const submissionDate = document.getElementById('submissionDate').value;

    const coverPageHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cover Page</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin: 0;
                    padding: 20px;
                }
                img {
                    max-width: 200px;
                    display: block;
                    margin: 0 auto;
                }
                p {
                    font-size: 16px;
                    margin: 10px 0;
                }
                h2 {
                    margin-bottom: 20px;
                }
                .container {
                    border: 1px solid #ddd;
                    padding: 20px;
                    border-radius: 8px;
                    background: #f9f9f9;
                    display: inline-block;
                    text-align: center;
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Cover Page</h2>
                <img src="${logoURL}" alt="Logo">
                <p><strong>Course Title:</strong> ${courseTitle}</p>
                <p><strong>Course Code:</strong> ${courseCode}</p>
                <p><strong>Submitted by:</strong> ${submittedBy}</p>
                <p><strong>ID No.:</strong> ${idNo}</p>
                <p><strong>Section:</strong> ${section}</p>
                <p><strong>Department:</strong> ${department}</p>
                <p><strong>Submitted To:</strong> ${submittedTo}</p>
                <p><strong>Date of Submission:</strong> ${submissionDate}</p>
            </div>
        </body>
        </html>
    `;

    // Show the cover page output on the screen
    const coverPageOutput = document.getElementById('coverPageOutput');
    coverPageOutput.innerHTML = coverPageHTML;

    // Show the download button
    document.getElementById('downloadButton').style.display = 'block';
}

function downloadCoverPage() {
    const logoFile = document.getElementById('logo').files[0];
    const courseTitle = document.getElementById('courseTitle').value;
    const courseCode = document.getElementById('courseCode').value;
    const submittedBy = document.getElementById('submittedBy').value;
    const idNo = document.getElementById('idNo').value;
    const section = document.getElementById('section').value;
    const department = document.getElementById('department').value;
    const submittedTo = document.getElementById('submittedTo').value;
    const submissionDate = document.getElementById('submissionDate').value;

    let logoURL = '';
    if (logoFile) {
        const reader = new FileReader();
        reader.onloadend = function () {
            logoURL = reader.result;
            createDownloadableFile(logoURL);
        };
        reader.readAsDataURL(logoFile);
    } else {
        createDownloadableFile(logoURL);
    }
}
function createDownloadableFile(logoURL) {
    const topic = document.getElementById('topic').value;
    const courseTitle = document.getElementById('courseTitle').value;
    const courseCode = document.getElementById('courseCode').value;
    const submittedBy = document.getElementById('submittedBy').value;
    const idNo = document.getElementById('idNo').value;
    const section = document.getElementById('section').value;
    const department = document.getElementById('department').value;
    const submittedTo = document.getElementById('submittedTo').value;
    const submissionDate = document.getElementById('submissionDate').value;

    const coverPageHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cover Page</title>
            <style>
                @page {
                    size: A4;
                    margin: 20mm;
                }
                body {
                    font-family: 'Arial', sans-serif;
                    text-align: center;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }
                .container {
                    background: #ffffff;
                    border: 2px solid #e0e0e0;
                    border-radius: 10px;
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
                    width: 100%;
                    max-width: 210mm;
                    margin: 0 auto;
                    padding: 20px;
                    box-sizing: border-box;
                }
                .logo {
                    max-width: 200px;
                    margin: 20px auto;
                }
                .topic {
                    font-weight: bold;
                    font-size: 24px;
                    margin: 20px 0;
                    text-decoration: underline;
                }
                p {
                    font-size: 16px;
                    margin: 10px 0;
                    color: #555;
                }
                p strong {
                    color: #333;
                }
                .footer {
                    margin-top: 30px;
                    font-size: 14px;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <img src="${logoURL}" alt="Logo" class="logo">
                <div class="topic">${topic}</div>
                <p><strong>Course Title:</strong> ${courseTitle}</p>
                <p><strong>Course Code:</strong> ${courseCode}</p>
                <p><strong>Submitted by:</strong> ${submittedBy}</p>
                <p><strong>ID No.:</strong> ${idNo}</p>
                <p><strong>Section:</strong> ${section}</p>
                <p><strong>Department:</strong> ${department}</p>
                <p><strong>Submitted To:</strong> ${submittedTo}</p>
                <p><strong>Date of Submission:</strong> ${submissionDate}</p>
                <div class="footer">
                    Generated by Cover Page Generator
                </div>
            </div>
        </body>
        </html>
    `;

    const blob = new Blob([coverPageHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cover_page.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
