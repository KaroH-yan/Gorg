import React, { useState } from "react";
import { Button, message, Upload } from "antd";
import * as XLSX from "xlsx";
import { UploadOutlined } from "@ant-design/icons";

export default () => {
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [articleList, setArticleList] = useState([]);

  const url = process.env.REACT_APP_ADD_PARTNER_ARTICLES_URI;

  async function addArticleList(data) {
    const res = await fetch(url, {
      method: "POST",
      body: data,
    }).then((response) => response.json());
    setArticleList([...articleList, ...res.data]);
    setUploading(false);
  }

  const handleUpload = () => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", fileList[0], fileList[0].name);

    addArticleList(formData).catch(() => setUploading(false));
  };

  const props = {
    accept: ".xlsx",
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };
  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{
          marginTop: 16,
        }}
      >
        {uploading ? "Uploading" : "Start Upload"}
      </Button>

      {JSON.stringify(articleList, null, 2)}
    </>
  );
};
