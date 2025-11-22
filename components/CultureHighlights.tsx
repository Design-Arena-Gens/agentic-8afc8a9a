const HIGHLIGHTS = [
  {
    heading: 'الروحانيات والفلسفة',
    description:
      'نشأت المدارس الفلسفية الستة، وتبلورت مفاهيم الكارما والدارما، وتعمّقت ممارسات اليوغا والتأمل في الأديرة.'
  },
  {
    heading: 'العلوم والرياضيات',
    description:
      'اكتشف علماء مثل أريابهاتا الصفر العشري ودورة الكواكب، وطوّر سوشروتا أصول الجراحة الترميمية.'
  },
  {
    heading: 'العمارة والفنون',
    description:
      'عكست المعابد المنحوتة في إلورا وأجانتا وعمارة المعابد الحجرية في الجنوب مزيجاً من الرمزية والمهارة التقنية.'
  }
] as const;

export function CultureHighlights() {
  return (
    <section>
      <h2>ملامح ثقافية</h2>
      <div className="grid">
        {HIGHLIGHTS.map((highlight) => (
          <article key={highlight.heading} className="card">
            <div className="badge">أثر خالد</div>
            <h3>{highlight.heading}</h3>
            <p>{highlight.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
