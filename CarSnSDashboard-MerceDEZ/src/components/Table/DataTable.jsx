import TableHeader from './TableHeader';
import TableRow from './TableRow';

const DataTable = ({
  url,
  tableHeadings,
  data,
  handleModalOpen,
  handleEditModalOpen,
  setEditModalData,
  fetchFn,
  numOfCol,
  buttonData,
  readOnly,
}) => {
  const handleRowClick = (rowData) => {
    setEditModalData(rowData);
    handleEditModalOpen();
  };

  return (
    <div className="h-full bg-slate-100 overflow-auto">
      <table className="w-full table-fixed shadow-md rounded bg-white">
        <TableHeader
          handleModalOpen={handleModalOpen}
          tableHeadings={tableHeadings}
          buttonData={buttonData}
          readOnly={readOnly}
        />
        <tbody>
          {data.map((item, index) => {
            return (
              <TableRow
                numOfCol={numOfCol}
                handleRowClick={handleRowClick}
                handleModalOpen={handleModalOpen}
                key={index}
                item={item}
                url={url}
                fetchFn={fetchFn}
                buttonData={buttonData}
                readOnly={readOnly}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default DataTable;
