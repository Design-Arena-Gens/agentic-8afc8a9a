import type { Metadata } from 'next';
import { Noto_Naskh_Arabic } from 'next/font/google';
import './globals.css';

const noto = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-noto-naskh'
});

export const metadata: Metadata = {
  title: 'رحلة عبر الهند القديمة',
  description:
    'مشاهدة فيديو تفاعلي عن حضارات الهند القديمة مع لمحة عن الثقافة، السلالات، والابتكارات العلمية.',
  keywords: [
    'الهند القديمة',
    'فيديو تاريخي',
    'حضارة وادي السند',
    'الممالك الهندية'
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={noto.variable}>
      <body>{children}</body>
    </html>
  );
}
