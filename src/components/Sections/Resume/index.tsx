import classNames from 'classnames';
import {FC, memo, useMemo, useState} from 'react';

import {awards, education, experience, projects, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  const [activeProjectFilter, setActiveProjectFilter] = useState<'All' | 'Backend' | 'Mobile' | 'IoT' | 'Vision'>(
    'All',
  );

  const projectCategoryMap = useMemo(
    () => ({
      'IoT Smart Home Monitoring and Control System': ['IoT', 'Backend'],
      'Investment Fund Reporting Telegram Bot': ['Backend'],
      'Vision-Based Drone Guidance System': ['Vision', 'Mobile'],
      'Android VoIP Client Using PJSIP': ['Mobile', 'Backend'],
      'Locksmith Dispatch Platform': ['Backend', 'Mobile'],
    }),
    [],
  );

  const filteredProjects = useMemo(() => {
    if (activeProjectFilter === 'All') {
      return projects;
    }

    return projects.filter(project => projectCategoryMap[project.title as keyof typeof projectCategoryMap]?.includes(activeProjectFilter));
  }, [activeProjectFilter, projectCategoryMap]);

  const projectFilters: Array<'All' | 'Backend' | 'Mobile' | 'IoT' | 'Vision'> = ['All', 'Backend', 'Mobile', 'IoT', 'Vision'];

  return (
    <Section
      className="bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800"
      enableReveal={false}
      sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300 rounded-2xl bg-neutral-50 p-5 shadow-sm dark:divide-neutral-700 dark:bg-neutral-900 sm:p-8">
        <ResumeSection title="Work">
          {experience.map((item, index) => (
            <TimelineItem index={index} item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem index={index} item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Projects">
          <div className="mb-5 flex flex-wrap justify-center gap-2 md:justify-start">
            {projectFilters.map(filter => (
              <button
                className={classNames(
                  'rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-all duration-300 sm:text-sm',
                  activeProjectFilter === filter
                    ? 'border-orange-500 bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300'
                    : 'border-neutral-300 bg-white text-neutral-600 hover:border-orange-400 hover:text-orange-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300',
                )}
                key={filter}
                onClick={() => setActiveProjectFilter(filter)}
                type="button">
                {filter}
              </button>
            ))}
          </div>
          {filteredProjects.map((item, index) => (
            <TimelineItem index={index} item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Awards & Honors">
          {awards.map((item, index) => (
            <TimelineItem index={index} item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Skills">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
