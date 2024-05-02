const SELECTED_SOLUTION_KEY = 'selectedSolutionId';
const SELECTED_CSPROJ_ID = 'selectedcsprojId';

export const setSelectedSolutionId = (solutionId: number) => {
  localStorage.setItem(SELECTED_SOLUTION_KEY, solutionId.toString());
  console.log('SolutionId selected and stored in local storage:', solutionId);
};

export const setSelectedCsprojId = (csprojId: number) => {
  localStorage.setItem(SELECTED_CSPROJ_ID, csprojId.toString());
  console.log('CsprojId selected and stored in local storage:', csprojId);
};

export const getSelectedSolutionId = (): number | null => {
  const storedId = localStorage.getItem(SELECTED_SOLUTION_KEY);
  console.log('SolutionId retrieved from local storage:', storedId);
  return storedId ? parseInt(storedId, 10) : null;
};

export const getSelectedCsprojId = (): number | null => {
  const storedId = localStorage.getItem(SELECTED_CSPROJ_ID);
  console.log('CsprojId retrieved from local storage:', storedId);
  return storedId ? parseInt(storedId, 10) : null;
};
