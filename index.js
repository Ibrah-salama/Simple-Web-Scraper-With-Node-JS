const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios')
const PORT = 8000
const URL = "https://www.theguardian.com/uk"
const app = express()

axios(URL).then(res => { 
    const html = res.data 
    const $ = cheerio.load(html)
    var article = []
    $(".fc-item__title",html).each(function(){
        const title = $(this).text()
        const url = $(this).find('a').attr('href')
        article.push({title,url})
    })
    console.log(article)
}).catch(err=> console.log(err))

app.listen(PORT, ()=> console.log(`Server listen on port : ${PORT}`))