import { useDispatch, useSelector } from 'react-redux';
import TableFrame from '../components/Table/TableFrame';
import { useEffect } from 'react';
import { globalUrl } from '../App';

import { fetchEmployees } from '../state/slices/employeeSlice';
const Employee = () => {
  const url = globalUrl + '/employee';
  const tableHeadings = ['Name', 'Department', 'Salary'];
  const formName = 'Employee';
  const tableData = useSelector((state) => state.employee.tdata);
  const buttonData = useSelector((state) => state.employee.buttonData);

  const numOfCol = 3;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees(url));
  }, [dispatch]);

  return (
    <>
      <TableFrame
        tableData={tableData}
        url={url}
        formName={formName}
        tableHeadings={tableHeadings}
        fetchFn={fetchEmployees}
        numOfCol={numOfCol}
        buttonData={buttonData}
        readOnly={false}
        serviceModal={false}
      ></TableFrame>
    </>
  );
};
export default Employee;
