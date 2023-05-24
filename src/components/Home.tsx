// src/components/Home.tsx
import React from 'react';

interface HomeProps {
  name: string;
}

const Home: React.FC<HomeProps> = ({ name }) => {
  return (
    <div>
      <h1>Welcome to the Home page, {name}!</h1>
    </div>
  );
};

export default Home;
