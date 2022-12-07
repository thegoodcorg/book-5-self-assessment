import { addPurchase } from "./database.js"
import { Sales } from "./Sales.js"
import { Entrees } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"

document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
        addPurchase()
    }
})

export const FoodTruck = () => {
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <article class="choices">
        <section class="choices__base">
            <h2>Entrees</h2>
            ${Entrees()}
        </section>

        <article class="veggies">
        <section class="choices__veggies">
            <h2>Veggies</h2>
            ${Veggies()}
        </section>

        <article class="sides">
        <section class="choices__sides">
        <h2>Sides</h2>
        ${Sides()}
        </section>
    </article>


        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${Sales()}
        </article>

    `
}
