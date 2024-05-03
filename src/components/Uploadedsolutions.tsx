import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Usersprofile = () => {
  const [usersData, setUsersData] = useState<{id: string,Username:string}[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5245/User'); // Remplacez '/api/users' par l'URL de votre point de terminaison backend
        setUsersData(response.data);
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
              <h3 className="font-medium text-black dark:text-white"> Uploaded Solutions </h3>
            </div>
          <div>
          <ul className="flex h-auto flex-col overflow-y-auto"></ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Usersprofile;
