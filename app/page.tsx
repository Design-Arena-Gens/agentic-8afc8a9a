import { Timeline } from '../components/Timeline';
import { CultureHighlights } from '../components/CultureHighlights';
import { KnowledgeGrid } from '../components/KnowledgeGrid';

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="hero__text">
          <span className="hero__pill">فيديو تفاعلي • الهند القديمة</span>
          <h1>رحلة بصرية في حضارات الهند القديمة</h1>
          <p>
            استكشف أقدم الممالك والمدن والأساطير عبر دليل بصري شامل. شاهد الفيديو الرئيسي ثم الغوص في
            الخط الزمني والملامح الثقافية لفهم العمق التاريخي لهذه الحضارات.
          </p>
          <p>
            يرافقك هذا العرض بصور من حضارة وادي السند إلى عصر الذهب الغوبتي، مع إبراز للعلوم والفنون
            التي شكّلت أثر الهند عبر العصور.
          </p>
        </div>
        <div className="hero__video">
          <iframe
            src="https://www.youtube.com/embed/n7ndRwqJYDM"
            title="الهند القديمة"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <Timeline />

      <CultureHighlights />

      <KnowledgeGrid />

      <section>
        <h2>كيفية الاستفادة من التجربة</h2>
        <p>
          ابدأ بمشاهدة الفيديو المتاح أعلاه للحصول على نظرة شاملة، ثم تصفّح الأقسام التفاعلية للتعمق في كل
          عنصر تاريخي وثقافي. يمكنك مشاركة الصفحة مع زملائك أو استخدام المحتوى كمصدر تمهيدي قبل دراسة
          تفاصيل أكثر.
        </p>
        <div className="knowledge-grid">
          <article className="knowledge-item">
            <strong>مصادر إضافية</strong>
            <p>
              لمزيد من التوسع، راجع مخطوطات «الأرثشاسترا»، واكتشف النقوش على أعمدة أشوكا، وتابع الأبحاث
              الأثرية الحديثة حول مدينة دواركا المغمورة.
            </p>
          </article>
          <article className="knowledge-item">
            <strong>أنشطة تعليمية</strong>
            <p>
              جرّب تصميم خريطة ذهنية تربط بين الممالك المختلفة، أو عرض تقديمي يوضح أثر التجارة البحرية على
              انتشار الثقافة الهندية القديمة.
            </p>
          </article>
        </div>
      </section>

      <footer className="footer">© {new Date().getFullYear()} بوابة الحضارات الآسيوية.</footer>
    </main>
  );
}
