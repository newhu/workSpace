/*
 * @Author: huz
 * @Date: 2021-03-09 10:55:11
 * @LastEditors: huz
 * @LastEditTime: 2021-05-27 09:33:11
 */


export const getFanceData = () => {
  fanceData.body.map(item => {
    item.coordinateArrays = []
    item.coordinates.map(co => {
      item.coordinateArrays.push([Number(co.longitude), Number(co.latitude)])
    })
  })
  return fanceData
}

const fanceData = {
  "headers": {

  },
  "body": [{
      "coordinates": [{
          "latitude": "24.552177",
          "longitude": "113.712607"
        },
        {
          "latitude": "24.552839",
          "longitude": "113.712127"
        },
        {
          "latitude": "24.5532",
          "longitude": "113.711976"
        },
        {
          "latitude": "24.553909",
          "longitude": "113.712218"
        },
        {
          "latitude": "24.553845",
          "longitude": "113.712688"
        },
        {
          "latitude": "24.55265",
          "longitude": "113.713694"
        },
        {
          "latitude": "24.551935",
          "longitude": "113.714409"
        },
        {
          "latitude": "24.551492",
          "longitude": "113.71497"
        },
        {
          "latitude": "24.551161",
          "longitude": "113.714924"
        },
        {
          "latitude": "24.550773",
          "longitude": "113.714388"
        },
        {
          "latitude": "24.550932",
          "longitude": "113.71392"
        },
        {
          "latitude": "24.551663",
          "longitude": "113.713177"
        },
        {
          "latitude": "24.552177",
          "longitude": "113.712607"
        }
      ],
      "fenceColor": "red",
      "fenceName": "dms681平台",
      "id": "0ab0c980-99a4-4090-857b-60d62881557c"
    },
    {
      "coordinates": [{
          "latitude": "24.560015",
          "longitude": "113.721046"
        },
        {
          "latitude": "24.559713",
          "longitude": "113.720664"
        },
        {
          "latitude": "24.559941",
          "longitude": "113.720165"
        },
        {
          "latitude": "24.560301",
          "longitude": "113.71985"
        },
        {
          "latitude": "24.560816",
          "longitude": "113.720143"
        },
        {
          "latitude": "24.560266",
          "longitude": "113.72086"
        },
        {
          "latitude": "24.560015",
          "longitude": "113.721046"
        }
      ],
      "fenceColor": "#FF0000",
      "fenceName": "685铁门公用堆场",
      "id": "0cea3e99-2b35-40e6-bfc1-5ca240271649"
    },
    {
      "coordinates": [{
          "latitude": "24.558064",
          "longitude": "113.721462"
        },
        {
          "latitude": "24.557767",
          "longitude": "113.72186"
        },
        {
          "latitude": "24.557347",
          "longitude": "113.721744"
        },
        {
          "latitude": "24.556944",
          "longitude": "113.722104"
        },
        {
          "latitude": "24.556569",
          "longitude": "113.721824"
        },
        {
          "latitude": "24.556941",
          "longitude": "113.721317"
        },
        {
          "latitude": "24.557589",
          "longitude": "113.721218"
        },
        {
          "latitude": "24.557767",
          "longitude": "113.721208"
        },
        {
          "latitude": "24.558064",
          "longitude": "113.721462"
        }
      ],
      "fenceColor": "red",
      "fenceName": "dms北采",
      "id": "1fa79d38-e40d-4416-be8f-bd055b559eb3"
    },
    {
      "coordinates": [{
          "latitude": "24.56046185208169",
          "longitude": "113.7217256400918"
        },
        {
          "latitude": "24.560117245667357",
          "longitude": "113.72127500093464"
        },
        {
          "latitude": "24.559676457553966",
          "longitude": "113.72167450704526"
        },
        {
          "latitude": "24.559172749649782",
          "longitude": "113.72194132927048"
        },
        {
          "latitude": "24.558582115711477",
          "longitude": "113.72199054876533"
        },
        {
          "latitude": "24.55843992605965",
          "longitude": "113.72208898775504"
        },
        {
          "latitude": "24.558506323329976",
          "longitude": "113.72220306196586"
        },
        {
          "latitude": "24.558951165616914",
          "longitude": "113.72218852230078"
        },
        {
          "latitude": "24.55924648258606",
          "longitude": "113.72241274444401"
        },
        {
          "latitude": "24.55940507873618",
          "longitude": "113.72267871914194"
        },
        {
          "latitude": "24.55979149902905",
          "longitude": "113.72234525161768"
        },
        {
          "latitude": "24.560103222496497",
          "longitude": "113.72203899698302"
        },
        {
          "latitude": "24.56046185208169",
          "longitude": "113.7217256400918"
        }
      ],
      "fenceColor": "#FF0000",
      "fenceName": "宝佳石料堆场",
      "id": "260fbcec-2e48-4c2b-8b90-1712ffe486a0"
    },
    {
      "coordinates": [{
          "latitude": "24.566474245773914",
          "longitude": "113.7184680502613"
        },
        {
          "latitude": "24.56647424577392",
          "longitude": "113.71864337196199"
        },
        {
          "latitude": "24.566564275836434",
          "longitude": "113.71877604784363"
        },
        {
          "latitude": "24.56656901426078",
          "longitude": "113.71893241584695"
        },
        {
          "latitude": "24.566659044323288",
          "longitude": "113.71908404542594"
        },
        {
          "latitude": "24.566782243356226",
          "longitude": "113.71915986021544"
        },
        {
          "latitude": "24.566948088208235",
          "longitude": "113.7192877976727"
        },
        {
          "latitude": "24.567076025665514",
          "longitude": "113.71935887403784"
        },
        {
          "latitude": "24.567208701547102",
          "longitude": "113.7193778277352"
        },
        {
          "latitude": "24.567388761672163",
          "longitude": "113.71933044349178"
        },
        {
          "latitude": "24.567568821797217",
          "longitude": "113.71929727452137"
        },
        {
          "latitude": "24.56772792565922",
          "longitude": "113.71922555685184"
        },
        {
          "latitude": "24.56781122006009",
          "longitude": "113.71900542164957"
        },
        {
          "latitude": "24.567794999999997",
          "longitude": "113.718837"
        },
        {
          "latitude": "24.56766359028406",
          "longitude": "113.71859598771857"
        },
        {
          "latitude": "24.56744562276429",
          "longitude": "113.71850121923171"
        },
        {
          "latitude": "24.56707128724117",
          "longitude": "113.7185201729291"
        },
        {
          "latitude": "24.566673259596328",
          "longitude": "113.71848226553432"
        },
        {
          "latitude": "24.566474245773914",
          "longitude": "113.7184680502613"
        }
      ],
      "fenceColor": "red",
      "fenceName": "dms山边池石头",
      "id": "28eea914-7f1c-4ac3-bbbd-5bbaff9e54d8"
    },
    {
      "coordinates": [{
          "latitude": "24.545567006493076",
          "longitude": "113.70959187256551"
        },
        {
          "latitude": "24.545774",
          "longitude": "113.70943700000001"
        },
        {
          "latitude": "24.546064808412705",
          "longitude": "113.70927580785461"
        },
        {
          "latitude": "24.546839166954378",
          "longitude": "113.70888072696602"
        },
        {
          "latitude": "24.547049691102888",
          "longitude": "113.7091680047371"
        },
        {
          "latitude": "24.547326247724925",
          "longitude": "113.70964210180344"
        },
        {
          "latitude": "24.547712618357682",
          "longitude": "113.71014861397893"
        },
        {
          "latitude": "24.548186715424006",
          "longitude": "113.71090716928505"
        },
        {
          "latitude": "24.547334",
          "longitude": "113.71150900000002"
        },
        {
          "latitude": "24.547081",
          "longitude": "113.71164600000002"
        },
        {
          "latitude": "24.546706",
          "longitude": "113.71180300000002"
        },
        {
          "latitude": "24.546168000000005",
          "longitude": "113.71206200000002"
        },
        {
          "latitude": "24.545712",
          "longitude": "113.71228700000002"
        },
        {
          "latitude": "24.545255999999995",
          "longitude": "113.712559"
        },
        {
          "latitude": "24.544813999999995",
          "longitude": "113.71277700000002"
        },
        {
          "latitude": "24.544575000000005",
          "longitude": "113.71283200000002"
        },
        {
          "latitude": "24.544157999999996",
          "longitude": "113.712711"
        },
        {
          "latitude": "24.543857000000003",
          "longitude": "113.71235600000001"
        },
        {
          "latitude": "24.543483",
          "longitude": "113.71126300000002"
        },
        {
          "latitude": "24.543442",
          "longitude": "113.710849"
        },
        {
          "latitude": "24.544190999999994",
          "longitude": "113.71020600000001"
        },
        {
          "latitude": "24.544769999999993",
          "longitude": "113.70995400000001"
        },
        {
          "latitude": "24.54509499999999",
          "longitude": "113.709772"
        },
        {
          "latitude": "24.545315",
          "longitude": "113.70968300000001"
        },
        {
          "latitude": "24.545567006493076",
          "longitude": "113.70959187256551"
        }
      ],
      "fenceColor": "red",
      "fenceName": "dms465平台",
      "id": "31aebd39-e41d-435d-a61d-7af99d5e7adb"
    },
    {
      "coordinates": [{
          "latitude": "24.562183",
          "longitude": "113.719916"
        },
        {
          "latitude": "24.562397",
          "longitude": "113.719952"
        },
        {
          "latitude": "24.562458",
          "longitude": "113.719769"
        },
        {
          "latitude": "24.562746",
          "longitude": "113.719747"
        },
        {
          "latitude": "24.562826",
          "longitude": "113.719911"
        },
        {
          "latitude": "24.562724",
          "longitude": "113.720022"
        },
        {
          "latitude": "24.562344",
          "longitude": "113.720123"
        },
        {
          "latitude": "24.562243",
          "longitude": "113.720135"
        },
        {
          "latitude": "24.562183",
          "longitude": "113.719916"
        }
      ],
      "fenceColor": "red",
      "fenceName": "dms铅锌矿",
      "id": "34042098-5cff-4a52-9a79-ac0ba3dba3a6"
    },
    {
      "coordinates": [{
          "latitude": "24.547755",
          "longitude": "113.712095"
        },
        {
          "latitude": "24.547194",
          "longitude": "113.712247"
        },
        {
          "latitude": "24.546251",
          "longitude": "113.712182"
        },
        {
          "latitude": "24.545678",
          "longitude": "113.712416"
        },
        {
          "latitude": "24.545439",
          "longitude": "113.712821"
        },
        {
          "latitude": "24.545201",
          "longitude": "113.713079"
        },
        {
          "latitude": "24.545083",
          "longitude": "113.713521"
        },
        {
          "latitude": "24.545119",
          "longitude": "113.714119"
        },
        {
          "latitude": "24.545667",
          "longitude": "113.714549"
        },
        {
          "latitude": "24.546445",
          "longitude": "113.714364"
        },
        {
          "latitude": "24.54703",
          "longitude": "113.714247"
        },
        {
          "latitude": "24.547597",
          "longitude": "113.71402"
        },
        {
          "latitude": "24.547983",
          "longitude": "113.713797"
        },
        {
          "latitude": "24.548228",
          "longitude": "113.71354"
        },
        {
          "latitude": "24.548357",
          "longitude": "113.712967"
        },
        {
          "latitude": "24.547755",
          "longitude": "113.712095"
        }
      ],
      "fenceColor": "#FF0000",
      "fenceName": "dms491平台",
      "id": "4a443cf3-1027-4fe9-8488-74b2beeba8b3"
    },
    {
      "coordinates": [{
          "latitude": "24.554061190916595",
          "longitude": "113.7199672154295"
        },
        {
          "latitude": "24.554272844044363",
          "longitude": "113.71995360915702"
        },
        {
          "latitude": "24.5542733",
          "longitude": "113.72006770000002"
        },
        {
          "latitude": "24.554181000000003",
          "longitude": "113.72011100000003"
        },
        {
          "latitude": "24.553960700000005",
          "longitude": "113.7200986"
        },
        {
          "latitude": "24.55393722265603",
          "longitude": "113.71996872723757"
        },
        {
          "latitude": "24.554061190916595",
          "longitude": "113.7199672154295"
        }
      ],
      "fenceColor": "red",
      "fenceName": "dms681排泥",
      "id": "5533f4e7-75e2-4a77-b3ea-c69d575e1aa3"
    },
    {
      "coordinates": [{
          "latitude": "24.556346000000005",
          "longitude": "113.72259900000002"
        },
        {
          "latitude": "24.556293000000004",
          "longitude": "113.72244800000001"
        },
        {
          "latitude": "24.556003",
          "longitude": "113.722284"
        },
        {
          "latitude": "24.555632000000003",
          "longitude": "113.72220400000002"
        },
        {
          "latitude": "24.555309",
          "longitude": "113.72217600000002"
        },
        {
          "latitude": "24.555028999999994",
          "longitude": "113.722487"
        },
        {
          "latitude": "24.55478399999999",
          "longitude": "113.72281200000002"
        },
        {
          "latitude": "24.55449237244809",
          "longitude": "113.72328998105056"
        },
        {
          "latitude": "24.55410519317725",
          "longitude": "113.72374037326358"
        },
        {
          "latitude": "24.553982999999995",
          "longitude": "113.72405900000001"
        },
        {
          "latitude": "24.553942999999997",
          "longitude": "113.724442"
        },
        {
          "latitude": "24.554005",
          "longitude": "113.72471600000002"
        },
        {
          "latitude": "24.554154",
          "longitude": "113.724905"
        },
        {
          "latitude": "24.554392",
          "longitude": "113.724984"
        },
        {
          "latitude": "24.55455599999999",
          "longitude": "113.724978"
        },
        {
          "latitude": "24.555091000000004",
          "longitude": "113.725123"
        },
        {
          "latitude": "24.55571712320277",
          "longitude": "113.72406433959223"
        },
        {
          "latitude": "24.555592000000004",
          "longitude": "113.72353300000002"
        },
        {
          "latitude": "24.555554999999995",
          "longitude": "113.723391"
        },
        {
          "latitude": "24.555689999999995",
          "longitude": "113.723271"
        },
        {
          "latitude": "24.556135",
          "longitude": "113.72298000000002"
        },
        {
          "latitude": "24.556346000000005",
          "longitude": "113.72276400000001"
        },
        {
          "latitude": "24.556346000000005",
          "longitude": "113.72259900000002"
        }
      ],
      "fenceColor": "red",
      "fenceName": "dms649平台",
      "id": "5b5c5fc7-4949-42a3-bfc0-feb99ecb7f6c"
    },
    {
      "coordinates": [{
          "latitude": "24.542643007382456",
          "longitude": "113.71150960197664"
        },
        {
          "latitude": "24.543254999999988",
          "longitude": "113.71039900000007"
        },
        {
          "latitude": "24.54447099999999",
          "longitude": "113.709517"
        },
        {
          "latitude": "24.545472999999973",
          "longitude": "113.70915900000003"
        },
        {
          "latitude": "24.546614999999978",
          "longitude": "113.70838100000005"
        },
        {
          "latitude": "24.547760000000004",
          "longitude": "113.70842800000003"
        },
        {
          "latitude": "24.54864323036606",
          "longitude": "113.70788259235452"
        },
        {
          "latitude": "24.548838",
          "longitude": "113.707469"
        },
        {
          "latitude": "24.54869499999998",
          "longitude": "113.707016"
        },
        {
          "latitude": "24.54874299999999",
          "longitude": "113.70656300000002"
        },
        {
          "latitude": "24.548527999999997",
          "longitude": "113.705872"
        },
        {
          "latitude": "24.54729357765865",
          "longitude": "113.70607201211524"
        },
        {
          "latitude": "24.5466019543868",
          "longitude": "113.70638205013364"
        },
        {
          "latitude": "24.546010923231606",
          "longitude": "113.70633237967107"
        },
        {
          "latitude": "24.54540950046983",
          "longitude": "113.70650129552533"
        },
        {
          "latitude": "24.544968450700523",
          "longitude": "113.70734662810047"
        },
        {
          "latitude": "24.54447594684404",
          "longitude": "113.70798169886277"
        },
        {
          "latitude": "24.54359539727788",
          "longitude": "113.70931934527542"
        },
        {
          "latitude": "24.542813111122253",
          "longitude": "113.70989837097513"
        },
        {
          "latitude": "24.541857189945848",
          "longitude": "113.70977526851006"
        },
        {
          "latitude": "24.540486845573962",
          "longitude": "113.7106252363636"
        },
        {
          "latitude": "24.539442749420935",
          "longitude": "113.71103088325208"
        },
        {
          "latitude": "24.540122825312164",
          "longitude": "113.71296116503756"
        },
        {
          "latitude": "24.54128360991711",
          "longitude": "113.71346522640044"
        },
        {
          "latitude": "24.542285271207362",
          "longitude": "113.71265435773695"
        },
        {
          "latitude": "24.542643007382456",
          "longitude": "113.71150960197664"
        }
      ],
      "fenceColor": "red",
      "fenceName": "dms453平台",
      "id": "60fa5886-c067-4363-a583-79ea8d121bfb"
    },
    {
      "coordinates": [{
          "latitude": "24.552596650305368",
          "longitude": "113.7147966989468"
        },
        {
          "latitude": "24.55296946524407",
          "longitude": "113.71415298067541"
        },
        {
          "latitude": "24.55327341406716",
          "longitude": "113.71370655584151"
        },
        {
          "latitude": "24.553694361210972",
          "longitude": "113.71346660005796"
        },
        {
          "latitude": "24.554030908814326",
          "longitude": "113.71326745643064"
        },
        {
          "latitude": "24.55431586083598",
          "longitude": "113.71310598361836"
        },
        {
          "latitude": "24.554833307070883",
          "longitude": "113.71290587487611"
        },
        {
          "latitude": "24.555520236875026",
          "longitude": "113.71260756428971"
        },
        {
          "latitude": "24.556721333529104",
          "longitude": "113.71275671576934"
        },
        {
          "latitude": "24.556740330330538",
          "longitude": "113.7138015398487"
        },
        {
          "latitude": "24.556255",
          "longitude": "113.71410000000002"
        },
        {
          "latitude": "24.555836834115233",
          "longitude": "113.71426007260344"
        },
        {
          "latitude": "24.555418904483485",
          "longitude": "113.71463051023156"
        },
        {
          "latitude": "24.55481927607422",
          "longitude": "113.71497773111852"
        },
        {
          "latitude": "24.554182883225874",
          "longitude": "113.71523362537998"
        },
        {
          "latitude": "24.553567935326626",
          "longitude": "113.71561584009197"
        },
        {
          "latitude": "24.552991117229265",
          "longitude": "113.71611364201162"
        },
        {
          "latitude": "24.55273826546056",
          "longitude": "113.71597141289173"
        },
        {
          "latitude": "24.552672637511126",
          "longitude": "113.7155945646074"
        },
        {
          "latitude": "24.552596650305368",
          "longitude": "113.7147966989468"
        }
      ],
      "fenceColor": "red",
      "fenceName": "dms757平台",
      "id": "7b6ee22d-45e4-42e9-bb82-5785272d0c2a"
    },
    {
      "coordinates": [{
          "latitude": "24.55484099999999",
          "longitude": "113.72164300000001"
        },
        {
          "latitude": "24.55503156020016",
          "longitude": "113.72207993076456"
        },
        {
          "latitude": "24.554545121495835",
          "longitude": "113.722724133373"
        },
        {
          "latitude": "24.55414799999999",
          "longitude": "113.72333800000001"
        },
        {
          "latitude": "24.553803999999996",
          "longitude": "113.723611"
        },
        {
          "latitude": "24.553193",
          "longitude": "113.72353"
        },
        {
          "latitude": "24.552581999999997",
          "longitude": "113.72320400000001"
        },
        {
          "latitude": "24.552474470254456",
          "longitude": "113.72271562842963"
        },
        {
          "latitude": "24.552862306518712",
          "longitude": "113.72177754994837"
        },
        {
          "latitude": "24.553250142782964",
          "longitude": "113.72127139075606"
        },
        {
          "latitude": "24.553863067498753",
          "longitude": "113.7208077594687"
        },
        {
          "latitude": "24.55424274067964",
          "longitude": "113.72092763751647"
        },
        {
          "latitude": "24.55484099999999",
          "longitude": "113.72164300000001"
        }
      ],
      "fenceColor": "#FF0000",
      "fenceName": "dms637堆场",
      "id": "970757e1-71f2-4996-a367-95a6f730c48d"
    },
    {
      "coordinates": [{
          "latitude": "24.560043240486944",
          "longitude": "113.7222978897881"
        },
        {
          "latitude": "24.560483456329155",
          "longitude": "113.7221472936181"
        },
        {
          "latitude": "24.56058587562766",
          "longitude": "113.72252150727923"
        },
        {
          "latitude": "24.560240661902906",
          "longitude": "113.72276910191967"
        },
        {
          "latitude": "24.56014195137981",
          "longitude": "113.7225334956747"
        },
        {
          "latitude": "24.560043240486944",
          "longitude": "113.7222978897881"
        }
      ],
      "fenceColor": "red",
      "fenceName": "dms新机口",
      "id": "9e2bff4a-14a2-42c8-a2cf-70a87aebfcd0"
    },
    {
      "coordinates": [{
          "latitude": "24.565102148171075",
          "longitude": "113.72079697157376"
        },
        {
          "latitude": "24.565139527788258",
          "longitude": "113.72100585766974"
        },
        {
          "latitude": "24.56528244985394",
          "longitude": "113.72118835815364"
        },
        {
          "latitude": "24.565466136517408",
          "longitude": "113.72126413000939"
        },
        {
          "latitude": "24.56560905858309",
          "longitude": "113.7215345825337"
        },
        {
          "latitude": "24.56571899863362",
          "longitude": "113.72184021587415"
        },
        {
          "latitude": "24.565727793837667",
          "longitude": "113.72232615089752"
        },
        {
          "latitude": "24.565549690955816",
          "longitude": "113.72267576025818"
        },
        {
          "latitude": "24.565158304375924",
          "longitude": "113.72293521877744"
        },
        {
          "latitude": "24.564602007720246",
          "longitude": "113.72274612189052"
        },
        {
          "latitude": "24.564034717059517",
          "longitude": "113.722431693346"
        },
        {
          "latitude": "24.563970951830214",
          "longitude": "113.72215464441867"
        },
        {
          "latitude": "24.56437992881818",
          "longitude": "113.72175886023678"
        },
        {
          "latitude": "24.564353543206057",
          "longitude": "113.72163572738019"
        },
        {
          "latitude": "24.564558031700038",
          "longitude": "113.72142904008518"
        },
        {
          "latitude": "24.564529447286887",
          "longitude": "113.72079798419514"
        },
        {
          "latitude": "24.565102148171075",
          "longitude": "113.72079697157376"
        }
      ],
      "fenceColor": "#FF0000",
      "fenceName": "铅锌矿宏大油库后",
      "id": "a75453da-f662-4684-8204-2fd547d8a32c"
    },
    {
      "coordinates": [{
          "latitude": "24.557834999999997",
          "longitude": "113.713411"
        },
        {
          "latitude": "24.557712999999996",
          "longitude": "113.712804"
        },
        {
          "latitude": "24.557778695360657",
          "longitude": "113.71282910864679"
        },
        {
          "latitude": "24.55794599999999",
          "longitude": "113.712885"
        },
        {
          "latitude": "24.558272999999993",
          "longitude": "113.712839"
        },
        {
          "latitude": "24.558474",
          "longitude": "113.712698"
        },
        {
          "latitude": "24.558812000000003",
          "longitude": "113.71270800000002"
        },
        {
          "latitude": "24.55901700000001",
          "longitude": "113.71294400000001"
        },
        {
          "latitude": "24.55907",
          "longitude": "113.71313700000002"
        },
        {
          "latitude": "24.558681999999997",
          "longitude": "113.713389"
        },
        {
          "latitude": "24.558457",
          "longitude": "113.71421600000001"
        },
        {
          "latitude": "24.558272",
          "longitude": "113.714285"
        },
        {
          "latitude": "24.557926999999996",
          "longitude": "113.714165"
        },
        {
          "latitude": "24.557587000000005",
          "longitude": "113.71431000000001"
        },
        {
          "latitude": "24.557292999999998",
          "longitude": "113.714078"
        },
        {
          "latitude": "24.557199",
          "longitude": "113.71374000000002"
        },
        {
          "latitude": "24.557352",
          "longitude": "113.713395"
        },
        {
          "latitude": "24.557463000000002",
          "longitude": "113.71349100000002"
        },
        {
          "latitude": "24.557834999999997",
          "longitude": "113.713411"
        }
      ],
      "fenceColor": "red",
      "fenceName": "dms841排渣平台",
      "id": "a9f4d457-48ba-41c6-862c-c6626204456f"
    },
    {
      "coordinates": [{
          "latitude": "24.556871",
          "longitude": "113.719576"
        },
        {
          "latitude": "24.556991",
          "longitude": "113.719537"
        },
        {
          "latitude": "24.557094",
          "longitude": "113.719544"
        },
        {
          "latitude": "24.557199",
          "longitude": "113.719538"
        },
        {
          "latitude": "24.557186",
          "longitude": "113.719448"
        },
        {
          "latitude": "24.557386",
          "longitude": "113.719436"
        },
        {
          "latitude": "24.557694",
          "longitude": "113.719493"
        },
        {
          "latitude": "24.557821",
          "longitude": "113.719541"
        },
        {
          "latitude": "24.557816",
          "longitude": "113.719708"
        },
        {
          "latitude": "24.557745",
          "longitude": "113.719901"
        },
        {
          "latitude": "24.557622",
          "longitude": "113.720107"
        },
        {
          "latitude": "24.557521",
          "longitude": "113.720257"
        },
        {
          "latitude": "24.557435",
          "longitude": "113.720441"
        },
        {
          "latitude": "24.557343",
          "longitude": "113.720559"
        },
        {
          "latitude": "24.557241",
          "longitude": "113.72066"
        },
        {
          "latitude": "24.557113",
          "longitude": "113.720766"
        },
        {
          "latitude": "24.55703",
          "longitude": "113.720887"
        },
        {
          "latitude": "24.556861",
          "longitude": "113.720983"
        },
        {
          "latitude": "24.556714",
          "longitude": "113.721077"
        },
        {
          "latitude": "24.556213",
          "longitude": "113.721406"
        },
        {
          "latitude": "24.555926",
          "longitude": "113.721544"
        },
        {
          "latitude": "24.555642",
          "longitude": "113.721587"
        },
        {
          "latitude": "24.55551",
          "longitude": "113.72129"
        },
        {
          "latitude": "24.555679",
          "longitude": "113.721029"
        },
        {
          "latitude": "24.555759",
          "longitude": "113.720934"
        },
        {
          "latitude": "24.555826",
          "longitude": "113.720846"
        },
        {
          "latitude": "24.555944",
          "longitude": "113.720753"
        },
        {
          "latitude": "24.555955",
          "longitude": "113.720572"
        },
        {
          "latitude": "24.555966",
          "longitude": "113.720425"
        },
        {
          "latitude": "24.556004",
          "longitude": "113.720299"
        },
        {
          "latitude": "24.556052",
          "longitude": "113.720094"
        },
        {
          "latitude": "24.556129",
          "longitude": "113.719865"
        },
        {
          "latitude": "24.556385",
          "longitude": "113.719728"
        },
        {
          "latitude": "24.556871",
          "longitude": "113.719576"
        }
      ],
      "fenceColor": "red",
      "fenceName": "dms681内排石",
      "id": "b0997613-453d-4717-b12b-7ce4c4f01658"
    },
    {
      "coordinates": [{
          "latitude": "24.555175",
          "longitude": "113.725685"
        },
        {
          "latitude": "24.555273",
          "longitude": "113.726421"
        },
        {
          "latitude": "24.555305",
          "longitude": "113.726951"
        },
        {
          "latitude": "24.5552",
          "longitude": "113.727046"
        },
        {
          "latitude": "24.554062",
          "longitude": "113.727491"
        },
        {
          "latitude": "24.553795",
          "longitude": "113.727471"
        },
        {
          "latitude": "24.553703",
          "longitude": "113.727103"
        },
        {
          "latitude": "24.553699",
          "longitude": "113.7268"
        },
        {
          "latitude": "24.55373",
          "longitude": "113.726741"
        },
        {
          "latitude": "24.55372",
          "longitude": "113.726688"
        },
        {
          "latitude": "24.55373",
          "longitude": "113.726628"
        },
        {
          "latitude": "24.553743",
          "longitude": "113.726561"
        },
        {
          "latitude": "24.55375",
          "longitude": "113.726471"
        },
        {
          "latitude": "24.553734",
          "longitude": "113.72636"
        },
        {
          "latitude": "24.553842",
          "longitude": "113.726245"
        },
        {
          "latitude": "24.55388",
          "longitude": "113.726158"
        },
        {
          "latitude": "24.554026",
          "longitude": "113.726175"
        },
        {
          "latitude": "24.554263",
          "longitude": "113.726205"
        },
        {
          "latitude": "24.554366",
          "longitude": "113.726182"
        },
        {
          "latitude": "24.554446",
          "longitude": "113.726165"
        },
        {
          "latitude": "24.554546",
          "longitude": "113.726132"
        },
        {
          "latitude": "24.554637",
          "longitude": "113.726031"
        },
        {
          "latitude": "24.554956",
          "longitude": "113.725574"
        },
        {
          "latitude": "24.555175",
          "longitude": "113.725685"
        }
      ],
      "fenceColor": "red",
      "fenceName": "dms新选场",
      "id": "b50accd0-cc90-490e-ac42-3601d40386ea"
    },
    {
      "coordinates": [{
          "latitude": "24.554864000000002",
          "longitude": "113.72047400000001"
        },
        {
          "latitude": "24.55559550000003",
          "longitude": "113.72031024998056"
        },
        {
          "latitude": "24.555814886718867",
          "longitude": "113.72041077731464"
        },
        {
          "latitude": "24.55585708341108",
          "longitude": "113.72051986105785"
        },
        {
          "latitude": "24.55582890537477",
          "longitude": "113.72073257696712"
        },
        {
          "latitude": "24.55573700385421",
          "longitude": "113.72071154297974"
        },
        {
          "latitude": "24.5556324687518",
          "longitude": "113.72081601560527"
        },
        {
          "latitude": "24.555442937448593",
          "longitude": "113.72143093750913"
        },
        {
          "latitude": "24.55529820685032",
          "longitude": "113.72144408982379"
        },
        {
          "latitude": "24.554666750002138",
          "longitude": "113.72074075002453"
        },
        {
          "latitude": "24.55463644140744",
          "longitude": "113.72059674220526"
        },
        {
          "latitude": "24.554698292969483",
          "longitude": "113.72051915236291"
        },
        {
          "latitude": "24.555140507812638",
          "longitude": "113.72043775783916"
        },
        {
          "latitude": "24.55486460926606",
          "longitude": "113.72047391407402"
        },
        {
          "latitude": "24.554864000000002",
          "longitude": "113.72047400000001"
        }
      ],
      "fenceColor": "red",
      "fenceName": "dms681内排矿",
      "id": "fe2e5975-e662-448a-b088-45ae1d5c74ee"
    }
  ],
  "statusCode": "OK",
  "statusCodeValue": "200"
}

