import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state;

  const [username, setUsername] = useState(userData || null);
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const [tableData, setTableData] = useState(
    Array(10).fill(0).map(() => Array(6).fill('')) // สร้างอาร์เรย์สองมิติใหม่
  );
    
  const handleChange = (rowIndex, cellIndex, value) => {
    const newTableData = [...tableData];
    newTableData[rowIndex][cellIndex] = value;
    setTableData(newTableData);
  };

  return (
    <div className="container">
      <header className="d-flex justify-content-between align-items-center py-3">
        <h1 className="h3">Hello, {username}!</h1>
        <button
          onClick={handleLogout}
          className="btn btn-danger"
        >
          Logout
        </button>
      </header>
      <div className="row">
        <div className="col">
          <h2 className="text-center">หน้า Main</h2>
          <table className="table-sm">
            <thead>
              {/* ... your table headers */}
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="col-1">
                      <input type="text" value={cell} onChange={(e) => handleChange(rowIndex, cellIndex, e.target.value)} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Main;