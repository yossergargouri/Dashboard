import React from 'react';



interface estimation {
  
  id: number ;
  estimationpercent : string ;
  
}


const EstimationBar: React.FC = () => {
  // Recherche de l'objet avec CsId spécifique
  

    return (
      <div>
      <div className="mb-1 text-base text-center font-medium text-indigo-700 dark:text-indigo-500">Estimation result</div>
      <div className="w-full bg-gray-300 rounded-full h-4 mb-4 dark:bg-gray-700"> </div>
      <div className="bg-indigo-600  bg- indego height 10px h-5 text-center text-white rounded-full dark:bg-indigo-500">45%</div>
    </div>
    
    );
 
  };

export default EstimationBar;


