import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Usersprofile = () => {
  const [usersData, setUsersData] = useState<{id: string,Username:string,Email:string,PasswordHash:string,Telephone:String,Photo:string}[]>([]);

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

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
               Users
              </h3>
          </div>    
           <Link  to ='/Popup'>
        <div>
           {usersData.map((user, index) => (
            <div className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4" key={index}>
              <div className="relative h-14 w-14 rounded-full">
              <img src={user.Photo} alt="User" />
              </div>
              <div className="flex flex-1 items-center justify-between">
                <div>
                  <h5 className="font-medium text-black dark:text-white">
                    {user.Username}
                  </h5>
                  <p className="text-gray-6 dark:text-gray-4">E-mail: {user.Email}</p>
                  <p className="text-gray-6 dark:text-gray-4"> Phone Number: {user.Telephone} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
            </Link>
            </div>
            
        </div>
      </div>
  );
};

export default Usersprofile;
