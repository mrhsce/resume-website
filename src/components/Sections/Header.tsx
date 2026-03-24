import {Dialog, Transition} from '@headlessui/react';
import {Bars3BottomRightIcon, MoonIcon, SunIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useEffect, useMemo, useState} from 'react';

import {SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';
import useTheme from '../../hooks/useTheme';

export const headerID = 'headerNav';

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const {theme, toggleTheme, isMounted} = useTheme();
  const navSections = useMemo(
    () => [SectionId.About, SectionId.Resume, SectionId.Contact],
    // () => [SectionId.About, SectionId.Resume, SectionId.Portfolio, SectionId.Testimonials, SectionId.Contact],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      setIsScrolled(currentScroll > 24);
      setScrollProgress(maxScroll > 0 ? Math.min((currentScroll / maxScroll) * 100, 100) : 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
        <div className="h-full bg-orange-500 transition-all duration-200" style={{width: `${scrollProgress}%`}} />
      </div>
      <MobileNav
        currentSection={currentSection}
        isMounted={isMounted}
        isScrolled={isScrolled}
        navSections={navSections}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <DesktopNav
        currentSection={currentSection}
        isMounted={isMounted}
        isScrolled={isScrolled}
        navSections={navSections}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </>
  );
});

const DesktopNav: FC<{
  navSections: SectionId[];
  currentSection: SectionId | null;
  isScrolled: boolean;
  theme: 'light' | 'dark';
  isMounted: boolean;
  toggleTheme: () => void;
}> = memo(({navSections, currentSection, isScrolled, theme, isMounted, toggleTheme}) => {
    const baseClass =
      '-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100';
    const activeClass = classNames(baseClass, 'text-orange-500');
    const inactiveClass = classNames(baseClass, 'text-neutral-100');
    return (
      <header
        className={classNames(
          'fixed top-0 z-50 hidden w-full p-4 backdrop-blur transition-colors duration-300 sm:block',
          isScrolled ? 'bg-neutral-900/80 shadow-lg' : 'bg-neutral-900/45',
        )}
        id={headerID}>
        <nav className="flex items-center justify-center gap-x-8">
          {navSections.map(section => (
            <NavItem
              activeClass={activeClass}
              current={section === currentSection}
              inactiveClass={inactiveClass}
              key={section}
              section={section}
            />
          ))}
          <button
            aria-label="Toggle theme"
            className="rounded-full border border-neutral-200/30 p-2 text-neutral-100 transition-all duration-300 hover:border-orange-400 hover:text-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            onClick={toggleTheme}
            type="button">
            {isMounted && theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
          </button>
        </nav>
      </header>
    );
  });

const MobileNav: FC<{
  navSections: SectionId[];
  currentSection: SectionId | null;
  isScrolled: boolean;
  theme: 'light' | 'dark';
  isMounted: boolean;
  toggleTheme: () => void;
}> = memo(({navSections, currentSection, isScrolled, theme, isMounted, toggleTheme}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
      setIsOpen(previous => !previous);
    }, []);

    const baseClass =
      'p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500';
    const activeClass = classNames(baseClass, 'bg-neutral-900 text-white font-bold');
    const inactiveClass = classNames(baseClass, 'text-neutral-200 font-medium');
    return (
      <>
        <button
          aria-label="Menu Button"
          className={classNames(
            'fixed right-2 z-40 rounded-md p-2 ring-offset-gray-800/60 transition-all duration-300 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden',
            isScrolled ? 'top-3 bg-orange-500/95 shadow-lg' : 'top-2 bg-orange-500',
          )}
          onClick={toggleOpen}>
          <Bars3BottomRightIcon className="h-8 w-8 text-white" />
          <span className="sr-only">Open sidebar</span>
        </button>
        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-stone-900 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <div className="relative w-4/5 bg-stone-800">
                <nav className="mt-5 flex flex-col gap-y-2 px-2">
                  {navSections.map(section => (
                    <NavItem
                      activeClass={activeClass}
                      current={section === currentSection}
                      inactiveClass={inactiveClass}
                      key={section}
                      onClick={toggleOpen}
                      section={section}
                    />
                  ))}
                  <button
                    aria-label="Toggle theme"
                    className="mt-4 flex w-max items-center gap-x-2 rounded-md border border-neutral-200/30 p-2 text-neutral-100 transition-all duration-300 hover:border-orange-400 hover:text-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                    onClick={toggleTheme}
                    type="button">
                    {isMounted && theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
                    <span>Theme</span>
                  </button>
                </nav>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
    );
  });

const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
}> = memo(({section, current, inactiveClass, activeClass, onClick}) => {
  return (
    <Link
      aria-current={current ? 'page' : undefined}
      className={classNames(current ? activeClass : inactiveClass)}
      href={`/#${section}`}
      key={section}
      onClick={onClick}>
      {section}
    </Link>
  );
});

Header.displayName = 'Header';
export default Header;
