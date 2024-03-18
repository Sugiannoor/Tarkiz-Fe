
export type ContractForm = {

    name: string,
    product_id: number | undefined
    taken_at: string,
    deadline: string,
    description: string;
    id_user: number | undefined
    price: string
}

export type editContractForm = ContractForm & {
    id: number;
}