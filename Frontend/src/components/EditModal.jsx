import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const EditModal = ({
  url,
  isOpen,
  formTitle,
  inputFields,
  setModal,
  setOverlay,
  rowData,
  fetchFn,
}) => {
  const dispatch = useDispatch();
  const initialState = Object.fromEntries(
    inputFields.map((field) => [field, rowData ? rowData[field] || '' : ''])
  );
  console.log('Editmodal');
  const [formData, setFormData] = useState(initialState);
  const id = rowData?.id ?? 0;
  const path = url + '/' + id;

  useEffect(() => {
    if (rowData) {
      const updatedFormData = {};
      inputFields.forEach((field) => {
        updatedFormData[field.name] =
          rowData[field.name] !== undefined ? rowData[field.name] : '';
      });

      setFormData(updatedFormData);
    }
  }, [rowData]);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const closeAll = () => {
    setModal(false);
    setOverlay(false);
  };

  const handleSave = async () => {
    try {
      if (!formData) {
        console.error('Invalid form data. Please check the required fields.');
        return;
      }
      const response = await axios.put(path, formData);
      toast.success('Update Successful');
      dispatch(fetchFn(url));
      console.log('Update successful:', response.data);
      closeAll();
    } catch (error) {
      console.error('Error during update:', error);
    }
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
                className="mt-1 p-2 border rounded-md w-full"
                id={field}
                value={formData[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                required
              />
            </div>
          ))}
        </form>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleSave}
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

export default EditModal;
