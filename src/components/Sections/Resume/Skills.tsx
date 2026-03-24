import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';
import useRevealOnScroll from '../../../hooks/useRevealOnScroll';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col rounded-xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800 sm:p-5">
      <span className="text-center text-lg font-bold text-neutral-900 dark:text-neutral-100">{name}</span>
      <div className="mt-3 flex flex-col gap-y-3">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, level, max = 10} = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);
  const [skillRef, isVisible] = useRevealOnScroll<HTMLDivElement>({rootMargin: '0px 0px -5% 0px'});

  return (
    <div className="flex flex-col" ref={skillRef}>
      <div className="mb-1 flex items-center justify-between gap-x-2">
        <span className="ml-1 text-sm font-medium text-neutral-700 dark:text-neutral-200">{name}</span>
        <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">{percentage}%</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-orange-400 to-amber-500 transition-all duration-700 ease-out"
          style={{width: isVisible ? `${percentage}%` : '0%'}}
        />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
