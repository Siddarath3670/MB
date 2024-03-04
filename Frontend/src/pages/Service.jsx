import { useDispatch, useSelector } from 'react-redux';
import TableFrame from '../components/Table/TableFrame';
import { useEffect } from 'react';
import { globalUrl } from '../App';
import { fetchServices } from '../state/slices/serviceSlice';

const Service = () => {
  const url = globalUrl + '/service';
  const tableHeadings1 = [
    'Registration Number',
    'Customer Name',
    'Phone',
    'Service Type',
    'Arrival Date',
  ];
  const tableHeadings2 = [
    'Registration Number',
    'Customer Name',
    'Phone',
    'Service Type',
    'Arrival Date',
    'Delivery Date',
    'Service Description',
    'Cost',
  ];

  const formName = 'Service';
  const data1 = useSelector((state) => state.service.t1data);
  const buttonData = useSelector((state) => state.service.buttonData);
  const data2 = useSelector((state) => state.service.t2data);

  const numOfCol1 = 5;
  const numOfCOl2 = 8;
  const dispatch = useDispatch();

  // const preTableData = data.map((item) => {
  //   // Format the arrival date
  //   const formattedArrivalDate = new Date(item.arrivaldate).toLocaleDateString(
  //     'en-GB'
  //   );

  //   // Format the delivery date
  //   const formattedDeliveryDate = new Date(
  //     item.deliverydate
  //   ).toLocaleDateString('en-GB');

  //   // Return the updated item
  //   return {
  //     ...item,
  //     arrivaldate: formattedArrivalDate,
  //     deliverydate: formattedDeliveryDate,
  //   };
  // });

  // const tableData1 = preTableData.filter((item) => item.status === 'false');
  // const tableData2 = preTableData.filter((item) => item.status === 'true');

  useEffect(() => {
    dispatch(fetchServices(url));
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      <TableFrame
        tableData={data1}
        url={url}
        formName={formName}
        tableHeadings={tableHeadings1}
        fetchFn={fetchServices}
        numOfCol={numOfCol1}
        buttonData={buttonData}
        readOnly={false}
        serviceModal={true}
      ></TableFrame>
      <div className="mt-[-20px]">
        {' '}
        <TableFrame
          tableData={data2}
          url={url}
          formName={formName}
          tableHeadings={tableHeadings2}
          fetchFn={fetchServices}
          numOfCol={numOfCOl2}
          buttonData={buttonData}
          readOnly={true}
          serviceModal={false}
        ></TableFrame>
      </div>
    </div>
  );
};
export default Service;
