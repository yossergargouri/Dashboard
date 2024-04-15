
import React, { useEffect, useState } from 'react';


const TableOne = () => {
  const [tableoneData, setTableOneData] = useState<{ id: string, name: string,path:string, type: string, version: string }[]>([]);  
    useEffect(() => {
      fetch('http://localhost:5245/CsprojFile')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Data received:', data); // Log the received data
          setTableOneData(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error); // Log any errors
        });
    }, []);
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Csproj
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            Id 
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Path
            </h5>
          </div>
          { <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Type
            </h5>
          </div> }
          { <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Version
            </h5>
          </div> }
          {/* <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Conversion
            </h5>
          </div> */}
        </div>

        {tableoneData.map((csproj, index) => (
  <div
    className={`grid grid-cols-3 sm:grid-cols-5   'border-b border-stroke dark:border-strokedark`}  >
    <React.Fragment key={index}>
      <div className={`grid grid-cols-3 sm:grid-cols-5 `}>
        <p className="hidden text-black dark:text-white sm:block">
          {csproj.id}
        </p>
      </div>

      <div className="flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-black dark:text-white">{csproj.path}K</p>
      </div>

      <div className="flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-meta-3">{csproj.type}</p>
      </div>

      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
        <p className="text-black dark:text-white">{csproj.version}</p>
      </div>

      
    </React.Fragment>
  </div>
))}


      </div>
    </div>
  );
};

export default TableOne;
