import React, {useState} from 'react'
import { Button, message, Upload } from 'antd'
import * as XLSX from "xlsx";
import {UploadOutlined} from '@ant-design/icons'


export default ()=>{
    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);

    const url=process.env.REACT_APP_ADD_PARTNER_ARTICLES_URI

    async function addArticleList(url, data) {
        const fileReader = new FileReader();
        
        const workbook = XLSX.readFile(data.name, );
        console.log(workbook, 'workbook')
        console.log(workbook.Sheets, 'Sheets')
        for (const Sheet in workbook.Sheets) {
            // var XL_row_object =
            let ws = workbook.Sheets["Sheet1"]
            
            console.log(ws, "ws")
          }
        
            console.log(data, "data")
    }
          /*  try {
              const { result } = event.target;
              const workbook = XLSX.read(result, { type: "binary" });
              let data = [];
              for (const Sheet in workbook.Sheets) {
                // var XL_row_object =
                XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                if (workbook.Sheets.hasOwnProperty(Sheet)) {
                  data = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[Sheet]);
                  data.forEach(x => {
                    addItem(x.sku, x.description, parseInt(x.quantity), parseFloat(x.cost));
                  });
                }
              }
              message.success("upload success!");
              console.log(data, "data");
            } catch (e) {
              message = message.error("file type is incorrect!");
            }
          };
          fileReader.readAsBinaryString(files[0]);
        const response = await fetch(url,
            {
                 method: "post",
                 headers: {"Content-Type": "application/JSON"},
                 body: JSON.stringify({name: data.name, PartnerId:'asdas'})
            });
            
      }*/
    const handleUpload = () => {
      const formData = new FormData();
     
      fileList.forEach((file) => {
        formData.append('files[]', file);
      });
      setUploading(true);
      console.log("fileList", fileList)
      fileList.forEach((file) => { addArticleList(url, file)})
      
     
      

      // You can use any AJAX library you like
      //fetch('https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188', {
    /*    fetch(process.env.REACT_APP_ADD_PARTNER_ARTICLES_URI, {
        method: 'POST',
        body: {fromdata:formData, ParterId:"asdas"}
      })
        .then((res) => res.json())
        .then(() => {
          setFileList([]);
          message.success('upload successfully.');
        })
        .catch(() => {
          message.error('upload failed.');
        })
        .finally(() => {
          setUploading(false);
        });*/
    };
    const props = {
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
    return(
        <>
         <Upload>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>

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
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
      </>
   
    )
}