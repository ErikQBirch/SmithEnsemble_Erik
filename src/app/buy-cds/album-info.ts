export class AlbumInfo{
  constructor(
    public Titles = [
      "The Smith Ensemble: All Things Come of Thee",
      "The Smith Six: Brightly Beams"
    ],
    public Prices = {
      "AllThings":12.00,
      "BrightlyBeams":10.00
    },
    public Songs = {
      "AllThings": [
        "PRAISE GOD, FROM WHOM ALL BLESSINGS FLOW",
        "ZIOIN'S WALLS",
        "AMAZING GRACE",
        "DOWN TO THE RIVER TO PRAY",
        "PILGRIM SONG",
        "PIE JESU",
        "SEEK THIS JESUS",
        "BORN ON A NEW DAY",
        "SAVIOR, REDEEMER OF MY SOUL",
        "WHEN LOVE CAME DOWN",
        "THE LORD IS MY SHEPHERD",
        "GLORIOUS",
        "LOOK AT THE WORLD",
        "GO YE NOW IN PEACE"],
      "BrightlyBeams": [
        "I NEED THEE EVERY HOUR", 
        "PRAYER OF THE CHILD", 
        "BLACKBIRD", 
        "LULLABY (GOODNIGHT, MY ANGEL)",
        "SIDE BY SIDE", 
        "BE MY LITTLE BABY BUMBLE BEE",
        "BYE BYE BLUES",
        "CAN'T HELP FALLING IN LOVE",
        "AFRICA", "L.O.V.E.",
        "HAVE YOURSELF A MERRY LITTLE CHRISTMAS",
        "BRIGHTLY BEAMS OUR FATHER'S MERCY"]
    }
  ){}
}