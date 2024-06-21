import  axios  from "axios";
export class produtoService {
    async get(){
        const res = await axios.get("http://locahost:3000/produtos")
        return res.data;
    }
    async post(produto){
        const res = await axios.post("http://locahost:3000/produtos", produto);
        return res.data;
    }
}