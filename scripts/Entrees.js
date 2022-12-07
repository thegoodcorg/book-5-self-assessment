import { getEntrees, setEntree } from "./database.js"

const entrees = getEntrees()

export const Entrees = () => {
    let HTMLString = `<ul>`
    for (const entree of entrees) {
        HTMLString += `<li>
        <input type="radio" name="entree" value="${entree.id}" /> ${entree.name}
        </li>`
    }
    HTMLString += `</ul>`
    return HTMLString
}

document.addEventListener("change", (event) => {
    if (event.target.name.startsWith("entree")) {
        setEntree(parseInt(event.target.value))
    }
}
)
// Requirement: The radio input elements that this component funcion renders must all have a name of "entree"
