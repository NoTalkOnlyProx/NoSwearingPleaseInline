var hardSounds = "b,c,d,f,g,j,k,p,q,s,t,u,v,w,x,z".split(",")
var preModifiers = "s".split(",") // sp
var modifyingSounds = "l,r,y,m,n,s,x,c".split(",") // had and hand makes different sounds
var postModifyingSounds = "l,r,y,t".split(",") // had and hand makes different sounds

var swearglobal = {
  "africoon": 2,
  "anal": 2,
  "analannie": 2,
  "analsex": 2,
  "anus": 2,
  "arabush": 2,
  "arabushs": 2,
  "areola": 1,
  "argie": 2,
  "armo": 2,
  "armos": 2,
  "arsehole": 2,
  "assbagger": 2,
  "assblaster": 2,
  "asscowboy": 2,
  "assfuck": 2,
  "assfucker": 2,
  "asshole": 2,
  "assholes": 2,
  "asshore": 2,
  "assjockey": 2,
  "asslick": 2,
  "asslicker": 2,
  "asslover": 2,
  "assman": 2,
  "assmonkey": 2,
  "assmunch": 2,
  "assmuncher": 2,
  "asspacker": 2,
  "asspirate": 2,
  "asspuppies": 2,
  "assranger": 2,
  "asswhore": 2,
  "athletesfoot": 1,
  "badfuck": 2,
  "balllicker": 2,
  "ballsack": 2,
  "bazooms": 2,
  "beatoff": 2,
  "beatyourmeat": 2,
  "bigass": 2,
  "bigbastard": 2,
  "bigbutt": 2,
  "bitcher": 2,
  "bitchez": 2,
  "bitching": 2,
  "bitchslap": 2,
  "bitchy": 2,
  "bluegum": 2,
  "bluegums": 2,
  "bohunk": 2,
  "bollick": 2,
  "bollock": 2,
  "bollocks": 2,
  "bong": 2,
  "boobies": 2,
  "booby": 2,
  "boong": 2,
  "boonga": 2,
  "boongas": 2,
  "boongs": 2,
  "boonie": 2,
  "boonies": 2,
  "bootlip": 2,
  "bootlips": 2,
  "bosche": 2,
  "bosches": 2,
  "boschs": 2,
  "bounty bar": 1,
  "bounty bars": 1,
  "bountybar": 1,
  "brea5t": 2,
  "breastlover": 2,
  "breastman": 2,
  "buddhahead": 2,
  "buddhaheads": 2,
  "buffies": 2,
  "bule": 2,
  "bules": 2,
  "bulldike": 2,
  "bulldyke": 2,
  "bumfuck": 2,
  "bung": 2,
  "bunga": 2,
  "bungas": 2,
  "bunghole": 2,
  "burr head": 2,
  "burr heads": 2,
  "burrhead": 2,
  "burrheads": 2,
  "butchbabes": 2,
  "butchdike": 2,
  "butchdyke": 2,
  "buttbang": 2,
  "buttface": 2,
  "buttfuck": 2,
  "buttfucker": 2,
  "buttfuckers": 2,
  "buttman": 2,
  "buttmunch": 2,
  "buttmuncher": 2,
  "buttpirate": 2,
  "cacker": 2,
  "camel jockey": 2,
  "camel jockeys": 2,
  "cameljockey": 2,
  "cameltoe": 2,
  "carpetmuncher": 2,
  "carruth": 2,
  "cherrypopper": 2,
  "chickslick": 2,
  "china swede": 2,
  "china swedes": 2,
  "chinaman": 2,
  "chinamen": 2,
  "chinaswede": 2,
  "chinaswedes": 2,
  "ching chong": 2,
  "ching chongs": 2,
  "chingchong": 2,
  "chingchongs": 2,
  "chink": 2,
  "chinks": 2,
  "chinky": 2,
  "choad": 2,
  "chode": 2,
  "chunger": 2,
  "chungers": 2,
  "chunkies": 2,
  "chunky": 2,
  "chunkys": 2,
  "clamdigger": 2,
  "clamdiver": 2,
  "clit": 1,
  "clitoris": 2,
  "clogwog": 2,
  "cock": 2,
  "cockblock": 2,
  "cockblocker": 2,
  "cockcowboy": 2,
  "cockknob": 2,
  "cocklicker": 2,
  "cocklover": 2,
  "cocknob": 2,
  "cockqueen": 2,
  "cockrider": 2,
  "cocksman": 2,
  "cocksmith": 2,
  "cocksmoker": 2,
  "cocksucer": 2,
  "cocksuck": 2,
  "cocksucked": 2,
  "cocksucker": 2,
  "cocksucking": 2,
  "cocktease": 2,
  "cohee": 2,
  "coolie": 2,
  "coolies": 2,
  "cooly": 2,
  "coon": 2,
  "coon ass": 2,
  "coon asses": 2,
  "coonass": 2,
  "coonasses": 2,
  "coondog": 2,
  "coons": 2,
  "copulate": 1,
  "cornhole": 2,
  "crackpipe": 1,
  "crackwhore": 2,
  "crapola": 2,
  "crapper": 2,
  "crappy": 2,
  "crotchjockey": 2,
  "crotchmonkey": 2,
  "crotchrot": 2,
  "cum": 2,
  "cumbubble": 2,
  "cumfest": 2,
  "cumjockey": 2,
  "cumm": 2,
  "cummer": 2,
  "cumming": 2,
  "cumquat": 2,
  "cumqueen": 2,
  "cumshot": 2,
  "cunilingus": 1,
  "cunillingus": 1,
  "cunn": 2,
  "cunnilingus": 1,
  "cunntt": 2,
  "cunt": 2,
  "cunteyed": 2,
  "cuntfuck": 2,
  "cuntfucker": 2,
  "cuntlick": 2,
  "cuntlicker": 2,
  "cuntlicking": 2,
  "cuntsucker": 2,
  "curry muncher": 2,
  "curry munchers": 2,
  "currymuncher": 2,
  "currymunchers": 2,
  "cushi": 2,
  "cushis": 2,
  "cyberslimer": 2,
  "dago": 2,
  "dagos": 2,
  "darkey": 2,
  "darkeys": 2,
  "darkie": 2,
  "darkies": 2,
  "darky": 2,
  "datnigga": 2,
  "deapthroat": 2,
  "deepthroat": 2,
  "dego": 2,
  "degos": 2,
  "dickbrain": 2,
  "dickforbrains": 2,
  "dicklick": 2,
  "dicklicker": 2,
  "dickman": 2,
  "dike": 1,
  "dink": 2,
  "dinks": 2,
  "dix": 2,
  "dixiedike": 2,
  "dixiedyke": 2,
  "doggiestyle": 2,
  "doggystyle": 2,
  "doodoo": 2,
  "dragqueen": 2,
  "dragqween": 2,
  "dripdick": 2,
  "dumbbitch": 2,
  "dune coon": 2,
  "dune coons": 2,
  "dyefly": 2,
  "dyke": 2,
  "easyslut": 2,
  "eatpussy": 2,
  "eight ball": 2,
  "eight balls": 2,
  "ejaculate": 2,
  "ejaculated": 2,
  "ejaculating": 2,
  "ejaculation": 2,
  "erect": 1,
  "erection": 1,
  "esqua": 2,
  "evl": 2,
  "exkwew": 2,
  "fag": 2,
  "fagging": 2,
  "faggot": 2,
  "fagot": 2,
  "fannyfucker": 2,
  "fckcum": 2,
  "felch": 2,
  "felcher": 2,
  "felching": 2,
  "fellatio": 2,
  "feltch": 2,
  "feltcher": 2,
  "feltching": 2,
  "fingerfood": 1,
  "fingerfuck": 2,
  "fingerfucked": 2,
  "fingerfucker": 2,
  "fingerfuckers": 2,
  "fingerfucking": 2,
  "fister": 2,
  "fistfuck": 2,
  "fistfucked": 2,
  "fistfucker": 2,
  "fistfucking": 2,
  "fisting": 2,
  "flydie": 2,
  "flydye": 2,
  "footfuck": 2,
  "footfucker": 2,
  "footlicker": 2,
  "foreskin": 1,
  "forni": 2,
  "fornicate": 1,
  "foursome": 1,
  "fourtwenty": 1,
  "freakfuck": 2,
  "freakyfucker": 2,
  "freefuck": 2,
  "fuckable": 2,
  "fuckbag": 2,
  "fuckbook": 2,
  "fuckbuddy": 2,
  "fuckface": 2,
  "fuckfest": 2,
  "fuckfreak": 2,
  "fuckfriend": 2,
  "fuckingbitch": 2,
  "fuckknob": 2,
  "fuckmehard": 2,
  "fuckmonkey": 2,
  "fuckoff": 2,
  "fuckpig": 2,
  "fucktard": 2,
  "fuckwhore": 2,
  "fudgepacker": 2,
  "gable": 1,
  "gables": 2,
  "gangbang": 2,
  "gangbanged": 2,
  "gangbanger": 2,
  "gangsta": 2,
  "gaymuthafuckinwhore": 2,
  "gaysex": 2,
  "genital": 1,
  "getiton": 2,
  "ginzo": 2,
  "ginzos": 2,
  "gipp": 2,
  "gippo": 2,
  "gippos": 2,
  "gipps": 2,
  "glazeddonut": 2,
  "gook": 2,
  "gook eye": 2,
  "gook eyes": 2,
  "gookeye": 2,
  "gookeyes": 2,
  "gookies": 2,
  "gooks": 2,
  "gooky": 2,
  "gora": 2,
  "goras": 2,
  "gotohell": 2,
  "goy": 1,
  "goyim": 1,
  "groe": 1,
  "groid": 2,
  "groids": 2,
  "gross": 1,
  "grostulation": 1,
  "gub": 1,
  "gubba": 2,
  "gubbas": 2,
  "gubs": 2,
  "guizi": 1,
  "gummer": 2,
  "gwailo": 2,
  "gwailos": 2,
  "gweilo": 2,
  "gweilos": 2,
  "gyopo": 2,
  "gyopos": 2,
  "gyp": 2,
  "gyped": 2,
  "gypo": 2,
  "gypos": 2,
  "gypp": 2,
  "gypped": 2,
  "gyppie": 2,
  "gyppies": 2,
  "gyppo": 2,
  "gyppos": 2,
  "gyppy": 2,
  "gyppys": 2,
  "hadji": 2,
  "hadjis": 2,
  "hairyback": 2,
  "hairybacks": 2,
  "haji": 2,
  "hajis": 2,
  "hajji": 2,
  "hajjis": 2,
  "half caste": 2,
  "halfcaste": 2,
  "haole": 2,
  "haoles": 2,
  "hapa": 2,
  "hardon": 2,
  "hiscock": 2,
  "holestuffer": 2,
  "homobangers": 2,
  "honkers": 2,
  "honkey": 2,
  "honkeys": 2,
  "honkie": 2,
  "honkies": 2,
  "honky": 2,
  "hosejob": 2,
  "hotpussy": 2,
  "hottotrot": 2,
  "hymen": 1,
  "hymie": 2,
  "hymies": 2,
  "iblowu": 2,
  "ikey": 1,
  "ikeymo": 2,
  "ikeymos": 2,
  "ikwe": 2,
  "indon": 2,
  "indons": 2,
  "injun": 2,
  "injuns": 2,
  "intheass": 2,
  "inthebuff": 2,
  "japcrap": 2,
  "japie": 2,
  "japies": 2,
  "japs": 2,
  "jewed": 2,
  "jewess": 2,
  "jiga": 2,
  "jigaboo": 2,
  "jigaboos": 2,
  "jigarooni": 2,
  "jigaroonis": 2,
  "jigga": 2,
  "jiggabo": 2,
  "jiggabos": 2,
  "jiggas": 2,
  "jigger": 2,
  "jiggers": 2,
  "jiggs": 2,
  "jijjiboo": 2,
  "jijjiboos": 2,
  "jimfish": 2,
  "jism": 2,
  "jiz": 2,
  "jizim": 2,
  "jizjuice": 2,
  "jizm": 2,
  "jizz": 2,
  "jizzim": 2,
  "jizzum": 2,
  "jungle bunnies": 2,
  "jungle bunny": 2,
  "junglebunny": 2,
  "kacap": 2,
  "kacapas": 2,
  "kacaps": 2,
  "kaffer": 2,
  "kaffir": 2,
  "kaffre": 2,
  "kafir": 2,
  "kanake": 2,
  "katsap": 2,
  "katsaps": 2,
  "khokhol": 2,
  "khokhols": 2,
  "kigger": 2,
  "kike": 2,
  "kikes": 2,
  "kuffar": 2,
  "kum": 2,
  "kumbubble": 2,
  "kumbullbe": 2,
  "kummer": 2,
  "kumming": 2,
  "kums": 2,
  "kunilingus": 2,
  "kunnilingus": 2,
  "kunt": 2,
  "kushi": 2,
  "kushis": 2,
  "kyke": 2,
  "kykes": 2,
  "kyopo": 2,
  "kyopos": 2,
  "lactate": 1,
  "lapdance": 1,
  "libido": 1,
  "limey": 2,
  "limpdick": 2,
  "limy": 2,
  "liquor": 1,
  "livesex": 2,
  "lovegoo": 2,
  "lovegun": 2,
  "lovejuice": 2,
  "lovemuscle": 2,
  "lovepistol": 2,
  "lubejob": 2,
  "lubra": 2,
  "luckycammeltoe": 2,
  "lugan": 2,
  "lugans": 2,
  "mabuno": 2,
  "mabunos": 2,
  "mahbuno": 2,
  "mahbunos": 2,
  "manpaste": 2,
  "mastabate": 2,
  "mastabater": 2,
  "masterbate": 2,
  "masterblaster": 2,
  "mastrabator": 2,
  "masturbate": 2,
  "masturbating": 2,
  "mattressprincess": 2,
  "meatbeatter": 2,
  "meatrack": 2,
  "mgger": 2,
  "mggor": 2,
  "mickeyfinn": 2,
  "milf": 2,
  "mockey": 2,
  "mockie": 2,
  "mocky": 2,
  "mofo": 2,
  "moky": 2,
  "molest": 1,
  "molestation": 1,
  "molester": 1,
  "molestor": 1,
  "moon cricket": 2,
  "moon crickets": 2,
  "mooncricket": 2,
  "mooncrickets": 2,
  "moskal": 2,
  "moskals": 2,
  "moslem": 2,
  "motherlovebone": 2,
  "muff": 2,
  "muffdive": 2,
  "muffdiver": 2,
  "muffindiver": 2,
  "mufflikcer": 2,
  "mulatto": 2,
  "muncher": 2,
  "munt": 2,
  "mzungu": 2,
  "mzungus": 2,
  "nastyho": 2,
  "nastyslut": 2,
  "nastywhore": 2,
  "negres": 2,
  "negress": 2,
  "negro": 2,
  "negroes": 2,
  "negroid": 2,
  "negros": 2,
  "nigar": 2,
  "nigars": 2,
  "nigerian": 1,
  "nigerians": 1,
  "nigers": 2,
  "nigette": 2,
  "nigettes": 2,
  "nigg": 2,
  "nigga": 2,
  "niggah": 2,
  "niggahs": 2,
  "niggar": 2,
  "niggaracci": 2,
  "niggard": 2,
  "niggarded": 2,
  "niggarding": 2,
  "niggardliness": 2,
  "niggardlinesss": 2,
  "niggards": 2,
  "niggars": 2,
  "niggas": 2,
  "niggaz": 2,
  "nigger": 2,
  "niggerhead": 2,
  "niggerhole": 2,
  "niggers": 2,
  "niggle": 2,
  "niggled": 2,
  "niggles": 2,
  "niggling": 2,
  "nigglings": 2,
  "niggor": 2,
  "niggress": 2,
  "niggresses": 2,
  "nigguh": 2,
  "nigguhs": 2,
  "niggur": 2,
  "niggurs": 2,
  "niglet": 2,
  "nignog": 2,
  "nigor": 2,
  "nigors": 2,
  "nigr": 2,
  "nigra": 2,
  "nigras": 2,
  "nigre": 2,
  "nigres": 2,
  "nigress": 2,
  "nigs": 2,
  "nlgger": 2,
  "nlggor": 2,
  "nutfucker": 2,
  "ontherag": 2,
  "orga": 2,
  "orgasim": 2,
  "orgasm": 1,
  "orgies": 1,
  "pakis": 2,
  "palesimian": 2,
  "pancake face": 2,
  "pancake faces": 2,
  "panti": 2,
  "panties": 2,
  "payo": 2,
  "pearlnecklace": 1,
  "peck": 1,
  "pecker": 1,
  "peckerwood": 2,
  "pederastic": 1,
  "pederasts": 1,
  "pederasty": 1,
  "pendy": 1,
  "phonesex": 1,
  "piefke": 2,
  "piefkes": 2,
  "piker": 2,
  "pikey": 2,
  "piky": 2,
  "pocha": 2,
  "pochas": 2,
  "pocho": 2,
  "pochos": 2,
  "pohm": 2,
  "pohms": 2,
  "polack": 2,
  "polacks": 2,
  "pollock": 2,
  "pollocks": 2,
  "poontang": 2,
  "popimp": 2,
  "porch monkey": 2,
  "porch monkies": 2,
  "porchmonkey": 2,
  "pornprincess": 2,
  "prairie nigger": 2,
  "prairie niggers": 2,
  "puntang": 2,
  "purinapricness": 2,
  "pussyeater": 2,
  "pussyfucker": 2,
  "pussylicker": 2,
  "pussylips": 2,
  "pussylover": 2,
  "pussypounder": 2,
  "quashie": 2,
  "queef": 2,
  "quickie": 2,
  "quim": 2,
  "rearentry": 2,
  "rectum": 1,
  "redskin": 2,
  "redskins": 2,
  "rentafuck": 2,
  "retard": 2,
  "retarded": 2,
  "rimjob": 2,
  "rimming": 2,
  "sadis": 2,
  "sadom": 2,
  "sambo": 2,
  "sambos": 2,
  "samckdaddy": 2,
  "sand nigger": 2,
  "sand niggers": 2,
  "sandm": 2,
  "sandnigger": 2,
  "satan": 1,
  "scag": 1,
  "scallywag": 2,
  "scrotum": 2,
  "semen": 2,
  "sexhouse": 1,
  "sexkitten": 2,
  "sexslave": 2,
  "sextogo": 2,
  "sexymoma": 2,
  "sexyslim": 2,
  "shawtypimp": 2,
  "sheeney": 2,
  "shinola": 1,
  "shortfuck": 2,
  "shylock": 2,
  "shylocks": 2,
  "skankwhore": 2,
  "skanky": 2,
  "skankybitch": 2,
  "skankywhore": 2,
  "skinflute": 2,
  "slanteye": 2,
  "slanty": 2,
  "slapper": 2,
  "slavedriver": 2,
  "slopehead": 2,
  "slopeheads": 2,
  "slutwhore": 2,
  "smack": 1,
  "smut": 2,
  "snatch": 1,
  "sniggers": 1,
  "snowback": 2,
  "snownigger": 2,
  "sooties": 2,
  "spaghettinigger": 2,
  "spearchucker": 2,
  "spearchuckers": 2,
  "spermhearder": 2,
  "spermherder": 2,
  "spick": 2,
  "spicks": 2,
  "spics": 2,
  "spig": 2,
  "spooge": 2,
  "suckdick": 2,
  "suckmyass": 2,
  "suckmydick": 2,
  "suckmytit": 2,
  "swamp guinea": 2,
  "swamp guineas": 2,
  "tacohead": 2,
  "tacoheads": 2,
  "taff": 2,
  "tang": 2,
  "tantra": 1,
  "tar babies": 2,
  "tar baby": 2,
  "tarbaby": 2,
  "timber nigger": 2,
  "timber niggers": 2,
  "timbernigger": 2,
  "titbitnipply": 2,
  "titfuck": 2,
  "titfucker": 2,
  "titfuckin": 2,
  "titlicker": 2,
  "titlover": 2,
  "tittie": 2,
  "titties": 2,
  "titty": 2,
  "tongethruster": 2,
  "tonguethrust": 2,
  "tonguetramp": 2,
  "towel head": 2,
  "towel heads": 2,
  "towelhead": 2,
  "trannie": 2,
  "tranny": 2,
  "transvestite": 2,
  "trisexual": 1,
  "tuckahoe": 2,
  "ukrop": 2,
  "uncle tom": 2,
  "uptheass": 2,
  "upthebutt": 2,
  "virginbreaker": 2,
  "vomit": 2,
  "vulva": 1,
  "wetback": 2,
  "wetbacks": 2,
  "whigger": 2,
  "whiggers": 2,
  "whitenigger": 2,
  "whore": 2,
  "whorefucker": 2,
  "whorehouse": 2,
  "wigga": 2,
  "wiggas": 2,
  "wigger": 2,
  "wiggers": 2,
  "yid": 2,
  "yids": 2,
  "zigabo": 2,
  "zigabos": 2,
  "cuming": 2,
  "fingering": 2,
  "footjob": 2,
  "foot job": 2,
  "futanari": 2,
  "futanary": 2,
  "hand job": 2,
  "hentai": 2,
  "jerk off": 2,
  "kinbaku": 2,
  "shemale": 2,
  "she male": 2,
  "shibari": 2,
  "shibary": 2,
  "shota": 2,
  "smegma": 2
};

