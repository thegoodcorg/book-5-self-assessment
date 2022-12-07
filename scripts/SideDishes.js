import { getSides, setSide } from "./database.js"

const sideDishes = getSides()

document.addEventListener("change", (event) => {
    if (event.target.name === "sideDish") {
        setSide(parseInt(event.target.value))
    }
})

// Requirement: The radio input elements that this component funcion renders must all have a name of "sideDish"
export const Sides = () => {

    let html = `<ul>
        ${sideDishes.map(dish => {
        return `<li>
                            <input type="radio" name="sideDish" value="${dish.id}" /> ${dish.title}
                        </li>`
    }).join("")
        }
    </ul>`

    return html

}

