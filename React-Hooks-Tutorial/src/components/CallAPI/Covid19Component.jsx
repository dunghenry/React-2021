import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';
import useFetch from "../../customize/Fetch";

const Covid19Component = (props) => {
    // const [data, setData] = useState([]);
    let now = new Date();
    let dateString = moment(now).format('DD-MM-YYYY');
    let dateStringWithTime = moment(now).format('DD-MM-YYYY HH:MM');
    // console.log(dateStringWithTime)
  // useEffect(async () => {
  //   const res = await axios.get("https://static.pipezero.com/covid/data.json");
  //   const data = res.data.locations;
  //   setData(data);
  // }, []);

    const {data} = useFetch("https://static.pipezero.com/covid/data.json");

  return (
    <div>
      {
        data.length ? (
          <>
           <h1>{props.title}</h1>
      <br></br>
      <table style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
        <thead>
          <tr>
            <th>Thời gian</th>
            <th>Tỉnh/Thành phố</th>
            <th>Tổng số ca</th>
            <th>Hôm nay</th>
            <th>Số ca tử vong</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                    <td>{dateStringWithTime}</td>
                  <td>{item.name}</td>
                  <td>{item.cases}</td>
                  <td>+{item.casesToday}</td>
                  <td>{item.death}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
          </>
        ) : (<><div className="loader"></div></>)
      }
    </div>
  );
};

export default Covid19Component;
