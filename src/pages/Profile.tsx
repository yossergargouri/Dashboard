import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import CoverOne from '../images/cover/cover-01.png';
import userSix from '../images/user/user-06.png';

import axios from 'axios';


const Profile: React.FC  = () => {

 
  async function usersdata(userId: string): Promise<any> {
    try {

    const response = await axios.get('')
    return response.data;
  }catch (error){
    console.error("Erreur lors de la récupération des données de l'utilisateur :", error);
    throw error;
}

  }
  const username ='azert';
  usersdata(username)
  .then((userData)=>{
    console.log("Données de l'utilisateur :", userData);

  })
  .catch((error) => {
      console.error("Une erreur s'est produite :", error);
  });
 

  
    
  
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Profile" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={CoverOne}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
          <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
          
          </div>
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2">
              <img src={userSix} alt="profile" />
              
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
             Mark
            </h3>
            <p className="font-medium">full Stack Developer</p>
            <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
               
                <span className="text-sm">Projects</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  7
                </span>
                <span className="text-sm">Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
