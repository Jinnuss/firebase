/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { getAllCompany } from "../../services/companyService";
import JobItem from "../../components/JobItem";

function SearchList(props) {
  const { data = [] } = props;
  const myArray = Object.keys(data).map(key => data[key]);
  console.log(myArray);
  const [dataFinal, setDataFinal] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const company = await getAllCompany();
      const myArrayCompany = Object.keys(company).map(key => company[key]);
      console.log(company);
      const newData = myArray.map((item) => {
        const infoCompany = myArrayCompany.find(
          (itemCompany) => itemCompany.id == item.idCompany
        );
        console.log(infoCompany);
        return {
          infoCompany: infoCompany,
          ...item,
        };
      });

      setDataFinal(newData);
    };
    fetchApi();
  }, []);

  console.log(dataFinal)

  return (
    <>
      {dataFinal.length > 0 ? (
        <div className="mt-20">
          <Row gutter={[20, 20]}>
            {dataFinal.map((item) => (
              <Col span={8} key={item.id}>
                <JobItem item={item} />
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <div className="mt-20">Không tìm thấy công việc nào.</div>
      )}
    </>
  );
}

export default SearchList;
