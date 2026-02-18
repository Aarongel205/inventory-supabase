import { useState } from 'react'
import CloseBtn from '../components/CloseBtn'

export default function EditWindow({ closeWindow }){


    const handleClose = (value) => {
        closeWindow(value)
    }
    const style = {
        backgroundColor: 'black',
        width: '200px',
        height: '100px'
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