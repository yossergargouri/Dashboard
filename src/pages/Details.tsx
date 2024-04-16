import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import Tableprojectref from '../components/Tables/Tableprojectref';
import Tablepackage from '../components/Tables/Tablepackage';
import Tablereference from '../components/Tables/Tablereference';
import DefaultLayout from '../layout/DefaultLayout';

const Details = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Your project information" />

      <div className="flex flex-col gap-10">
        
        <Tablepackage />
        <Tablereference/>
        <Tableprojectref/>
        
      </div>
    </DefaultLayout>
  );
};

export default Details;