var dict = {
	"a": ["@", "á", "â", "ã", "à", "ᗩ", "A", "ⓐ", "Ⓐ", "α", "͏", "₳", "ä", "Ä", "Ꮧ", "λ", "Δ", "Ḁ", "Ꭺ", "ǟ", "̾", "ａ", "Ａ", "ᴀ", "ɐ", "🅐", "𝐚", "𝐀", "𝘢", "𝘈", "𝙖", "𝘼", "𝒶", "𝓪", "𝓐", "𝕒", "𝔸", "𝔞", "𝔄", "𝖆", "𝕬", "🄰", "🅰", "𝒜", "𝚊", "𝙰", "ꍏ"],
	"b": ["ᗷ", "B", "ⓑ", "Ⓑ", "в", "฿", "ḅ", "Ḅ", "Ᏸ", "ϐ", "Ɓ", "ḃ", "Ḃ", "ɮ", "ｂ", "Ｂ", "ʙ", "🅑", "𝐛", "𝐁", "𝘣", "𝘉", "𝙗", "𝘽", "𝒷", "𝓫", "𝓑", "𝕓", "𝔹", "𝔟", "𝔅", "𝖇", "𝕭", "🄱", "🅱", "𝐵", "Ⴆ", "𝚋", "𝙱", "♭"],
	"c": ["ç", "ᑕ", "C", "ⓒ", "Ⓒ", "¢", "͏", "₵", "ċ", "Ċ", "ፈ", "ς", "ḉ", "Ḉ", "Ꮯ", "ƈ", "̾", "ｃ", "Ｃ", "ᴄ", "ɔ", "🅒", "𝐜", "𝐂", "𝘤", "𝘊", "𝙘", "𝘾", "𝒸", "𝓬", "𝓒", "𝕔", "ℂ", "𝔠", "ℭ", "𝖈", "𝕮", "🄲", "🅲", "𝒞", "𝚌", "𝙲", "☾"],
	"d": ["ᗪ", "D", "ⓓ", "Ⓓ", "∂", "Đ", "ď", "Ď", "Ꮄ", "Ḋ", "Ꭰ", "ɖ", "ｄ", "Ｄ", "ᴅ", "🅓", "𝐝", "𝐃", "𝘥", "𝘋", "𝙙", "𝘿", "𝒹", "𝓭", "𝓓", "𝕕", "​", "𝔡", "𝖉", "𝕯", "🄳", "🅳", "𝒟", "ԃ", "𝚍", "𝙳", "◗"],
	"e": ["3", "é", "ê", "E", "ⓔ", "Ⓔ", "є", "͏", "Ɇ", "ệ", "Ệ", "Ꮛ", "ε", "Σ", "ḕ", "Ḕ", "Ꭼ", "ɛ", "̾", "ｅ", "Ｅ", "ᴇ", "ǝ", "🅔", "𝐞", "𝐄", "𝘦", "𝘌", "𝙚", "𝙀", "ℯ", "𝓮", "𝓔", "𝕖", "𝔻", "𝔢", "𝔇", "𝖊", "𝕰", "🄴", "🅴", "𝑒", "𝐸", "ҽ", "𝚎", "𝙴", "€"],
	"f": ["ᖴ", "F", "ⓕ", "Ⓕ", "₣", "ḟ", "Ḟ", "Ꭶ", "ғ", "ʄ", "ｆ", "Ｆ", "ɟ", "🅕", "𝐟", "𝐅", "𝘧", "𝘍", "𝙛", "𝙁", "𝒻", "𝓯", "𝓕", "𝕗", "𝔼", "𝔣", "𝔈", "𝖋", "𝕱", "🄵", "🅵", "𝐹", "ϝ", "𝚏", "𝙵", "Ϝ"],
	"g": ["G", "ⓖ", "Ⓖ", "͏", "₲", "ġ", "Ġ", "Ꮆ", "ϑ", "Ḡ", "ɢ", "̾", "ｇ", "Ｇ", "ƃ", "🅖", "𝐠", "𝐆", "𝘨", "𝘎", "𝙜", "𝙂", "ℊ", "𝓰", "𝓖", "𝕘", "𝔽", "𝔤", "𝔉", "𝖌", "𝕲", "🄶", "🅶", "𝑔", "𝒢", "ɠ", "𝚐", "𝙶", "❡"],
	"h": ["ᕼ", "H", "ⓗ", "Ⓗ", "н", "Ⱨ", "ḧ", "Ḧ", "Ꮒ", "ɦ", "ｈ", "Ｈ", "ʜ", "ɥ", "🅗", "𝐡", "𝐇", "𝘩", "𝘏", "𝙝", "𝙃", "𝒽", "𝓱", "𝓗", "𝕙", "𝔾", "𝔥", "𝔊", "𝖍", "𝕳", "🄷", "🅷", "𝐻", "ԋ", "𝚑", "𝙷", "♄"],
	"i": ["í", "I", "ⓘ", "Ⓘ", "ι", "͏", "ł", "ï", "Ï", "Ꭵ", "ḭ", "Ḭ", "ɨ", "̾", "ｉ", "Ｉ", "ɪ", "ı", "🅘", "𝐢", "𝐈", "𝘪", "𝘐", "𝙞", "𝙄", "𝒾", "𝓲", "𝓘", "𝕚", "ℍ", "𝔦", "ℌ", "𝖎", "𝕴", "🄸", "🅸", "𝐼", "𝚒", "𝙸", "♗"],
	"j": ["ᒍ", "J", "ⓙ", "Ⓙ", "נ", "Ꮰ", "ϳ", "ʝ", "ｊ", "Ｊ", "ᴊ", "ɾ", "🅙", "𝐣", "𝐉", "𝘫", "𝘑", "𝙟", "𝙅", "𝒿", "𝓳", "𝓙", "𝕛", "​", "𝔧", "𝖏", "𝕵", "🄹", "🅹", "𝒥", "𝚓", "𝙹", "♪"],
	"k": ["K", "ⓚ", "Ⓚ", "к", "͏", "₭", "ḳ", "Ḳ", "Ꮶ", "κ", "Ƙ", "ӄ", "̾", "ｋ", "Ｋ", "ᴋ", "ʞ", "🅚", "𝐤", "𝐊", "𝘬", "𝘒", "𝙠", "𝙆", "𝓀", "𝓴", "𝓚", "𝕜", "𝕀", "𝔨", "ℑ", "𝖐", "𝕶", "🄺", "🅺", "𝒦", "ƙ", "𝚔", "𝙺", "ϰ"],
	"l": ["1", "/", "|", "ᒪ", "L", "ⓛ", "Ⓛ", "ℓ", "Ⱡ", "ŀ", "Ŀ", "Ꮭ", "Ḷ", "Ꮮ", "ʟ", "ｌ", "Ｌ", "🅛", "𝐥", "𝐋", "𝘭", "𝘓", "𝙡", "𝙇", "𝓁", "𝓵", "𝓛", "𝕝", "𝕁", "𝔩", "​", "𝖑", "𝕷", "🄻", "🅻", "𝐿", "ʅ", "𝚕", "𝙻", "↳"],
	"m": ["ᗰ", "M", "ⓜ", "Ⓜ", "м", "͏", "₥", "ṃ", "Ṃ", "Ꮇ", "ϻ", "Μ", "ṁ", "Ṁ", "ʍ", "̾", "ｍ", "Ｍ", "ᴍ", "ɯ", "🅜", "𝐦", "𝐌", "𝘮", "𝘔", "𝙢", "𝙈", "𝓂", "𝓶", "𝓜", "𝕞", "𝕂", "𝔪", "𝔍", "𝖒", "𝕸", "🄼", "🅼", "𝑀", "ɱ", "𝚖", "𝙼", "♔"],
	"n": ["ñ", "ᑎ", "N", "ⓝ", "Ⓝ", "и", "₦", "ń", "Ń", "Ꮑ", "π", "∏", "Ṇ", "ռ", "ｎ", "Ｎ", "ɴ", "🅝", "𝐧", "𝐍", "𝘯", "𝘕", "𝙣", "𝙉", "𝓃", "𝓷", "𝓝", "𝕟", "𝕃", "𝔫", "𝔎", "𝖓", "𝕹", "🄽", "🅽", "𝒩", "ɳ", "𝚗", "𝙽", "♫"],
	"o": ["0", "ó", "ô", "õ", "ú", "O", "ⓞ", "Ⓞ", "σ", "͏", "Ø", "ö", "Ö", "Ꭷ", "Θ", "ṏ", "Ṏ", "Ꮎ", "օ", "̾", "ｏ", "Ｏ", "ᴏ", "🅞", "𝐨", "𝐎", "𝘰", "𝘖", "𝙤", "𝙊", "ℴ", "𝓸", "𝓞", "𝕠", "𝕄", "𝔬", "𝔏", "𝖔", "𝕺", "🄾", "🅾", "𝑜", "𝒪", "𝚘", "𝙾", "⊙"],
	"p": ["ᑭ", "P", "ⓟ", "Ⓟ", "ρ", "₱", "ṗ", "Ṗ", "Ꭾ", "Ƥ", "Ꮲ", "ք", "ｐ", "Ｐ", "ᴘ", "🅟", "𝐩", "𝐏", "𝘱", "𝘗", "𝙥", "𝙋", "𝓅", "𝓹", "𝓟", "𝕡", "ℕ", "𝔭", "𝔐", "𝖕", "𝕻", "🄿", "🅿", "𝒫", "𝚙", "𝙿"],
	"q": ["ᑫ", "Q", "ⓠ", "Ⓠ", "͏", "Ꭴ", "φ", "Ⴓ", "զ", "̾", "ｑ", "Ｑ", "ϙ", "ǫ", "🅠", "𝐪", "𝐐", "𝘲", "𝘘", "𝙦", "𝙌", "𝓆", "𝓺", "𝓠", "𝕢", "​", "𝔮", "𝔑", "𝖖", "𝕼", "🅀", "🆀", "𝒬", "𝚚", "𝚀", "☭"],
	"r": ["ᖇ", "R", "ⓡ", "Ⓡ", "я", "Ɽ", "ŕ", "Ŕ", "Ꮢ", "г", "Γ", "ṙ", "Ṙ", "ʀ", "ｒ", "Ｒ", "ɹ", "🅡", "𝐫", "𝐑", "𝘳", "𝘙", "𝙧", "𝙍", "𝓇", "𝓻", "𝓡", "𝕣", "𝕆", "𝔯", "𝔒", "𝖗", "𝕽", "🅁", "🆁", "𝑅", "ɾ", "𝚛", "𝚁", "☈"],
	"s": ["5", "ᔕ", "S", "ⓢ", "Ⓢ", "ѕ", "͏", "₴", "ṩ", "Ṩ", "Ꮥ", "Ѕ", "Ṡ", "ֆ", "̾", "ｓ", "Ｓ", "ꜱ", "🅢", "𝐬", "𝐒", "𝘴", "𝘚", "𝙨", "𝙎", "𝓈", "𝓼", "𝓢", "𝕤", "ℙ", "𝔰", "𝔓", "𝖘", "𝕾", "🅂", "🆂", "𝒮", "ʂ", "𝚜", "𝚂"],
	"t": ["+", "T", "ⓣ", "Ⓣ", "т", "₮", "ẗ", "Ṯ", "Ꮦ", "τ", "Ƭ", "Ꮖ", "ȶ", "ｔ", "Ｔ", "ᴛ", "ʇ", "🅣", "𝐭", "𝐓", "𝘵", "𝘛", "𝙩", "𝙏", "𝓉", "𝓽", "𝓣", "𝕥", "​", "𝔱", "𝔔", "𝖙", "𝕿", "🅃", "🆃", "𝒯", "ƚ", "𝚝", "𝚃", "☂"],
	"u": ["ú", "ü", "ᑌ", "U", "ⓤ", "Ⓤ", "υ", "͏", "Ʉ", "Ü", "Ꮼ", "Ʊ", "ṳ", "Ṳ", "ʊ", "̾", "ｕ", "Ｕ", "ᴜ", "🅤", "𝐮", "𝐔", "𝘶", "𝘜", "𝙪", "𝙐", "𝓊", "𝓾", "𝓤", "𝕦", "ℚ", "𝔲", "ℜ", "𝖚", "𝖀", "🅄", "🆄", "𝒰", "𝚞", "𝚄", "☋"],
	"v": ["ᐯ", "V", "ⓥ", "Ⓥ", "ν", "ṿ", "Ṿ", "Ꮙ", "Ʋ", "Ṽ", "ʋ", "ｖ", "Ｖ", "ᴠ", "ʌ", "🅥", "𝐯", "𝐕", "𝘷", "𝘝", "𝙫", "𝙑", "𝓋", "𝓿", "𝓥", "𝕧", "​", "𝔳", "𝖛", "𝖁", "🅅", "🆅", "𝒱", "𝚟", "𝚅", "✓"],
	"w": ["ᗯ", "W", "ⓦ", "Ⓦ", "ω", "͏", "₩", "ẅ", "Ẅ", "Ꮗ", "ш", "Ш", "ẇ", "Ẇ", "Ꮃ", "ա", "̾", "ｗ", "Ｗ", "ᴡ", "ʍ", "🅦", "𝐰", "𝐖", "𝘸", "𝘞", "𝙬", "𝙒", "𝓌", "𝔀", "𝓦", "𝕨", "ℝ", "𝔴", "𝔖", "𝖜", "𝖂", "🅆", "🆆", "𝒲", "ɯ", "𝚠", "𝚆"],
	"x": ["᙭", "X", "ⓧ", "Ⓧ", "χ", "Ӿ", "ẍ", "Ẍ", "ጀ", "ϰ", "Ж", "х", "Ӽ", "ｘ", "Ｘ", "🅧", "𝐱", "𝐗", "𝘹", "𝘟", "𝙭", "𝙓", "𝓍", "𝔁", "𝓧", "𝕩", "​", "𝔵", "𝔗", "𝖝", "𝖃", "🅇", "🆇", "𝒳", "𝚡", "𝚇", "⌘"],
	"y": ["Y", "ⓨ", "Ⓨ", "у", "͏", "Ɏ", "ÿ", "Ÿ", "Ꭹ", "ψ", "Ψ", "ẏ", "Ẏ", "Ꮍ", "ч", "ʏ", "̾", "ｙ", "Ｙ", "ʎ", "🅨", "𝐲", "𝐘", "𝘺", "𝘠", "𝙮", "𝙔", "𝓎", "𝔂", "𝓨", "𝕪", "𝕊", "𝔶", "𝔘", "𝖞", "𝖄", "🅈", "🆈", "𝒴", "ყ", "𝚢", "𝚈", "☿"],
	"z": ["ᘔ", "Z", "ⓩ", "Ⓩ", "Ⱬ", "ẓ", "Ẓ", "ፚ", "Ꮓ", "ʐ", "ｚ", "Ｚ", "ᴢ", "🅩", "𝐳", "𝐙", "𝘻", "𝘡", "𝙯", "𝙕", "𝓏", "𝔃", "𝓩", "𝕫", "𝕋", "𝔷", "𝔙", "𝖟", "𝖅", "🅉", "🆉", "𝒵", "ȥ", "𝚣", "𝚉", "☡"]
}

