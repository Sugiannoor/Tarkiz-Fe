
export type ContractForm = {

    contract_name: string,
    product_id: number | undefined
    contract_date: string,
    end_date: string,
    client_id: number | undefined
    price: string
}

export type editContractForm = ContractForm & {
    id: number;
}