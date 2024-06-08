import { useEffect, useState } from "react";
import { getAllCompany } from "../../services/companyService";
import { Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { TeamOutlined, AimOutlined } from "@ant-design/icons";


function Company() {
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
      <h1>Danh sách công ty</h1>

      <Row gutter={[20, 20]}>
        {data.map((item) => (
          <Col span={8} key={item.id}>
            <Link to={`/company/${item.id}`}>
              <Card className="layout-default__main__itemCompanyDetail">
                <div className="mb-10 layout-default__main__detail layout-default__center">
                  {item.companyName}
                </div>
                <hr color="white"></hr>
                <div className="layout-default__main__detailBottom">
                  <div className="mb-10 layout-default__main__detailBottomLeft">
                    <div className="mb-10">
                      Số điện thoại: <span>{item.phone}</span>
                    </div>
                    <div className="mb-10">
                      Website: <span>{item.website}</span>
                    </div>
                  </div>
                  <div className="mb-10 layout-default__main__detailBottomRight">
                    <div className="mb-10">
                      <TeamOutlined className="layout-default__main__detailBottomIcon" />:  <span className="ml-10">{item.quantityPeople}</span>
                    </div>
                    <div className="mb-10">
                      <AimOutlined className="layout-default__main__detailBottomIcon" />:  <span className="ml-10">{item.address}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <Link to="/">
        <Button className="mt-20 mb-20">Trang chủ</Button>
      </Link>
    </>
  );
}

export default Company;
