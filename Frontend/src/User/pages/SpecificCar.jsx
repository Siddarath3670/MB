import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { globalUrl } from '../../App';

import { useEffect, useState } from 'react';
import BlackNavBar from '../BlackNavBar';
import Footer from '../../components/Footer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
const SpecificCar = () => {
  const url = globalUrl + '/car';
  const id = useSelector((state) => state.common.value);

  const [carData, setCarData] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [values, setValues] = useState({
    name: '',
    phone: '',
    amount: '',
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const currentDate = new Date().toISOString();

    const formData = new FormData();
    formData.append('carid', id);
    formData.append('customername', values.name);
    formData.append('phone', values.phone);
    formData.append('bookingamount', values.amount);
    formData.append('bookingdate', currentDate);

    try {
      console.log('Form Input Values:', {
        carid: id,
        customername: values.name,
        phone: values.phone,
        bookingamount: values.amount,
        bookingdate: currentDate,
      });

      await axios.post('http://localhost:8081/booking', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Car booked successfully');
      toast.success('Car booked successfully');
      handleClose();
    } catch (error) {
      console.error('Error Car booking:', error);
      toast.error('Error Car booking!');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchCar = async () => {
      try {
        const response = await axios.get(`${url}/${id}`);
        const receivedData = response.data;
        setCarData(receivedData);
      } catch (error) {
        console.error('Error fetching car data:', error.message);
      }
    };

    fetchCar();
  }, [id]);

  // Car Images

  // Provide The SRC values for Images Below
  const images = [
    `http://localhost:8081/images/${carData.sideview}`,
    `http://localhost:8081/images/${carData.interior}`,
    `http://localhost:8081/images/${carData.rearview}`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [images.length]);

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

      {/* Booking modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DialogTitle id="modal-modal-title" sx={{ textAlign: 'center' }}>
            Car Booking
          </DialogTitle>
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="name"
                  label="Name"
                  name="name"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="amount"
                  label="Booking Amount"
                  name="amount"
                  fullWidth
                  onChange={handleChange}
                />
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
                    backgroundColor: (theme) => theme.palette.error.main,
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
                    backgroundColor: (theme) => theme.palette.success.main,
                    '&:hover': { backgroundColor: '#00cc00' },
                  }}
                >
                  Book Car
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>

      <BlackNavBar></BlackNavBar>
      {/* Body */}
      <div className="mr-16 ml-16 mt-6">
        {/* Hero Container */}
        <div className="w-full h-[450px] pl-12 pr-12 pt-6 mb-3 relative">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              className={`object-cover w-full h-full ${
                index === currentIndex ? '' : 'hidden'
              }`}
            />
          ))}
        </div>
        {/* INfo Container */}
        <div className="w-full">
          {/* Name And Price */}
          <div className="flex items-center justify-between pl-12 pr-12 mb-6">
            <h3 className="font-semibold text-4xl">
              {'Mercedes-benz' + ' ' + carData.modelname}
            </h3>
            <h3 className="font-semibold text-2xl text-slate-500">
              {'Starting From' + ' ₹' + carData.price + '*'}
            </h3>
          </div>
          {/* Main Desc */}
          <div className="w-full  bg-slate-200 mb-6 p-6">
            <h4 className="w-full text-xl font-homeT">
              Performance is a cornerstone of Mercedes-benz's identity, with all
              models featuring powerful engines and responsive handling.
              <br></br> <br></br> In addition to performance, Mercedes-benz
              prioritizes cutting-edge technology and innovation. all models
              come equipped with advanced features such as infotainment systems,
              driver assistance technologies, and connectivity options,
              enhancing comfort, convenience, and safety for drivers and
              passengers alike. <br />
              <br></br>Clearly structured design language on the exterior for a
              sporty and self-assured presence Available with combustion engine,
              in petrol and diesel The modern interior is equipped with
              high-quality materials and innovations such as the Mercedes-benz
              Curved <br /> Mercedes-benz {carData.modelname}: <br></br> Fuel
              consumption, combined km/L: 20.37 <br />
              CO2 emissions, combined in g/km: 130
            </h4>
          </div>
          {/* Exeterio and Inte */}
          <div className="w-full flex flex-col  py-10 px-5 ">
            {/* Card 1 */}
            <div className="flex w-full mb-10">
              <div className="w-[55%]  h-[500px] flex  flex-col items-start justify-center  ">
                <h1 className="font-tableD text-4xl mb-3  text-ter-blue">
                  Key Features of Mercedes-benz {carData.modelname} <br></br>
                  Interiors
                </h1>
                <p className="w-[96%] text-lg  font-tableD h-full text-ter-blue font-semibold">
                  <span className="font-bold text-2xl">
                    1. Premium Materials:
                  </span>{' '}
                  Mercedes-benz interiors are crafted using high-quality
                  materials such as soft-touch surfaces, premium leather
                  upholstery, and genuine wood or aluminum trim, creating a
                  luxurious and refined ambiance. <br /> <br />
                  <span className="font-bold text-2xl">
                    2. Driver-Oriented Cockpit:
                  </span>{' '}
                  Mercedes-benz's driver-centric design philosophy is evident in
                  the layout of the cockpit, with controls positioned for easy
                  reach and a focus on enhancing the driving experience. <br />{' '}
                  <br />
                  <span className="font-bold text-2xl">
                    3. Advanced Technology:
                  </span>{' '}
                  Mercedes-benz cars are equipped with state-of-the-art
                  technology features, including intuitive infotainment systems
                  with touchscreen displays, digital instrument clusters,
                  gesture control, and voice recognition, providing both
                  convenience and entertainment. <br /> <br />
                  <span className="font-bold text-2xl">
                    4. Comfort and Ergonomics:
                  </span>{' '}
                  Mercedes-benz pays attention to comfort and ergonomics,
                  offering supportive seats with various adjustment options,
                  ample legroom and headroom for passengers, and thoughtful
                  storage solutions throughout the cabin. <br /> <br />
                </p>
              </div>

              <img
                className=" w-[45%] h-[500px] rounded-2xl shadow-lg object-cover"
                src={ `http://localhost:8081/images/${carData.interior}`}
                alt=""
              />
            </div>
            {/* Card 2 */}
            <div className="flex w-full mt-6 mb-6">
              <img
                className=" w-[45%] h-[500px] rounded-2xl shadow-lg object-cover"
                src={
                  `http://localhost:8081/images/${carData.sideview}`
  
                }              alt=""
              />
              <div className="w-[55%]  h-[500px] flex pl-16 flex-col items-start justify-center  ">
                <h1 className="font-tableD text-4xl mb-3 text-ter-blue ">
                  Mercedes-benz {carData.modelname}'s Distinctive Exterior{' '}
                  <br /> Features
                </h1>
                <p className="w-[96%] font-tableD text-lg font-semibold text-ter-blue">
                  <span className="font-semibold text-2xl">
                    1. Sleek and Aerodynamic:
                  </span>{' '}
                  Mercedes-benz vehicles often feature sleek lines and
                  aerodynamic shapes, providing a sporty and elegant appearance.{' '}
                  <br /> <br />
                  <span className="font-semibold text-2xl">
                    2. Iconic Kidney Grille:
                  </span>{' '}
                  A signature element of Mercedes-benz's exterior design, the
                  kidney grille varies in size and shape across models but
                  remains a defining feature. <br /> <br />
                  <span className="font-semibold text-2xl">
                    3. Distinctive Headlights:
                  </span>{' '}
                  Many Mercedes-benz models come with stylish LED headlights or
                  optional adaptive LED headlights, enhancing visibility and
                  adding to the car's aesthetic appeal. <br /> <br />
                  <span className="font-semibold text-2xl">
                    4. Dynamic Proportions:
                  </span>{' '}
                  Mercedes-benz cars typically have balanced proportions with a
                  long hood, short front and rear overhangs, and a well-defined
                  stance, reflecting dynamic performance capabilities. <br />{' '}
                  <br />
                </p>
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="flex w-full items-center justify-end mb-10 pr-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleOpen()}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};
export default SpecificCar;
