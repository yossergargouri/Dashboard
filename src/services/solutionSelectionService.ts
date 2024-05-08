const SELECTED_SOLUTION_KEY = 'selectedSolutionId';
const SELECTED_CSPROJ_ID = 'selectedcsprojId';
const SELECTED_PACKAGE_ID = 'selectedpackageId';
const SELECTED_REFERENCE_ID = 'selectedreferenceId';
const SELECTED_PROJECT_ID = 'selectedprojectId';


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
export const getSelectedpackageId = (): number | null => {
  const storedId = localStorage.getItem(SELECTED_PACKAGE_ID);
  console.log('packagesId retrieved from local storage:', storedId);
  return storedId ? parseInt(storedId, 10) : null;
};
export const getSelectedreferenceId = (): number | null => {
  const storedId = localStorage.getItem(SELECTED_REFERENCE_ID);
  console.log('referenceId retrieved from local storage:', storedId);
  return storedId ? parseInt(storedId, 10) : null;
};

export const getSelectedprojectId = (): number | null => {
  const storedId = localStorage.getItem(SELECTED_PROJECT_ID);
  console.log('projectId retrieved from local storage:', storedId);
  return storedId ? parseInt(storedId, 10) : null;
};

