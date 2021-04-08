const cvs = require('csv-parser');
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'data.cvs');
const contactsReadStream = fs.createReadStream(filePath);

const parses = cvs({
  from_line: 2,
});

const parseCsv = contactsReadStream.pipe(parses);

parseCsv
  .on('data', async (line) => {
    console.log(line);
  })
  .on('end', () => {
    console.log('Arquivo CVS processado com sucesso');
  });