var vowels = [
	"a", "e", "i", "o", "u", "y" // - Y only sometimes
]
var combinedHSounds = [
	"c", "t", "s", "w"
]
var distinctCombinedVowels = {
	a: ["o", "e"],
	i: ["a", "e", "o", "u"],
	e: ["i", "e"],
	o: ["e", "o"],
	u: ["a", "o"]
}

function isCombinedH(prev, prev2) {
	return prev != prev2 && combinedHSounds.indexOf(prev) != -1;
}

var convertMap = new Map();
for (var to in dict) {
	dict[to].forEach((item) => {
		convertMap.set(item, to)
	})
}

var swapTable = {
	o: ["u"],
	u: ["o"],
	i: ["e"]
}

function canSwapVowel(from, to) {
	if (!swapTable[from]) return false;
	return swapTable[from].indexOf(to) != -1;
}

function vowelDistinct(last, first) {
	if (!distinctCombinedVowels[last]) return false;
	return distinctCombinedVowels[last].indexOf(first) != -1;
}

function isVowel(char) {
	return vowels.indexOf(char) != -1;
}

function isHard(char) {
	return hardSounds.indexOf(char) != -1
}

function isModifying(char) {
	return modifyingSounds.indexOf(char) != -1
}

function countSyllables(word) {
	word = word.toLowerCase(); //word.downcase!
	if (word.length <= 3) {
		return 1;
	} //return 1 if word.length <= 3
	word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, ''); //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
	word = word.replace(/^y/, ''); //word.sub!(/^y/, '')
	var match = word.match(/[aeiouy]{1,2}/g);
	return match ? match.length : 0;
}

