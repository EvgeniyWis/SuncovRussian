import { lazy } from 'react';

export const TheoryPage: React.LazyExoticComponent<React.FC> = lazy(() => {
  return new Promise((resolve) => {
    resolve(
      import('./ui/TheoryPage').then(({ TheoryPage }) => ({
        default: TheoryPage,
      })),
    );
  });
});

export { TheoryItem } from './ui/TheoryItem/ui/TheoryItem';

export { TheorySidebar } from './ui/TheorySidebar/ui/TheorySidebar';
