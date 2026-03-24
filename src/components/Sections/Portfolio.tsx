import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Projects</h2>
        <p className="text-center text-white">Projects are now displayed in the Resume section</p>
        {/* Portfolio items have been moved to the Resume section as Projects */}
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

