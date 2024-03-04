import React from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';
import { assignServId } from '../../state/slices/serviceSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const TableRow = ({
  item,
  handleRowClick,
  url,
  fetchFn,
  numOfCol,
  buttonData,
  readOnly,
  handleModalOpen,
}) => {
  const dispatch = useDispatch();

  const dota = (id) => {
    axios
      .delete(url + '/' + id)
      .then(() => {
        toast.success('Deletion Sucessful ');
        dispatch(fetchFn(url));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deliReq = async (id, data) => {
    axios
      .patch(url + '/' + id, data) // Use PATCH instead of PUT
      .then((response) => {
        toast.success('Car Delivered ');
        dispatch(fetchFn(url));
        console.log('PATCH Request Successful:', response.data);
      })
      .catch((error) => {
        console.error('Error making PATCH request:', error);
      });
  };

  const handleDelivered = (item) => {
    const { status } = item;
    const currentDate = new Date().toISOString().split('T')[0];
    const requestData = {
      deliverydate: currentDate,
      status,
      employeeid: (Math.random() * 10 + 1).toFixed(0),
    };
    deliReq(item.id, requestData);
  };

  const handleServiced = (item) => {
    dispatch(assignServId(item.id));
    handleModalOpen();
  };

  const deleteItem = (id) => {
    console.log(id);
    dota(id);
  };
  const nume = numOfCol;

  return (
    <>
      <tr className="hover:bg-blue-100">
        {Object.keys(item)
          .slice(0, nume)
          .map((key) => (
            <td
              key={nanoid()}
              className="py-2 overflow-hidden overflow-ellipsis text-center font-tableD"
            >
              {item[key]}
            </td>
          ))}
        {!readOnly && (
          <td className="flex justify-evenly py-2 items-center">
            {buttonData.editButton && (
              <button key={nanoid()} onClick={() => handleRowClick(item)}>
                <FaEdit className="text-[#797979] text-xl" />
              </button>
            )}

            {buttonData.deleteButton && (
              <button key={nanoid()} onClick={() => deleteItem(item.id)}>
                <MdDelete className="text-xl text-[#797979]" />
              </button>
            )}
            {buttonData.bookingButton &&
              (item.status === 'delivered' ? (
                <h2 className="text-xl font-tableD text-green-600">
                  Delivered
                </h2>
              ) : (
                <button
                  onClick={() => handleDelivered(item)}
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Deliver
                </button>
              ))}
            {buttonData.serviceButton && (
              <button
                onClick={() => handleServiced(item)}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Serviced
              </button>
            )}
          </td>
        )}
      </tr>
    </>
  );
};

// Making the Axios PUT request

export default TableRow;
