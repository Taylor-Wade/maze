namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
e f f f f f f f f f f f f f f e 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f e e e e e f f f f f f e e e e 
f e e e e e f f f f f f e e e e 
f f f f f f f f f f f f f f f f 
e e e f f f e e e e e f f f f f 
e e e f f f e e e e e f f f f f 
f f f f f f f f f f f f f f f f 
f e e e e e f f f f e e e e e f 
f e e e e e f f f f e e e e e f 
f f f f f f f f f f f f f f f f 
e f f f e e e e e f f f f e e e 
e f f f e e e e e f f f f e e e 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 5 d f . . 
. . . . b 5 5 1 f f 5 d 4 c . . 
. . . . b 5 5 d f b d d 4 4 . . 
. b b b d 5 5 5 5 5 4 4 4 4 4 b 
b d d d b b d 5 5 4 4 4 4 4 b . 
b b d 5 5 5 b 5 5 5 5 5 5 b . . 
c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
c b d c d 5 5 b 5 5 5 5 5 5 b . 
. c d d c c b d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`10001000050b0505050505050505050505050505050105010101010501010101010101050501050101010105010101050101010505010501010505050101010501010105050101010101010501010105010101050501010101010101010505050101010505050505050505010101010505050505050101050101010101010105010101050501010501010101010101050101010505010101010101010101010101010105050105010101050101050505050505050501010501010501010101010101010505010105010105050501010101010105050101050101010105010101010101050501010501010101050101010101010505050505050505050505050505050a05`,
            img`
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . . . . 2 . . . . . . . 2 
2 . 2 . . . . 2 . . . 2 . . . 2 
2 . 2 . . 2 2 2 . . . 2 . . . 2 
2 . . . . . . 2 . . . 2 . . . 2 
2 . . . . . . . . 2 2 2 . . . 2 
2 2 2 2 2 2 2 . . . . 2 2 2 2 2 
2 . . 2 . . . . . . . 2 . . . 2 
2 . . 2 . . . . . . . 2 . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 . . . 2 . . 2 2 2 2 2 2 2 
2 . . 2 . . 2 . . . . . . . . 2 
2 . . 2 . . 2 2 2 . . . . . . 2 
2 . . 2 . . . . 2 . . . . . . 2 
2 . . 2 . . . . 2 . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tilePath9,sprites.castle.tilePath6,myTiles.tile1,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorth,sprites.dungeon.floorLightMoss,sprites.dungeon.stairSouth],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLightMoss)
scene.cameraFollowSprite(mySprite)
info.startCountdown(7)
