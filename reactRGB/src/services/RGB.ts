import { api } from "./api";

class RGB {
    public async get(id?: number) {
        const url = id ? `/get?id=${id}` : "/get";
        const { data } = await api.get(url);
        return data;
      }

    public async save(r:number, g:number, b:number) {
        const { data } = await api.post("/save", {r,g,b});
        return data;
    }
}

const object = new RGB();
export default object;