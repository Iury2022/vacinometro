export enum River {
  STATION_CODE_66945000 = "Aquidauana(Rio Aquidauana)",
  STATION_CODE_66870000 = "Coxim (Rio Taquari)",
  STATION_CODE_66825000 = "Ladário (Rio Paraguai)",
  STATION_CODE_66900000 = "Bonito (Rio Miranda)",
  STATION_CODE_63970000 = "Bataguassu (Rio Pardo)",
}

export class VaxineReading {
  dataVacinacao: Date;
  municipio: string;
  vacina: string;
  vacinaDose: string;
  vacinaGrupo: string;
  dosesAplicadas: number;

  constructor(
    dataVacinacao: Date,
    municipio: string,
    vacina: string,
    vacinaDose: string,
    vacinaGrupo: string,
    dosesAplicadas: number,
  ) {
    this.dataVacinacao = dataVacinacao;
    this.municipio = municipio;
    this.vacina = vacina;
    this.vacinaDose = vacinaDose;
    this.vacinaGrupo = vacinaGrupo;
    this.dosesAplicadas = dosesAplicadas;

  }
}
