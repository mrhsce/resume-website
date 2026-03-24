import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useMemo} from 'react';

import {aboutData, experience, projects, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  const highlights = useMemo(
    () => [
      {label: 'Years Building Software', value: '6+'},
      {label: 'Professional Roles', value: `${experience.length}`},
      {label: 'Featured Projects', value: `${projects.length}`},
    ],
    [],
  );

  return (
    <Section className="bg-neutral-100 dark:bg-neutral-800" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-6', {'md:grid-cols-4 md:gap-x-8': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-2xl ring-2 ring-orange-400/70 md:h-32 md:w-32">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl">About me</h2>
            <p className="prose prose-sm text-neutral-700 dark:text-gray-300 sm:prose-base">{description}</p>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {highlights.map(({label, value}) => (
              <li className="rounded-lg border border-neutral-200 bg-white p-3 dark:border-white/10 dark:bg-white/5" key={label}>
                <span className="block text-2xl font-bold text-orange-400">{value}</span>
                <span className="text-xs font-medium uppercase tracking-wide text-neutral-600 dark:text-neutral-300">{label}</span>
              </li>
            ))}
          </ul>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-neutral-800 dark:text-white" />}
                <span className="text-sm font-bold text-neutral-800 dark:text-white">{label}:</span>
                <span className=" text-sm text-neutral-700 dark:text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
