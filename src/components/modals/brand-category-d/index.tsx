import { Button, Modal } from "antd";
import { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { brandcategory } from "@service";
import { notification } from "antd";

interface MyModalProps {
  record: { id: number; name: string };
  onSuccess: () => void;
}

const MyModal: React.FC<MyModalProps> = ({ record, onSuccess }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const deleteData = async (id: number) => {
    setLoading(true);
    try {
      const response = await brandcategory.delete(id);
      if (response?.status === 200) {
        notification.success({
          message: "Brand deleted successfully",
        });
        setIsModalVisible(false);
        onSuccess();
      }
    } catch (error: any) {
      notification.error({
        message: "Failed to delete brand",
        description: error?.response?.data?.message || "Something went wrong",
      });
    }
    setLoading(false);
  };

  return (
    <>
      {/* Delete button */}
      <Button
        onClick={() => setIsModalVisible(true)}
        icon={<DeleteOutlined />}
        style={{ color: "red", borderColor: "red" }}
      />
      {/* Modal window */}
      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        style={{ maxWidth: "400px" }}
        title="Delete this brand?"
        footer={
          <div className="flex items-center gap-3 justify-end mt-10">
            <Button
              size="large"
              type="default"
              onClick={handleCancel}
              style={{ color: "#d55200", borderColor: '#d55200' }}
            >
              Cancel
            </Button>
            <Button
              size="large"
              loading={loading}
              style={{
                backgroundColor: "#d55200",
                color: "#fff",
                position: "relative",
                left: "10px",
              }}
              onClick={() => deleteData(record.id)}
            >
              Ok
            </Button>
          </div>
        }
      >
        <p>
          Are you sure you want to delete the brand category{" "}
          <strong>{record.name}</strong>?
        </p>
      </Modal>
    </>
  );
};

export default MyModal;
