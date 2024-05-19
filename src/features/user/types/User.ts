export interface UserInterface  {
    id: number;
    files_id: number;
    full_name: string;
    username: string;
    number_phone: string;
    position?: string;
    company?: string;
    email: string;
    image_path?: string
    address?: string
    role: string;
    created_at?: Date
    updated_at?: Date
}