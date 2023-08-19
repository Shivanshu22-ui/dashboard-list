import React, { useEffect, useState } from "react";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {
  cardInfo,
  Data,
  meeting,
} from "../../utilities/DummyData/data";
import { Dropdown } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

Chart.register(CategoryScale);

export default function DashBoard() {
  const [chartData, setChartData] = useState({
    labels:[],
    datasets: [],
  });

  const [lineData, setLineData] = useState({
    labels: [],
    datasets: [],
  });

  const [res,setRes] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange"
      )
      .then((response) => {
        console.log(response.data.data,"chart1");
        const res = response.data.data;
        setRes(res.slice(1,4).map((dt,i)=>({
          name:dt.country,
          exchange_rate:dt.exchange_rate,
          bgColor:Data[i].bgColor
        })));

        setLineData({
          labels: res.slice(0, 5).map((lb) => lb.country),
          datasets: [
            {
              label: "Exchange rate 1",
              data: res.slice(1, 6).map((lb) => lb.exchange_rate),
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "Exchange rate 2",
              data: res.slice(3, 8).map((lb) => lb.exchange_rate),
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
          ],
        });

        setChartData({
          labels: res.slice(1, 4).map((data) => data.country),
          datasets: [
            {
              label: "Exchange Rate",
              data: res.slice(1,4).map((data) => data.exchange_rate),
              backgroundColor: Data.map((data) => data.bgColor),
              borderWidth: 2,
            },
          ],
        });
      });
  }, []);

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  if (!currentUser) {
    return <Navigate replace to="/login" />;
  }

  async function handleLogout(e) {
    e.preventDefault();
    await logout()
      .then(() => {
        alert("logged out");
        console.log(currentUser);
        navigate("/login");
      })
      .catch((err) => {console.log(err);});
  }

  console.log(res);
  return (
    <div>
      <div className="d-flex justify-content-between p-3">
        <h4>Dashboard</h4>
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="mx-3 p-2 px-4"
            style={{
              background: "white",
              borderRadius: "15px",
            }}
          >
            <input
              type="text"
              style={{
                outline: "none",
                border: "none",
                fontWeight: 600,
              }}
              placeholder="Search..."
              className="p-0 m-0"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className="mx-3">
            <FontAwesomeIcon
              icon={faBell}
              style={{ fontSize: "25px", cursor: "pointer" }}
            />
          </div>
          <div className="mx-3">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  background: "rgb(245, 245, 245)",
                  outline: "none",
                  border: "none",
                  color: "black",
                }}
              >
                <FontAwesomeIcon
                  icon={faCircleUser}
                  style={{ fontSize: "25px" }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-between my-5 p-3">
        {cardInfo.map((items) => (
          <div className="col">
            <div
              className="p-4"
              style={{
                background: items.bgColor,
                width: "80%",
                borderRadius: "20px",
              }}
            >
              <div className="d-flex justify-content-end">
                {" "}
                <FontAwesomeIcon
                  style={{ fontSize: "24px" }}
                  icon={items.icon}
                />
              </div>
              <p className="m-0" style={{ fontSize: "14px", fontWeight: 500 }}>
                {items.text}
              </p>
              <p className="m-0" style={{ fontSize: "24px", fontWeight: 700 }}>
                {items.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex flex-wrap justify-content-between my-5 p-3">
        <div className="col bg-white mx-2 p-4" style={{ borderRadius: "20px" }}>
          <div className="">
            <p className="m-0" style={{ fontWeight: 700, fontSize: "20px" }}>
              Activities
            </p>
            <p style={{ color: "#858585" }} className="my-2">
              May-June 2021
              <FontAwesomeIcon
                style={{ fontSize: "24px", marginLeft: "8px" }}
                icon={faCaretDown}
              />
            </p>
          </div>
          <div className="col d-flex justify-content-center align-items-center" style={{height:'250px'}}>
            <LineChart chartData={lineData}/>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-between my-5 p-3">
        <div className="col bg-white mx-2 p-4" style={{ borderRadius: "20px" }}>
          <div className="d-flex flex-wrap justify-content-between">
            <p style={{ fontWeight: 700, fontSize: "20px" }}>Top products</p>
            <p
              style={{ color: "#858585" }}
              className="d-flex justify-content-center align-items-center"
            >
              May-June 2021
              <FontAwesomeIcon
                style={{ fontSize: "24px", marginLeft: "8px" }}
                icon={faCaretDown}
              />
            </p>
          </div>
          <div className="d-flex">
            <div className="col d-flex justify-content-center align-items-center">
              <PieChart chartData={chartData} />
            </div>
            <div className=" col">
              {res?.map((dt) => (
                <div
                  className="d-flex align-items-baseline my-3"
                  style={{ height: "fit-content" }}
                >
                  <div style={{ height: "100%" }} className="mx-2">
                    <div
                      style={{
                        height: "10px",
                        width: "10px",
                        backgroundColor: `${dt.bgColor}`,
                        borderRadius: "80%",
                      }}
                    ></div>
                  </div>
                  <div>
                    <p
                      className="m-0 p-0"
                      style={{ fontSize: "16px", fontWeight: 700 }}
                    >
                      {dt.name}
                    </p>
                    <p className="m-0 p-0" style={{ fontSize: "12px" }}>
                      {dt.exchange_rate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="col bg-white mx-2  p-4"
          style={{ borderRadius: "20px" }}
        >
          <div className="d-flex flex-wrap justify-content-between">
            <p style={{ fontWeight: 700, fontSize: "20px" }}>
              Today's Schedule
            </p>
            <p
              style={{ color: "#858585" }}
              className="d-flex justify-content-center align-items-center"
            >
              See All
              <FontAwesomeIcon
                style={{ fontSize: "24px", marginLeft: "8px" }}
                icon={faCaretRight}
              />
            </p>
          </div>
          <div>
            {meeting.map((mt) => (
              <div
                className="my-4 p-2"
                style={{ borderLeft: `5px solid ${mt.bgColor}` }}
              >
                <p
                  className="m-0"
                  style={{ fontSize: "14px", fontWeight: 500, color: "#666" }}
                >
                  {mt.name}
                </p>
                <p
                  className="m-0"
                  style={{ fontSize: "12px", fontWeight: 400, color: "#999" }}
                >
                  {mt.time}
                </p>
                <p
                  className="m-0"
                  style={{ fontSize: "12px", fontWeight: 400, color: "#999" }}
                >
                  {mt.venue}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
