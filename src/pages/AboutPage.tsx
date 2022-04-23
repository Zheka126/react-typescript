import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  let navigate = useNavigate();
  return (
    <>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit
        nulla, repellat rerum ab in cupiditate nesciunt sint quibusdam quod
        libero. Possimus, doloribus quis aspernatur at similique deleniti id
        inventore repellat dolorem doloremque aut tempora neque libero
        dignissimos. Pariatur et fugiat animi vero aperiam consectetur itaque
        labore enim alias omnis.
      </p>

      <button className="btn" onClick={() => navigate('/')}>
        Back to Todos List
      </button>
    </>
  );
};
