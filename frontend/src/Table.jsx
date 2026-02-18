import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Table({fetchItems}){
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(fetchItems)
    }, []);

    const itemList = items.map(item => {
        return(
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.created_at}</td>
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