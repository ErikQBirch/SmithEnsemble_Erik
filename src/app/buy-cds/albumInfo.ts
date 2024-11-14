export class AlbumInfo{
  constructor(
    public Keys = ["AllThings","BrightlyBeams","Loss","Refraction"],
    public Titles = {
      "AllThings":"The Smith Ensemble: All Things Come of Thee",
      "BrightlyBeams":"The Smith Six: Brightly Beams",
      "Loss":"On Contemplating Loss",
      "Refraction":"Refraction"
    },
    public AlbumCovers = {
      "AllThings":"AllThings_cover.jpg",
      "BrightlyBeams":"BrightlyBeams_cover.jpg",
      "Loss":"Loss_cover.jpg",
      "Refraction":"Refraction_cover.jpg"
    },
    public SecondaryPics = {
      "AllThings":"AllThings_second.jpg",
      "BrightlyBeams":"BrightlyBeams_second.jpg",
      "Loss":"Loss_second.jpg",
      "Refraction":"Refraction_second.jpg"
    },
    public Prices = {
      "AllThings":12.00,
      "BrightlyBeams":10.00,
      "Loss":14.00,
      "Refraction":16.00
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
        "BRIGHTLY BEAMS OUR FATHER'S MERCY"],
      "Loss": [
        "Moderato",
        "Adagio",
        "Dance - Spirito",
        "Adagio",
        "Celtic Dance",
        "... On Contemplating Loss",
        "Elegy",
        "Inspired By Emily"],
      "Refraction" : [
        "Allegro Moderato",
        "Allegro Maestoso",
        "Allegro Appassionato",
        "Larghetto",
        "One Eternal Round",
        "Allegro Moderato",
        "Andantino Sostenuto e Cantabile",
        "Rondeau - Allegro",
        "Tremulous Whirl",
        "Refraction of Sky",
        "Lavender Shroud"
      ]
    }
  ){}
}