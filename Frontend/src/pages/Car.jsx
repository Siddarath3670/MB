import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  maxHeight: '85vh',
  overflow: 'auto',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: '3px solid #000',
  boxShadow: 24,
  p: 4,
};

const Car = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [editProduct, setEditProduct] = React.useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const resp = await axios.get('http://localhost:8081/car');
      setData(resp.data);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  const [values, setValues] = useState({
    modelname: '',
    type: '',
    chassisno: '',
    engineno: '',
    description: '',
    color: '',
    price: '',
    stock: '',
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: file,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('modelname', values.modelname);
    formData.append('type', values.type);
    formData.append('chassisno', values.chassisno);
    formData.append('engineno', values.engineno);
    formData.append('description', values.description);
    formData.append('color', values.color);
    formData.append('price', values.price);
    formData.append('stock', values.stock);
    formData.append('carimage', values.carimage);
    formData.append('sideview', values.sideview);
    formData.append('interior', values.interior);
    formData.append('rearview', values.rearview);

    try {
      const response = await axios.post('http://localhost:8081/car', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Car added successfully');
      toast.success('Car added successfully');
      handleClose();
      fetchData();
    } catch (error) {
      console.error('Error adding car:', error);
      toast.error('Error adding car!');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8081/car/' + id);
      toast.success('car deleted successful');
      fetchData();
    } catch (err) {
      console.log(err);
      toast.error('Error deleting car !');
    }
  };

  const handleEditOpen = (product) => {
    setEditProduct(product);
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditProduct(null);
    setEditOpen(false);
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    const updatedProduct = {
      modelname: values.modelname,
      type: values.type,
      chassisno: values.chassisno,
      engineno: values.engineno,
      description: values.description,
      color: values.color,
      price: values.price,
      stock: values.stock,
    };

    try {
      await axios.put(
        `http://localhost:8081/car/${editProduct.id}`,
        updatedProduct
      );

      console.log('Product updated successfully');
      toast.success('Product updated successfully');
      handleEditClose();
      fetchData();
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error('Error updating product!');
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="flex" style={{ backgroundColor: 'rgb(226 232 240)', height: '620px' }}>
        <div>

          {/* Add car modal */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <DialogTitle
                id="modal-modal-title"
                sx={{ textAlign: 'center' }}
              >
                Add Product
              </DialogTitle>
              <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="modelname"
                      label="Car modelname"
                      name="modelname"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="type"
                      label="Car Type"
                      name="type"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="chassisno"
                      label="Chassis Number"
                      name="chassisno"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="engineno"
                      label="Engine Number"
                      name="engineno"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="description"
                      label="Car Description"
                      name="description"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="color"
                      label="Car Color"
                      name="color"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="price"
                      label="Car Price"
                      name="price"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="stock"
                      label="Car stock"
                      name="stock"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label htmlFor="carimage">
                      <Button
                        variant="contained"
                        component="label"
                        startIcon={<CloudUploadIcon />}
                        sx={{ width: '100%' }}
                      >
                        Car Image
                        <VisuallyHiddenInput
                          accept="image/*"
                          id="carimage"
                          name="carimage"
                          type="file"
                          onChange={(e) => handleFileChange(e, 'carimage')}
                        />
                      </Button>
                    </label>
                  </Grid>

                  <Grid item xs={12}>
                    <label htmlFor="sideview">
                      <Button
                        variant="contained"
                        component="label"
                        startIcon={<CloudUploadIcon />}
                        sx={{ width: '100%' }}
                      >
                        Side View
                        <VisuallyHiddenInput
                          accept="image/*"
                          id="sideview"
                          name="sideview"
                          type="file"
                          onChange={(e) => handleFileChange(e, 'sideview')}
                        />
                      </Button>
                    </label>
                  </Grid>

                  <Grid item xs={12}>
                    <label htmlFor="interior">
                      <Button
                        variant="contained"
                        component="label"
                        startIcon={<CloudUploadIcon />}
                        sx={{ width: '100%' }}
                      >
                        Car Interior
                        <VisuallyHiddenInput
                          accept="image/*"
                          id="interior"
                          name="interior"
                          type="file"
                          onChange={(e) => handleFileChange(e, 'interior')}
                        />
                      </Button>
                    </label>
                  </Grid>

                  <Grid item xs={12}>
                    <label htmlFor="rearview">
                      <Button
                        variant="contained"
                        component="label"
                        startIcon={<CloudUploadIcon />}
                        sx={{ width: '100%' }}
                      >
                        Rear View
                        <VisuallyHiddenInput
                          accept="image/*"
                          id="rearview"
                          name="rearview"
                          type="file"
                          onChange={(e) => handleFileChange(e, 'rearview')}
                        />
                      </Button>
                    </label>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      sx={{
                        mt: 2,
                        width: '100%',
                        backgroundColor: (theme) =>
                          theme.palette.error.main,
                        '&:hover': { backgroundColor: '#ff0000' },
                      }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        mt: 2,
                        width: '100%',
                        backgroundColor: (theme) =>
                          theme.palette.success.main,
                        '&:hover': { backgroundColor: '#00cc00' },
                      }}
                    >
                      Add Product
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Modal>

          {/* Edit Car modal */}
          <Modal
            open={editOpen}
            onClose={handleEditClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <DialogTitle
                id="modal-modal-title"
                sx={{ textAlign: 'center' }}
              >
                Edit Car Details
              </DialogTitle>
              <form noValidate onSubmit={handleEditSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="modelname"
                      label="Car Modelname"
                      name="modelname"
                      fullWidth
                      defaultValue={
                        editProduct ? editProduct.modelname : ''
                      }
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="type"
                      label="Car Type"
                      name="type"
                      fullWidth
                      defaultValue={editProduct ? editProduct.type : ''}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="chassisno"
                      label="Chassis Number"
                      name="chassisno"
                      fullWidth
                      defaultValue={
                        editProduct ? editProduct.chassisno : ''
                      }
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="engineno"
                      label="Engine Number"
                      name="engineno"
                      fullWidth
                      defaultValue={editProduct ? editProduct.engineno : ''}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="description"
                      label="Car Description"
                      name="description"
                      fullWidth
                      defaultValue={
                        editProduct ? editProduct.description : ''
                      }
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="color"
                      label="Car Color"
                      name="color"
                      fullWidth
                      defaultValue={editProduct ? editProduct.color : ''}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="price"
                      label="Car Price"
                      name="price"
                      fullWidth
                      defaultValue={editProduct ? editProduct.price : ''}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="stock"
                      label="Car Price"
                      name="stock"
                      fullWidth
                      defaultValue={editProduct ? editProduct.stock : ''}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Button
                      onClick={handleEditClose}
                      variant="contained"
                      sx={{
                        mt: 3,
                        width: '100%',
                        backgroundColor: (theme) =>
                          theme.palette.error.main,
                        '&:hover': { backgroundColor: '#ff0000' },
                      }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        mt: 3,
                        width: '100%',
                        backgroundColor: (theme) =>
                          theme.palette.success.main,
                        '&:hover': { backgroundColor: '#00cc00' },
                      }}
                    >
                      Save Changes
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Modal>

          <div className="w-full mx-auto overflow-auto max-h-600">
            <table className="w-full border-collapse border mt-5">
              <thead className="font-tableH bg-[#7360DF] text-white sticky top-0">
                <tr className="bg-[#7360DF] text-white">
                  <th className="w-[140px] bg-[#7360DF] text-center border-r">Image</th>
                  <th className="w-[140px] bg-[#7360DF] text-center border-r">Model Name</th>
                  <th className="w-[140px] bg-[#7360DF] text-center border-r">Type</th>
                  <th className="w-[140px] bg-[#7360DF] text-center border-r">Chassis No</th>
                  <th className="w-[140px] bg-[#7360DF] text-center border-r">Engine No</th>
                  <th className="w-[140px] bg-[#7360DF] text-center border-r">Description</th>                 
                  <th className="w-[140px] bg-[#7360DF] text-center border-r">Price</th>
                  <th className="w-[140px] bg-[#7360DF] text-center border-r">Stock</th>
                  <th className="p-2"><button
              className="bg-[#7360DF] text-white py-2 px-4 rounded hover:bg-[#8e7cf0]"
              onClick={handleOpen}
            >
              Add
            </button></th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, i) => (
                  <tr key={i} className="hover:bg-blue-100 bg-white">
                    <td className=" text-center p-2">
                      {d.carimage && (
                        <img
                          src={`http://localhost:8081/images/${d.carimage}`}
                          alt={d.modelname}
                          className="w-full h-14 mx-auto object-cover"
                        />
                      )}
                    </td>
                    <td className="p-2 text-center ">{d.modelname}</td>
                    <td className="p-2 text-center ">{d.type}</td>
                    <td className="p-2 text-center ">{d.chassisno}</td>
                    <td className="p-2 text-center ">{d.engineno}</td>
                    <td className="p-2 text-center ">{d.description}</td>
                    <td className="p-2 text-center ">₹{d.price}</td>
                    <td className="p-2 text-center ">{d.stock}</td>
                    <td className="p-2 text-center">
                      <div className="flex justify-evenly py-2 items-center">
                        <button onClick={() => handleEditOpen(d)}>
                          <FaEdit className="text-[#797979] text-xl" />
                        </button>
                        <button onClick={() => handleDelete(d.id)}>
                          <MdDelete className="text-xl text-[#797979]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Car;