import { ArrowRight } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/catalog';
import type { JournalArticle } from '../types/store';
import { StudioImage } from './StudioImage';

interface JournalSectionProps {
  onOpenArticle: (article: JournalArticle) => void;
}

export function JournalSection({ onOpenArticle }: JournalSectionProps) {
  return (
    <section
      id="journal"
      aria-labelledby="journal-heading"
      className="py-16 sm:py-22 bg-[#FAF8F5]"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-11">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9A5B13]">
              Time &amp; Style Journal
            </p>
            <h2
              id="journal-heading"
              className="mt-2 text-[26px] sm:text-[32px] font-bold tracking-[-0.02em] text-[#18181B] leading-tight"
            >
              Stories That Inspire
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onOpenArticle(JOURNAL_ARTICLES[0])}
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#18181B] hover:text-[#9A5B13] transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto"
          >
            <span>Read Journal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3-Column Editorial Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article key={article.id} className="group flex flex-col">
              <button
                type="button"
                onClick={() => onOpenArticle(article)}
                className="text-left flex flex-col flex-1 focus-visible:outline-2 rounded-xl"
              >
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#EFEAE1] border border-[#E7E2DA]">
                  <StudioImage
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                  />
                </div>

                {/* Unboxed clean metadata line */}
                <div className="mt-4 flex items-center gap-2 text-[12px] text-[#78716C]">
                  <span className="font-semibold uppercase tracking-[0.12em] text-[#9A5B13]">
                    {article.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="mt-2.5 text-[19px] font-semibold text-[#18181B] group-hover:text-[#9A5B13] transition-colors leading-[1.32] headline-balance">
                  {article.title}
                </h3>

                <p className="mt-2.5 text-[14px] text-[#57534E] leading-relaxed flex-1">
                  {article.excerpt}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#18181B] group-hover:text-[#9A5B13] group-hover:gap-2 transition-all">
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
