const axios = require('axios')

export default async function getData(path, headers) {
    try {
        let result = await axios.get(`http://127.0.0.1:8000/api${path}`, headers)

        return result.data
    }
    catch (err) {
        console.log(`Ошибка запроса к API: ${err}`)
    }
}