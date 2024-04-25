import { GuidelineContent } from '~/components/guideline-content';

export default function Richtlinien() {
  return (
    <GuidelineContent
      title='Englischsprachige Arbeiten'
      breadcrumbs={{
        root: 'Sonstiges',
        rootHref: '/richtlinien/bewertungskriterien',
      }}
    >
      <p>
        <strong>
          Wenn Sie Ihre Arbeit in Englisch verfassen, ist der „Guide to the
          Harvard Style of Referencing“ der Anglia Ruskin University in der
          aktuellen Version zu verwenden.
        </strong>
      </p>
    </GuidelineContent>
  );
}
