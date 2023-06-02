import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import Header from "./Header";

const EmployeeData = () => {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.address.city,
      sortable: true,
    },
    {
      name: "Joining Date",
      selector: (row) => row.date,
      sortable: true,
    },
  ];

  const [records, setRecords] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = response.data.map((item, index, array) => {
          const date = getJoiningDate(item.id, array.length);
          return {
            ...item,
            date: date.toISOString().substring(0, 10),
          };
        });
        setRecords(data);
        setFilterRecords(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const getJoiningDate = (id, totalEmployees) => {
    const currentDate = new Date();
    const oldestDate = new Date().setFullYear(currentDate.getFullYear() - 5);
    const differenceInTime = currentDate.getTime() - oldestDate;
    const daysSinceOldestDate = Math.floor(
      differenceInTime / (1000 * 3600 * 24)
    );

    const daysPerEmployee = Math.floor(daysSinceOldestDate / totalEmployees);
    const daysAgo = (totalEmployees - id + 1) * daysPerEmployee;

    const date = new Date();
    date.setDate(currentDate.getDate() - daysAgo);
    return date;
  };

  const handleFilter = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const filteredData = records.filter((row) =>
      row.name.toLowerCase().includes(inputValue)
    );
    setFilterRecords(filteredData);
  };

  return (
    <div className="mx-10 mt-8">
      <Header category="Page" title="Employees" />
      <div className="flex justify-end">
        <div>
          <input
            type="text"
            placeholder="Search Name..."
            onChange={handleFilter}
            className="mb-6 flex items-center bg-gray-200 pl-8 gap-1 rounded-full py-2 w-48 focus:outline-none text-gray-400 text-sm px-5"
          />
        </div>
      </div>
      <DataTable
        columns={columns}
        data={filterRecords}
        pagination
        selectableRows
      />
    </div>
  );
};

export default EmployeeData;
