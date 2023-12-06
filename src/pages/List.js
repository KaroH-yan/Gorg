import React, {useEffect, useState}  from 'react'
import {Table, Space} from 'antd'




/*const rowSelection = {
  
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};*/

async function deleteItem(url, id) {
        
  const response = await fetch(url,
      {
           method: "DELETE",
           headers: {"Content-Type": "application/JSON"},
           body: JSON.stringify(id)
      });  
}


const List =( )=>{
  const [list, setList]=useState({});
  const [load, setLoad] = useState(true);
  async function fetchUrl(url) {
        
    const response = await fetch(url)
    const json = await response.json();
  
    setList(json);
    setLoad(false)
  };

//const company1=useFetch('http://localhost:4000/');
/*const company=useFetch('http://localhost:4001/company');

console.log("company",company)
useEffect(()=>{
  company.length? setList(company): setList(dataSource);
},[company.length])*/

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    _id: 'name',
    key: 'name'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    _id: 'email',
    key: 'email'
  },
  {
    title: 'phone Number',
    dataIndex: 'phoneNumber',
    _id: 'phoneNumber',
    key: 'phoneNumber'
  },
  {
    title: 'Action',
    key: 'action',
    render: (item) => (
      <Space size="middle">
        <a onClick={()=> onDelete(item)}>Delete</a>
      </Space>
    ),
  },
];


const onDelete=(id)=>{
  deleteItem(process.env.REACT_APP_DELETE_PARTNER_URI,id)
  fetchUrl(process.env.REACT_APP_LOADING_PARTNER_URI)
  console.log("delete item", id)
};

//const company=useFetch('http://localhost:4001/company');

useEffect(()=>{
 fetchUrl(process.env.REACT_APP_LOADING_PARTNER_URI)
},[list.length])

const  data = list.length?list.map(x => ({ ...x, key: x._id })):[];

return(
  <Table dataSource={data} loading={load} columns={columns} />
)
}


export default List;