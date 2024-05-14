import { FilePondFile } from "filepond";

export type PortofolioTableType = {
    id: number;
    no: number;
    product_id: string;
    program: string;
    path_files: string;
    gallery: string[]
    start_date: string;
    end_date: string;
    description: string;
}

export type PortofolioDto = {
    id?: number
 user_id: number;
 product_id: number;
 program: string;
 description: string;
 start_date: string;
 end_date: string;
 gallery: FilePondFile [] | undefined
 photo: FilePondFile | undefined
}