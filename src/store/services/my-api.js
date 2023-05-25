import axios from "axios";

export async function getItem(item, id = 1) {
    try{
		const { data }  = await axios.get(`https://rickandmortyapi.com/api/${item}/${id}`)
        return data
    } catch(error){
        console.log(error);
    }
}

export const getList = async (i) => {
    try {
        const { data } = await axios.get(`${i}`)
        return data
    } catch (error) {
        console.log(error);
    }
}

