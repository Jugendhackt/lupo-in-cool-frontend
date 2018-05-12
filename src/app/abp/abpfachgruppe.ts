import {ABPFach} from "./abpfach";

export class ABPFachgruppe {
  constructor() {
    this.Fächer = [];
  }

  public Fach: string;
  public Bezeichnung: string;
  public FachgruppeKrz: string;
  public Aufgabenfeld: number;
  public Sortierung: number;
  public Fächer: Array<ABPFach>;
}
