import { getVeggies, getEntrees, getSides, getPurchases } from "./database.js"

const buildOrderListItem = (order) => {
    const veggies = getVeggies()
    const entrees = getEntrees()
    const sides = getSides()

    const veggiePrice = veggies.find(veggie => {return veggie.id === order.veggieId})
    
    const entreePrice = entrees.find(entree => {return entree.id === order.entreeId})

    const sidePrice = sides.find(side => {return side.id === order.sideId})

    const total = veggiePrice.price + entreePrice.price + sidePrice.price

    return `<li>
        Receipt #${order.id} = ${total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })}
    </li>`
}

export const Sales = () => {
    const sales = getPurchases()
    return `
        <ul>
            ${sales.map(
        (sale) => {
            // Reflect: What is the scope of this `return` keyword?
            return buildOrderListItem(sale)
        }
    ).join("")}
        </ul>
    `
}

