export interface Item {
    ItemName: String,
    ItemPrice: Price,
    ItemDescription?: String,
}

export interface Category{
    Title: String,
    Item: Item[],
}

export interface Price{
    Price1?: String,
    Price2?: String,
    Price3?: String,
}