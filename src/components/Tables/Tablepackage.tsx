import  { useEffect, useState } from 'react';
import { getSelectedCsprojId } from '../../services/solutionSelectionService';
interface Packages {
  id:number;
  name:string;
  path:string;
  version: string ;
 
  
}


const Tablepakage = () => {
const [Tablepackage, setTablepackage] = useState<Packages[]>([]); 

useEffect(() => {
  const csprojId = getSelectedCsprojId();
  console.log(csprojId)
  if (!csprojId) {
    console.log('Aucun CsprojId sélectionné.');
    return;
  } 
   

    fetch(`http://localhost:5245/api/Packages/GetPackagesByCsProjId/${csprojId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Data received:', data);
      if (Array.isArray(data)) {
        setTablepackage(data);
      } else if (typeof data === 'object') {
        setTablepackage([data]); // Wrap the object in an array
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
              Packages
            </th>
            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
              Path
            </th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">
              version
            </th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">
              status
            </th>
          </tr>
        </thead>
        <tbody>
      {Tablepackage.map((Packages, index) => (
        <tr key={index}>
        <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
          <h5 className="font-medium text-black dark:text-white">
            {Packages?.name}
          </h5>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
           <p className="text-black dark:text-white">
             {Packages?.path}
          </p> 
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
           <p className="text-black dark:text-white">
              {Packages?.version} 
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

export default Tablepakage;
