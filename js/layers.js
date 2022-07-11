addLayer("gen", {
    name: "generon", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#888888",
    requires: new Decimal.fromString("ee10"), // Can be a function that takes requirement increases into account
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
            display() { return "Multiplies Primon generation by " + new Decimal(2) + "x."
            + "<br> Current multiplier: " + format(GTotal) + "x"
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
            + "<br> Current multiplier: " + format(G2Total) + "x"
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
            + "<br> Current multiplier: " + format(G3Total) + "x"
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
            + "<br> Current multiplier: " + format(G4Total) + "x"
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
            + "<br> Current multiplier: " + format(G5Total) + "x"
            + "<br>Cost: " + this.cost() + " Primons" },
            unlocked() {return (getBuyableAmount('gen', 41) > 0)},
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        61: {
            cost(x) { return new Decimal(4096).pow(x.plus(1)).round() },
            title() { return "Generon Six" },
            effect(x) { Gen6Base = new Decimal(1.166)
                        // Reserved
                        G6Total = Gen6Base.pow(x)
                        return G6Total},
            display() { return "Further multiplies Primon generation by 1.166x."
            + "<br> Current multiplier: " + format(G6Total) + "x"
            + "<br>Cost: " + this.cost() + " Primons" },
            unlocked() {return (getBuyableAmount('gen', 51) > 0) && hasMilestone('ext', 0)},
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        71: {
            cost(x) { return new Decimal(16384).pow(x.plus(1)).round() },
            title() { return "Generon Seven" },
            effect(x) { Gen7Base = new Decimal(1.143)
                        // Reserved
                        G7Total = Gen7Base.pow(x)
                        return G7Total},
            display() { return "Further multiplies Primon generation by 1.143x."
            + "<br> Current multiplier: " + format(G7Total) + "x"
            + "<br>Cost: " + this.cost() + " Primons" },
            unlocked() {return (getBuyableAmount('gen', 61) > 0) && hasMilestone('ext', 1)},
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        81: {
            cost(x) { return new Decimal(65536).pow(x.plus(1)).round() },
            title() { return "Generon Eight" },
            effect(x) { Gen8Base = new Decimal(1.125)
                        // Reserved
                        G8Total = Gen8Base.pow(x)
                        return G8Total},
            display() { return "Further multiplies Primon generation by 1.125x."
            + "<br> Current multiplier: " + format(G8Total) + "x"
            + "<br>Cost: " + this.cost() + " Primons" },
            unlocked() {return (getBuyableAmount('gen', 71) > 0) && hasMilestone('ext', 2)},
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        91: {
            cost(x) { return new Decimal(262144).pow(x.plus(1)).round() },
            title() { return "Generon Nine" },
            effect(x) { Gen9Base = new Decimal(1.111)
                        // Reserved
                        G9Total = Gen9Base.pow(x)
                        return G9Total},
            display() { return "Further multiplies Primon generation by 1.111x."
            + "<br> Current multiplier: " + format(G9Total) + "x"
            + "<br>Cost: " + this.cost() + " Primons" },
            unlocked() {return (getBuyableAmount('gen', 81) > 0) && hasMilestone('ext', 3)},
            canAfford() { return player.points.gte(this.cost()) },
            buy() {
                player.points = player.points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        101: {
            cost(x) { return new Decimal(262144).pow(x.plus(1)).round() },
            title() { return "Generon Ten" },
            effect(x) { Gen10Base = new Decimal(1.1)
                        // Reserved
                        G10Total = Gen10Base.pow(x)
                        return G10Total},
            display() { return "Further multiplies Primon generation by 1.1x."
            + "<br> Current multiplier: " + format(G10Total) + "x"
            + "<br>Cost: " + this.cost() + " Primons" },
            unlocked() {return (getBuyableAmount('gen', 91) > 0) && hasMilestone('ext', 4)},
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
        unlockOrder: 0,
    }},
    color: "#B87333",
    requires: new Decimal(4e4), // Can be a function that takes requirement increases into account
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
    layerShown(){return ((player.points >= 10000 && getBuyableAmount('gen', 51) > 0) || player[this.layer].points > 0 ? true : false)},
    milestones: {
        0: {
            requirementDescription: "1 Extendon",
            effectDescription: "Unlocks Generon Six.",
            done() { return player[this.layer].points.gte(1) }
        },
        1: {
            requirementDescription: "2 Extendons",
            effectDescription: "Unlocks Generon Seven.",
            done() { return player[this.layer].points.gte(2) }
        },
        2: {
            requirementDescription: "4 Extendons",
            effectDescription: "Unlocks Generon Eight.",
            done() { return player[this.layer].points.gte(4) }
        },
        3: {
            requirementDescription: "8 Extendons",
            effectDescription: "Unlocks Generon Nine.",
            done() { return player[this.layer].points.gte(8) }
        },
        4: {
            requirementDescription: "16 Extendons",
            effectDescription: "Unlocks Generon Ten.",
            done() { return player[this.layer].points.gte(16) }
        },
        5: {
            requirementDescription: "1e128 Extendons",
            effectDescription: "Extendon resets no longer reset the Generon layer (finally!).",
            done() { return player[this.layer].points.gte(1e128) }
        },
       
    },
    tabFormat: [
        "main-display",
        ["display-text",
            function() { if (player[this.layer].points > 0) return '...which is giving you a ' 
            + format(((player[this.layer].points).log2()).plus(2)) + 'x bonus to Primon production.' },
            { "color": "white", "font-size": "16px", "font-family": "Inconsolata" }],
        "blank",
        "prestige-button",
        "blank",
        "milestones"
    ]
})
