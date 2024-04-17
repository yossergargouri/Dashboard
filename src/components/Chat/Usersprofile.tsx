

import UserOne from '../../images/user/user-01.png';
import { Userprofile } from '../../types/Usersprofile';


const UsersData: Userprofile[] = [
  {
    avatar: UserOne,
    name: 'User name',
    email: 'How are you?',
    phonenumber: 12,
    
  },
  {
    avatar: UserOne,
    name: 'User name',
    email: 'How are you?',
    phonenumber: 12,
  },
  {
    avatar: UserOne,
    name: 'User name',
    email: 'How are you?',
    phonenumber: 12,
  },
  
];

const Usersprofile = () => {
  return (
    <div className="col-span-40 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
        Users
      </h4>

      <div>
        {UsersData.map((users, key) => (
          
          <div
            className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={key}
             >
            <div className="relative h-14 w-14 rounded-full">
              <img src={users.avatar} alt="User" />
             
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-black dark:text-white">
                  {users.name}
                </h5>
              </div>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Usersprofile;
