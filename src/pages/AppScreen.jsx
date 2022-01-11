import React from "react";
import { useSelector } from "react-redux";
import Elementos from "../components/Elementos";
import FormAdd from "../components/FormAdd";
import Navbar from "../components/Navbar";

const AppScreen = () => {
  const { auth } = useSelector((state) => state);
  const data = useSelector(state => state.nomina.data)
  
console.log(auth)
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="center">Welcome {auth.displayName}</h1>
        <hr />
        <FormAdd />
        <table>
        <thead>
          <tr>
              <th>fecha</th>
              <th>cantidad</th>
              <th>borrar</th>
          </tr>
        </thead>
        <tbody>
         { 
           data?.map((elemento) => {
            return (
              <tr
                className="animate__animated animate__fadeInUp "
                key={elemento.id}
              >
                <Elementos data={elemento} />
              </tr>
            );
          })
         }
        </tbody>
        </table>
      </div>
    </>
  );
};

export default AppScreen;
