const TIMELINE_EVENTS = [
  {
    period: '٣٣٠٠ ق.م – ١٣٠٠ ق.م',
    title: 'حضارة وادي السند',
    description:
      'مدن مخططة مثل موهينجو دارو وهاراپا مع أنظمة صرف صحي وتجارة بعيدة المدى وثقافة فخارية متقنة.'
  },
  {
    period: '١٥٠٠ ق.م – ٦٠٠ ق.م',
    title: 'العصر الفيدي',
    description:
      'تشكُّل النصوص الفيدية، ظهور الممالك المبكرة (جانابادا)، وتطور اللغة السنسكريتية والطقوس الدينية.'
  },
  {
    period: '٣٢٢ ق.م – ١٨٥ ق.م',
    title: 'الإمبراطورية الماورية',
    description:
      'حّد تشاندراغوبتا موريـا شبه القارة، ونشر أشوكا تعاليمه البوذية ونقشها على الأعمدة الشهيرة.'
  },
  {
    period: '٣٢٠ م – ٥٥٠ م',
    title: 'عصر غوبتا الذهبي',
    description:
      'ازدهار العلم والأدب مع أعمال أريابهاتا وكاليذاسا ونشأة المعمار الهندوسي الكلاسيكي.'
  },
  {
    period: '٦٠٠ م – ١٢٠٠ م',
    title: 'الممالك الإقليمية',
    description:
      'صعود تشالوكيا، بالا، وتشولا مع توسع بحري وتجارة مع جنوب شرق آسيا وارتقاء الفنون البرونزية.'
  }
] as const;

export function Timeline() {
  return (
    <section>
      <h2>خط زمني لأهم الحضارات</h2>
      <p>
        تتعاقب الحضارات الهندية عبر آلاف السنين، ولكل مرحلة بصمتها على اللغة والفنون والعلم والروحانية.
      </p>
      <div className="timeline">
        {TIMELINE_EVENTS.map((event) => (
          <article key={event.period} className="timeline__item">
            <div className="timeline__period">{event.period}</div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
