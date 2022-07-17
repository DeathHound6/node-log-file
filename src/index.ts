import { readFileSync, appendFileSync, existsSync, lstatSync, writeFileSync } from "fs";

interface LoggerOptions {
    dirPath: string
}

export class Logger {
    public dirPath: string;

    constructor(options: LoggerOptions) {
        if (!options.dirPath)
            throw new Error("Logger dirPath must be specified");
        if (!existsSync(options.dirPath) || !lstatSync(options.dirPath).isDirectory())
            throw new Error("Given Logger dirPath does not exist or is not a directory");
        this.dirPath = options.dirPath;
    }

    log(content: string): boolean {
        const date: Date = new Date();
        const filePath = `${this.dirPath}/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}.log`;
        if (!existsSync(filePath))
            writeFileSync(filePath, "");
        if (!lstatSync(filePath).isFile())
            return false;
        appendFileSync(filePath, `${readFileSync(filePath) || ""}[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}] ${content}\n`);
        return true;
    }
}