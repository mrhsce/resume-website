import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';

import {SectionId} from '../../data/data';
import useRevealOnScroll from '../../hooks/useRevealOnScroll';

const Section: FC<
  PropsWithChildren<{
    sectionId: SectionId;
    sectionTitle?: string;
    noPadding?: boolean;
    className?: string;
    enableReveal?: boolean;
  }>
> = memo(({children, sectionId, noPadding = false, className, enableReveal = true}) => {
  const [sectionRef, isVisible] = useRevealOnScroll<HTMLElement>();

  return (
    <section
      className={classNames(className, {'px-4 py-16 md:py-24 lg:px-8': !noPadding}, {'reveal-section': enableReveal})}
      data-visible={enableReveal ? isVisible : undefined}
      id={sectionId}
      ref={sectionRef}>
      <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>{children}</div>
    </section>
  );
});

Section.displayName = 'Section';
export default Section;
