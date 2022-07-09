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
            cost(x) { return new Decimal(5).pow(x.plus(1)).round() },
            title() { return "Generon One" },
            effect(x) { GBase = new Decimal(2)
                        G2 = getBuyableAmount(this.layer, 21)
                        G3 = new Decimal (1).plus(getBuyableAmount(this.layer, 31))
                        GTotal = GBase.plus(G2.mul(G3)), GTotal = GTotal.pow(x)
                        return GTotal.round()},
            display() { return "Multiplies Primon generation by " + GBase.plus(G2.mul(G3)) + "x."
            + "<br> Current multiplier: " + this.effect() + "x"
            + "<br>Cost: " + this.cost() + " Primons" },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        21: {
            cost(x) { return new Decimal(100).pow(x.plus(1)).round() },
            title() { return "Generon Two" },
            effect() { return getBuyableAmount(this.layer, this.id).mul(G3)},
            display() { return "Increases Generon One multiplier by +" + G3 + "."
            + "<br> Current bonus: +" + this.effect()
            + "<br>Cost: " + this.cost() + " Primons" },
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        31: {
            cost(x) { return new Decimal(1000).pow(x.plus(1)).round() },
            title() { return "Generon Three" },
            effect(x) { base = new Decimal(2).pow(x).round()
                        //upgraded = new Decimal(2).pow(getBuyableAmount(this.layer, 21))
                       // return base.mul(upgraded)
                        return base},
            display() { return "Multiplies Generon Two effectivity by 2x.<br> Current multiplier: " + this.effect() + "x"
            + "<br>Cost: " + this.cost() + " Primons" },
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
