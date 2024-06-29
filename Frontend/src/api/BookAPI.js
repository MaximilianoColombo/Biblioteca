

export const getDataList = async (model) => {
    
    const apiUrl = `http://localhost:8000/api/${model}/`
    try{
        const response = await fetch(apiUrl)
        if (!response.ok){
            throw new Error ('Error fetching data')
        }
        
        const result = await response.json()

        return result
    } catch (error) {
        throw new Error (error.message)
    }
}