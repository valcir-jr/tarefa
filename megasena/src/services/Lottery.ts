import { LotteryProps } from "../types";
import api from "./api";

class Lottery {
    async get(): Promise<LotteryProps> {
        await delay(2000);
        const { data } = await api.get("/");
        return data;
    }
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const lottery = new Lottery();
export default lottery;
