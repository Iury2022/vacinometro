import { VaxineReading } from "../models/VaxineReading";
import { parsedDataFromCsvFile } from "../utils/file_utils";

export const fetchVaxineReadingData = async (
) => {
    let readings: VaxineReading[] = [];
    if (parsedDataFromCsvFile) {
        parsedDataFromCsvFile.forEach((r) => {
            const dataVacinacao = new Date(r.data_vacinacao.trim());
            const municipio = r.municipio;
            const vacina = r.vacina;
            const vacinaDose = r.vacina_dose;
            const vacinaGrupo = r.vacina_grupo;
            const dosesAplicadas = parseFloat(r.doses_aplicadas);

            const reading = new VaxineReading(
                dataVacinacao,
                municipio,
                vacina,
                vacinaDose,
                vacinaGrupo,
                dosesAplicadas
            );
            readings.push(reading);
        });
    }
    return readings;

};