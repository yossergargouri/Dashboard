// solutionSelectionService.ts

const SELECTED_SOLUTION_KEY = 'selectedSolutionId';

export const setSelectedSolutionId = (solutionId: number) => {
  localStorage.setItem(SELECTED_SOLUTION_KEY, solutionId.toString());
};

export const getSelectedSolutionId = (): number | null => {
  const storedId = localStorage.getItem(SELECTED_SOLUTION_KEY);
  return storedId ? parseInt(storedId, 10) : null;
};
