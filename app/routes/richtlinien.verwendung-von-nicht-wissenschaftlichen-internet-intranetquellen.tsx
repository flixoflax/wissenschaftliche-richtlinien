import { GuidelineContent } from '~/components/guideline-content';

export default function Richtlinien() {
  return (
    <GuidelineContent
      title='Verwendung von (nicht-wissenschaftlichen) Internet-/ Intranetquellen'
      breadcrumbs={{
        root: 'Formale Gestaltung',
        rootHref: '/richtlinien/allgemeines',
      }}
    >
      <p>
        Die Eigenschaft einer Veröffentlichung als Urbeleg, wie sie bei den
        Veröffentlichungen in Papierform gegeben ist, geht beim Internet häufig
        verloren. Außerdem werden viele Internetdokumente nicht redigiert. Aus
        diesen Gründen ist es nicht immer gewährleistet, dass die jeweiligen
        Publikationen wissenschaftlichen Anforderungen genügen. Von daher sind
        Internet-/Intranetquellen nur zusätzliche Erkenntnisquellen.{' '}
        <u>
          Primäre Literaturquelle bleibt die Fachliteratur (Bücher,
          Zeitschriften)
        </u>
        .
      </p>
      <p>
        Die <u>Stellungnahmen in Diskussionslisten / Newsgroups</u> werden als
        Quellen für PTB, Studienarbeit und Bachelorarbeit grundsätzlich nicht
        anerkannt. Diese Inhalte bilden i.d.R. persönliche Meinungen, die sich
        auf einfache Art und Weise zu jeder Zeit abändern lassen.
      </p>
      <p>
        Die (nicht-wissenschaftlichen) Internet-/Intranetquellen sind im
        Volltext (bspw. von html- in pdf-Format umgewandelt) beizufügen. Ein
        Screenshot des jeweils zitierten Passus aus einer längeren Quelle ist
        nicht ausreichend.
      </p>
    </GuidelineContent>
  );
}
