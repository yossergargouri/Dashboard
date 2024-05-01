import  { useEffect, useState } from 'react';
import { getSelectedSolutionId } from '../../services/solutionSelectionService';

const TableCS = () => {
  const [tableData, setTableData] = useState<{
    id: string;
    csprojPath: string;
    type: string;
    version: string;
    slnFileId: number;
  }[] | null>(null);

  useEffect(() => {
    const solutionId = getSelectedSolutionId();
    if (!solutionId) {
      // Gérer le cas où aucun ID de solution n'est sélectionné
      return;
    }

    fetch(`http://localhost:5245/CsprojFile/${solutionId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data received:', data);
        if (Array.isArray(data)) {
          setTableData(data);
        } else if (typeof data === 'object') {
          setTableData([data]); // Wrap the object in an array
        } else {
          throw new Error('Data is not in expected format');
        }
      })
      .catch((error) => {
        console.error('Error fetching or processing data:', error.message);
        // Handle fetching or processing errors (e.g., display error message)
      });
  }, []);
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Csproj
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-5 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-7">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Version
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Type
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Total packages
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Total references
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Total project references
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
        </div>

        {tableData && tableData.map((csproj, index) => (
          <div className={`grid grid-cols-3 sm:grid-cols-5 border-b border-stroke dark:border-strokedark`} key={index}>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{csproj.csprojPath}</p>
            </div>


            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{csproj.type}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{csproj.version}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableCS;