function canSkip(text, word, wi, i) {

	if (word[wi] == "t" &&
		word[wi + 1] == "c" &&
		word[wi + 2] == "h" &&

		text[i] == "c" &&
		text[i + 1] == "h") { // tch can become ch
		return 2;
	}

	if (
		(
			(
				word[wi] == "c" && // Looking for c
				word[wi + 1] == "k"
			) ||
			(
				word[wi] == "k"
			) ||
			(
				word[wi] == "q"
			) ||
			(
				isVowel(word[wi - 1]) &&
				word[wi] == "c" &&
				word[wi + 1] != "e"
			)
		) &&
		(
			text[i] == "k" || // ck can become k
			text[i] == "q" || // ck can becoe q
			(
				isVowel(text[i - 1]) &&
				text[i] == "c" && // ck can become c
				text[i + 1] != "e" // c makes a k sound unless if there is an e
			)
		)
	) {
		return (word[wi] == "c" && // Looking for c
			word[wi + 1] == "k" && text[i + 1] != "k") ? 2 : 1;
	}

	if (word[wi] == text[i]) return 1; // If the same charactor, return true;

	// Silent h can be skipped
	if (word[wi] == "h" && !isCombinedH(word[wi - 1], word[wi - 2])) {
		return ((wi + 1 >= word.length && !isHard(text[i])) || canSkip(text, word, wi + 1, i)) ? 2 : 0;
	}

	if (isVowel(word[wi]) && !vowelDistinct(word[wi], word[wi - 1]) && !vowelDistinct(word[wi + 1], word[wi])) { // Vowels can be replaced/ommited only if they arnt combined like oo

		if (isVowel(text[i])) {
			return canSwapVowel(word[wi], text[i]) ? 1 : 0; // If vowel is swappable with another, like e->i
		} else {
			return (isHard(text[i]) && isHard(word[wi + 1]) && isHard(word[wi - 1]) && word[wi + 1] != word[wi - 1] && word[wi] != "a" && wi + 1 < word.length && canSkip(text, word, wi + 1, i)) ? 2 : 0; // Vowel can be ommited sometimes
		}
	}
	return 0;
}

