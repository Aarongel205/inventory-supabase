require('dotenv').config()

const express = require('express');
const cors = require('cors');
const supabase = require('./db');

const app = express();

app.use(express.json());
app.use(cors());

//DISPLAY ITEMS
app.get('/displayItems', async (req, res) => {
    try{
        const { data, error } = await supabase.from('items').select('*');


        if(error) return res.status(400).json({message: 'display error'});

        res.json({data})
    }catch(err){
        res.status(500).json({message: 'Server error'});
    }
});
//ADD ITEM
app.post('/addItem', async (req, res) => {
    try{
        const { name, quantity} = req.body;

        const { data, error } = await supabase.from('items').insert([
            {name, quantity}
        ]);

        if(error){
            console.log('Supabase error: ', message.error);
            res.status(400).json({message: message.error})
        }

        res.json({message: 'Item added successfully'})
    }catch(err){
        console.log(err);
        res.status(500).json({message: 'Server error'});
    }
});
app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`);
});