export const firstLorryData = () => {
  return {
    "headers": {},
    "body": [{
      "id": "4c2e21c4-f60d-41f4-abae-1c9959634d9f",
      "name": "503",
      "itNum": "ST01019000503",
      "deviceNum": "VLGOMT83KG0711477",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.560076",
      "longitude": "113.715416",
      "workTime": "2.8666666",
      "receiveTime": "1615427063000",
      "displacementSpeed": "2206",
      "disDirection": "328.58",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "8ad52114-916d-4de5-8a2f-64a0531a556f",
      "name": "631",
      "itNum": "ST01019000631",
      "deviceNum": "LFTPW0003K1041024",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.558014",
      "longitude": "113.71967",
      "workTime": "3.0166667",
      "receiveTime": "1615427044000",
      "displacementSpeed": "1831",
      "disDirection": "115.59",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "e1108e36-a39e-4ce6-a5d0-bd000fc3d4d0",
      "name": "663",
      "itNum": "ST01019000663",
      "deviceNum": "LFTPW0002K1041015",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.561356",
      "longitude": "113.7172",
      "workTime": "3.6333334",
      "receiveTime": "1615426993000",
      "displacementSpeed": "441",
      "disDirection": "340.02",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "9a6555c9-ecfe-43f7-a9d1-ec4b520556ec",
      "name": "666",
      "itNum": "ST01019000666",
      "deviceNum": "LFTPW0007K1041012",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.558283",
      "longitude": "113.71919",
      "workTime": "3.4166667",
      "receiveTime": "1615426910000",
      "displacementSpeed": "2162",
      "disDirection": "307.06",
      "loadCount": "7",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "a2cc71b2-3d0e-4cab-91c0-2acc8f6a126a",
      "name": "661",
      "itNum": "ST01019000661",
      "deviceNum": "LFTPW0005K1041008",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.557941",
      "longitude": "113.71998",
      "workTime": "3.0166667",
      "receiveTime": "1615426996000",
      "displacementSpeed": "2094",
      "disDirection": "300.36",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "06edb6a3-93db-4743-a0c3-7656fcefd361",
      "name": "E72",
      "itNum": "ST01019000016",
      "deviceNum": "SY036PBK56578",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "20309",
      "type": "excavator",
      "latitude": "24.561085",
      "longitude": "113.71728",
      "workTime": "2.8333333",
      "receiveTime": "1615426999000",
      "displacementSpeed": "148",
      "disDirection": "290.82",
      "loadCount": "15",
      "height": "0",
      "hasFence": true,
      "fenceWidth": "15.0",
      "shrink": false
    }, {
      "id": "f7a99cbe-4ba4-477e-9b0f-8affa20b2d5a",
      "name": "662",
      "itNum": "ST01019000662",
      "deviceNum": "LFTPW0009K1041013",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.561323",
      "longitude": "113.71702",
      "workTime": "3.05",
      "receiveTime": "1615426992000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "d9cdba84-730d-48a5-92d2-0f78955a8955",
      "name": "562",
      "itNum": "ST01019000005",
      "deviceNum": "LP2RKTA35F0001299",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.565077",
      "longitude": "113.71264",
      "workTime": "2.6333334",
      "receiveTime": "1615426982000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "0362fd54-bdf8-4c21-888f-3c8eeb2ce44f",
      "name": "506",
      "itNum": "ST01019001010",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.561878",
      "longitude": "113.71438",
      "workTime": "2.9166667",
      "receiveTime": "1615427041000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "5",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "17f8f914-590e-4587-a91c-ba49cf97294e",
      "name": "579",
      "itNum": "ST01019000007",
      "deviceNum": "LP2RKTA38F0001295",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.56648",
      "longitude": "113.71308",
      "workTime": "3.0333333",
      "receiveTime": "1615427154000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "5",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "c0558e37-6b99-430b-b7b7-35e8239b0a2e",
      "name": "632",
      "itNum": "ST01019000632",
      "deviceNum": "LFTPW0003J1121017",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.563824",
      "longitude": "113.71588",
      "workTime": "2.65",
      "receiveTime": "1615427052000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "6",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "6164cc5b-3570-447d-a576-d6eb42aa7725",
      "name": "505",
      "itNum": "ST01019000678",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.561405",
      "longitude": "113.714905",
      "workTime": "2.8666666",
      "receiveTime": "1615427028000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "005550e1-1004-4b6f-b23d-da637e4d1349",
      "name": "665",
      "itNum": "ST01019000665",
      "deviceNum": "LFTPW0006K1041017",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.553902",
      "longitude": "113.72387",
      "workTime": "2.9833333",
      "receiveTime": "1615427152000",
      "displacementSpeed": "2069",
      "disDirection": "118.08",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "a117e580-dd36-41de-a35c-e344737368b3",
      "name": "578",
      "itNum": "ST01019000578",
      "deviceNum": "LP2RKTA39F0001290",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.56654",
      "longitude": "113.713135",
      "workTime": "3.0166667",
      "receiveTime": "1615426993000",
      "displacementSpeed": "703",
      "disDirection": "193.02",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "704ec8e5-802e-4468-9d3d-4fd8c179bef6",
      "name": "513",
      "itNum": "ST01019000513",
      "deviceNum": "VLGOMT80EG0711480",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.56505",
      "longitude": "113.715385",
      "workTime": "2.6166666",
      "receiveTime": "1615427052000",
      "displacementSpeed": "1736",
      "disDirection": "33.58",
      "loadCount": "6",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "9b4a8ee1-3e9c-4312-a711-59ed4d37bae5",
      "name": "675",
      "itNum": "ST01019000675",
      "deviceNum": "LFTPW0006K1041003",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.565256",
      "longitude": "113.712456",
      "workTime": "3.0",
      "receiveTime": "1615427058000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "35105022-0a40-4e3b-987b-0155545a116e",
      "name": "E78",
      "itNum": "ST01019020076",
      "deviceNum": "SY0480CA22628",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "20309",
      "type": "excavator",
      "latitude": "24.567139",
      "longitude": "113.71327",
      "workTime": "2.5833333",
      "receiveTime": "1615427066000",
      "displacementSpeed": "72",
      "disDirection": "0.0",
      "loadCount": "14",
      "height": "0",
      "hasFence": true,
      "fenceWidth": "15.0",
      "shrink": false
    }, {
      "id": "30b2d905-d22c-4c0c-bbfe-2031326877ef",
      "name": "589",
      "itNum": "ST01019000589",
      "deviceNum": "LP2RKTA3X80001284",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.555033",
      "longitude": "113.7147",
      "workTime": "3.0333333",
      "receiveTime": "1615427154000",
      "displacementSpeed": "293",
      "disDirection": "268.76",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "dd628880-d33e-4075-a191-2c9582973850",
      "name": "E79",
      "itNum": "ST01019000003",
      "deviceNum": "SY0480CA26128",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "20309",
      "type": "excavator",
      "latitude": "0.0",
      "longitude": "0.0",
      "workTime": "2.6666667",
      "receiveTime": "1615427057000",
      "displacementSpeed": "0",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": true,
      "fenceWidth": "15.0",
      "shrink": false
    }, {
      "id": "bd8b0a77-55ef-42ee-b56d-b0e8aeb4dea2",
      "name": "582",
      "itNum": "ST01019000582",
      "deviceNum": "LP2RKTA3280001280",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.566946",
      "longitude": "113.71315",
      "workTime": "2.9333334",
      "receiveTime": "1615426980000",
      "displacementSpeed": "62",
      "disDirection": "0.0",
      "loadCount": "2",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "0abfde0b-9ac8-44cb-8188-08d3d093edb9",
      "name": "518",
      "itNum": "ST01019002005",
      "deviceNum": "VLGOMT80EE0701030",
      "status": "0",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.556337",
      "longitude": "113.72618",
      "workTime": "1.0333333",
      "receiveTime": "1615424288000",
      "displacementSpeed": "4",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "be9a0196-dc94-4aae-b912-06ca47622901",
      "name": "512",
      "itNum": "ST01019000512",
      "deviceNum": "VLGOMT83LG0711471",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.564598",
      "longitude": "113.715836",
      "workTime": "2.9666667",
      "receiveTime": "1615427069000",
      "displacementSpeed": "1171",
      "disDirection": "12.37",
      "loadCount": "6",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "41a5eb43-cf84-45bf-bc52-49f8a932d99d",
      "name": "587",
      "itNum": "ST01019000587",
      "deviceNum": "LP2RKTA3X80001270",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.56543",
      "longitude": "113.712395",
      "workTime": "2.8",
      "receiveTime": "1615427000000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "ec49c1b7-1917-4d1e-8232-49d140beb604",
      "name": "511",
      "itNum": "ST01019001011",
      "deviceNum": "CK0781C8",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.555735",
      "longitude": "113.71638",
      "workTime": "2.9666667",
      "receiveTime": "1615427045000",
      "displacementSpeed": "2166",
      "disDirection": "176.34",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "790c1e10-cce4-4d3e-9846-63e532601ff4",
      "name": "590",
      "itNum": "ST01019000590",
      "deviceNum": "LP2RKTA3480001281",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.567554",
      "longitude": "113.71342",
      "workTime": "2.95",
      "receiveTime": "1615426960000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "5",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "2c8f1e1a-2c06-4b91-8694-e6b0aff06f5f",
      "name": "E83",
      "itNum": "ST01019000004",
      "deviceNum": "SY0480CA26138",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "20309",
      "type": "excavator",
      "latitude": "24.5637",
      "longitude": "113.71591",
      "workTime": "2.8",
      "receiveTime": "1615427007000",
      "displacementSpeed": "12",
      "disDirection": "276.07",
      "loadCount": "35",
      "height": "0",
      "hasFence": true,
      "fenceWidth": "15.0",
      "shrink": false
    }, {
      "id": "edd236ac-4dfd-46be-8896-74e5e258540f",
      "name": "583",
      "itNum": "ST01019000583",
      "deviceNum": "LP2RKTA3900001275",
      "status": "0",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.553663",
      "longitude": "113.72471",
      "workTime": "0.23333333",
      "receiveTime": "1615344456000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "f0d8e7bd-fbd8-4341-b7df-aa868ef49da8",
      "name": "630",
      "itNum": "ST01019000630",
      "deviceNum": "LFTPW0006K1041020",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.561129",
      "longitude": "113.71716",
      "workTime": "2.75",
      "receiveTime": "1615426976000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "3",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "f58b2ed4-9379-4e71-b47a-4b8e4d7fb880",
      "name": "E86",
      "itNum": "ST01019002086",
      "deviceNum": "SY0480CA27538",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "100",
      "type": "excavator",
      "latitude": "24.56549",
      "longitude": "113.712524",
      "workTime": "2.6166666",
      "receiveTime": "1615427155000",
      "displacementSpeed": "28",
      "disDirection": "0.0",
      "loadCount": "22",
      "height": "0",
      "hasFence": true,
      "fenceWidth": "15.0",
      "shrink": false
    }, {
      "id": "7077dac7-8dd5-4229-9629-de1af29b9c1a",
      "name": "516",
      "itNum": "ST01019000092",
      "deviceNum": "CK0652C8",
      "status": "0",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.554075",
      "longitude": "113.72455",
      "workTime": "0.11666667",
      "receiveTime": "1615418847000",
      "displacementSpeed": "43",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": true
    }, {
      "id": "ea08ae01-0739-4074-b09a-c59f8df1b9da",
      "name": "667",
      "itNum": "ST01019000667",
      "deviceNum": "LFTPW0005K1041011",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.556995",
      "longitude": "113.72105",
      "workTime": "3.45",
      "receiveTime": "1615426867000",
      "displacementSpeed": "2134",
      "disDirection": "147.59",
      "loadCount": "6",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "e16859b0-ada2-4faf-88e6-8c38d90398b3",
      "name": "668",
      "itNum": "ST01019000668",
      "deviceNum": "LFTPW0005J1121018",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.561321",
      "longitude": "113.71486",
      "workTime": "3.2666667",
      "receiveTime": "1615426985000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "5",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "6dc356b2-b0db-4576-ba32-ae2c4a28d0dc",
      "name": "519",
      "itNum": "ST01019000519",
      "deviceNum": "VLGOMT83TG0711475",
      "status": "0",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.554102",
      "longitude": "113.72458",
      "workTime": "0.36666667",
      "receiveTime": "1615419633000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": true
    }, {
      "id": "f6e442be-2b37-4d67-b036-bb1c02ba6f5d",
      "name": "501",
      "itNum": "ST01019000501",
      "deviceNum": "VLGOMT80TE0701029",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.556353",
      "longitude": "113.726105",
      "workTime": "9.7",
      "receiveTime": "1615426973000",
      "displacementSpeed": "2",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "e953c5e1-6964-4956-a625-95f3d344f810",
      "name": "535",
      "itNum": "ST01019000535",
      "deviceNum": "VLGOMT80JG0711485",
      "status": "0",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.556255",
      "longitude": "113.72624",
      "workTime": "2.3",
      "receiveTime": "1615426601000",
      "displacementSpeed": "4",
      "disDirection": "0.0",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "b720cb24-38f4-41ca-a9d6-7a0a1862c974",
      "name": "E85",
      "itNum": "ST01019002085",
      "deviceNum": "SY0480CA27558",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "100",
      "type": "excavator",
      "latitude": "24.567675",
      "longitude": "113.71345",
      "workTime": "2.6833334",
      "receiveTime": "1615427154000",
      "displacementSpeed": "7",
      "disDirection": "0.0",
      "loadCount": "16",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "662f613e-17f0-4375-9e67-5d4c219bfba9",
      "name": "508",
      "itNum": "ST01019000508",
      "deviceNum": "VLGOMT83HG0711472",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.554495",
      "longitude": "113.71574",
      "workTime": "2.6333334",
      "receiveTime": "1615427045000",
      "displacementSpeed": "1474",
      "disDirection": "285.57",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "4b46aec5-3608-4319-a87d-143566feb290",
      "name": "629",
      "itNum": "ST01019000008",
      "deviceNum": "LFTPW0008K1041018",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.554567",
      "longitude": "113.71555",
      "workTime": "3.0",
      "receiveTime": "1615426891000",
      "displacementSpeed": "876",
      "disDirection": "288.85",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "62676bb0-b263-41c3-9afe-d27174d53d3a",
      "name": "638",
      "itNum": "ST01019000638",
      "deviceNum": "LFTPW000XK1041022",
      "status": "0",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.556444",
      "longitude": "113.726166",
      "workTime": "0.11666667",
      "receiveTime": "1615417399000",
      "displacementSpeed": "2",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "3cd358e4-3c68-42da-bbb7-eb6d3796251f",
      "name": "670",
      "itNum": "ST01019000670",
      "deviceNum": "LFTPW0002J1121011",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.560774",
      "longitude": "113.716835",
      "workTime": "2.7666667",
      "receiveTime": "1615427018000",
      "displacementSpeed": "876",
      "disDirection": "152.32",
      "loadCount": "6",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "db5b5f2c-b816-4db0-a614-e6da62a1a75c",
      "name": "636",
      "itNum": "ST01019000636",
      "deviceNum": "LFTPW0001K1041023",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.556335",
      "longitude": "113.726",
      "workTime": "1.1166667",
      "receiveTime": "1615427153000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "2e28b63a-8e56-40d8-b1f1-86a33a430527",
      "name": "568",
      "itNum": "ST01019000568",
      "deviceNum": "LP2RKTA30F0001291",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.56664",
      "longitude": "113.71311",
      "workTime": "2.5",
      "receiveTime": "1615427053000",
      "displacementSpeed": "2",
      "disDirection": "0.0",
      "loadCount": "3",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "ab65d947-aad3-4825-9705-e875f709fc4d",
      "name": "563",
      "itNum": "ST01019000002",
      "deviceNum": "LP2RKTA33F0001298",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.564814",
      "longitude": "113.712654",
      "workTime": "2.85",
      "receiveTime": "1615426985000",
      "displacementSpeed": "56",
      "disDirection": "323.59",
      "loadCount": "5",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "f5df43e1-2624-4d1f-9316-cfeb40f0830c",
      "name": "633",
      "itNum": "ST01019000633",
      "deviceNum": "LFTPW0007J1121022",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.561073",
      "longitude": "113.716705",
      "workTime": "1.9166666",
      "receiveTime": "1615427089000",
      "displacementSpeed": "673",
      "disDirection": "150.44",
      "loadCount": "3",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "26a17254-b1a0-4c19-bc4a-4cee0cebbea5",
      "name": "635",
      "itNum": "ST01019000635",
      "deviceNum": "LFTPW0000J1121024",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.554333",
      "longitude": "113.72517",
      "workTime": "3.0",
      "receiveTime": "1615427006000",
      "displacementSpeed": "2023",
      "disDirection": "25.16",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "edcaffae-3b4f-44eb-b1f6-1caaf3ab5e3b",
      "name": "507",
      "itNum": "ST01019000018",
      "deviceNum": "VLGOMT80JE0701066",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.561789",
      "longitude": "113.71433",
      "workTime": "2.3666666",
      "receiveTime": "1615427153000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "3",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "78b51e90-6bf8-42b9-a3d6-5778baaf6b17",
      "name": "676",
      "itNum": "ST01019000676",
      "deviceNum": "LFTPW0004K1041016",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.56513",
      "longitude": "113.71552",
      "workTime": "2.8833334",
      "receiveTime": "1615426967000",
      "displacementSpeed": "1979",
      "disDirection": "81.21",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "68247e92-f8bb-4612-9a69-265ab50e77d2",
      "name": "581",
      "itNum": "ST01019000581",
      "deviceNum": "LP2RKTA32F0001289",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.554535",
      "longitude": "113.71605",
      "workTime": "3.05",
      "receiveTime": "1615426994000",
      "displacementSpeed": "1575",
      "disDirection": "232.16",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "59568f79-857b-4344-9084-0035a57dbc85",
      "name": "510",
      "itNum": "ST01019001009",
      "deviceNum": "CH1071C8",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.567036",
      "longitude": "113.713234",
      "workTime": "2.85",
      "receiveTime": "1615427155000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "966ffe1c-10cf-4bc1-9395-a6fbd66e2635",
      "name": "669",
      "itNum": "ST01019000669",
      "deviceNum": "LFTPW0003J1121020",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.556368",
      "longitude": "113.72629",
      "workTime": "9.716666",
      "receiveTime": "1615427047000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "3d7db9d4-1a18-456c-aa18-9a64f1afd3ba",
      "name": "585",
      "itNum": "ST01019000585",
      "deviceNum": "LP2RKTA3280001246",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.56484",
      "longitude": "113.71257",
      "workTime": "3.0",
      "receiveTime": "1615426921000",
      "displacementSpeed": "1286",
      "disDirection": "162.42",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "9adce16d-9c3d-4e3a-a6ee-e1dedf283de9",
      "name": "509",
      "itNum": "ST01019000677",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.566813",
      "longitude": "113.71304",
      "workTime": "2.7",
      "receiveTime": "1615427029000",
      "displacementSpeed": "2",
      "disDirection": "0.0",
      "loadCount": "3",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "fc736afe-e482-439e-ae3f-052d351bfa81",
      "name": "E77",
      "itNum": "ST01019000020",
      "deviceNum": "SY0480CA22618",
      "status": "0",
      "tenantCode": "dabaoshan",
      "applicationVersion": "100",
      "type": "excavator",
      "latitude": "24.561577",
      "longitude": "113.716675",
      "workTime": "0.0",
      "receiveTime": "1615417308000",
      "displacementSpeed": "73",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": true,
      "fenceWidth": "15.0",
      "shrink": false
    }, {
      "id": "27536775-3e61-45f4-afd9-e094b61f6048",
      "name": "E82",
      "itNum": "ST01019000015",
      "deviceNum": "SY0480CA26158",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "20309",
      "type": "excavator",
      "latitude": "24.563663",
      "longitude": "113.715706",
      "workTime": "2.8",
      "receiveTime": "1615427007000",
      "displacementSpeed": "122",
      "disDirection": "126.64",
      "loadCount": "16",
      "height": "0",
      "hasFence": true,
      "fenceWidth": "15.0",
      "shrink": false
    }, {
      "id": "f2358730-31ab-4a5c-978e-7d46782a03ea",
      "name": "660",
      "itNum": "ST01019000006",
      "deviceNum": "LFTPW000XK1041005",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.563793",
      "longitude": "113.71566",
      "workTime": "3.3833334",
      "receiveTime": "1615426982000",
      "displacementSpeed": "2",
      "disDirection": "0.0",
      "loadCount": "7",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }],
    "statusCode": "OK",
    "statusCodeValue": "200"
  }
}

