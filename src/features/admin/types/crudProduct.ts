import { FilePondFile } from "filepond";

export type CreateProduct = {
    program: string;
    description: string;
    type: number | undefined;
    tag: number[];
    photo: FilePondFile | undefined
    gallery: FilePondFile[] | undefined
}
export type UpdateProduct = CreateProduct & {
    id: number
}


export const OptionTagType = [
    { value: 1, label: "Keuangan" },
    { value: 2, label: "Operasional" },
    { value: 3, label: "Pemasaran" },
    { value: 4, label: "SDM" }
];
