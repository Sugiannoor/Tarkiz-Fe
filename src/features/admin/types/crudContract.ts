
export type ContractForm = {

    contract_code: string,
    product_id: number | null
    contract_date: string,
    end_date: string,
    client_name: string,
}

export type editContractForm = ContractForm & {
    id: number;
}