export const secondLorryData = () => {
  return {
    "headers": {},
    "body": [{
      "id": "4c2e21c4-f60d-41f4-abae-1c9959634d9f",
      "name": "503",
      "itNum": "ST01019000503",
      "deviceNum": "VLGOMT83KG0711477",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.564808",
      "longitude": "113.712654",
      "workTime": "2.9166667",
      "receiveTime": "1615427192000",
      "displacementSpeed": "1252",
      "disDirection": "336.03",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "8ad52114-916d-4de5-8a2f-64a0531a556f",
      "name": "631",
      "itNum": "ST01019000631",
      "deviceNum": "LFTPW0003K1041024",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.553812",
      "longitude": "113.72461",
      "workTime": "3.05",
      "receiveTime": "1615427176000",
      "displacementSpeed": "1846",
      "disDirection": "63.2",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "e1108e36-a39e-4ce6-a5d0-bd000fc3d4d0",
      "name": "663",
      "itNum": "ST01019000663",
      "deviceNum": "LFTPW0002K1041015",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.561024",
      "longitude": "113.716736",
      "workTime": "3.6666667",
      "receiveTime": "1615427126000",
      "displacementSpeed": "700",
      "disDirection": "164.37",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "9a6555c9-ecfe-43f7-a9d1-ec4b520556ec",
      "name": "666",
      "itNum": "ST01019000666",
      "deviceNum": "LFTPW0007K1041012",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.562666",
      "longitude": "113.71545",
      "workTime": "3.45",
      "receiveTime": "1615427042000",
      "displacementSpeed": "1917",
      "disDirection": "336.33",
      "loadCount": "7",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "a2cc71b2-3d0e-4cab-91c0-2acc8f6a126a",
      "name": "661",
      "itNum": "ST01019000661",
      "deviceNum": "LFTPW0005K1041008",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.561836",
      "longitude": "113.71665",
      "workTime": "3.05",
      "receiveTime": "1615427128000",
      "displacementSpeed": "993",
      "disDirection": "128.27",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "06edb6a3-93db-4743-a0c3-7656fcefd361",
      "name": "E72",
      "itNum": "ST01019000016",
      "deviceNum": "SY036PBK56578",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "20309",
      "type": "excavator",
      "latitude": "24.561094",
      "longitude": "113.71729",
      "workTime": "2.8666666",
      "receiveTime": "1615427131000",
      "displacementSpeed": "91",
      "disDirection": "0.0",
      "loadCount": "15",
      "height": "0",
      "hasFence": true,
      "fenceWidth": "15.0",
      "shrink": false
    }, {
      "id": "f7a99cbe-4ba4-477e-9b0f-8affa20b2d5a",
      "name": "662",
      "itNum": "ST01019000662",
      "deviceNum": "LFTPW0009K1041013",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.561213",
      "longitude": "113.717224",
      "workTime": "3.0833333",
      "receiveTime": "1615427121000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "d9cdba84-730d-48a5-92d2-0f78955a8955",
      "name": "562",
      "itNum": "ST01019000005",
      "deviceNum": "LP2RKTA35F0001299",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.56501",
      "longitude": "113.7125",
      "workTime": "2.6833334",
      "receiveTime": "1615427114000",
      "displacementSpeed": "560",
      "disDirection": "155.2",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "0362fd54-bdf8-4c21-888f-3c8eeb2ce44f",
      "name": "506",
      "itNum": "ST01019001010",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.561878",
      "longitude": "113.71438",
      "workTime": "2.95",
      "receiveTime": "1615427173000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "5",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "17f8f914-590e-4587-a91c-ba49cf97294e",
      "name": "579",
      "itNum": "ST01019000007",
      "deviceNum": "LP2RKTA38F0001295",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.567501",
      "longitude": "113.713356",
      "workTime": "3.0666666",
      "receiveTime": "1615427286000",
      "displacementSpeed": "94",
      "disDirection": "0.0",
      "loadCount": "5",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "c0558e37-6b99-430b-b7b7-35e8239b0a2e",
      "name": "632",
      "itNum": "ST01019000632",
      "deviceNum": "LFTPW0003J1121017",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.565186",
      "longitude": "113.715454",
      "workTime": "2.7",
      "receiveTime": "1615427184000",
      "displacementSpeed": "737",
      "disDirection": "252.59",
      "loadCount": "6",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "6164cc5b-3570-447d-a576-d6eb42aa7725",
      "name": "505",
      "itNum": "ST01019000678",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.561405",
      "longitude": "113.714905",
      "workTime": "2.9",
      "receiveTime": "1615427157000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "005550e1-1004-4b6f-b23d-da637e4d1349",
      "name": "665",
      "itNum": "ST01019000665",
      "deviceNum": "LFTPW0006K1041017",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.55411",
      "longitude": "113.7267",
      "workTime": "3.0166667",
      "receiveTime": "1615427285000",
      "displacementSpeed": "6",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "a117e580-dd36-41de-a35c-e344737368b3",
      "name": "578",
      "itNum": "ST01019000578",
      "deviceNum": "LP2RKTA39F0001290",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.56405",
      "longitude": "113.71288",
      "workTime": "3.0666666",
      "receiveTime": "1615427126000",
      "displacementSpeed": "1248",
      "disDirection": "158.93",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "704ec8e5-802e-4468-9d3d-4fd8c179bef6",
      "name": "513",
      "itNum": "ST01019000513",
      "deviceNum": "VLGOMT80EG0711480",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.563883",
      "longitude": "113.71586",
      "workTime": "2.65",
      "receiveTime": "1615427181000",
      "displacementSpeed": "191",
      "disDirection": "143.2",
      "loadCount": "6",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "9b4a8ee1-3e9c-4312-a711-59ed4d37bae5",
      "name": "675",
      "itNum": "ST01019000675",
      "deviceNum": "LFTPW0006K1041003",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.565386",
      "longitude": "113.71246",
      "workTime": "3.0333333",
      "receiveTime": "1615427190000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "35105022-0a40-4e3b-987b-0155545a116e",
      "name": "E78",
      "itNum": "ST01019020076",
      "deviceNum": "SY0480CA22628",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "20309",
      "type": "excavator",
      "latitude": "24.567162",
      "longitude": "113.713264",
      "workTime": "2.6166666",
      "receiveTime": "1615427198000",
      "displacementSpeed": "51",
      "disDirection": "116.89",
      "loadCount": "14",
      "height": "0",
      "hasFence": true,
      "fenceWidth": "15.0",
      "shrink": false
    }, {
      "id": "30b2d905-d22c-4c0c-bbfe-2031326877ef",
      "name": "589",
      "itNum": "ST01019000589",
      "deviceNum": "LP2RKTA3X80001284",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.554533",
      "longitude": "113.715195",
      "workTime": "3.0666666",
      "receiveTime": "1615427283000",
      "displacementSpeed": "1052",
      "disDirection": "134.01",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "dd628880-d33e-4075-a191-2c9582973850",
      "name": "E79",
      "itNum": "ST01019000003",
      "deviceNum": "SY0480CA26128",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "20309",
      "type": "excavator",
      "latitude": "0.0",
      "longitude": "0.0",
      "workTime": "2.7",
      "receiveTime": "1615427189000",
      "displacementSpeed": "0",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": true,
      "fenceWidth": "15.0",
      "shrink": false
    }, {
      "id": "bd8b0a77-55ef-42ee-b56d-b0e8aeb4dea2",
      "name": "582",
      "itNum": "ST01019000582",
      "deviceNum": "LP2RKTA3280001280",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.566946",
      "longitude": "113.71315",
      "workTime": "2.9666667",
      "receiveTime": "1615427112000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "2",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "0abfde0b-9ac8-44cb-8188-08d3d093edb9",
      "name": "518",
      "itNum": "ST01019002005",
      "deviceNum": "VLGOMT80EE0701030",
      "status": "0",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.556337",
      "longitude": "113.72618",
      "workTime": "1.0333333",
      "receiveTime": "1615424288000",
      "displacementSpeed": "4",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "be9a0196-dc94-4aae-b912-06ca47622901",
      "name": "512",
      "itNum": "ST01019000512",
      "deviceNum": "VLGOMT83LG0711471",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.56322",
      "longitude": "113.71547",
      "workTime": "3.0",
      "receiveTime": "1615427196000",
      "displacementSpeed": "1182",
      "disDirection": "141.97",
      "loadCount": "6",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "41a5eb43-cf84-45bf-bc52-49f8a932d99d",
      "name": "587",
      "itNum": "ST01019000587",
      "deviceNum": "LP2RKTA3X80001270",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.563332",
      "longitude": "113.71322",
      "workTime": "2.85",
      "receiveTime": "1615427132000",
      "displacementSpeed": "2232",
      "disDirection": "152.29",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "ec49c1b7-1917-4d1e-8232-49d140beb604",
      "name": "511",
      "itNum": "ST01019001011",
      "deviceNum": "CK0781C8",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.554495",
      "longitude": "113.71582",
      "workTime": "2.9666667",
      "receiveTime": "1615427075000",
      "displacementSpeed": "1972",
      "disDirection": "262.45",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "790c1e10-cce4-4d3e-9846-63e532601ff4",
      "name": "590",
      "itNum": "ST01019000590",
      "deviceNum": "LP2RKTA3480001281",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.567554",
      "longitude": "113.71342",
      "workTime": "2.9833333",
      "receiveTime": "1615427090000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "5",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "2c8f1e1a-2c06-4b91-8694-e6b0aff06f5f",
      "name": "E83",
      "itNum": "ST01019000004",
      "deviceNum": "SY0480CA26138",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "20309",
      "type": "excavator",
      "latitude": "24.56371",
      "longitude": "113.71592",
      "workTime": "2.8333333",
      "receiveTime": "1615427139000",
      "displacementSpeed": "28",
      "disDirection": "0.0",
      "loadCount": "35",
      "height": "0",
      "hasFence": true,
      "fenceWidth": "15.0",
      "shrink": false
    }, {
      "id": "edd236ac-4dfd-46be-8896-74e5e258540f",
      "name": "583",
      "itNum": "ST01019000583",
      "deviceNum": "LP2RKTA3900001275",
      "status": "0",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.553663",
      "longitude": "113.72471",
      "workTime": "0.23333333",
      "receiveTime": "1615344456000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "f0d8e7bd-fbd8-4341-b7df-aa868ef49da8",
      "name": "630",
      "itNum": "ST01019000630",
      "deviceNum": "LFTPW0006K1041020",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.561129",
      "longitude": "113.71716",
      "workTime": "2.7833333",
      "receiveTime": "1615427109000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "3",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "f58b2ed4-9379-4e71-b47a-4b8e4d7fb880",
      "name": "E86",
      "itNum": "ST01019002086",
      "deviceNum": "SY0480CA27538",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "100",
      "type": "excavator",
      "latitude": "24.565493",
      "longitude": "113.712524",
      "workTime": "2.65",
      "receiveTime": "1615427287000",
      "displacementSpeed": "30",
      "disDirection": "17.08",
      "loadCount": "22",
      "height": "0",
      "hasFence": true,
      "fenceWidth": "15.0",
      "shrink": false
    }, {
      "id": "7077dac7-8dd5-4229-9629-de1af29b9c1a",
      "name": "516",
      "itNum": "ST01019000092",
      "deviceNum": "CK0652C8",
      "status": "0",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.554075",
      "longitude": "113.72455",
      "workTime": "0.11666667",
      "receiveTime": "1615418847000",
      "displacementSpeed": "43",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": true
    }, {
      "id": "ea08ae01-0739-4074-b09a-c59f8df1b9da",
      "name": "667",
      "itNum": "ST01019000667",
      "deviceNum": "LFTPW0005K1041011",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.554674",
      "longitude": "113.72611",
      "workTime": "3.4833333",
      "receiveTime": "1615427000000",
      "displacementSpeed": "1796",
      "disDirection": "142.39",
      "loadCount": "6",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "e16859b0-ada2-4faf-88e6-8c38d90398b3",
      "name": "668",
      "itNum": "ST01019000668",
      "deviceNum": "LFTPW0005J1121018",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.561321",
      "longitude": "113.71486",
      "workTime": "3.3",
      "receiveTime": "1615427118000",
      "displacementSpeed": "0",
      "disDirection": "0.0",
      "loadCount": "5",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "6dc356b2-b0db-4576-ba32-ae2c4a28d0dc",
      "name": "519",
      "itNum": "ST01019000519",
      "deviceNum": "VLGOMT83TG0711475",
      "status": "0",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.554102",
      "longitude": "113.72458",
      "workTime": "0.36666667",
      "receiveTime": "1615419633000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": true
    }, {
      "id": "f6e442be-2b37-4d67-b036-bb1c02ba6f5d",
      "name": "501",
      "itNum": "ST01019000501",
      "deviceNum": "VLGOMT80TE0701029",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.556353",
      "longitude": "113.726105",
      "workTime": "9.733334",
      "receiveTime": "1615427105000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "e953c5e1-6964-4956-a625-95f3d344f810",
      "name": "535",
      "itNum": "ST01019000535",
      "deviceNum": "VLGOMT80JG0711485",
      "status": "0",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.556255",
      "longitude": "113.72624",
      "workTime": "2.3",
      "receiveTime": "1615426601000",
      "displacementSpeed": "4",
      "disDirection": "0.0",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "b720cb24-38f4-41ca-a9d6-7a0a1862c974",
      "name": "E85",
      "itNum": "ST01019002085",
      "deviceNum": "SY0480CA27558",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "100",
      "type": "excavator",
      "latitude": "24.567675",
      "longitude": "113.71346",
      "workTime": "2.7166667",
      "receiveTime": "1615427286000",
      "displacementSpeed": "64",
      "disDirection": "153.81",
      "loadCount": "16",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "662f613e-17f0-4375-9e67-5d4c219bfba9",
      "name": "508",
      "itNum": "ST01019000508",
      "deviceNum": "VLGOMT83HG0711472",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.55497",
      "longitude": "113.71513",
      "workTime": "2.6333334",
      "receiveTime": "1615427063000",
      "displacementSpeed": "1677",
      "disDirection": "321.82",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "4b46aec5-3608-4319-a87d-143566feb290",
      "name": "629",
      "itNum": "ST01019000008",
      "deviceNum": "LFTPW0008K1041018",
      "status": "0",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.554567",
      "longitude": "113.71555",
      "workTime": "3.0",
      "receiveTime": "1615426891000",
      "displacementSpeed": "876",
      "disDirection": "288.85",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "62676bb0-b263-41c3-9afe-d27174d53d3a",
      "name": "638",
      "itNum": "ST01019000638",
      "deviceNum": "LFTPW000XK1041022",
      "status": "0",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.556444",
      "longitude": "113.726166",
      "workTime": "0.11666667",
      "receiveTime": "1615417399000",
      "displacementSpeed": "2",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "3cd358e4-3c68-42da-bbb7-eb6d3796251f",
      "name": "670",
      "itNum": "ST01019000670",
      "deviceNum": "LFTPW0002J1121011",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.558062",
      "longitude": "113.71951",
      "workTime": "2.8",
      "receiveTime": "1615427150000",
      "displacementSpeed": "1615",
      "disDirection": "108.99",
      "loadCount": "6",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "db5b5f2c-b816-4db0-a614-e6da62a1a75c",
      "name": "636",
      "itNum": "ST01019000636",
      "deviceNum": "LFTPW0001K1041023",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.556335",
      "longitude": "113.726",
      "workTime": "1.15",
      "receiveTime": "1615427286000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "2e28b63a-8e56-40d8-b1f1-86a33a430527",
      "name": "568",
      "itNum": "ST01019000568",
      "deviceNum": "LP2RKTA30F0001291",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.566761",
      "longitude": "113.71313",
      "workTime": "2.5333333",
      "receiveTime": "1615427185000",
      "displacementSpeed": "518",
      "disDirection": "8.8",
      "loadCount": "3",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "ab65d947-aad3-4825-9705-e875f709fc4d",
      "name": "563",
      "itNum": "ST01019000002",
      "deviceNum": "LP2RKTA33F0001298",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.567085",
      "longitude": "113.713356",
      "workTime": "2.8833334",
      "receiveTime": "1615427117000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "5",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "f5df43e1-2624-4d1f-9316-cfeb40f0830c",
      "name": "633",
      "itNum": "ST01019000633",
      "deviceNum": "LFTPW0007J1121022",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.558489",
      "longitude": "113.71898",
      "workTime": "1.95",
      "receiveTime": "1615427222000",
      "displacementSpeed": "968",
      "disDirection": "155.46",
      "loadCount": "3",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "26a17254-b1a0-4c19-bc4a-4cee0cebbea5",
      "name": "635",
      "itNum": "ST01019000635",
      "deviceNum": "LFTPW0000J1121024",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.554031",
      "longitude": "113.726425",
      "workTime": "3.0333333",
      "receiveTime": "1615427138000",
      "displacementSpeed": "1286",
      "disDirection": "323.03",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "edcaffae-3b4f-44eb-b1f6-1caaf3ab5e3b",
      "name": "507",
      "itNum": "ST01019000018",
      "deviceNum": "VLGOMT80JE0701066",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.561789",
      "longitude": "113.71433",
      "workTime": "2.4",
      "receiveTime": "1615427283000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "3",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "78b51e90-6bf8-42b9-a3d6-5778baaf6b17",
      "name": "676",
      "itNum": "ST01019000676",
      "deviceNum": "LFTPW0004K1041016",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.563826",
      "longitude": "113.715935",
      "workTime": "2.9166667",
      "receiveTime": "1615427099000",
      "displacementSpeed": "2",
      "disDirection": "0.0",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "68247e92-f8bb-4612-9a69-265ab50e77d2",
      "name": "581",
      "itNum": "ST01019000581",
      "deviceNum": "LP2RKTA32F0001289",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.555342",
      "longitude": "113.71471",
      "workTime": "3.0666666",
      "receiveTime": "1615427043000",
      "displacementSpeed": "1266",
      "disDirection": "304.59",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "59568f79-857b-4344-9084-0035a57dbc85",
      "name": "510",
      "itNum": "ST01019001009",
      "deviceNum": "CH1071C8",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.567038",
      "longitude": "113.713234",
      "workTime": "2.8833334",
      "receiveTime": "1615427285000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "966ffe1c-10cf-4bc1-9395-a6fbd66e2635",
      "name": "669",
      "itNum": "ST01019000669",
      "deviceNum": "LFTPW0003J1121020",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.556368",
      "longitude": "113.72629",
      "workTime": "9.75",
      "receiveTime": "1615427179000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "3d7db9d4-1a18-456c-aa18-9a64f1afd3ba",
      "name": "585",
      "itNum": "ST01019000585",
      "deviceNum": "LP2RKTA3280001246",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.560299",
      "longitude": "113.7147",
      "workTime": "3.05",
      "receiveTime": "1615427053000",
      "displacementSpeed": "1883",
      "disDirection": "147.03",
      "loadCount": "4",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "9adce16d-9c3d-4e3a-a6ee-e1dedf283de9",
      "name": "509",
      "itNum": "ST01019000677",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.566813",
      "longitude": "113.71304",
      "workTime": "2.75",
      "receiveTime": "1615427162000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "3",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }, {
      "id": "fc736afe-e482-439e-ae3f-052d351bfa81",
      "name": "E77",
      "itNum": "ST01019000020",
      "deviceNum": "SY0480CA22618",
      "status": "0",
      "tenantCode": "dabaoshan",
      "applicationVersion": "100",
      "type": "excavator",
      "latitude": "24.561577",
      "longitude": "113.716675",
      "workTime": "0.0",
      "receiveTime": "1615417308000",
      "displacementSpeed": "73",
      "disDirection": "0.0",
      "loadCount": "0",
      "height": "0",
      "hasFence": true,
      "fenceWidth": "15.0",
      "shrink": false
    }, {
      "id": "27536775-3e61-45f4-afd9-e094b61f6048",
      "name": "E82",
      "itNum": "ST01019000015",
      "deviceNum": "SY0480CA26158",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "20309",
      "type": "excavator",
      "latitude": "24.563662",
      "longitude": "113.715706",
      "workTime": "2.8333333",
      "receiveTime": "1615427140000",
      "displacementSpeed": "87",
      "disDirection": "0.0",
      "loadCount": "16",
      "height": "0",
      "hasFence": true,
      "fenceWidth": "15.0",
      "shrink": false
    }, {
      "id": "f2358730-31ab-4a5c-978e-7d46782a03ea",
      "name": "660",
      "itNum": "ST01019000006",
      "deviceNum": "LFTPW000XK1041005",
      "status": "1",
      "tenantCode": "dabaoshan",
      "applicationVersion": "10309",
      "type": "minecard",
      "latitude": "24.563793",
      "longitude": "113.71566",
      "workTime": "3.4166667",
      "receiveTime": "1615427111000",
      "displacementSpeed": "1",
      "disDirection": "0.0",
      "loadCount": "7",
      "height": "0",
      "hasFence": false,
      "shrink": false
    }],
    "statusCode": "OK",
    "statusCodeValue": "200"
  }
}

export const getLine = () => {
  return {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [113.712607, 24.554864000000002],
          [113.72047391407402, 24.55486460926606],
          [113.72043775783916, 24.555140507812638],
          [113.72074075002453, 24.55463644140744],
          [113.732607, 24.564864000000002],
          [113.742607, 24.574864000000002]
        ]
      }
    }]
  }
}

export const getFance = () => {
  let features = []
  fanceData.body.map(item => {
    features.push({
      "type": "Feature",
      properties: {
        color: item.fenceColor,
        name: item.fenceName
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [item.coordinateArrays]
      }
    })
  })
  return {
    "type": "FeatureCollection",
    "features": features
  }
}
