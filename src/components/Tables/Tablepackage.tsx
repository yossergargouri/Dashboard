  import { config } from '../../types/config';


const productData: config[] = [
  {
    name: '',
    
    path: '',
  
  },
  
];

const Tablepakage = () => {
  return (

    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
    <div className="max-w-full overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-2 text-left dark:bg-meta-4">
            <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
              Packages
            </th>
            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
              Path
            </th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">
              version
            </th>
            <th className="py-4 px-4 font-medium text-black dark:text-white">
              status
            </th>
          </tr>
        </thead>
        <tbody>
      {productData.map((product, key) => (
        <tr key={key}>
        <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
          <h5 className="font-medium text-black dark:text-white">
            {product.name}
          </h5>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
           <p className="text-black dark:text-white">
             {product.path} 
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

export default Tablepakage;
