import axios from 'axios'

export default function DeleteBtn({ itemId, refreshItems }){

    const deleteItem = async () => {
        try{
            await axios.delete(`http://localhost:5000/deleteItem/${itemId}`);
            refreshItems();
            console.log('Item succesfully deleted');
        }catch(err){
            console.log(err);
        }
    }
    return(
        <button onClick={deleteItem}>delete</button>
    )
}