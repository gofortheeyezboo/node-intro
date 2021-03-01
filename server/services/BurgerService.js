import { DEFINITELYAREALDB } from "../db/DEFINITELYAREALDB"


let id = 2
class BurgerService {
    getAll(){
        return DEFINITELYAREALDB.burgers
    }
    create(newBurger){
        newBurger.id = id++
        DEFINITELYAREALDB.burgers.push(newBurger)
        return newBurger
    }
    delete(id){
        findBurger(id)
        DEFINITELYAREALDB.burgers.filter(b => b.id != id)
    }
    edit(changedBurger,id){
        const foundBurger = findBurger(id)
        Object.keys(changedBurger).forEach(key => {
            foundBurger[key] = changedBurger[key]
        })
        return changedBurger
    } 
    getOne(id) {
        const foundBurger = findBurger(id)
        return foundBurger
    }  
}

function findBurger(id) {
    let foundBurger = DEFINITELYAREALDB.burgers.find(b => b.id == id)
    if (!foundBurger) { throw new Error("invalid id") }
    return foundBurger
}
export const burgerService = new BurgerService()