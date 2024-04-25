import { Link } from '@remix-run/react';
import { GuidelineContent } from '~/components/guideline-content';

export default function Richtlinien() {
  return (
    <GuidelineContent
      title='Bewertungskriterien'
      breadcrumbs={{
        root: 'Sonstiges',
        rootHref: '/richtlinien/bewertungskriterien',
      }}
    >
      <p>
        Analog zu den beschriebenen <Link to='/richtlinien'>Anforderungen</Link>{' '}
        an wissenschaftliche Arbeiten lassen sich die Anforderungs- und damit
        auch Bewertungskriterien von PTBs, Studienarbeiten und Bachelorarbeiten
        grob in vier Kriterienfelder unterteilen (siehe auch die
        Gutachtenvorlagen im Anhang):
      </p>
      <ul>
        <li>
          die inhaltliche Qualität der Themenbearbeitung (u.a. Literaturarbeit)
        </li>
        <li>
          die Qualität von Struktur <i>(Herangehensweise)</i>{' '}
          <strong>und Argumentation</strong> <i>(Logik)</i> im Rahmen der
          Themenbearbeitung
        </li>
        <li>
          die Qualität der Empirie bzw. des Praxisbezugs der Themenbearbeitung
        </li>
        <li>den Grad der Einhaltung aller formalen Kriterien</li>
      </ul>
      <p>
        Mit dem Kriterium Inhalt werden im Gutachten zunächst Anspruchsniveau
        und Qualität der Themenformulierung bewertet - ggfs. ergänzt durch eine
        in der Einleitung erfolgende Eingrenzung der Aufgabenstellung. Im
        Anschluss daran werden Vollständigkeit und Richtigkeit der
        entsprechenden inhaltlichen Themenbearbeitung untersucht – ebenso der
        Grad der Auseinandersetzung mit zum Thema verfügbarer, aktueller
        wissenschaftlicher Literatur (Fachbücher, Fachzeitschriften, ggf.
        Internetquellen). Die erkennbare eigenständige Gedankenführung der
        Autorin oder des Autors auf Basis dieser Erkenntnisse ist schließlich
        die beste Voraussetzung für eine hohe Qualität der Ergebnisse der
        Arbeit: Letztere zeigt sich in Form einer überzeugenden Lösung der dem
        Titel zugrunde liegenden Aufgabenstellung. Transferleistungen und
        Reflexion von Ergebnissen erhöhen die Qualität der Arbeit erheblich.
      </p>
      <p>
        Im Rahmen der Bewertung von Struktur und Argumentation werden die, dem
        Inhaltsverzeichnis entnehmbare (Grob-)Gliederung, die Stringenz und
        Verständlichkeit der Gedankenführung (im Detail) sowie die Wahl der zur
        Problemlösung gewählten Methodik untersucht.
      </p>
      <p>
        Unter Empirie und Praxisbezug werden im Einzelnen insbesondere die
        Zusammenstellung und Verwendung von belastbaren Daten sowie die
        praktische Umsetzungsmöglichkeit der erarbeiteten Ergebnisse
        zusammengefasst. Sollte eine eigene empirische Erhebung durchgeführt
        worden sein, wird diese auf Objektivität, Validität und Reliabilität
        untersucht und bewertet.
      </p>
      <p>
        Die formalen <i>Bewertungskriterien</i> umfassen zum einen die Prüfung
        der äußeren Form der Arbeit, die regelgerechte Erstellung einer
        übersichtlichen, leserfreundlichen Gliederung (s.a. Inhaltsverzeichnis),
        die Zitierweise sowie die Gestaltung des Literaturverzeichnisses. Zum
        anderen werden im Rahmen dieses Kriterienfeldes die Qualität der
        Rechtschreibung und Ausdrucksweise überprüft und bewertet.
      </p>
      <p>
        Die Erfüllung aller vier obigen Kriterienfelder wird im Rahmen der
        Bewertung der Arbeit überprüft:
      </p>
      <p>
        <strong>
          Ausgehend von einem bereits in PTB I hohen Erwartungshorizont wird im
          Rahmen der Bachelorarbeit die{' '}
          <u>vollständige Erfüllung aller obigen Bewertungskriterien</u> zum
          Bewertungsmaßstab einer sehr guten wissenschaftlichen Arbeit.
        </strong>
      </p>
      <p>
        Insbesondere gilt:{' '}
        <strong>
          Eine{' '}
          <u>
            korrekte Zitierweise wird häufig auch als <i>Hygienefaktor</i>
          </u>{' '}
          wissenschaftlichen Arbeitens bezeichnet: Ihre vollständige Erfüllung
          gilt deshalb bereits im PTB I als grundsätzliche Voraussetzung für
          wissenschaftliches Arbeiten.{' '}
        </strong>
        (siehe{' '}
        <Link to={'/richtlinien/anforderungen-an-die-bearbeitung'}>
          Anforderungen an die Bearbeitung
        </Link>
        )
      </p>
    </GuidelineContent>
  );
}
