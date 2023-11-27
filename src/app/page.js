import Image from "next/image";
import Link from "next/link";
import copertina from "../../public/web.jpg";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.copertina}>
        <Image
          src={copertina}
          width={"100%"}
          className={"img"}
          alt="copertina"
        />
        <p>
          Inaugura a Roma, la mostra <strong>Impressionisti</strong> propone
          circa <strong>100 opere</strong> tra dipinti, sculture, acquerelli,
          disegni, ceramiche, incisioni, opere grafiche, oltre a fotografie,
          documenti, libri e materiali di corredo.
        </p>
        <p>
          Visitabile dal <strong>30 Marzo</strong> al <strong>28 Luglio</strong>
          al Museo Storico Della Fanteria di Roma
        </p>
        <Link
          href={"https://www.navigaresrl.com/mostra/impressionisti/"}
          className={styles.link}
        >
          Info Mostra
        </Link>
      </div>
      <div className={styles.iscrizione}>
        <h4>
          Iscriviti entro il 31 Dicembre alla nostra Waiting List per ricevere
          uno sconto del 30%
        </h4>
        <h5>
          * per ricevere lo sconto devi inviarci il NOMINATIVO, lo sconto verrà
          applicato SOLO per il biglietto INTERO FERIALE acquistato in
          biglietteria
        </h5>
        <Link
          href={
            "mailto:web@navigaresrl.com?subject=Iscrizione Waiting List Impressionisti Roma"
          }
        >
          <p>SCRIVICI NOME E COGNOME</p>
        </Link>
        <h6>N.B : Cliccando su Invia autorizzi il trattamento dei tuoi dati</h6>
      </div>
      <div className={styles.footer}>
        Una produzione di
        <Link href={"https://www.navigaresrl.com/"}>NavigareSrl</Link>
      </div>
    </main>
  );
}
