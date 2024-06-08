import { Button, Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCompany } from "../../services/companyService";
import { TeamOutlined, AimOutlined } from "@ant-design/icons";

function CompanyList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getAllCompany();
      if (response) {
        setData(response);
      }
    };
    fetchApi();
  }, []);

  return (
    <>
      <h2 >Danh sách các Công ty</h2>
      <Row gutter={[20, 20]}>
        {data.map((item) => (
          <Col span={8} key={item.id}>
            <Link to={`/company/${item.id}`}>
              <Card className="layout-default__main__itemCompany">
                <div className="mb-10 layout-default__main__detail layout-default__center">
                  {item.companyName}
                </div>
                <hr color="white"></hr>
                <div className="layout-default__main__detailBottom">
                  <div className="mb-10 layout-default__main__detailBottomLeft">
                    <TeamOutlined className="layout-default__main__detailBottomIcon" />:  <span className="ml-10">{item.quantityPeople}</span>
                  </div>
                  <div className="mb-10 layout-default__main__detailBottomRight">
                    <AimOutlined className="layout-default__main__detailBottomIcon" />: <span className="ml-10">{item.address}</span>
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row >
      <Link to="/company">
        <Button className="mt-20 mb-20">Chi tiết danh sách Công ty</Button>
      </Link>
    </>
  );
}

export default CompanyList;
