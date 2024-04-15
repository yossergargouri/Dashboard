import React from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';
import TableSix from '../../components/Tables/TablesSix';



const Netshift: React.FC = () => {
  return (
    <div>
    <DefaultLayout>
    <div>

    <TableSix/>
    <br></br>
    <br></br>
    
    
          <Link
              to="../Upload"
              className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Upload a new project
            </Link>
   
    </div>
    </DefaultLayout>

   
    </div>
  );
};

export default Netshift;
