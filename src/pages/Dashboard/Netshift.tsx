import React from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';
import TableSln from '../../components/Tables/TablesSln';



const Netshift: React.FC = () => {
  return (
    <div>
    <DefaultLayout>
    <div>

    <TableSln/>
    <br></br>
    <br></br>
    
    
          <Link
              to="../Upload"
              className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Upload a new solution
            </Link>
   
    </div>
    </DefaultLayout>

   
    </div>
  );
};

export default Netshift;
