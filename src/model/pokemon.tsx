 
type List = {
    [name: string]: Pokemon
}
export default List

export type Pokemon = {
    id: number
    name: string
    url: string 
    moves: string[]
    types?: string[]
    sprites?: string[]
    createdAt?: number
}

export type ListRes = {
    results: Pokemon[]
    next: string
}

type Moves = {
    move: { name: string }
}

type Types = {
    type: { name: string }
}

export const cleanData = (data: any, details: Pokemon) => {
    details.createdAt = Date.now()
    const getValue = (item: string) => {
        switch (item) {
            case "moves":
                return data[item].map((item: Moves) => item.move.name)
            case "types":
                return data[item].map((item: Types) => item.type.name)
            case "sprites":
                return ["front_default", "back_default"].map((key: string) => data[item][key]).filter(v=>v)
            default:
                return data[item]
        }
    }

    return ["id", "moves", "types", "sprites"]
        .reduce<Pokemon>((acc: Pokemon, item: string) => ({
            ...acc,
            [item]: getValue(item)    
        }), details)
}
