import axios from 'axios'

export default function DeleteBtn({ itemId }){

    const deleteItem = async () => {
        try{
            await axios.delete(`http://localhost:5000/deleteItem/${itemId}`);
            console.log('Item succesfully deleted');
        }catch(err){
            console.log(err);
        }
    }
    return(
        <button onClick={deleteItem}>delete</button>
    )
}