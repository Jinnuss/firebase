/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailCompany } from "../../services/companyService";
import { getListJob } from "../../services/jobService";
import { Col, Row } from "antd";
import JobItem from "../../components/JobItem";
import GoBack from "../../components/GoBack";

function CompanyDetail() {
  const params = useParams();
  const [infoCompany, setInfoCompany] = useState();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getDetailCompany(params.id);
      setInfoCompany(response);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListJob(params.id);
      setJobs(response);
    };
    fetchApi();
  }, []);

  console.log(jobs);

  return (
    <>
      <GoBack />

      {infoCompany && (
        <>
          <h1 className="layout-default__detailCompany__title">{infoCompany.companyName}</h1>
          <div className="layout-default__main__detailBottom">

            <div className="mb-10 layout-default__main__detailBottomLeftDetail">
              <div className="mb-20">
                <strong>Địa chỉ: </strong> <span>{infoCompany.address}</span>
              </div>

              <div className="mb-20">
                <strong>Số lượng nhân sự: </strong> <span>{infoCompany.quantityPeople}</span>
              </div>

              <div className="mb-20">
                <strong>Thời gian làm việc: </strong> <span>{infoCompany.workingTime}</span>
              </div>

              <div className="mb-20">
                <strong>Link website: </strong> <span>{infoCompany.website}</span>
              </div>
            </div>
            <div className="mb-10 layout-default__main__detailBottomRightDetail">
              <strong className="mb-10">Mô tả ngắn:</strong>
              <div className="mb-20">{infoCompany.description}</div>

              <strong className="mb-10">Mô tả chi tiết:</strong>
              <div className="mb-20">{infoCompany.detail}</div>
            </div>
          </div>

          <div className="mb-10">Danh sách các job:</div>
          <div className="mb-20">
            <Row gutter={[20, 20]}>
              {jobs.map(item => (
                <Col span={8} key={item.id}>
                  <JobItem item={item} />
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </>
  );
}

export default CompanyDetail;
