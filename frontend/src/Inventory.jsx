import { useState, useEffect } from 'react'
import Table from './Table.jsx'
import AddBtn from './components/addBtn.jsx'
import AddWindow from './Pages/AddWindow.jsx'
import EditWindow from './Pages/EditWindow.jsx'
import axios from 'axios'

export default function Inventory(){
    const [isAddWindow, setIsAddWindow] = useState(false);
    const [isEditWindow, setIsEditWindow] = useState(false);
    const [item, setItems] = useState([]);

    const fetchItems = () =>{
        axios.get('http://localhost:5000/displayItems').then(res => {
            setItems(res.data.data);
        })
    }

    useEffect(() => {
        fetchItems(); // refresh pages
    }, [])

    //handle add window
    const handleAdd = (value) => {
        setIsAddWindow(value);
    }

    const handleCloseAdd = (value) => {
        setIsAddWindow(value);
    }

    //handle edit window
    const handleEdit = (value) => {
        setIsEditWindow(value);
    }

    const handleCloseEdit = (value) => {
        setIsEditWindow(value);
    }

    const mainDiv = {
        width: '100%', 
        height: '100vh',  
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    }

    return(
        <>
            <div style={mainDiv}>
                <AddBtn setAdd={handleAdd}/>
                <Table items={item}/>
                {isAddWindow && <AddWindow closeWindow={handleCloseAdd} refreshItems={fetchItems}/>}
                {isEditWindow && <EditWindow closeWindow={handleCloseEdit}/>}
            </div> 
        </>
    )
}