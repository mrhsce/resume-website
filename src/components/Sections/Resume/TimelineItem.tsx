import classNames from 'classnames';
import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';
import useRevealOnScroll from '../../../hooks/useRevealOnScroll';

const TimelineItem: FC<{item: TimelineItem; index?: number}> = memo(({item, index = 0}) => {
  const {title, date, location, content} = item;
  const [itemRef, isVisible] = useRevealOnScroll<HTMLDivElement>({rootMargin: '0px 0px -8% 0px'});

  return (
    <article className="group relative pb-7 last:pb-0">
      <div
        className={classNames(
          'relative rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 sm:p-6',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
        )}
        ref={itemRef}
        style={{transitionDelay: `${Math.min(index, 5) * 80}ms`}}>
        <span className="timeline-dot absolute -left-2 top-7 hidden h-4 w-4 rounded-full bg-orange-500 md:block" />
        <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 sm:text-xl">{title}</h2>
          <span className="w-max rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
            {date}
          </span>
        </div>
        <div className="mb-4 max-w-full whitespace-normal break-words rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-700 dark:text-neutral-100 sm:w-max sm:text-sm">
          {location}
        </div>
        <div className="prose prose-sm max-w-none text-neutral-700 dark:text-neutral-200 sm:prose-base">{content}</div>
      </div>
    </article>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
