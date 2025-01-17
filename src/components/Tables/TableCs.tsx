import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSelectedSolutionId, setSelectedCsprojId } from '../../services/solutionSelectionService';

interface Csproj {
  id: number;
  name: string;
  type: string;
  version: string;
  numberOfPackages:number;
  numberOfReferences:number;
  numberOfProjects:number;
}

const TableCS = () => {
  const [tableData, setTableData] = useState<Csproj[]>([]);

  useEffect(() => {
    const solutionId = getSelectedSolutionId();
    if (!solutionId) {
      // Handle case where no solution ID is selected
      return;
    }

    fetch(`http://localhost:5245/api/CsprojFile/GetCsprojFilesBySlnId/${solutionId}`)
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

  const handleCsprojSelect = (csprojId: number) => {
    setSelectedCsprojId(csprojId);
    console.log('CsprojId selected and stored in local storage:', csprojId); // Log for verification
  };
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
              Type
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Version
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

        {tableData.map((csproj, index) => (
          <div className={`grid grid-cols-5 sm:grid-cols-7 border-b border-stroke dark:border-strokedark`} key={index}>
            <div className="flex items p-2.5 xl:p-5">
              <p className="text-black dark:text-white ">
              <Link to={`/Details`} className="block w-full h-full" onClick={() => handleCsprojSelect(csproj.id)}>
                {csproj?.name}
                </Link>
                </p>
                
            </div>


            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">
              <Link to={`/Details`} className="block w-full h-full" onClick={() => handleCsprojSelect(csproj.id)}>
                {csproj?.type}
                </Link>
                </p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white "> 
              <Link to={`/Details`} className="block w-full h-full" onClick={() => handleCsprojSelect(csproj.id)}>
              {csproj?.version}
              </Link>
              </p>  
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white"></p>
              <Link to={`/Details`} className="block w-full h-full" onClick={() => handleCsprojSelect(csproj.id)}>
                <h5 className="font-medium text-black dark:text-white">
                  {csproj?.numberOfPackages}
                </h5>
              </Link>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white"></p>
              <Link to={`/Details`} className="block w-full h-full" onClick={() => handleCsprojSelect(csproj.id)}>
                <h5 className="font-medium text-black dark:text-white">
                  {csproj?.numberOfReferences}
                </h5>
              </Link>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white"></p>
              <Link to={`/Details`} className="block w-full h-full" onClick={() => handleCsprojSelect(csproj.id)}>
                <h5 className="font-medium text-black dark:text-white">
                  {csproj?.numberOfProjects}
                </h5>
              </Link>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white"></p>
              <Link to={`/Details`} className="block w-full h-full" onClick={() => handleCsprojSelect(csproj.id)}>
                <h5 className="font-medium text-black dark:text-white">
                  {/* {csproj?.numberOfProjects} */}
                </h5>
              </Link>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default TableCS;
