const fs = require('fs');

const configPath = './.env';
const consoleErrorsPath = './console-errors.json';

try {
  if (fs.existsSync(configPath)) {
    // file exists
    console.log("Skips configuration as file already exists, run 'npm run config' to change your configuration.");
  } else {
    require('./config.js');
  }
} catch (err) {
  console.error(err);
}

try {
  if (!fs.existsSync(consoleErrorsPath)) {
    const consoleErrorsFileContent = `{
  "consoleErrors": []
}`;

    fs.writeFileSync(consoleErrorsPath, consoleErrorsFileContent);
  }
} catch (err) {
  console.error(err);
}
