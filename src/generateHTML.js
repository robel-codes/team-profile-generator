const fs = require('fs');

// writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: console.log(`

        ===================================================         
          Your team profile has been successfully created! 

          Please check out the 'index.html' in dist folder
        ===================================================
        
        `)
      });
    });
  });
};

module.exports = writeFile;
