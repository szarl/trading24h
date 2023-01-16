import axios from "axios";
import { instanceToPlain } from "class-transformer";
import Transaction from "~/model/Transaction";


export const transactionService = new class TransactionService {

    async addTransaction(transaction: Transaction): Promise<Transaction> {
        const data = instanceToPlain(transaction);
        return axios.post('http://localhost:8080/transaction/add', data).then(response => new Transaction(response.data));
    }

    async getAllTransactions(): Promise<Transaction[]> {
        const url = `http://localhost:8080/transaction/getAll`;
        return axios.get(url).then(response => response.data.map(transaction => new Transaction(transaction)));
    }

}()