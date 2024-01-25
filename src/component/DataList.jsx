import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function DataList() {
  const [backendData, setBackEndData] = useState([
    {
      _id: "",
      name: "",
      sectors: "",
      agreed: "",
    },
  ]);

  useEffect(() => {
    backendData.agreed === true ? "agreed" : "disagreed";
    axios
      .get("http://localhost:5500/data")
      .then((res) => {
        return setBackEndData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (_id) => {
    const deleted = backendData.filter((item) => {
      return item._id !== _id;
    });
    setBackEndData(deleted);
  };
  const handleEdit = ({ _id }) => {
    const update = backendData.find((item) => {
      return (
        <tr key={item._id}>
          {item._id !== _id}
          <td>{item._id} </td>
          <td>{item.name} </td>
          <td>{item.sectors} </td>
          <td>{item.agreed} </td>
        </tr>
      );
    });
    setBackEndData(update);
  };

  return (
    <div className="datalist">
      <Link to="/" style={{border: '1px solid black', backgroundColor: "grey", color: "white", padding: '10px'}}>CREATE +</Link>
      <div className="tablelist">
        <table
          style={{ border: " solid black", height: "100%", margin: "10px" }}
        >
          <thead>
            <tr
              style={{
                border: "1px solid black",
                margin: "auto",
                padding: "10px",
                backgroundColor: "grey",
                color: "white",
              }}
            >
              <th
                style={{
                  border: "1px solid black",
                  margin: "auto",
                  padding: "10px",
                  backgroundColor: "grey",
                  color: "white",
                }}
              >
                ID
              </th>
              <th
                style={{
                  border: "1px solid black",
                  margin: "auto",
                  padding: "10px",
                  backgroundColor: "grey",
                  color: "white",
                }}
              >
                NAME
              </th>
              <th
                style={{
                  border: "1px solid black",
                  margin: "auto",
                  padding: "10px",
                  backgroundColor: "grey",
                  color: "white",
                }}
              >
                SECTORS
              </th>

              <th
                style={{
                  border: "1px solid black",
                  margin: "auto",
                  padding: "10px",
                  backgroundColor: "grey",
                  color: "white",
                }}
              >
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {backendData &&
              backendData.map((item, idx) => {
                return (
                  <tr key={idx} style={{ border: "1px solid black" }}>
                    <td style={{ border: "1px solid black" }}>{item._id} </td>
                    <td style={{ border: "1px solid black" }}>{item.name} </td>
                    <td style={{ border: "1px solid black" }}>
                      {item.sectors}{" "}
                    </td>

                    <td
                      style={{
                        border: "1px solid black",
                        display: "flex",
                        flex: 1,
                      }}
                    >
                      {
                        <Link
                          to={`/dataEdit/${item._id}`}
                          style={{
                            textAlign: "center",
                            margin: "0px",
                            backgroundColor: "green",
                            color: "white",
                            width: "100%",
                            height: "100%",
                          }}
                          onClick={() => handleEdit(item._id)}
                        >
                          Edit
                        </Link>
                      }
                      <button
                        onClick={() => handleDelete(item._id)}
                        style={{ backgroundColor: "red" }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataList;
