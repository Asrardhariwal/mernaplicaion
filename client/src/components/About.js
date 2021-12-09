import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const About = () => {
  const [userData, setUserData] = useState({});
  const history = useHistory();

  // const callAboutPage = async () => {
  //   try {
  //     const res = await fetch("/about", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-type": "application/json",
  //       },
  //       credentials: "include",
  //     });

  //     const data = await res.json();
  //     console.log(data);
  //     setUserData(data);
  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     history.push("/signin");
  //   }
  // };

  // useEffect(() => {
  //   callAboutPage();
  //   // eslint-disable-next-line
  // }, []);
  useEffect(() => {
    axios
      .get("/about")
      .then((res) => {
        const data = res.data;
        setUserData(data);
        console.log("data has been recieved");
      })
      .catch(() => {
        alert("data not recevied");
        history.push("/signin");
      });
  }, []);

  return (
    <div className="allbody">
      <form method="GET">
        <h1>Hello about</h1>
        {/* <h6>id:{userData.id}</h6> */}
        <h2>name:{userData.name}</h2>
        <h3>email:{userData.email}</h3>
        <h4>phone:{userData.phone}</h4>
        <h5>work:{userData.work}</h5>
      </form>
    </div>
  );
};

export default About;
