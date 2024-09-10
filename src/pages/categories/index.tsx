
import { category } from "@service";
import { useEffect, useState } from "react";
import { Table } from "@components";
import { Modal, Button, Input } from "antd"; // Ensure you're importing Modal and Button from Ant Design

const Index = () => {
  const [data, setData] = useState([]);
  const [params, setParams] = useState({
    search: "",
    page: 1,
    limit: 10,
  });
  const [total, setTotal] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false); // State to manage modal visibility

  const getData = async () => {
    try {
      const response = await category.get(params);
      if (response.status === 200) {
        setData(response?.data?.data?.categories);
        setTotal(response?.data?.data?.count); // Assuming the total count is provided by the API
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [params]);

  const handleTableChange = (pagination: any) => {
    const { current = 1, pageSize = 10 } = pagination;

    setParams((prev) => ({
      ...prev,
      page: current,
      limit: pageSize,
    }));
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <h1>Categories</h1>
      <Button  onClick={showModal} style={{background: '#d55200'}}>
        Open Modal
      </Button>
      <Modal
        title="Add new category" 
        visible={isModalVisible} 
        onOk={handleOk}
        onCancel={handleCancel} 
      >
        <p>Category name</p>
        <Input type="text" 
        style={{ paddingTop: '12px', paddingBottom: '12px',  }}/>


      </Modal>
      <Table
        data={data}
        pagination={{
          current: params.page,
          pageSize: params.limit,
          total: total,
          showSizeChanger: true,
          pageSizeOptions: ["2", "5", "8"],
        }}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default Index;
