import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import TableSln from '../../components/Tables/TablesSln';
import TotalSolutions from  '../../components/Charts/Totalsolutions';
import Solutiontype from '../../components/Charts/Solutiontype';



const Netshift: React.FC = () => {
  return (
    <div>
    <DefaultLayout>
    <div>

      <div className='texte-center text-bold text-grey '>     Welcome to Netshift Advisor, your best tool for a successful upgrade.</div>
    <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      
      <Solutiontype/>
      <TotalSolutions/>

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
