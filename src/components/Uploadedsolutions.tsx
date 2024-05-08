import { useEffect, useState } from 'react';
import axios from 'axios';


const Usersprofile = () => {
  const [usersData, setUsersData] = useState<{id: string,Username:string}[]>([]);
  const [solutiondata, setsolutiondata] = useState<{name:string ,version:string}[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5245/User');
        setUsersData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5245/api/SlnFiles/sln');
        setsolutiondata(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    

    
    <div className="grid grid-cols-2 gap-9 sm:grid-cols-2">
    <div className="flex flex-col gap-9">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">Uploaded Solutions</h3>
        </div>
        <div>
          <ul className="flex h-auto flex-col overflow-y-auto">
            {solutiondata.map((solution, index) => (
              <li className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4" key={index}>
                
                  <div className="font-medium text-black dark:text-white text-center">{solution.name}</div>
                
                <div className="flex flex-1 items-center justify-between">
                  
                  <div className="font-medium text-black dark:text-white text-center">{solution.version}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Usersprofile;
