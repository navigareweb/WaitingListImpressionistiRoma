import Image from "next/image";
import Link from "next/link";
import copertina from "../../public/copertina.jpg";
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
          circa <strong>200 opere</strong>, le quali documentano, con dipinti,
          disegni, acquerelli, sculture, ceramiche e incisioni, gli artisti che
          parteciparono alle otto mostre ufficiali “impressioniste” e con una
          particolare attenzione a tutte le tecniche da loro sperimentate e
          utilizzate.
        </p>
        <p>
          La mostra, forse la più grande e completa sull’Impressionismo mai
          apparsa in Italia, per quantità di opere e per artisti presenti, è
          visitabile dal <strong>30 Marzo</strong> al <strong>28 Luglio</strong>
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
          * per ricevere lo sconto invia il NOMINATIVO, lo sconto verrà
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
