
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableCs from '../components/Tables/TableCs';
// import TableTwo from '../components/Tables/TableTwo';
import DefaultLayout from '../layout/DefaultLayout';

const Analyse = () => {
  return (
    <DefaultLayout>
         <Breadcrumb pageName="Your project list " />

<div className="flex flex-col gap-10">
  <TableCs />
  {/* <TableTwo/> */}
</div>
    </DefaultLayout>
  )
}



export default Analyse;
