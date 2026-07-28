const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'pdfs');
fs.mkdirSync(outDir, { recursive: true });

for (let index = 1; index <= 36; index += 1) {
  const padded = String(index).padStart(2, '0');
  const filePath = path.join(outDir, `libro-${padded}.pdf`);

  const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 44 >>
stream
BT /F1 24 Tf 72 720 Td (Documento ${padded}) Tj ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000062 00000 n 
0000000119 00000 n 
0000000207 00000 n 
0000000302 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
0
%%EOF
`;

  fs.writeFileSync(filePath, pdf, 'binary');
}

console.log(`Created ${36} placeholder PDFs in ${outDir}`);
