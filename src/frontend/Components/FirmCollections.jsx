import React, { useState, useEffect } from 'react';
import { API_URL } from '../api';
import { Link } from 'react-router-dom';

const FirmCollections = () => {
  const [firmData, setFirmData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('All');
  const[activeCategory,setActiveCategory]=useState('all')
  const firmDataHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`);
      const newFirmData = await response.json();
      setFirmData(shuffleArray(newFirmData.vendors || []));
      console.log("this is firm collection data", newFirmData);
    } catch (error) {
      alert("Failed to fetch data");
      console.error("Failed to fetch data");
    }
  };

  useEffect(() => {
    firmDataHandler();
  }, []);

  const filterHandler = (region,category) => {
    setSelectedRegion(region);
    setActiveCategory(category)
  };

  // Shuffle function
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <>
      <h3>Restaurants with online food delivery in Hyderabad</h3>
      <div className='filterButtons'>
        <button style={{cursor:'pointer',borderRadius:'4px'}} onClick={() => filterHandler('All','all')} className={activeCategory==='all'?'activeButton':''}>All</button>
        <button style={{cursor:'pointer',borderRadius:'4px'}} onClick={() => filterHandler('South-Indian','south-indian')} className={activeCategory==='south-indian'?'activeButton':''}>South-Indian</button>
        <button style={{cursor:'pointer',borderRadius:'4px'}} onClick={() => filterHandler('North-Indian','north-indian')} className={activeCategory==='north-indian'?'activeButton':''}>North-Indian</button>
        <button style={{cursor:'pointer',borderRadius:'4px'}} onClick={() => filterHandler('Chinese','chinese')} className={activeCategory==='chinese'?'activeButton':''}>Chinese</button>
        <button style={{cursor:'pointer',borderRadius:'4px'}} onClick={() => filterHandler('Bakery','bakery')} className={activeCategory==='bakery'?'activeButton':''}>Bakery</button>
      </div>
      <section className='firmSection'>
        {firmData.map((item) => 
          item.firm.map((value) => {
            if (
              selectedRegion === "All" || 
              value.region.includes(selectedRegion.toLowerCase())
            ) {
              return (
                <Link to={`/products/${value._id}/${value.firmName}`} className='link' key={value._id}>
                  <div className='firmGroupBox'>
                    <div className='firmGroup'>
                      <img src={`${API_URL}/uploads/${value.image}`} alt={value.firmName} />
                      <div className='firmOffer'>{value.offer}</div>
                    </div>
                    <div className='firmDetails'>
                      <strong>{value.firmName}</strong>
                      <div className='firmArea'>{value.region.join(', ')}</div>
                      <div className='firmArea'>{value.area}</div>
                    </div>
                  </div>
                </Link>
              );
            }
            return null; 
          })
        )}
      </section>
    </>
  );
};

export default FirmCollections;
