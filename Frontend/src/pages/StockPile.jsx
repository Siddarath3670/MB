import { useDispatch, useSelector } from 'react-redux';
import TableFrame from '../components/Table/TableFrame';
import { useEffect } from 'react';
import { globalUrl } from '../App';
import { fetchStockPiles } from '../state/slices/stockPileSlice';
const StockPile = () => {
  const url = globalUrl + '/carstock';
  const tableHeadings = ['Model Name', 'Car Type', 'Color', 'Stock'];
  const formName = 'StockPile';
  const tableData = useSelector((state) => state.stockPile.tdata);
  const buttonData = useSelector((state) => state.stockPile.buttonData);

  const numOfCol = 4;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStockPiles(url));
  }, [dispatch]);
  return (
    <>
      <TableFrame
        tableData={tableData}
        url={url}
        formName={formName}
        tableHeadings={tableHeadings}
        fetchFn={fetchStockPiles}
        numOfCol={numOfCol}
        buttonData={buttonData}
        readOnly={true}
        serviceModal={false}
      ></TableFrame>
    </>
  );
};
export default StockPile;
