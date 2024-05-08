import React from 'react';
import  { useEffect, useState } from 'react';



interface estimation {
  
  id: number ;
  estimationpercent : number;
  
}
const EstimationBar = () => {
  const [EstimationBar, setEstimationBar] = useState< estimation[]>([]); 
  
  



    return (
      <div>
      <div className="mb-1 text-base text-center font-medium text-indigo-700 dark:text-indigo-500">Estimation result</div>
      <div className="w-full bg-gray-300 rounded-full h-4 mb-4 dark:bg-gray-700"> </div>
      <div className="bg-indigo-600 h-full rounded-full dark:bg-indigo-500 text-white text-center" style={{ width: 'estimation.estimationpercent' }}>{}</div>
    </div>


 

    
    );
 
  };

export default EstimationBar;


