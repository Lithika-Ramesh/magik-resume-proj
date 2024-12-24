import { DataGrid } from "@mui/x-data-grid";
import './Databse.css'
import { useState } from "react";


const columns = [
    { field: 'id', headerName: 'ID', width: 100 , editable:true},
    { field: 'company', headerName: 'Company', width: 180 , editable:true},
    { field: 'position', headerName: 'Position', width: 180, editable:true },
    { field: 'status', headerName: 'Status', width: 180, editable:true},
    { field: 'next_deadline', headerName: 'Next Deadline', width: 180, editable:true },
    { field: 'description', headerName: 'Job Description', width: 180, editable:true},
];

const rows = [
    { id: 1, company: 'Blueberry Consultants Ltd', position: 'Software Developer', status: 'Signed', next_deadline: '29/08/2025', description: 'none yet'},
    { id: 2, company: 'Autodesk', position: 'Software Developer', status: 'Ready to apply', next_deadline: '02/08/2024', description: 'none yet'},
    { id: 3, company: 'Mathworks', position: 'Software Developer int.', status: 'Applied', next_deadline: '10/04/2024', description: 'none yet'},
    { id: 4, company: 'ASAP Data solutions', position: 'Data Analyst Intern', status: 'Interview scheduled', next_deadline: '14/11/2024', description: 'none yet'},
    { id: 5, company: 'Urban Jungle', position: 'Junior Data Analyst', status: 'Archived', next_deadline: '11/08/2024', description: 'none yet'},
    // Add more rows as needed
];

const Database = () => {
    const [data, setData] = useState(rows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };
    

    const action = [
        {
            field: "action",
            headerName: "Action",
            width: 180,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <div className="editButton">Edit</div>
                        <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
                    </div>
                )
            }

        }
    ]
  return (
    <div className="databse">
        <DataGrid
        rows={data}
        columns={columns.concat(action)}
        pageSize={5}
        rowsPerPageOptions={[5]}

        />
    </div>
  )
}

export default Database