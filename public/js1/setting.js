 //display state local governement function
//  document.getElementById("selectState").addEventListener('change',displayStateLocalGovernment)
 
getState('officeAddState','#officeLocal')
getState('businessState','#businessAxis')

function getState(stateId,localAxisId){
    document.getElementById(stateId).addEventListener('change',(e)=>{
        // /get select element 
  let selectLocal = document.querySelector(localAxisId)
  selectLocal.innerHTML = ''

  selectLocal.innerHTML = `<option value=''>--Select--</option>`
    if(e.target.value === "Abia"){
      abia =  [
    "Aba North",
    "Aba South",
    "Arochukwu",
    "Bende",
    "Ikwuano",
    "Isiala-Ngwa North",
    "Isiala-Ngwa South",
    "Isuikwato",
    "Obi Nwa",
    "Ohafia",
    "Osisioma",
    "Ngwa",
    "Ugwunagbo",
    "Ukwa East",
    "Ukwa West",
    "Umuahia North",
    "Umuahia South",
    "Umu-Neochi"
  ]
        abia.forEach(abialocalGovernment => {
        selectLocal.innerHTML += `<option id="selectsubLocal" value='${abialocalGovernment}'>${abialocalGovernment}</option>`
          })

    }
    else if(e.target.value === "Abuja FCT"){
      let abuja = [
    "Abaji",
    "AMAC",
    "Bwari",
    "Gwagwalada",
    "Kuje",
    "Kwali"
  ]
  abuja.forEach(abujalocalGovernment => {
        selectLocal.innerHTML += `<option value='${abujalocalGovernment}'>${abujalocalGovernment}</option>`
          })

    }
    else if(e.target.value === "Adamawa"){
      let adamawa = [
    "Aguata",
    "Anambra East",
    "Anambra West",
    "Anaocha",
    "Awka North",
    "Awka South",
    "Ayamelum",
    "Dunukofia",
    "Ekwusigo",
    "Idemili North",
    "Idemili south",
    "Ihiala",
    "Njikoka",
    "Nnewi North",
    "Nnewi South",
    "Ogbaru",
    "Onitsha North",
    "Onitsha South",
    "Orumba North",
    "Orumba South",
    "Oyi"
  ]
  adamawa.forEach(adamawalocalGovernment => {
        selectLocal.innerHTML += `<option value='${adamawalocalGovernment}'>${adamawalocalGovernment}</option>`
          })

    }
    else if(e.target.value === "Akwa Ibom"){
      let akwa_ibom = [
    "Abak",
    "Eastern Obolo",
    "Eket",
    "Esit Eket",
    "Essien Udim",
    "Etim Ekpo",
    "Etinan",
    "Ibeno",
    "Ibesikpo Asutan",
    "Ibiono Ibom",
    "Ika",
    "Ikono",
    "Ikot Abasi",
    "Ikot Ekpene",
    "Ini",
    "Itu",
    "Mbo",
    "Mkpat Enin",
    "Nsit Atai",
    "Nsit Ibom",
    "Nsit Ubium",
    "Obot Akara",
    "Okobo",
    "Onna",
    "Oron",
    "Oruk Anam",
    "Udung Uko",
    "Ukanafun",
    "Uruan",
    "Urue-Offong/Oruko ",
    "Uyo"
  ]
  akwa_ibom.forEach(akwa_ibomlocalGovernment => {
        selectLocal.innerHTML += `<option value='${akwa_ibomlocalGovernment}'>${akwa_ibomlocalGovernment}</option>`
          })

    }
    else if(e.target.value === "Anambra"){
      let anambra =[
    "Aguata",
    "Anambra East",
    "Anambra West",
    "Anaocha",
    "Awka North",
    "Awka South",
    "Ayamelum",
    "Dunukofia",
    "Ekwusigo",
    "Idemili North",
    "Idemili south",
    "Ihiala",
    "Njikoka",
    "Nnewi North",
    "Nnewi South",
    "Ogbaru",
    "Onitsha North",
    "Onitsha South",
    "Orumba North",
    "Orumba South",
    "Oyi"
  ]
  anambra.forEach(anambralocalGovernment => {
        selectLocal.innerHTML += `<option value='${anambralocalGovernment}'>${anambralocalGovernment}</option>`
          })

    }
    else if(e.target.value === "Bauchi"){
      let Bauchi =[
    "Alkaleri",
    "Bauchi",
    "Bogoro",
    "Damban",
    "Darazo",
    "Dass",
    "Ganjuwa",
    "Giade",
    "Itas/Gadau",
    "Jama'are",
    "Katagum",
    "Kirfi",
    "Misau",
    "Ningi",
    "Shira",
    "Tafawa-Balewa",
    "Toro",
    "Warji",
    "Zaki"
  ]
  Bauchi.forEach(bauchilocalGovernment => {
        selectLocal.innerHTML += `<option value='${bauchilocalGovernment}'>${bauchilocalGovernment}</option>`
          })

    }
    else if(e.target.value === "Bayelsa"){
      let Bayelsa =[
    "Brass",
    "Ekeremor",
    "Kolokuma/Opokuma",
    "Nembe",
    "Ogbia",
    "Sagbama",
    "Southern Jaw",
    "Yenegoa"
  ]
  Bayelsa.forEach(bayelsalocalGovernment => {
        selectLocal.innerHTML += `<option value='${bayelsalocalGovernment}'>${bayelsalocalGovernment}</option>`
          })

    }
    else if(e.target.value === "Benue"){
      let Benue =[
    "Ado",
    "Agatu",
    "Apa",
    "Buruku",
    "Gboko",
    "Guma",
    "Gwer East",
    "Gwer West",
    "Katsina-Ala",
    "Konshisha",
    "Kwande",
    "Logo",
    "Makurdi",
    "Obi",
    "Ogbadibo",
    "Oju",
    "Okpokwu",
    "Ohimini",
    "Oturkpo",
    "Tarka",
    "Ukum",
    "Ushongo",
    "Vandeikya"
  ]
  Benue.forEach(benuelocalGovernment => {
        selectLocal.innerHTML += `<option value='${benuelocalGovernment}'>${benuelocalGovernment}</option>`
          })

    }
    else if(e.target.value === "Borno"){
      let Borno =[
    "Abadam",
    "Askira/Uba",
    "Bama",
    "Bayo",
    "Biu",
    "Chibok",
    "Damboa",
    "Dikwa",
    "Gubio",
    "Guzamala",
    "Gwoza",
    "Hawul",
    "Jere",
    "Kaga",
    "Kala/Balge",
    "Konduga",
    "Kukawa",
    "Kwaya Kusar",
    "Mafa",
    "Magumeri",
    "Maiduguri",
    "Marte",
    "Mobbar",
    "Monguno",
    "Ngala",
    "Nganzai",
    "Shani"
  ]
  Borno.forEach(bornolocalGovernment => {
        selectLocal.innerHTML += `<option value='${bornolocalGovernment}'>${bornolocalGovernment}</option>`
          })

    }
    else if(e.target.value === "Cross River"){
      let CrossRiver =[
    "Akpabuyo",
    "Odukpani",
    "Akamkpa",
    "Biase",
    "Abi",
    "Ikom",
    "Yarkur",
    "Odubra",
    "Boki",
    "Ogoja",
    "Yala",
    "Obanliku",
    "Obudu",
    "Calabar South",
    "Etung",
    "Bekwara",
    "Bakassi",
    "Calabar Municipality"
  ]
  CrossRiver.forEach(crossriverlocalGovernment => {
        selectLocal.innerHTML += `<option value='${crossriverlocalGovernment}'>${crossriverlocalGovernment}</option>`
          })

    }
    else if(e.target.value === "Delta"){
      let Delta =[
    "Oshimili",
    "Aniocha",
    "Aniocha South",
    "Ika South",
    "Ika North-East",
    "Ndokwa West",
    "Ndokwa East",
    "Isoko south",
    "Isoko North",
    "Bomadi",
    "Burutu",
    "Ughelli South",
    "Ughelli North",
    "Ethiope West",
    "Ethiope East",
    "Sapele",
    "Okpe",
    "Warri North",
    "Warri South",
    "Uvwie",
    "Udu",
    "Warri Central",
    "Ukwani",
    "Oshimili North",
    "Patani"
  ]
  Delta.forEach(DeltalocalGovernment => {
        selectLocal.innerHTML += `<option value='${DeltalocalGovernment}'>${DeltalocalGovernment}</option>`
          })

    }
    else if(e.target.value === "Ebonyi"){
      let Enonyi =[
    "Afikpo South",
    "Afikpo North",
    "Onicha",
    "Ohaozara",
    "Abakaliki",
    "Ishielu",
    "lkwo",
    "Ezza",
    "Ezza South",
    "Ohaukwu",
    "Ebonyi",
    "Ivo"
  ]
  Enonyi.forEach(EnonyilocalGovernment => {
        selectLocal.innerHTML += `<option value='${EnonyilocalGovernment}'>${EnonyilocalGovernment}</option>`
          })

    }
    else if(e.target.value === "Edo"){
      let Edo =[
    "Esan North-East",
    "Esan Central",
    "Esan West",
    "Egor",
    "Ukpoba",
    "Central",
    "Etsako Central",
    "Igueben",
    "Oredo",
    "Ovia SouthWest",
    "Ovia South-East",
    "Orhionwon",
    "Uhunmwonde",
    "Etsako East",
    "Esan South-East"
  ]
  Edo.forEach(EdolocalGovernment => {
        selectLocal.innerHTML += `<option value='${EdolocalGovernment}'>${EdolocalGovernment}</option>`
          })

    }
    else if(e.target.value === "Ekiti"){
      let Ekiti =[
    "Ado",
    "Ekiti-East",
    "Ekiti-West",
    "Emure/Ise/Orun",
    "Ekiti South-West",
    "Ikare",
    "Irepodun",
    "Ijero,",
    "Ido/Osi",
    "Oye",
    "Ikole",
    "Moba",
    "Gbonyin",
    "Efon",
    "Ise/Orun",
    "Ilejemeje."
  ]
  Ekiti.forEach(EkitilocalGovernment => {
        selectLocal.innerHTML += `<option value='${EkitilocalGovernment}'>${EkitilocalGovernment}</option>`
          })

    }
    else if(e.target.value === "Enugu"){
      let Enugu =[
    "Enugu South,",
    "Igbo-Eze South",
    "Enugu North",
    "Nkanu",
    "Udi Agwu",
    "Oji-River",
    "Ezeagu",
    "IgboEze North",
    "Isi-Uzo",
    "Nsukka",
    "Igbo-Ekiti",
    "Uzo-Uwani",
    "Enugu Eas",
    "Aninri",
    "Nkanu East",
    "Udenu."
  ]
  Enugu.forEach(EnugulocalGovernment => {
        selectLocal.innerHTML += `<option value='${EnugulocalGovernment}'>${EnugulocalGovernment}</option>`
          })

    }
    else if(e.target.value === "Gombe"){
      let Gombe =[
    "Akko",
    "Balanga",
    "Billiri",
    "Dukku",
    "Kaltungo",
    "Kwami",
    "Shomgom",
    "Funakaye",
    "Gombe",
    "Nafada/Bajoga",
    "Yamaltu/Delta."
  ]
  Gombe.forEach(GombelocalGovernment => {
        selectLocal.innerHTML += `<option value='${GombelocalGovernment}'>${GombelocalGovernment}</option>`
          })

    }
    else if(e.target.value === "Imo"){
        let Imo =[
            "Aboh-Mbaise",
            "Ahiazu-Mbaise",
            "Ehime-Mbano",
            "Ezinihitte",
            "Ideato North",
            "Ideato South",
            "Ihitte/Uboma",
            "Ikeduru",
            "Isiala Mbano",
            "Isu",
            "Mbaitoli",
            "Mbaitoli",
            "Ngor-Okpala",
            "Njaba",
            "Nwangele",
            "Nkwerre",
            "Obowo",
            "Oguta",
            "Ohaji/Egbema",
            "Okigwe",
            "Orlu",
            "Orsu",
            "Oru East",
            "Oru West",
            "Owerri-Municipal",
            "Owerri North",
            "Owerri West"
          ]
    Imo.forEach(ImolocalGovernment => {
          selectLocal.innerHTML += `<option value='${ImolocalGovernment}'>${ImolocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Jigawa"){
        let Jigawa =[
            "Auyo",
            "Babura",
            "Birni Kudu",
            "Biriniwa",
            "Buji",
            "Dutse",
            "Gagarawa",
            "Garki",
            "Gumel",
            "Guri",
            "Gwaram",
            "Gwiwa",
            "Hadejia",
            "Jahun",
            "Kafin Hausa",
            "Kaugama Kazaure",
            "Kiri Kasamma",
            "Kiyawa",
            "Maigatari",
            "Malam Madori",
            "Miga",
            "Ringim",
            "Roni",
            "Sule-Tankarkar",
            "Taura",
            "Yankwashi"
          ]
    Jigawa.forEach(JigawalocalGovernment => {
          selectLocal.innerHTML += `<option value='${JigawalocalGovernment}'>${JigawalocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Kaduna"){
        let Kaduna =[
            "Birni-Gwari",
            "Chikun",
            "Giwa",
            "Igabi",
            "Ikara",
            "jaba",
            "Jema'a",
            "Kachia",
            "Kaduna North",
            "Kaduna South",
            "Kagarko",
            "Kajuru",
            "Kaura",
            "Kauru",
            "Kubau",
            "Kudan",
            "Lere",
            "Makarfi",
            "Sabon-Gari",
            "Sanga",
            "Soba",
            "Zango-Kataf",
            "Zaria"
          ]
          Kaduna.forEach(KadunalocalGovernment => {
          selectLocal.innerHTML += `<option value='${KadunalocalGovernment}'>${KadunalocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Kano"){
        let Kano =[
            "Ajingi",
            "Albasu",
            "Bagwai",
            "Bebeji",
            "Bichi",
            "Bunkure",
            "Dala",
            "Dambatta",
            "Dawakin Kudu",
            "Dawakin Tofa",
            "Doguwa",
            "Fagge",
            "Gabasawa",
            "Garko",
            "Garum",
            "Mallam",
            "Gaya",
            "Gezawa",
            "Gwale",
            "Gwarzo",
            "Kabo",
            "Kano Municipal",
            "Karaye",
            "Kibiya",
            "Kiru",
            "kumbotso",
            "Kunchi",
            "Kura",
            "Madobi",
            "Makoda",
            "Minjibir",
            "Nasarawa",
            "Rano",
            "Rimin Gado",
            "Rogo",
            "Shanono",
            "Sumaila",
            "Takali",
            "Tarauni",
            "Tofa",
            "Tsanyawa",
            "Tudun Wada",
            "Ungogo",
            "Warawa",
            "Wudil"
          ]
          Kano.forEach(KanolocalGovernment => {
          selectLocal.innerHTML += `<option value='${KanolocalGovernment}'>${KanolocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Katsina"){
        let Katsina =[
            "Bakori",
            "Batagarawa",
            "Batsari",
            "Baure",
            "Bindawa",
            "Charanchi",
            "Dandume",
            "Danja",
            "Dan Musa",
            "Daura",
            "Dutsi",
            "Dutsin-Ma",
            "Faskari",
            "Funtua",
            "Ingawa",
            "Jibia",
            "Kafur",
            "Kaita",
            "Kankara",
            "Kankia",
            "Katsina",
            "Kurfi",
            "Kusada",
            "Mai'Adua",
            "Malumfashi",
            "Mani",
            "Mashi",
            "Matazuu",
            "Musawa",
            "Rimi",
            "Sabuwa",
            "Safana",
            "Sandamu",
            "Zango"
          ]
          Katsina.forEach(KatsinalocalGovernment => {
          selectLocal.innerHTML += `<option value='${KatsinalocalGovernment}'>${KatsinalocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Kebbi"){
        let Kebbi = [
            "Aleiro",
            "Arewa-Dandi",
            "Argungu",
            "Augie",
            "Bagudo",
            "Birnin Kebbi",
            "Bunza",
            "Dandi",
            "Fakai",
            "Gwandu",
            "Jega",
            "Kalgo",
            "Koko/Besse",
            "Maiyama",
            "Ngaski",
            "Sakaba",
            "Shanga",
            "Suru",
            "Wasagu/Danko",
            "Yauri",
            "Zuru"
          ]
          Kebbi.forEach(KebbilocalGovernment => {
          selectLocal.innerHTML += `<option value='${KebbilocalGovernment}'>${KebbilocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Kogi"){
        let Kogi = [
            "Adavi",
            "Ajaokuta",
            "Ankpa",
            "Bassa",
            "Dekina",
            "Ibaji",
            "Idah",
            "Igalamela-Odolu",
            "Ijumu",
            "Kabba/Bunu",
            "Kogi",
            "Lokoja",
            "Mopa-Muro",
            "Ofu",
            "Ogori/Mangongo",
            "Okehi",
            "Okene",
            "Olamabolo",
            "Omala",
            "Yagba East",
            "Yagba West"
          ]
          Kogi.forEach(KogilocalGovernment => {
          selectLocal.innerHTML += `<option value='${KogilocalGovernment}'>${KogilocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Kwara"){
        let Kwara = [
            "Asa",
            "Baruten",
            "Edu",
            "Ekiti",
            "Ifelodun",
            "Ilorin East",
            "Ilorin West",
            "Irepodun",
            "Isin",
            "Kaiama",
            "Moro",
            "Offa",
            "Oke-Ero",
            "Oyun",
            "Pategi"
          ]
          Kwara.forEach(KwaralocalGovernment => {
          selectLocal.innerHTML += `<option value='${KwaralocalGovernment}'>${KwaralocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Lagos"){
        let Lagos =  [
            "Agege",
            "Ajeromi-Ifelodun",
            "Alimosho",
            "Amuwo-Odofin",
            "Apapa",
            "Badagry",
            "Epe",
            "Eti-Osa",
            "Ibeju/Lekki",
            "Ifako-Ijaye",
            "Ikeja",
            "Ikorodu",
            "Kosofe",
            "Lagos Island",
            "Lagos Mainland",
            "Mushin",
            "Ojo",
            "Oshodi-Isolo",
            "Shomolu",
            "Surulere"
          ]
          Lagos.forEach(LagoslocalGovernment => {
          selectLocal.innerHTML += `<option value='${LagoslocalGovernment}'>${LagoslocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Nassarawa"){
        let Nassarawa =  [
            "Akwanga",
            "Awe",
            "Doma",
            "Karu",
            "Keana",
            "Keffi",
            "Kokona",
            "Lafia",
            "Nasarawa",
            "Nasarawa-Eggon",
            "Obi",
            "Toto",
            "Wamba"
          ]
          Nassarawa.forEach(NassarawalocalGovernment => {
          selectLocal.innerHTML += `<option value='${NassarawalocalGovernment}'>${NassarawalocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Niger"){
        let Niger =  [
            "Agaie",
            "Agwara",
            "Bida",
            "Borgu",
            "Bosso",
            "Chanchaga",
            "Edati",
            "Gbako",
            "Gurara",
            "Katcha",
            "Kontagora",
            "Lapai",
            "Lavun",
            "Magama",
            "Mariga",
            "Mashegu",
            "Mokwa",
            "Muya",
            "Pailoro",
            "Rafi",
            "Rijau",
            "Shiroro",
            "Suleja",
            "Tafa",
            "Wushishi"
          ]
          Niger.forEach(NigerlocalGovernment => {
          selectLocal.innerHTML += `<option value='${NigerlocalGovernment}'>${NigerlocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Ogun"){
        let Ogun =[
            "Abeokuta",
            "Ado-Odo/Ota",
            "Agbara-Igbesa",
            "Arepo",
            "Ewekoro",
            "Ifo",
            "Ijebu",
            "Obafemi-Owode",
            "Odogbolu",
            "Ogun Waterside",
            "Remo North",
            "Yewa",
            "Shagamu"
          ]
          Ogun.forEach(OgunlocalGovernment => {
          selectLocal.innerHTML += `<option value='${OgunlocalGovernment}'>${OgunlocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Ondo"){
        let Ondo =[
            "Akoko North East",
            "Akoko North West",
            "Akoko South Akure East",
            "Akoko South West",
            "Akure North",
            "Akure South",
            "Ese-Odo",
            "Idanre",
            "Ifedore",
            "Ilaje",
            "Ile-Oluji",
            "Okeigbo",
            "Irele",
            "Odigbo",
            "Okitipupa",
            "Ondo East",
            "Ondo West",
            "Ose",
            "Owo"
          ]
          Ondo.forEach(OndolocalGovernment => {
          selectLocal.innerHTML += `<option value='${OndolocalGovernment}'>${OndolocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Osun"){
        let Osun =[
            "Aiyedade",
            "Aiyedire",
            "Atakumosa East",
            "Atakumosa West",
            "Boluwaduro",
            "Boripe",
            "Ede North",
            "Ede South",
            "Egbedore",
            "Ejigbo",
            "Ife Central",
            "Ife East",
            "Ife North",
            "Ife South",
            "Ifedayo",
            "Ifelodun",
            "Ila",
            "Ilesha East",
            "Ilesha West",
            "Irepodun",
            "Irewole",
            "Isokan",
            "Iwo",
            "Obokun",
            "Odo-Otin",
            "Ola-Oluwa",
            "Olorunda",
            "Oriade",
            "Orolu",
            "Osogbo"
          ]
          Osun.forEach(OsunlocalGovernment => {
          selectLocal.innerHTML += `<option value='${OsunlocalGovernment}'>${OsunlocalGovernment}</option>`
            })
      }
      else if(e.target.value === "Oyo"){
        let Oyo =[
            "Afijio",
            "Akinyele",
            "Atiba",
            "Atigbo",
            "Egbeda",
            "Ibadan Central",
            "Ibadan North",
            "Ibadan North West",
            "Ibadan South East",
            "Ibadan South West",
            "Ibarapa Central",
            "Ibarapa East",
            "Ibarapa North",
            "Ido",
            "Irepo",
            "Iseyin",
            "Itesiwaju",
            "Iwajowa",
            "Kajola",
            "Lagelu Ogbomosho North",
            "Ogbmosho South",
            "Ogo Oluwa",
            "Olorunsogo",
            "Oluyole",
            "Ona-Ara",
            "Orelope",
            "Ori Ire",
            "Oyo East",
            "Oyo West",
            "Saki East",
            "Saki West",
            "Surulere"
          ]
          Oyo.forEach(OyolocalGovernment => {
          selectLocal.innerHTML += `<option value='${OyolocalGovernment}'>${OyolocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Plateau"){
        let Plateau =[
            "Barikin Ladi",
            "Bassa",
            "Bokkos",
            "Jos East",
            "Jos North",
            "Jos South",
            "Kanam",
            "Kanke",
            "Langtang North",
            "Langtang South",
            "Mangu",
            "Mikang",
            "Pankshin",
            "Qua'an Pan",
            "Riyom",
            "Shendam",
            "Wase"
          ]
          Plateau.forEach(PlateaulocalGovernment => {
          selectLocal.innerHTML += `<option value='${PlateaulocalGovernment}'>${PlateaulocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Rivers"){
        let Rivers =[
            "Abua/Odual",
            "Ahoada East",
            "Ahoada West",
            "Akuku Toru",
            "Andoni",
            "Asari-Toru",
            "Bonny",
            "Degema",
            "Emohua",
            "Eleme",
            "Etche",
            "Gokana",
            "Ikwerre",
            "Khana",
            "Obia/Akpor",
            "Ogba/Egbema/Ndoni",
            "Ogu/Bolo",
            "Okrika",
            "Omumma",
            "Opobo/Nkoro",
            "Oyigbo",
            "Port-Harcourt",
            "Tai"
          ]
          Rivers.forEach(RiverslocalGovernment => {
          selectLocal.innerHTML += `<option value='${RiverslocalGovernment}'>${RiverslocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Sokoto"){
        let Sokoto =[
            "Binji",
            "Bodinga",
            "Dange-shnsi",
            "Gada",
            "Goronyo",
            "Gudu",
            "Gawabawa",
            "Illela",
            "Isa",
            "Kware",
            "kebbe",
            "Rabah",
            "Sabon birni",
            "Shagari",
            "Silame",
            "Sokoto North",
            "Sokoto South",
            "Tambuwal",
            "Tqngaza",
            "Tureta",
            "Wamako",
            "Wurno",
            "Yabo"
          ]
          Sokoto.forEach(SokotolocalGovernment => {
          selectLocal.innerHTML += `<option value='${SokotolocalGovernment}'>${SokotolocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Taraba"){
        let Taraba =[
            "Ardo-kola",
            "Bali",
            "Donga",
            "Gashaka",
            "Cassol",
            "Ibi",
            "Jalingo",
            "Karin-Lamido",
            "Kurmi",
            "Lau",
            "Sardauna",
            "Takum",
            "Ussa",
            "Wukari",
            "Yorro",
            "Zing"
          ]
          Taraba.forEach(TarabalocalGovernment => {
          selectLocal.innerHTML += `<option value='${TarabalocalGovernment}'>${TarabalocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Yobe"){
        let Yobe =[
            "Bade",
            "Bursari",
            "Damaturu",
            "Fika",
            "Fune",
            "Geidam",
            "Gujba",
            "Gulani",
            "Jakusko",
            "Karasuwa",
            "Karawa",
            "Machina",
            "Nangere",
            "Nguru Potiskum",
            "Tarmua",
            "Yunusari",
            "Yusufari"
          ]
          Yobe.forEach(YobelocalGovernment => {
          selectLocal.innerHTML += `<option value='${YobelocalGovernment}'>${YobelocalGovernment}</option>`
            })

      }
      else if(e.target.value === "Zamfara"){
        let Zamfara =[
            "Anka",
            "Bakura",
            "Birnin Magaji",
            "Bukkuyum",
            "Bungudu",
            "Gummi",
            "Gusau",
            "Kaura",
            "Namoda",
            "Maradun",
            "Maru",
            "Shinkafi",
            "Talata Mafara",
            "Tsafe",
            "Zurmi"
          ]
          Zamfara.forEach(ZamfaralocalGovernment => {
          selectLocal.innerHTML += `<option value='${ZamfaralocalGovernment}'>${ZamfaralocalGovernment}</option>`
            })
      }            
    

    })
}
 
//  function displayStateLocalGovernment(e){
 
//   }