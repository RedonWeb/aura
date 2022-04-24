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
    PriceSmall?: String,
    PriceMedium?: String,
    PriceLarge?: String,
}