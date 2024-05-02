  import React, { useEffect, useState } from 'react';
  import { accountService } from '../../services/account.service';
  import { Link } from 'react-router-dom';
  import { setSelectedSolutionId } from '../../services/solutionSelectionService';

  interface Solution {
    id: number; // Changer le type de l'ID en nombre
    Name: string;
    Version: string;
  }

  const TableSln: React.FC = () => {
    const [tableSolutions, setTableSolutions] = useState<Solution[]>([]);
    const [userId, setUserId] = useState<string>('');

    useEffect(() => {
      const fetchUserId = async () => {
        try {
          const loggedInUserId = await accountService.getUserId();
          setUserId(loggedInUserId || '');
        } catch (error) {
          console.error('Error fetching user ID:', error);
        }
      };

      fetchUserId();
    }, []);

    useEffect(() => {
      const fetchSolutions = async () => {
        try {
          const response = await fetch(`http://localhost:5245/api/SlnFiles?userId=${userId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setTableSolutions(data);
        } catch (error) {
          console.error('Error fetching solutions:', error);
        }
      };

      fetchSolutions();
    }, [userId]);

    const handleSolutionSelect = (solutionId: number) => {
      setSelectedSolutionId(solutionId);
    };

    return (
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Your Solutions List
        </h4>
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Name
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Version
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Total packages
            </th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">
              Total project refrences
            </th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">
            Total referenes
            </th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">
              Status 
            </th>
              </tr>
            </thead>
            <tbody>
              {tableSolutions.map((solution, index) => (
                <tr key={index}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <Link to={`/Analyse`} className="block w-full h-full" onClick={() => handleSolutionSelect(solution.id)}>
                      <td className="font-medium text-black dark:text-white">
                        {solution.Name}
                      </td>
                    </Link>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <Link to={`/Analyse`} className="block w-full h-full" onClick={() => handleSolutionSelect(solution.id)}>
                      <h5 className="font-medium text-black dark:text-white">
                        {solution.Version}
                      </h5>
                    </Link>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <Link to={`/Analyse`} className="block w-full h-full" onClick={() => handleSolutionSelect(solution.id)}>
                      <span className="font-medium text-black dark:text-white">
                        {solution.Name}
                      </span>
                    </Link>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <Link to={`/Analyse`} className="block w-full h-full" onClick={() => handleSolutionSelect(solution.id)}>
                      <span className="font-medium text-black dark:text-white">
                        {/* {{} } */}
                      </span>
                    </Link>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <Link to={`/Analyse`} className="block w-full h-full" onClick={() => handleSolutionSelect(solution.id)}>
                      <span className="font-medium text-black dark:text-white">
                        {/* {solution.Name} */}
                      </span>
                    </Link>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <Link to={`/Analyse`} className="block w-full h-full" onClick={() => handleSolutionSelect(solution.id)}>
                      <span className="font-medium text-black dark:text-white">
                        {/* {solution.Name} */}
                      </span>
                    </Link>
                  </td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  export default TableSln;
