import React from "react";
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function MenuItem({ image, name, Explain, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p>{Explain}</p>
      <p>  ₹ {price} </p>
    </div>
  );
}

export default MenuItem;
