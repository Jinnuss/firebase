import { Card, Tag } from "antd";
import { Link } from "react-router-dom";

function JobItem(props) {
  const { item } = props;
  return (
    <>
      <Card
        title={<Link to={`/job/${item.id}`}>{item.name}</Link>}
        size="small"
        className="layout-default__itemSearch"
      >
        <div className="layout-default__itemSearch__main">
          <div className="layout-default__itemSearch__main__left">
            <div className="mb-10">
              <div>Ngôn ngữ: </div>
              {item.tags.map((item, index) => (
                <Tag color="blue" className="mb-5" key={index}>
                  {item}
                </Tag>
              ))}
            </div>
            <div className="mb-10">
              <div>Thành phố: </div>
              {item.city.map((item, index) => (
                <Tag color="orange" className="mb-5" key={index}>
                  {item}
                </Tag>
              ))}
            </div>
          </div>
          <div className="layout-default__itemSearch__main__right">
            <div className="mb-10">
              Lương: <span className="white">{item.salary}$</span>
            </div>
            <div className="mb-10">
              Công ty: <span className="white">{item?.infoCompany?.companyName}</span>
            </div>
          </div>
        </div>
        <hr color="#fff"></hr>
        <div className="mb-10">
          Ngày tạo: <span className="white">{item.createAt}</span>
        </div>
      </Card>
    </>
  );
}

export default JobItem;
