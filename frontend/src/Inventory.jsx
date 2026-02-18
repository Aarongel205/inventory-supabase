import { useState } from 'react'
import Table from './Table.jsx'
import AddBtn from './components/addBtn.jsx'
import AddWindow from './Pages/AddWindow.jsx'
import EditWindow from './Pages/EditWindow.jsx'

export default function Inventory(){
    const [isAddWindow, setIsAddWindow] = useState(false);
    const [isEditWindow, setIsEditWindow] = useState(false);
    const [fetchedItems, setFetchedItems] = useState([]);

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

    //handle items
    const handleItems = (value) => {
        setFetchedItems(value)
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
                <Table fetchItems={fetchedItems}/>
                {isAddWindow && <AddWindow closeWindow={handleCloseAdd} setItems={handleItems}/>}
                {isEditWindow && <EditWindow closeWindow={handleCloseEdit}/>}
            </div> 
        </>
    )
}