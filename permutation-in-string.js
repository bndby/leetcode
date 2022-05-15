/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length === 1) return s2.includes(s1);

  let s1Hash = {};
  s1.split("").forEach((s) => (s1Hash[s] = (s1Hash[s] ?? 0) + 1));

  let s2Hash = {};
  s2.split("").forEach((s) => (s2Hash[s] = (s2Hash[s] ?? 0) + 1));

  const hasChars = Object.entries(s1Hash).every(([key, val]) => {
    return s2Hash[key] >= val;
  });
  if (!hasChars) return false;

  let k = 0;
  while (k <= s2.length - s1.length) {
    let s1HashCopy = { ...s1Hash };
    len = 0;
    for (let i = k; i < s2.length; i++) {
      if (s1HashCopy[s2[i]]) {
        len++;
        s1HashCopy[s2[i]]--;
      } else {
        len = 0;
        break;
      }

      if (len === s1.length) return true;
    }
    k++;
  }

  return false;
};

console.log("ab, eidbaooo = true", checkInclusion("ab", "eidbaooo"));
console.log("ab, eidboaoo = false", checkInclusion("ab", "eidboaoo"));
console.log("adc, dcda = true", checkInclusion("adc", "dcda"));
console.log(
  "hello, ooolleoooleh = false",
  checkInclusion("hello", "ooolleoooleh")
);
console.log(
  "1, 2 = true",
  checkInclusion(
    "smgaurifjyrcxfntldkwuwmvc",
    "darfobxmowhkjnvqovmhgstamkqcrjuczioprrgfmyvfstvjujlhafxnmooumbaqevgdqgrdociagvxyogucmdzjesboibnchsjzvdgszatfshyhywidkxjpszexjwhnzrfnfnxyjdqvrppjkvzjddamqeywbbyhrmryykzgzmqzlhhhbarqgndgjyvufwdqmhrzasqvqepqhhlfkrjehhrwievwmuvrmlsgoeowlczixzlmmgmkuvizwpxebmylktguxcboknggttnyonstcrwufhvqluixfslwzzwqwjmxfaqplamhgpxujwfvbstqcypsudknixifgatxsokanmvifsrboifosreqsmpaqgadtlkfqhbttjashlbpgexomnuhowvatofwlbdjcvsghbutgctoizsiqytmlzcanxfgexgbawnfutnuhaxhoelpzxpjbjsplluvmukmerkvtwrmmpnprbaxrauttvldbtzzvvntdmqapizsbqinarehtdqutiulozmkbqiwgpvlixemxebyvrqjrpelcfgettlycihmfrmlcufemdqckkyjtnghakjkswdruswzqmomlerpqdjullxgpatlxmjzqxfhrzqswrpjqpzdkafrpndgrvbjuzapjiqwensbamiujflqdylyoexlqsxyovfnxkkgcuwicxelclsheeafkzfwebkmvfxdhntkxuntkbvjvcfotsjneyxwdunpabxuiwdbxypcubgpozllwzaifalgqqnohxnvajpghjtunkstvscfhcxzimbiwvjdmxycoymtxrwepzbjkktnllfbqtbruemhdrvwtmjargsstwyqojgfrgxfjsnttsruyttzeydnrccnamorbjeuqesaqacgczbaxsjrlhlvrbgmspnjiejysjaxinxqszmyxqdzykkqhkbmvjvxxrzwyeqxjavkmqgeafozrcyzssalhfcnsxzetkewgvsaftdekxhquillnmsntqgirwordqfcrisvkkudzfqvlyvphnzyzhfvwakwtzqogjxelcemwznuyeyteiladbkmwkkewppvfloxommvdgqrbuwqvegoypvxlofjarsfnijcujqjzvzlyijcszvdnrejxqbexhsjurkxqsibfkpxbtupaytstpdedfnsfzztwpguridsexmdfeafcbfrptlykfbcgwpkwcnjxcbbdljmqjpoudlbgeubvryuknazstrdsvkrlchxsbwltgbntvmcnsjeblqkadogzvvvlmuvgoprykogfjddwpfclptioenywllthvleevojwsdmkyhhzalkmklmkqtxbsukjkpdrvjqdpzijmwwqbqbgslacvfywrrcxmnutkdwmiujfqsfzjmexjrzifrmbvbocwbwjilqwlxaflrnfybbwunikltcyfpokknjzbclrxyjnwyzjgznubxhvxtmntilohuntbysgtuxfkgizhnzoefruaqymjvqiidrmdccueivvoafnhiufhqsvixtnirmvrhgslshfnpohefxdptvoaqdpnvmoqenyqgydrsksvhepziemjahzlniuvbjunjojwgsqhlgohkzuuwfsplsjieiipwubkgsczsvasisxvbjxkcihlhcbuvxfkopxiosymafuhrvdsvefoqtqfudovdryzqeejqbsqltgelyhcydyhljoubzhntzvaicyksiqcihowaokkofvtdbaklzqnsgagxjafiigobditfczziurnhetcbioyeanhqiptbykhksivsgojyolkuhhxpcqbyaqlffwmqtsuecpmatecdhhyhcjdieiepnsvzbcubaagfsolqrsfiqvpszkhryooyorehwnqgwhoskgimmsrfvaomqidztoknrrrkidqbnqpmhoisogqueqhtmnlcpyrbyjfchkujpmahrplofpihhlkypuomrqwzqexzgujybvkrticgjyfrxdcfqgnwqlrjeyoeiecmxupqfwtglgbybbyezseguzemnriszanzzbwoihuhvbcxigaapqghusjyngmlruwghhlddjmfiiagimukqyrtljqdxzmruevpadrdzlacexhxhhbbbccjdjafknvwoifedrceroeydiszrisowzjhhczlymywwvfjnzmlbmxzxkmjsamukdswrkyqvpvvlyjlskiltentaoypqjykxedvtnrypiykhulnghhbbeyxpurwtmtjrchntmxhulzqfespeqjwqqfdsrdklzdyundicmhgzadbvhjrdclbszblbziteomgsxpaetnjvkzpdphnydmwdhgugwuqluajmiitnvedqacgtusbpartltcbuznkwqcgpnladhnoyjgbsgfvwepduenralxyshvreuikdenubibxnslqejlinpuepzmeozmcqquiczfcuhwjjgudrnrhdtkpcbpziswdbbgkilyabblrrjzbileadosekwrevvmfbxdxnvsrouulpquufo"
  )
);
