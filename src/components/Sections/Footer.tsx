import {BoltIcon, ChevronUpIcon} from '@heroicons/react/24/solid';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => (
  <div className="relative bg-neutral-200 px-4 pb-6 pt-12 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 sm:px-8 sm:pb-8 sm:pt-14">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        className="rounded-full bg-white p-1 ring-neutral-300 ring-offset-2 ring-offset-neutral-200 focus:outline-none focus:ring-2 dark:bg-neutral-100 dark:ring-white dark:ring-offset-gray-700/80 sm:p-2"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-6 w-6 bg-transparent text-neutral-900 sm:h-8 sm:w-8" />
      </a>
    </div>
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex gap-x-4 text-neutral-600 dark:text-neutral-500">
        <Socials />
      </div>
      <a
        className="-m-2 flex items-center gap-x-1 rounded-md p-2 ring-yellow focus:outline-none focus:ring-2"
        href="https://reactresume.com">
        <BoltIcon className="h-5 w-5 text-yellow" />
        <span>
          Provided by <span className="text-neutral-900 dark:text-white">React</span>
          <span className="italic text-yellow">Resume</span>
        </span>
      </a>
      <span className="text-sm text-neutral-600 dark:text-neutral-700">© Copyright {currentYear} Mohammadreza Heydarian</span>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
