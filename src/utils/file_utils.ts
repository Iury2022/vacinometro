import { parse } from 'csv-parse/sync';
import { readFileSync } from "fs";

const dataFromCsvFile = readFileSync("./src/data/aquiduanadosesaplicadas.csv", { encoding: 'utf-8' });

const records = parse(dataFromCsvFile, { columns: true, delimiter: ",", skip_empty_lines: true });


export const parsedDataFromCsvFile = records;


