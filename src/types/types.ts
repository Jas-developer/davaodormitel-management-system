export interface BorderType {
  _id: string;
  amount: string;
  createdAt: string;
  due: string;
  name: string;
  room: string;
  starting: string;
  updatedAt: string;
}

export interface FORMTYPE {
  name: string;
  room_number: string;
  monthly_due_date: string;
  date_started: string;
  monthly_amount_due: string;
  _id?: string;
}

export interface AdminTypes {
  email: string;
  password: string;
}
