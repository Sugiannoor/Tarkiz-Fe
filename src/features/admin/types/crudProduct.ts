import { FilePondFile } from "filepond";

export type CreateProduct = {
    program: string;
    description: string;
    type: number | null;
    tag: number[];
    photo: FilePondFile | undefined
}


export const OptionTagType = [
    { value: 1, label: "Keuangan" },
    { value: 2, label: "Operasional" },
    { value: 3, label: "Pemasaran" },
    { value: 4, label: "SDM" }
];
