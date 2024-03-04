import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const CreateModal = ({
  url,
  isOpen,
  formTitle,
  inputFields,
  setModal,
  setOverlay,
  fetchFn,
  serviceModal,
}) => {
  console.log('Create Modal');
  const dispatch = useDispatch();

  const initialFormData = Object.fromEntries(
    inputFields.map((field) => [field, ''])
  );

  const [formData, setFormData] = useState(initialFormData);
  const [validationError, setValidationError] = useState('');
  const [cost, setCost] = useState(0);
  const [desc, setDesc] = useState('');
  const id = useSelector((state) => state.service.servID);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setValidationError('');
  };

  const closeAll = () => {
    setModal(false);
    setOverlay(false);
  };

  const validateForm = () => {
    for (const field of Object.keys(formData)) {
      if (!formData[field]) {
        setValidationError(`Please fill in the ${field} field`);
        return false;
      }
    }
    return true;
  };

  const handleSave = async () => {
    try {
      if (!validateForm()) {
        console.error('Form validation failed');
        return;
      }

      const response = await axios.post(url, formData);
      console.log('Save successful:', response.data);
      toast.success('Save Successful ');
      dispatch(fetchFn(url));

      closeAll();
    } catch (error) {
      console.error('Error during save:', error);
    }
  };

  const handleServ = (id) => {
    const currentTime = new Date().toISOString();
    const requestData = {
      date: currentTime,
      desc: desc,
      cost: cost,
    };
    console.log('Vehicle Id: ' + id + ' Serviced');
    serviceReq(id, requestData);

    closeAll();
  };

  const serviceReq = async (id, data) => {
    console.log(data);
    axios
      .put(url + '/' + id, data)
      .then((response) => {
        dispatch(fetchFn(url));
        console.log('PUT Request Successful:', response.data);
      })
      .catch((error) => {
        console.error('Error making PUT request:', error);
      });
  };

  return (
    <div
      className={`fixed ${
        isOpen ? 'block' : 'hidden'
      } inset-0 h-screen w-screen flex items-center justify-center`}
      tabIndex="-1"
      role="dialog"
    >
      <div className="absolute bg-white w-96 p-6 rounded shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-2xl font-bold">{formTitle}</h4>
        </div>
        {serviceModal ? (
          <form>
            <div className="mb-4">
              <label htmlFor="cost" className="block text-sm  text-gray-700">
                Cost
              </label>
              <input
                type="number"
                className={`mt-1 p-2 border rounded-md w-full ${
                  validationError ? 'border-red-500' : ''
                }`}
                id="cost"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              ></input>
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm  text-gray-700"
              >
                Service Description
              </label>
              <input
                type="text"
                className={`mt-1 p-2 border rounded-md w-full ${
                  validationError ? 'border-red-500' : ''
                }`}
                id="cost"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></input>
            </div>

            {validationError && (
              <p className="text-red-500 text-sm">{validationError}</p>
            )}
          </form>
        ) : (
          <form>
            {inputFields.map((field) => (
              <div className="mb-4" key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}:
                </label>
                <input
                  type="text"
                  className={`mt-1 p-2 border rounded-md w-full ${
                    validationError ? 'border-red-500' : ''
                  }`}
                  id={field}
                  value={formData[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                  required
                />
              </div>
            ))}
            {validationError && (
              <p className="text-red-500 text-sm">{validationError}</p>
            )}
          </form>
        )}

        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={() => {
              if (serviceModal) {
                handleServ(id);
              } else {
                handleSave();
              }
            }}
          >
            Save
          </button>
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={closeAll}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
