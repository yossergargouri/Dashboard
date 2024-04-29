import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import ChartThree from '../components/Charts/ChartThree';
import DefaultLayoutAdm from '../layout/DefaultLayoutAdm';

const Chart: React.FC = () => {
  return (
    <DefaultLayoutAdm>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
      
      
        <ChartThree />
      </div>
    </DefaultLayoutAdm>
  );
};

export default Chart;
