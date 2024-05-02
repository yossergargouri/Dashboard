import  { useEffect, useState } from 'react';
import { getSelectedCsprojId } from '../../services/solutionSelectionService';
interface Projects{
  id:number;
  Name:string;
  Path:string;
}
const Tableprojectref = () => {

  const [tableprojectref, setTableprojectref] = useState<Projects[]>([]);
  useEffect(() => {
    const csprojId = getSelectedCsprojId();
    if (!csprojId) {
      return;
    }

    fetch(`http://localhost:5245/Projects?projectId=${csprojId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data received:', data);
        if (Array.isArray(data)) {
          setTableprojectref(data);
        } else if (typeof data === 'object') {
          setTableprojectref([data]); // Wrap the object in an array
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
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Project references
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Path
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Version
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              
            </tr>
          </thead>
          <tbody>
            {tableprojectref.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.Name}
                  </h5>
                  
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                   <p className="text-black dark:text-white">
                   {packageItem.Name}
                  </p> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tableprojectref;