export class NoSwearing {
	constructor() {
		this.list = [];
		this.trigger = {};
		this.addSwears(swearglobal)
	}
	convert(str) {
		return Array.from(str).map((char) => {
			return convertMap.has(char) ? convertMap.get(char) : char;
		}).join('').toLowerCase();
	}
	escape(text) {
		var keys = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";

		var k = keys.split(",")
		var exceptions = { // Exceptions to duplicate removal. Like, fuuuuck turns into fuck, but nigger doesnt get turned to niger
			r: true,
			b: true,
			d: true,
			e: true,
			g: true,
			l: true,
			s: true,
			p: true,
			s: true,
			o: true,
			t: true
		}


		text = text.split("")

		text = text.map((char) => {
			return k.indexOf(char) != -1 ? char : " ";
		})

		var posmap = [];
		return [text.filter((char, i) => {
			if ((text[i - 1] != char || (exceptions[char] && text[i - 2] != char))) {

				posmap.push(i);
				return true;
			} else {
				posmap[posmap.length - 1] = i;
				return false;
			}
		}).join(""), posmap];
	}
	addSwears(swearList) {
		for (var swear in swearList) {
			this.list.push({
				word: this.escape(this.convert(swear))[0],
				wordOriginal: swear,
				info: swearList[swear]
			});
		}
		this.list.sort((a, b) => {
			return b.word.length - a.word.length;
		});
		this.trigger = {};

		for (var i = 0; i < this.list.length; i++) {
			var char = this.list[i].word.charAt(0);
			if (!this.trigger[char]) this.trigger[char] = [];
			this.trigger[char].push(i);
		}

	}
	check(input) {

		var watch = null; // Possible swear
		//   var wi = 0; // length of detection i guess?
		var wi = 0; // Watching index;
		var chance = 3; // Max deviations in letter position of swear (eg: fucABCk will be caught, but not fucABCDk)
		var nonchance = 3 // Dont know. something about max deviations (eg: nAiBgCger will get caught, but not nAiBgCgDer)
		var co = 0; // Deviations from swear???
		var index = 0; // Where the swear was detected???
		var fo = 0; // more deviation shit
		var ind = 0;

		var inputArr = Array.from(input)
		var t = this.escape(this.convert(input));
		var text = t[0];
		var posmap = t[1];
		var deviations = 0;

		var detected = [];

		for (var i = 0; i < text.length; i++) {
			if (watch) {
				var word = watch.word;
				var skipMode = canSkip(text, word, wi, i);
				//console.log(i, wi, ind, word, text[i], word[wi], skipMode)
				if (
					skipMode
				) {
					if (word[wi] != text[i]) deviations++;
					if (wi + 1 < word.length && word[wi] == word[wi + 1] && text[i + 1] != word[wi] && !isHard(word[wi]) && (!isVowel(word[i]) || !vowelDistinct(word[i], word[i]))) { // double letters can be skipped
						if (wi + 2 >= word.length || canSkip(text, word, wi + 2, i + 1)) {
							wi++;
							deviations++;
						}
					}
					wi++;
					co = 0;
					if (wi >= word.length) {

						if (
							(!isModifying(text[i]) || !isHard(text[i + 1])) && // help vs erboy
							(!isVowel(text[i + 1])) && // Next char must not be vowel - hello 
							(!isVowel(text[i]) || (!isHard(text[i + 1]) && !isModifying(text[i + 1]))) && // tested is not teste. Configs != cu
							(!isVowel(text[i]) || !isVowel(text[i + 1]) || !vowelDistinct(text[i + 1], text[i])) &&
							countSyllables(text.substring(index, i + 1)) <= countSyllables(word) && // Syllables must not be less than text
							(!isHard(text[i]) || postModifyingSounds.indexOf(text[i + 1]) == -1) &&
							(combinedHSounds.indexOf(text[i]) == -1 || text[i + 1] != "h")
						) {
							detected.push({
								original: inputArr.slice(posmap[index], posmap[i] + 1).join(""),
								word: watch.wordOriginal,
								deviations: deviations,
								info: watch.info,
								start: posmap[index],
								end: posmap[i] + 1
							});
						}
						watch = null;
						i = index - 1;
					} else
					if (skipMode == 2) {
						i--;
					}
				} else
				if (co >= chance || // Stop when deviations are too big
					(
						text[i] !== " " && // Not if it is a space
						(
							// If the deviations are due to modifiers (r and l), then stop, ie fork wont be read as fuck because the r modifier will change the sound of the word
							isModifying(text[i]) || isModifying(word[wi]) ||

							// Stop if unswappable vowels
							(isVowel(word[wi]) && isVowel(text[i]) && !canSwapVowel(word[wi], text[i])) ||

							// Stop if any combining vowel is missing. Because pound does not sound like pond
							(isVowel(word[wi]) && vowelDistinct(word[wi], word.charAt(wi - 1))) ||

							// Stop if a hard sound
							isHard(text[i]) || isHard(word[wi]) ||

							// Stop if missing an essential h (sh,th,etc...)
							(word[wi] == "h" && isCombinedH(word[wi - 1], word[wi - 2])) ||
							// Stop if there is an extra essential h
							(text[i] == "h" && isCombinedH(text[i - 1], text[i - 2]))
						)
					)
				) {

					watch = null;
					i = index - 1;
				} else {
					co++;
					deviations++;
					// if (co == 1) fo++;
				}
				if (i + 1 >= text.length) {
					watch = null;
					i = index - 1;
				}
			} else if (
				// Start of string
				i == 0 ||

				// Start of word (space)
				text[i - 1] == " " ||

				(
					// Not a special h sound
					(text[i] != "h" || !isCombinedH(text[i - 1], text[i - 2])) &&

					// Not a vowel
					(!isVowel(text[i - 1]) || (isVowel(text[i]) && !vowelDistinct(text[i], text[i - 1]))) &&

					// Not a modifier
					preModifiers.indexOf(text[i - 1]) == -1 &&

					isHard(text[i]) && !isModifying(text[i - 1])

				)) { // 
				if (this.trigger[text[i]]) {
					if (ind < this.trigger[text[i]].length) {
						index = i;
						watch = this.list[this.trigger[text[i]][ind++]];
						deviations = 0;
						wi = 1;
						co = 0;
						if (watch.word.length == 1 && (watch.word == "i" || watch.word == "a")) {
							detected.push({
								original: text[i],
								word: watch.wordOriginal,
								deviations: 0,
								info: watch.info,
								start: posmap[index],
								end: posmap[i] + 1
							});
							watch = null
							i--;
						}

					} else {
						ind = 0;
					}
				}
			}
		}
		var group = [];
		var groups = [];

		detected.forEach((item, i) => {
			if (i != 0 && item.start == detected[i - 1].start) {

			} else {
				if (group.length) groups.push(group);
				group = [];
			}
			item.replacedLen = item.original.replace(/ /g, "").length;
			group.push(item);
		})
		if (group.length) groups.push(group);

		// detected = [];
		groups.forEach((group, ind) => {
			group.sort((a, b) => {
				var diff = b.original.length - a.original.length;

				if (diff == 0) diff = a.deviations - b.deviations;
				return diff;
			});

			groups[ind] = group.filter((a, i) => {
				return i == 0 || group[i - 1].original.length !== group[i].original.length;
			});

			if (ind < groups.length - 1 && groups[ind][0].end >= groups[ind + 1][0].start)
				groups[ind].push({
					original: "",
					word: "",
					deviations: 0,
					start: groups[ind][0].start,
					end: groups[ind][0].start
				});

		});
		//return detected;
		var conflictGroups = [];
		var group = [];
		var end = 0;
		for (var i = 0; i < groups.length; i++) {
			var g = groups[i];
			if (g[0].start >= end) {
				if (group.length) conflictGroups.push(group);
				group = [];
			}
			group.push(g);
			end = Math.max(end, g[0].end);
		}
		if (group.length) conflictGroups.push(group);
		//return JSON.stringify(conflictGroups, null, 4);


		var out = [];
		var valueCache = [];

		function recurse(i, groups) {

			if (!groups[i]) return;


			var g = groups[i];
			var sum = 0;
			var out = [];
			for (var j = 0; j < g.length; j++) {
				var word = g[j];
				var result;
				var k = i + 1;
				while (k < groups.length && groups[k][0].start < word.end) k++;
				if (k < groups.length) {
					if (valueCache[k] !== undefined) {
						result = valueCache[k];
					} else {
						result = valueCache[k] = recurse(k, groups);
					}
				}


				var d = word.deviations;
				var l = word.replacedLen

				if (result) {
					d += result[0].deviations;
					l += result[0].length;
				}
				var last = out[out.length - 1];
				if (!last || (l > last.length))
					out.push({
						deviations: d,
						length: l,
						word: word,
						result: result
					})
			}
			out.reverse();
			return out;
		}


		function recurse3(i, len, groups) {

			if (!groups[i] || len < 0) return;


			var g = groups[i];
			var out = [];
			for (var j = 0; j < g.length; j++) {
				var word = g[j];
				var result;
				var k = i + 1;
				while (k < groups.length && groups[k][0].start < word.end) k++;

				var words = 1;
				var d = word.deviations;
				var l = word.replacedLen;
				if (k < groups.length) {
					if (valueCache[k][len - l] !== undefined) {
						result = valueCache[k][len - l];
					} else {
						result = valueCache[k][len - l] = recurse3(k, len - l, groups);
					}
				}

				if (result && result[0]) {
					d += result[0].deviations;
					l += result[0].length;
					words += result[0].words;
				}
				var last = out[out.length - 1];
				if (len - l == 0 && (!last || (words + d < last.words + last.deviations)))
					out.push({
						deviations: d,
						length: l,
						words: words,
						word: word,
						result: result
					})
			}
			out.reverse();
			return out;
		}

		// console.log(reqlen)

		function recurse2(dt) {
			if (dt && dt[0] && dt[0].word) {
				out.push(dt[0].word);
				recurse2(dt[0].result)
			}
		}


		conflictGroups.forEach((groups) => {
			//  require("fs").writeFileSync("out.json", JSON.stringify(res))
			valueCache = [];
			var res = recurse(0, groups);

			if (!res) return;
			valueCache = [];
			for (var i = 0; i < groups.length; i++) {
				valueCache.push([])
			}

			res = recurse3(0, res[0].length, groups);
			if (!res) return;
			recurse2(res);
		});
		return out;
	}
}
