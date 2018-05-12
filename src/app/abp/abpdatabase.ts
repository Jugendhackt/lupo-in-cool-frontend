import {ABPFachgruppe} from "./abpfachgruppe";
import {ABPFach} from "./abpfach";
import {ABPKursart} from "./abpkursart";
import {ABPLehrer} from "./abplehrer";
import {ABPNichtMoeglAbiFachKombi} from "./abpnicht-moegl-abi-fach-kombi";
import {ABPSchueler} from "./abpschueler";
import {ABPSchuelerFach} from "./abpschueler-fach";
import {ABPSchuelerFachSicherung} from "./abpschueler-fach-sicherung";
import {ABPSchuelerFehlermeldung} from "./abpschueler-fehlermeldung";
import {ABPSchuelerSprachenfolge} from "./abpschueler-sprachenfolge";
import {ABPSchuldaten} from "./abpschuldaten";
import {ABPVersion} from "./abpversion";

export class ABPDatabase {
  public ABP_Fachgruppen: ABPFachgruppe[];
  public ABP_Faecher: ABPFach[];
  public ABP_Kursarten: ABPKursart[];
  public ABP_Lehrer: ABPLehrer[];
  public ABP_NichtMoeglAbiFachKombi: ABPNichtMoeglAbiFachKombi[];
  public ABP_Schueler: ABPSchueler[];
  public ABP_SchuelerFaecher: ABPSchuelerFach[];
  public ABP_SchuelerFaecherSicherung: ABPSchuelerFachSicherung[];
  public ABP_SchuelerFehlermeldungen: ABPSchuelerFehlermeldung[];
  public ABP_SchuelerSprachenfolge: ABPSchuelerSprachenfolge[];
  public ABP_Schuldaten: ABPSchuldaten[];
  public ABP_Version: ABPVersion[];
}
