import { data } from '../../../data'

export default function handler( { query: { id } }, res) 
{
    const filtered = data.filter((item) => item.id == id)

    if (filtered.length > 0){
        res.status(200).json(filtered[0])
    } else {
        res.status(500).json({message: `data dengan id = ${id} tidak ditemukan`})
    }
}