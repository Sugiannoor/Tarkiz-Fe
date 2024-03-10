
export type ContractForm = {

    contract_code: string,
    product_id: number | undefined
    contract_date: string,
    end_date: string,
    client_id: number | undefined
}

export type editContractForm = ContractForm & {
    id: number;
}