player.onChat("l", function () {
    agent.turn(LEFT_TURN)
})
player.onChat("r", function () {
    agent.turn(RIGHT_TURN)
})
player.onChat("run", function () {
    agent.move(UP, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 4; index++) {
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(RIGHT_TURN)
        }
        agent.move(UP, 1)
    }
    agent.move(FORWARD, 1)
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.move(BACK, 3)
        agent.move(LEFT, 1)
    }
})
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
