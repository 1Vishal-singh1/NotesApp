import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const About: React.FC = () => {
  let navigate = useNavigate(); 

  const gotoHome = () => {
    navigate("/");
  };
  
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About page of our application.</p>
      <Button variant="contained" color="primary" onClick={gotoHome}>home</Button>
    </div>
  );
};

export default About;
