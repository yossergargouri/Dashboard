import { Package } from '../../types/package';

const packageData: Package[] = [
  {
    name: 'azerty',
    
    path: `qtrhthfjhgn`,
    
  },
  
];

const TableSix = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Your Project List
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
              </th>
              
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.name}
                  </h5>
                  
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                   <p className="text-black dark:text-white">utfgv
                    
                  </p> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSix;
