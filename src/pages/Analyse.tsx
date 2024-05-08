
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableCs from '../components/Tables/TableCs';
import Compatibility from '../components/Charts/Compatbility';
import DefaultLayout from '../layout/DefaultLayout';

const Analyse = () => {
  return (
    <DefaultLayout>
    <div className="flex flex-col gap-10">

      <Compatibility/>
      <Breadcrumb pageName="Your project list " />
      <TableCs />
  
    </div>
    </DefaultLayout>
  )
}



export default Analyse;
