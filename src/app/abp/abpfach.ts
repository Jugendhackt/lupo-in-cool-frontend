import {ABPFachgruppe} from "./abpfachgruppe";

export class ABPFach {
  public ID: number;

  public FachGruppe: ABPFachgruppe;

  public FachKrz: string;
  public Bezeichnung: string;
  public StatistikKrz: string;
  public Sortierung: number;
  public IstSprache: string;
  public Unterrichtssprache: string;
  public E1: string;
  public E2: string;
  public Q1: string;
  public Q2: string;
  public Q3: string;
  public Q4: string;
  public Abi_Moegl: string;
  public LK_Moegl: string;
  public AlsNeueFSInSII: string;
  public Leitfach: string;
  public Leitfach2: string;
  public E1_WStd: number;
  public E2_WStd: number;
  public E1_S_M: string;
  public E2_S_M: string;
  public Q_WStd: number;
  public E_ExportKursart: string;
  public NurMuendlich: string;
}
