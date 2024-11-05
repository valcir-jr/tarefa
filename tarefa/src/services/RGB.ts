import { api } from "./api";

class RGB {
    public async get(){
        const { data } = await api.get("/get");
        return data;
    }

    public async save(r:number, g:number, b:number) {
        const { data } = await api.post("/save", {r,g,b});
        return data;
    }
}

const object = new RGB();
export default object;