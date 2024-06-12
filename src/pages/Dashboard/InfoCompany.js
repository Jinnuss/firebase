/* eslint-disable react-hooks/exhaustive-deps */
import { Card } from "antd";
import { getCookie } from "../../helpers/cookie";
import { useEffect, useState } from "react";
import { getDetailCompany } from "../../services/companyService";

function InfoCompany() {
  const idCompany = getCookie("id");
  const [info, setInfo] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getDetailCompany(idCompany);
      if (response) {
        setInfo(response);
      }
    };
    fetchApi();
  }, []);

  return (
    <>
      {info && (
        <Card title="Thông tin công ty" size="small">
          <div>
            Tên công ty: <strong style={{ color: "black" }}>{info.companyName}</strong>
          </div>
          <div>
            Email: <strong style={{ color: "black" }}>{info.email}</strong>
          </div>
          <div>
            Số điện thoại: <strong style={{ color: "black" }}>{info.phone}</strong>
          </div>
          <div>
            Số nhân viên: <strong style={{ color: "black" }}>{info.quantityPeople}</strong>
          </div>
        </Card>
      )}
    </>
  )
}

export default InfoCompany;