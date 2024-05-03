import React from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';
import TableSln from '../../components/Tables/TablesSln';
import ChartOne from  '../../components/Charts/ChartOne';
import ChartFour from '../../components/Charts/ChartFour';


const Netshift: React.FC = () => {
  return (
    <div>
    <DefaultLayout>
    <div>
    <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      <ChartFour/>
      <ChartOne/>

     </div> 
      <br></br>
       <br></br>
    <TableSln/>
       <br></br>
       <br></br>
    
    
      
            </div>
    </DefaultLayout>

   
    </div>
  );
};

export default Netshift;
