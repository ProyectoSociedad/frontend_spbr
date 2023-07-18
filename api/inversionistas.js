import axios from "axios";

export default async function handler(req, res){
    if (req.method === 'POST') {
        try {
            const response = await axios.post('http://localhost:8000/api/registro');
            res.status(response.status).json(response.data);
        } catch (error) {
            res.status(error.response.status).json(error.response.data);
        }
    } else {
        res.status(405).json({message: 'Metodo no definido'});
    }
}