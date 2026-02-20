import { useState, useEffect } from 'react'
import axios from 'axios'
import DeleteBtn from './components/deleteBtn'

export default function Table({ items, refreshItems }){
    
    const itemList = items.map(item => {
        return(
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.created_at.slice(0, 10)}</td>
                <td><DeleteBtn itemId={item.id} refreshItems={refreshItems}/></td>
                <td><button>update</button></td>
            </tr>
        )
    })
    return(
        <table>
            <thead>
                <tr>
                    <td>Item</td>
                    <td>Quantity</td>
                    <td>Date</td>
                </tr>
            </thead>
            <tbody>
                {itemList}
            </tbody>
        </table>
    )
}