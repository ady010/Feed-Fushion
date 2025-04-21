const axios = require("axios")

module.exports.tech = async (req, res)=>{
    try{
        const response = await axios.get("https://newsapi.org/v2/everything?q=ai&from=2025-04-18&to=2025-04-18&sortBy=popularity&apiKey=c493382f783c405598156fa11829f9e6",{
            params:{
                apiKey : process.env.NEWSORG_API_KEY
            }
        })
        res.json(response.data.articles)
    }
    catch(error){
        console.error('Error fetching details:',error.message)
        res.status(500).json({error:'Failed to fetch data'})
    }
}