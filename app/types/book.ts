type typeOptions = {
    [key: string]: string | number;
  }

export interface Book extends typeOptions{
    id: string;
    name: string;
    price: number;
    category: string;
    description:string;
}
