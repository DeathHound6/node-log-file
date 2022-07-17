const { Logger } = require(`${__dirname}/../dist/index.js`);

const logger = new Logger({ dirPath: `${__dirname}/test-logs` });
const date = new Date();
const { readFileSync } = require("fs");

describe("Logger", function() {
    it("Should log the contents to the given file", function() {
        const content = "test-logging";
        const fileName = `${logger.dirPath}/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}.log`;
        return logger.log(content) && readFileSync(fileName).toString().endsWith(`${content}\n`);
    });
});