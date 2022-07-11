addLayer("gen", {
    name: "generon", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#888888",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Generons", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    //hotkeys: [
    //    {key: "g", description: "G: Reset for Generons", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    //],
    layerShown(){return true},
    buyables: {
        11: {
            cost(x) { return new Decimal(4).pow(x.plus(1)).round() },
            title() { return "Generon One" },
            effect(x) { GenBase = new Decimal(2)
                        // GenBonus -- For future upgrades that increase the base multiplier
                        GTotal = GenBase.pow(x)
                        return GTotal.round()},
            display() { return "Multiplies Primon generation by " + GenBase + "x."
            + "<br> Current multiplier: " + this.effect() + "x"
            + "<br>Cost: " + this.cost() + " Primons" },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        21: {
            cost(x) { return new Decimal(16).pow(x.plus(1)).round() },
            title() { return "Generon Two" },
            effect(x) { Gen2Base = new Decimal(1.5)
                        // Reserved
                        G2Total = Gen2Base.pow(x)
                        return G2Total},
            display() { return "Further multiplies Primon generation by 1.5x."
            + "<br> Current multiplier: " + G2Total.mul(100).round().div(100) + "x"
            + "<br>Cost: " + this.cost() + " Primons" },
            unlocked() {return (getBuyableAmount('gen', 11) > 0)},
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        31: {
            cost(x) { return new Decimal(64).pow(x.plus(1)).round() },
            title() { return "Generon Three" },
            effect(x) { Gen3Base = new Decimal(1.3333)
                        // Reserved
                        G3Total = Gen3Base.pow(x)
                        return G3Total},
            display() { return "Further multiplies Primon generation by 1.33x."
            + "<br> Current multiplier: " + G3Total.mul(100).round().div(100) + "x"
            + "<br>Cost: " + this.cost() + " Primons" },
            unlocked() {return (getBuyableAmount('gen', 21) > 0)},
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        41: {
            cost(x) { return new Decimal(256).pow(x.plus(1)).round() },
            title() { return "Generon Four" },
            effect(x) { Gen4Base = new Decimal(1.25)
                        // Reserved
                        G4Total = Gen4Base.pow(x)
                        return G4Total},
            display() { return "Further multiplies Primon generation by 1.25x."
            + "<br> Current multiplier: " + G4Total.mul(100).round().div(100) + "x"
            + "<br>Cost: " + this.cost() + " Primons" },
            unlocked() {return (getBuyableAmount('gen', 31) > 0)},
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        51: {
            cost(x) { return new Decimal(1024).pow(x.plus(1)).round() },
            title() { return "Generon Five" },
            effect(x) { Gen5Base = new Decimal(1.2)
                        // Reserved
                        G5Total = Gen5Base.pow(x)
                        return G5Total},
            display() { return "Further multiplies Primon generation by 1.2x."
            + "<br> Current multiplier: " + G5Total.mul(100).round().div(100) + "x"
            + "<br>Cost: " + this.cost() + " Primons" },
            unlocked() {return (getBuyableAmount('gen', 41) > 0)},
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        //etc
    },
    tabFormat: [
        ["display-text",
            function() { return 'You have ' + format(player.points) + ' Primons.' },
            { "color": "white", "font-size": "20px", "font-family": "Inconsolata" }],
        "blank", "blank", "blank",
        "buyables"
    ]
})

addLayer("ext", {
    name: "extendon", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        unlockOrder: ["gen"],
    }},
    color: "#B87333",
    requires: new Decimal(5000), // Can be a function that takes requirement increases into account
    resource: "Extendons", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "e", description: "e: Reset for Extendons", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (player.points >= 4000 || player[this.layer].points > 0 ? true : false)},
    //tabFormat: [
    //    "main-display",
    //    ["prestige-button"],
    //    "blank",
    //    "milestones"
    //]
})
