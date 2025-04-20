module.exports.sports = async (req, res)=>{
    try{
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=c493382f783c405598156fa11829f9e6",{
            params:{
                apiKey : process.env.WORLD_NEWS_API_KEY
            }
        })
        res.json(response.data.articles)
    }
    catch(error){
        console.error('Error fetching details:',error.message)
        res.status(500).json({error:'Failed to fetch data'})
    }
}