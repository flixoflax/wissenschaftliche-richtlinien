import type { MetaFunction } from '@remix-run/node';
import { Container } from '~/components/container';

export const meta: MetaFunction = () => {
  return [{ title: 'Editors Notice' }];
};

export default function Index() {
  return (
    <Container className='py-20'>
      <div className='prose mx-auto dark:prose-invert'>
        <h1>Vorwort zur Auflage Oktober 2017</h1>
        <p>
          Die vorliegenden Richtlinien geben den Rahmen für die Gestaltung
          wissenschaftlicher Arbeiten am Fachbereich 2 der HWR vor und dienen
          der transparenten Vermittlung der Erwartungen seitens der Gutachter an
          die Studierenden.
        </p>

        <p>
          Die Richtlinien vermitteln grundsätzliche inhaltliche und formale
          Aspekte, ersetzen aber nicht ein eigenständiges Studium von Literatur
          zum Thema wissenschaftliches Arbeiten. Zu empfehlen sind
          beispielsweise folgende Bücher:
        </p>

        <ul>
          <li>
            Kornmeier, Martin (2016): Wissenschaftlich schreiben leicht gemacht,
            Bern, 7. Auflage.
          </li>
          <li>
            Mieke, Christian und Nagel, Michael (2014): BWL-Methoden, Stuttgart.
          </li>
          <li>
            Theisen, Manuel R. (2017): Wissenschaftliches Arbeiten, München, 17.
            Auflage.
          </li>
          <li>
            Weber, Daniela (2015): Wissenschaftlich arbeiten für
            Wirtschaftswissenschaftler, Weinheim.
          </li>
        </ul>
        <br></br>
        <p>
          Gemäß dieser neuen Auflage ist nun neben der Zitierweise in Fußnoten
          (Chicago-Style) auch der, international wissenschaftlich
          gebräuchliche, Harvard Referencing Style zulässig. Darüber hinaus
          wurde der Umgang mit Internetquellen klargestellt.
        </p>
        <br></br>
        <p>
          Ein Dank geht an alle, die bei der Erstellung und Überarbeitung der
          Richtlinien mitgewirkt haben, insbesondere an Herrn Arnd Kölling für
          seine umfangreichen Textvorschläge, an Herrn Thomas Köhne und an Frau
          Katharina Gapp, welche die Vorschläge aller Mitwirkenden als
          Neuerungen in diese Auflage eingearbeitet hat. Zusätzlich danken wir
          Frau Pagel für die redaktionelle Bearbeitung.
          <br></br>
          <br></br>
          <strong>Birgit Weyer</strong>
          <br></br>
          <small>Studiendekanin</small>
          <br></br>
          Berlin, im Juli 2017
        </p>
      </div>
    </Container>
  );
}
