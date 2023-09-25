import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import BarChart from './BarChart';

const RevenueData = () => {
  const [currentData, setCurrentData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const fetchRevenueData = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:3500/api/v1/revenue?startDate=${startDate}&endDate=${endDate}`
      );
      const revenueData = response.data;
      console.log(revenueData);
      setCurrentData(revenueData);
    } catch (error) {
      console.error('Error fetching revenue data:', error);
    }
  }, [endDate, startDate]);

  useEffect(() => {
    fetchRevenueData();
  }, [fetchRevenueData]);

  const handleDateChange = (event, type) => {
    const value = event.target.value;
    if (type === 'start') {
      setStartDate(value);
    } else if (type === 'end') {
      setEndDate(value);
    }
  };

  return (
    <div className="dashboard-overview">
      <h1>Business Metrics Dashboard</h1>

      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(event) => handleDateChange(event, 'start')}
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(event) => handleDateChange(event, 'end')}
        />
      </div>

      <button onClick={fetchRevenueData}>Fetch Data</button>
      {console.log(currentData)}
      {currentData && currentData.length > 0 ? (
        <BarChart data={currentData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RevenueData;
