export type GeneralResponse<T> = {
    code: number
    status: string
    data: T
}