document.addEventListener('DOMContentLoaded', function() {
    // Your code that uses html2pdf
    var element = document.getElementById('content');
    html2pdf(element, {
        margin: 1,
        filename: 'Lebenslauf.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    });
});
