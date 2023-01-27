let stress = ""
for (let i=0;i<10;i++) {
  stress += "vV"[+(Math.random()>0.5)]
}
let words = ["a","kin","akesi","ala","alasa","ale","ali","anpa","ante","anu","awen","e","en","esun","ijo","ike","ilo","insa","jaki","jan","jelo","jo","kala","kalama","kama","kasi","ken","kepeken","kili","kiwen","ko","kon","kule","kulupu","kute","la","lape","laso","lawa","len","lete","li","lili","linja","lipu","loje","lon","luka","lukin","oko","lupa","ma","mama","mani","meli","mi","mije","moku","moli","monsi","mu","mun","musi","mute","nanpa","nasa","nasin","nena","ni","nimi","noka","o","olin","ona","open","pakala","pali","palisa","pan","pana","pi","pilin","pimeja","pini","pipi","poka","poki","pona","pu","sama","seli","selo","seme","sewi","sijelo","sike","sin","namako","sina","sinpin","sitelen","sona","soweli","suli","suno","supa","lanpan","tonsi","soko","leko","meso","misikeke","epiku","jasima","kipisi"]
let w1 = words.filter(x => /^.?[aeiou].?$/.test(x))
let w2 = words.filter(x => /^(.?[aeiou].?){2}$/.test(x))
let w3 = words.filter(x => /^(.?[aeiou].?){3}$/.test(x))
let w4 = ["misikeke"]
function rand(list) {
  return list[Math.floor(Math.random()*list.length))]
}

