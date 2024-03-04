const TableHeader = ({
  tableHeadings,
  handleModalOpen,
  buttonData,
  readOnly,
}) => {
  return (
    <thead className="font-tableH bg-[#7360DF] text-white sticky top-0">
      <tr>
        {tableHeadings.map((thead, index) => (
          <th key={index} className="py-2 border-r text-center">
            {thead}
          </th>
        ))}
        {!readOnly && (
          <th className="w-[140px] bg-[#7360DF] text-center">
            {buttonData.createButton ? (
              <button onClick={handleModalOpen}>Create</button>
            ) : (
              <h1>Actions</h1>
            )}
          </th>
        )}
      </tr>
    </thead>
  );
};
export default TableHeader;
