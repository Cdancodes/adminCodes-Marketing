// src/components/ContactUs.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setData, setSearchQuery, setCurrentPage } from "../redux/actions/actions";

function ContactUs() {
  const URL = "http://147.93.98.197:3000/api/v1/enquiry/getAllenquiry";
  const data = useSelector((state) => state.data);
  const searchQuery = useSelector((state) => state.searchQuery);
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  const fetchInfo = () => {
    return axios
      .get(URL)
      .then((res) => {
        if (Array.isArray(res.data)) {
          dispatch(setData(res.data));
        } else if (res.data && Array.isArray(res.data.data)) {
          dispatch(setData(res.data.data));
        } else {
          console.error("Data format is not as expected:", res.data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchInfo();
  }, [dispatch]);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const filteredData = data.filter((dataObj) => {
    return (
      dataObj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dataObj.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  function logout() {
    alert("User logout");
    // localStorage.clear();
  }

  const truncateBio = (bio) => {
    const words = bio.split(" ");
    if (words.length > 10) {
      return {
        truncated: words.slice(0, 10).join(" ") + "...",
        full: bio,
      };
    }
    return { truncated: bio, full: bio };
  };

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleBio = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className="side-navbar">
        <h3 className="contact-us">Contact Us</h3>
        <button className="btn-logout" onClick={logout}>
          LogOut
        </button>
      </div>

      <div className="main-page">
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search here..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <table className="table">
          <thead>
            <tr className="tr">
              <th className="th th1">S.N.</th>
              <th className="th th2">Name</th>
              <th className="th th3">Mobile No</th>
              <th className="th th4">Email</th>
              <th className="th th5">Bio</th>
            </tr>
          </thead>

          <tbody className="tbody">
            {currentItems.map((dataObj, index) => {
              const { truncated, full } = truncateBio(dataObj.message);
              return (
                <tr className="tr" key={dataObj._id}>
                  <td className="td td1">{index + 1}</td>
                  <td className="td td2">{dataObj.name}</td>
                  <td className="td td3">{dataObj.phoneno}</td>
                  <td className="td td4">{dataObj.email}</td>
                  <td className="td td5">
                    {expandedIndex === index ? full : truncated}
                    {full !== truncated && (
                      <button
                        className="btn-showmore"
                        onClick={() => handleToggleBio(index)}
                      >
                        {expandedIndex === index ? "Show Less" : "Show More"}
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="pagination">
          <button
            className="paging-button"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button
            className="paging-button"
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
