import React, { useState, useEffect } from "react";
import { Button, Form, Input, Modal, notification, Select } from "antd";
import {  brandcategory,brand } from "@service";

interface Category {
  label: string;
  value: string;
}

const AddBrandModal: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const response = await brand.get({
        limit: 10,
        page: 1,
      });
      if (response?.status === 200) {
        setCategories(
          response.data.data.brands.map((item: any) => ({
            label: item.name,
            value: item.id,
          }))
        );
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);
    console.log(values, "VAL");
    try {
      const response = await brandcategory.create(values);
      if (response.status === 201) {
        notification.success({
          message: "Brand added successfully!",
        });
        form.resetFields();
        setIsModalVisible(false);
        onSuccess();
      }
    } catch (error: any) {
      notification.error({
        message: "Failed to add brand",
        description: error?.response?.data?.message || "Something went wrong",
      });
    }
    setLoading(false);
  };

  return (
    <>
      <Button
        onClick={() => setIsModalVisible(true)}
        size="large"
        style={{
          background: "#d55200",
          color: "#fff",
          position: "relative",
          left: "630px",
          bottom: "10px",
        }}
      >
        Add New Brand Category
      </Button>
      <Modal
  open={isModalVisible}
  title="Add New Brand"
  onCancel={handleCancel}
  onOk={() => form.submit()}
  okButtonProps={{ loading, style: { backgroundColor: "#d55200", borderColor: "#d55200" } }}
  cancelButtonProps={{ style: { borderColor: "#d55200", color: "#d55200" } }}
>
  <Form form={form} onFinish={handleSubmit} layout="vertical">
    <Form.Item
      label="Brand category name"
      name="name"
      rules={[{ required: true, message: "Please enter brand name!" }]}
    >
      <Input placeholder="Enter brand name" />
    </Form.Item>
    <Form.Item
      label="Select Brand"
      name="brand_id"
      rules={[{ required: true, message: "Please select category!" }]}
    >
      <Select options={categories} size="large" />
    </Form.Item>
  </Form>
  </Modal>


    </>
  );
};

export default AddBrandModal;