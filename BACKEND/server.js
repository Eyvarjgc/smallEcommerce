import express from 'express'
import cors from 'cors'
import data from './data.json' assert {type: 'json'}

const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json())

app.use('/books/all', (req,res) => {
  try {
    res.send(data)


  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

app.use('/books', (req,res) => {
  try {
    const search = req.query.search

    const filteredSearch = data.filter(book => {
      return book.title.toLowerCase().includes(search.toLowerCase()) 
    })

    if(filteredSearch.length === 0){
      return res.status(404).json({message: 'item not found'})
    }
    console.log(filteredSearch);
    
    res.status(200).send(filteredSearch)

  } catch (error) {
    console.log(error.message);
    
    res.status(500).json({error: error.message})
  }
})

app.listen(PORT, () => {  
  console.log(`http://localhost:${PORT}`);
})