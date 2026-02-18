import { useState } from 'react'
import CloseBtn from '../components/CloseBtn'
import axios from 'axios'

export default function AddWindow({ closeWindow, setItems }){
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const handleClose = (value) => {
        closeWindow(value)
    }

    const fetchItems = () => {
        axios.get('http://localhost:5000/displayItems').then(res => {
                setItems(res.data.data);
            });
    }

    const addItem = async (e) => {
        e.preventDefault();
        try{
            const newItem = {name, quantity}

            await axios.post('http://localhost:5000/addItem', newItem);
            fetchItems();
        }catch(err){
            console.log(err);
            alert('Add item failed');
        }
    }
    const style = {
        backgroundColor: 'rgba(128, 128, 128, 0.7)',
        width: '100%',
        height: '100vh',
        position: 'fixed',
        zIndex: '9999',
        top: '0'
    }

    return(
        <div style={style}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CloseBtn setClose={handleClose}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
                <input type='text' placeholder='Input Item' value={name} onChange={(e) => setName(e.target.value)}></input>
                <input type='number' placeholder='Input quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
                <button onClick={addItem}>Add item</button>
            </div>
        </div>
    )
}