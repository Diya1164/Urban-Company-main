import React, { useEffect } from "react";
import PackageContainer from "../Components/Service_pages/PackageContainer";
import PackageContainer2 from "../Components/Service_pages/PackageContainer2";
//import PackagesBox from "../Components/Service_pages/PackagesBox";  
import Split from "../Components/Service_pages/Split";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/Services/action";
import { Box, Image, Heading } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.png"; // Correct import for the background image

const ServicePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allProduct = useSelector((store) => store?.allProduct);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleClick = () => {
    navigate("/:city/summary");
  };

  const womensdata = allProduct?.data?.[0];

  return (
    <Box 
      backgroundImage={`url(${bg})`} 
      backgroundSize="cover" 
      backgroundPosition="center" 
      width="100vw" 
      height="100vh" 
    >
      {womensdata ? 
        <Split 
          title={womensdata.Salon_for_women_data?.[0]?.Title} 
          videos={womensdata.Salon_for_women_data?.[0]?.videos} 
        /> 
        : ''
      }

      <Box display="flex">
        {womensdata ? 
          womensdata.Salon_for_women_data?.[0]?.package.map((val, index) => (
            <Box 
              key={index} 
              maxW='100px' 
              borderWidth='1px' 
              borderRadius='lg' 
              overflow='hidden' 
              margin="10px" 
              marginBottom="30px"
            >
              <Image src={val.img} borderRadius='lg' />
              <Heading as='h6' size='xs'>
                {val.para}
              </Heading>
            </Box>
          )) 
          : ""
        }
      </Box>

      <Box 
        height="500px" 
        width="60%" 
        overflow="auto" 
        marginLeft="30px" 
        marginBottom="10px"
      >
        <Box marginBottom="30px">
          {womensdata ? 
            womensdata.Salon_for_women_data?.[0]?.packages_components1.map((val, index) => (
              <PackageContainer 
                key={index} 
                title={val.title} 
                price={val.price} 
                time={val.time} 
                para={val.para} 
              />
            )) 
            : ""
          }
        </Box>

        <Box marginBottom="30px">
          {womensdata ? 
            womensdata.Salon_for_women_data?.[0]?.packages_components2.map((val, index) => (
              <PackageContainer2 
                key={index} 
                title={val.title} 
                price={val.price} 
                time={val.time} 
                para={val.para} 
              />
            )) 
            : ""
          }
        </Box>
      </Box>

      <Button 
        colorScheme='blue' 
        size='lg' 
        onClick={handleClick} 
        position="absolute" 
        bottom="20px" 
        left="50%" 
        transform="translateX(-50%)"
      >
        View Cart
      </Button>
    </Box>
  );
};

export default ServicePage;
