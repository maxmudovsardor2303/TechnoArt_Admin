import { category } from "@service";
import { useEffect, useState } from "react";
import { Table, Search } from "@components";
import { Modal, Button, Input,} from "antd"; // Ensure you're importing Modal and Button from Ant Design

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
        <div className="display-flex, justify-end">
        <Search params={params} setParams={setParams} />
      <Button  onClick={showModal} style={{background: '#d55200', color: 'white'}}>
        Add New Categories
      </Button>
        </div>
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




// import { useLocation, useNavigate } from "react-router-dom"; // To manage query params
// import { useEffect, useState } from "react";
// import { category } from "@service";
// import { Table, Search } from "@components";

// // Helper function to extract query parameters from URL
// const getQueryParams = (search: string) => {
//   const params = new URLSearchParams(search);
//   const page = params.get("page");
//   const limit = params.get("limit");
//   const searchValue = params.get("search");

//   return {
//     search: searchValue || "",
//     page: page ? parseInt(page) : 1,
//     limit: limit ? parseInt(limit) : 10,
//   };
// };

// const Index = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   // Initialize state with query params
//   const [params, setParams] = useState(getQueryParams(location.search));
//   const [data, setData] = useState([]);
//   const [total, setTotal] = useState(0); // To store the total number of items
  
//   // Fetch data when params change
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await category.get(params);
//         if (response.status === 200) {
//           setData(response?.data?.data?.categories);
//           setTotal(response?.data?.data?.count); // Assuming the total count is provided by the API
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [params]);

//   // Sync state with query parameters whenever the URL changes
//   useEffect(() => {
//     const queryParams = getQueryParams(location.search);
//     setParams((prevParams) => ({
//       ...prevParams,
//       ...queryParams,
//     }));
//   }, [location.search]);

//   // Handle pagination changes and update the URL with new query parameters
//   const handleTableChange = (pagination: any) => {
//     const { current = 1, pageSize = 10 } = pagination;

//     // Update pagination parameters in state
//     setParams((prev) => ({
//       ...prev,
//       page: current,
//       limit: pageSize,
//     }));

//     // Update query params in URL
//     const searchParams = new URLSearchParams(location.search);
//     searchParams.set("page", current.toString());
//     searchParams.set("limit", pageSize.toString());
//     navigate(`?${searchParams.toString()}`);
//   };

//   const columns = [
//     { title: 'Name', dataIndex: 'name', key: 'name' },
//   ];

//   return (
//     <div>
//       <h1>Categories</h1>
//       <Search params={params} setParams={setParams} />
//       <Table
//         data={data}
//         columns={columns}
//         pagination={{
//           current: params.page,
//           pageSize: params.limit,
//           total: total,
//           showSizeChanger: true,
//           pageSizeOptions: ['2', '5', '7', '10'],
//         }}
//         onChange={handleTableChange}
//       />
//     </div>
//   );
// };

// export default Index;
