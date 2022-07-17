# Node Log File
A simple NPM package to log content to a file

## Install
- `npm install @deathhound/node-log-file`

## Example Usage
```js
const { Logger } = require("@deathhound/node-log-file");

// Specified directory must exist on the system
const logger = new Logger({ dirPath: `${__dirname}/logs` });

logger.log("My Log");
// file Location is at `{dirPath}/{file}.log`
// File name format is `{year}-{month}-{day}.log`
// Each individual log to the file will include the time of the log as the format `[{hours}:{minutes}:{seconds}.{milliseconds}]`
```