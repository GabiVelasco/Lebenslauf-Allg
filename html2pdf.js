let element = document.getElementById('content'); // The content you want to save as PDF
let opt = {
    margin:       1,
    filename:     'Lebenslauf.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
    pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
};

// New Promise-based API
html2pdf().set(opt).from(element).save();
console.log("JavaScript file is connected!");
