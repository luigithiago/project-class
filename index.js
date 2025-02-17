class Hero{
    constructor(name, age, role){
        this.name = name
        this.age = age
        this.role = role
    }

    attack(){
        //Objeto para mapear roles e ataques
        const attackMap = {
            "Mage": "Spell",
            "Warrior": "Sword",
            "Monk": "Ninjutsu",
            "Ninja": "Stealth Attacks"
        }

        //Ataque mapeado na saída ou default case
        const attack = attackMap[this.role] || "Unknown attack"

        console.log(`O ${this.role} atacou usando ${attack}!\n`)
    
    }

}

const hero1 = new Hero("Gandalf" , 82, "Mage")
const hero2 = new Hero("Arthas" , 189, "Warrior")
const hero3 = new Hero("Aang", 12, "Monk")
const hero4 = new Hero("Ryu Hayabusa" , 37, "Ninja")

hero1.attack()
hero2.attack()
hero3.attack()
hero4.attack()