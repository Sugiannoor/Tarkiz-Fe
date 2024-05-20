export type ComplaintTableType = {
  id: number;
  no: number;
  contracts_id: string;
  name: string;
  description: string;
  urgensi: string;
  status: string;
  date: string;
};

export type Complaint = {
  id: number;
  no: number;
  username: string;
  name_apk: string;
  contracts_id: string;
  name: string;
  description: string;
  urgensi: string;
  status: string;
  date: string;
  path_files: string[];
  selected_urgensi: {
    value: string;
    label: string;
  };
  selected_status: {
    value: string;
    label: string;
  };
  number_phone: string;
};
