  //preview multiple images upload on the browser
  $(document).ready(function() {
    if (window.File && window.FileList && window.FileReader) {
      $("#files").on("change", function(e) {
        var files = e.target.files,
          filesLength = files.length;
        for (var i = 0; i < filesLength; i++) {
          var f = files[i]
          var fileReader = new FileReader();
          fileReader.onload = (function(e) {
            var file = e.target;
            $("<span class=\"pip\">" +
              "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
              "<br/><span class=\"remove\">Delete</span>" +
              "</span>").insertAfter("#files");
            $(".remove").click(function(){
              $(this).parent(".pip").remove();
            });
            
          });
          fileReader.readAsDataURL(f);
        }
        console.log(files);
      });
    } else {
      alert("Your browser doesn't support to File API")
    }
  });
  
  //this handles the both change event to display form to post adds
      let Property  =  document.getElementsByClassName("property")[0]
  
      const addProperty = document.getElementById('addProperty');
      addProperty.addEventListener('change', function(e){
          if(e.target.value === "property"){
            Property.classList.remove('d-none')
          }
          else{
              Property.classList.add('d-none')
  
          }

          if(!Property.classList.contains('d-none')){
            //type of property handler
          document.getElementById("propertyType").addEventListener('change',displayPropertyType)
  
      }
      })
  
      //display state local governement function
      document.getElementById("selectState").addEventListener('change',displayStateLocalGovernment)
  
      function displayPropertyType(e){
        let subPropertType = '' 
  
        //get select element 
        let SelectElement = document.querySelector("#subType")
            SelectElement.innerHTML = ''
  
            SelectElement.innerHTML = `<option value=''>--Select--</option>`
          if(e.target.value === 'coWorkingSpace'){
              // document.getElementById('land-size-description').style.display = 'block'
             
               subPropertType = ["Conference  Room", "Desk", "Meeting Room", "Private Office", "Workstation"]
               subPropertType.forEach(workspace => {
                SelectElement.innerHTML += `<option value='${workspace}'>${workspace}</option>`
              })
              
          }
          
          else if(e.target.value === 'commercialProperty'){
            subPropertType = ["Church", "Event Center", "Factory", "Filling Station", "Hotel/Guest House","Office Space","School","Shop","Shop in a Mall",,"Show Room","Tank Farm", "Warehouse"]
            subPropertType.forEach(commercialProperty => {
             
                SelectElement.innerHTML += `<option value='${commercialProperty}'>${commercialProperty}</option>`
              })
          }
          else if(e.target.value === 'FlatApartment'){
            subPropertType = ["Boys Quarters", "Mini-flat", "Penthouse", "Self Contain", "Shared Apartment","Studio Apartment"]
            subPropertType.forEach(commercialProperty => {
             
                SelectElement.innerHTML += `<option value='${commercialProperty}'>${commercialProperty}</option>`
              })
  
          }
          else if(e.target.value === 'House'){
            subPropertType = ["Blocks Of Flats", "Detached Bungalow", "Detached  Duplex", "Masionette", "Semi Detached Bungalow","Semi Detached Duplex","Terraced Bungalow","Terraced Duplex"]
            subPropertType.forEach(commercialProperty => {
             
                SelectElement.innerHTML += `<option value='${commercialProperty}'>${commercialProperty}</option>`
              })
  
          }
          else if(e.target.value === 'Land'){
            subPropertType = ["Commercial Land", "Industrial Land", "Joint - Venture Land", "Mix-Used Land", "Residential Land","Serviced Residential Land"]
            subPropertType.forEach(commercialProperty => {
             
                SelectElement.innerHTML += `<option value='${commercialProperty}'>${commercialProperty}</option>`
              })
  
          }
      }
  
      function displayStateLocalGovernment(e){
        let stateLocal = '' 
  
     //get select element 
      let selectLocal = document.querySelector("#selectLocal")
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
                //get sub area in local government     
            document.querySelector("#selectLocal").addEventListener('change',getSubLocalgovernmentAreaInLagos)

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
                //event listener for ogun state sub localgovernment area
                document.querySelector("#selectLocal").addEventListener('change',getSubLocalgovernmentAreaInOgun)
    
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
        
      }

      //Ogun state sub local government area starts here
      function getSubLocalgovernmentAreaInOgun(e){
        let selectArea = document.querySelector("#selectAreaName")
        selectArea.innerHTML = ''
        selectArea.innerHTML = `<option value=''>--  Select--</option>`
        if(e.target.value === 'Abeokuta'){
          //get local  government area here
          let AbeokutaArea =  [
            "Adatan",
            "Adigbe",
            "Ago Ika",
            "Ago Oko",
            "Alabata",
            "Apakila",
            "Asero",
            "Eleweran",
            "Idi Aba",
            "Ijeun Titun",
            "Ikerekodo",
            "Ilugun",
            "Isale Ake",
            "Isale Ijeun",
            "Ita Eko",
            "Ita Ika",
            "Itoko",
            "Itoku",
            "Iyana Mortuary",
            "Kotopo",
            "Kuto",
            "Mawuko",
            "Ojeere",
            "Oke Ijeun",
            "Oke Mosan",
            "Oke Saje",
            "Omida",
            "Somorin",
            "Totoro",
          ]
          AbeokutaArea.forEach(AreaName => {
            selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
            })

        }
        if(e.target.value === 'Ado-Odo/Ota'){
          //get local  government area here
          let AdoOdoOta =  [
            "Abebi/Okesuna",
            "Adalemo",
            "Afowobaje Estate/Agbala Obanibasiri",
            "Akilo Quarters",
            "Erinko",
            "Idiroko",
            "Ijamido",
            "Ijana Qtrs/ Oke Oyinbo/ Mefun",
            "Jibowu (Ota)",
            "Iloje",
            "Joju",
            "Ketere",
            "New Iyanru",
            "Obasanjo Farm",
            "Ojabi Quarters",
            "Oruba Qtrs",
            "Ota GRA",
            "Ota-Idiroko road/Tomori",
            "Pilo",
            "Sango Ota",
          ]
          AdoOdoOta.forEach(AreaName => {
            selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
            })

        }
        if(e.target.value === 'Agbara-Igbesa'){
          //get local  government area here
          let AgbaraIgbesa =  [
            "Agbara",
          ]
          AgbaraIgbesa.forEach(AreaName => {
            selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
            })

        }
        if(e.target.value === 'Arepo'){
          //get local  government area here
          let Arepo =  [
            "Arepo",
          ]
          Arepo.forEach(AreaName => {
            selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
            })

        }
        if(e.target.value === 'Ewekoro'){
          //get local  government area here 
          let Ewekoro =  [
            "Abese",
            "Abule Ado",
            "Papalanto",
          ]
          Ewekoro.forEach(AreaName => {
            selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
            })

        }
        if(e.target.value === 'Ifo'){
          //get local  government area here 
          let Ifo =  [
            "Agbado",
            "Ifo",
            "Ojoolu",
          ]
          Ifo.forEach(AreaName => {
            selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
            })

        }
        if(e.target.value === 'Ijebu'){
          //get local  government area here 
          let Ijebu =  [
            "Ijebu East",
            "Ijebu North",
            "Ijebu North East",
            "Ijebu Ode",
          ]
          Ijebu.forEach(AreaName => {
            selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
            })

        }
        if(e.target.value === 'Obafemi-Owode'){
          //get local  government area here 
          let ObafemiOwode =  [
            "Ajebo",
            "Ajuru",
            "Alapa Kooni",
            "Ibafo",
            "Kajola",
            "Magboro",
            "Makoloki",
            "Makoloki Asipa",
            "Mowe",
            "Oba",
            "Ofada",
            "Ogunmakin",
            "Onidunnu",
          ]
          ObafemiOwode.forEach(AreaName => {
            selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
            })

        }
        if(e.target.value === 'Odogbolu'){
          //get local  government area here 
          let Odogbolu =  [
            "Alekunifesowapo",
            "Leguru",
          ]
          Odogbolu.forEach(AreaName => {
            selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
            })

        }
        if(e.target.value === 'Ogun Waterside'){
          //get local  government area here 
          let OgunWaterside =  [
            "Abigi",
            "Ijebu Manuwa",
            "Iwopin",
            "Ode Omi",
          ]
          OgunWaterside.forEach(AreaName => {
            selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
            })

        }
        if(e.target.value === 'Remo North'){
          //get local  government area here 
          let OgunWaterside =  [
            "Ikenne",
            "Ipokia",
            "Isala",
            "Ode Remo",
          ]
          OgunWaterside.forEach(AreaName => {
            selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
            })

        }
        if(e.target.value === 'Shagamu'){
          //get local  government area here 
          let OgunWaterside =  [
            "Shagamu",
            "Ode Remo",
          ]
          OgunWaterside.forEach(AreaName => {
            selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
            })

        }
        if(e.target.value === 'Yewa'){
          //get local  government area here 
          let OgunWaterside =  [
            "Imekan Afo",
            "Yewa North",
            "Yewa South",
          ]
          OgunWaterside.forEach(AreaName => {
            selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
            })

        }
      }
      //Ogun state sub local government area starts here


    //lagos state sub local government area starts here
      function getSubLocalgovernmentAreaInLagos(e){
        let selectArea = document.querySelector("#selectAreaName")
        selectArea.innerHTML = ''
        selectArea.innerHTML = `<option value=''>--  Select--</option>`
        
        if(e.target.value === 'Agege'){
   
            //get local  government area here
            let agegeArea =  [
                "Agbotikuyo",
                "Capitol",
                "Cement",
                "Dopemu",
                "Fagba",
                "Idi Oro",
                "Ifako",
                "Iju",
                "Iju-Ishaga",
                "LSDPC estate",
                "Mulero",
                "ke-Odo",
                "Oko oba",
                "Oko oba road",
                "Onitiri",
                "orile agege",
                "Pen cinema"
              ]
              agegeArea.forEach(AreaName => {
                selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
                })
        }
        else if(e.target.value === 'Ajeromi-Ifelodun'){
   
            //get local  government area here
            let AjeromiArea =  [
                "Aiyetoro Ajeromi",
                "Araromi Ajeromi",
                "Ashafa",
                "Dopemu",
                "Awodi",
                "Cardoso",
                "Layeni",
                "Onibaba",
                "Orodu",
                "Temdire",
                "Tolu",
              ]
              AjeromiArea.forEach(AreaName => {
                selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
                })
        }
        else if(e.target.value === 'Alimosho'){
            //get select element 
   
            //get local  government area here
            let AlimoshoArea =  [
                "Alimosho",
                "Alakuko",
                "Alagbado",
                "Ayobo",
                "Egbe",
                "Egbeda",
                "Idimu",
                "Ije Ododo",
                "Ijegun",
                "Ikotun/Igando",
                "Ipaja",
                "Iheri Olofin",
                "Okeodo",
                "Shasha",
              ]
              AlimoshoArea.forEach(AreaName => {
                selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
                })
        }
        else if(e.target.value === 'Amuwo-Odofin'){
            //get select element 
   
            //get local  government area here
            let Amuwo =[
                "Agboju",
                "Alakija",
                "Amuwo odofin",
                "Etegbin",
                "Ibese",
                "Ilado Odo",
                "Masamasa",
                "Old Ojo Road",
                "Oluti",
                "Owode",
              ]
              Amuwo.forEach(AreaName => {
                selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
                })
        }
        else if(e.target.value === 'Apapa'){
            //get select element 
   
            //get local  government area here
            let Apapa =  [
                "Abule Nla",
                "Ajegunle",
                "Apapa Quays",
                "Badia",
                "Ibafon",
                "Ijora",
                "Ijora Olopa",
                "Tincan Island",
              ]
              Apapa.forEach(AreaName => {
                selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
                })
        }
        else if(e.target.value === 'Badagry'){
            //get select element 
            //get local  government area here
            let  Badagry=  [
                "Abia",
                "Afo",
                "Agbojedo",
                "Age Mowo",
                "Agonvi",
                "Agorin",
                "Agunmo",
                "Aivoji Beach",
                "Ajido",
                "Akarakunmo",
                "Alakoto Meji",
                "Apa",
                "Aseri Owode",
                "Asipa Beach",
                "Dadi Esepe",
                "Dado",
              ]
              Badagry.forEach(AreaName => {
                selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
                })
        }
        else if(e.target.value === 'Epe'){
            //get select element 
            //get local  government area here
            let  Epe=  [
                "Epe Road",
              ]
              Epe.forEach(AreaName => {
                selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
                })
        }
        else if(e.target.value === 'Eti-Osa'){
          //get select element 
          //get local  government area here
          let  EtiOsa=  [
              "Aja",
              "Akinlade",
              "Banana Island",
              "Beecroft Point",
              "Eputu Town",
              "Ikoyi",
              "Inupa Kekere",
              "Kuramo Waters",
              "Lambasa",
              "Lekki Penninsula II",
              "Lekki Phase 1",
              "Maroko",
              "Mawpo Ijebu",
              "Mopo Onijebu",
              "Mopo-Akinladez",
              "Okunaja",
              "Sangotedo",
              "Victoria Garden City",
              "Victoria Island",
            ]
            EtiOsa.forEach(AreaName => {
              selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
              })
      }
      else if(e.target.value === 'Ibeju/Lekki'){
        //get select element 
        //get local  government area here

        let  IbejuLekki=  [
            "Akodo Ise",
            "Alatise",
            "Arapagi Oloko",
            "Eleko",
            "Eleranigbe",
            "Eluju",
            "Eputu",
            "Free Trade Zone",
            "Iberekodo",
            "Ikegun",
            "Ise town",
            "LaCampaigne Tropicana",
            "LBS",
            "Mosere Ikoga",
            "Ogogoro",
            "Okunraiye",
            "Oribanwa",
            "Origanrigan",
            "Orimedu",
          ]
          IbejuLekki.forEach(AreaName => {
            selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
            })
    }
    else if(e.target.value === 'Ifako-Ijaye'){
      //get select element 
      //get local  government area here

      let  IfakoIjaye=  [
          "Iju",
          "Obawole",
          "Ojokoro",
        ]
        IfakoIjaye.forEach(AreaName => {
          selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
          })
  }
  else if(e.target.value === 'Ikeja'){
    //get select element 
    //get local  government area here

    let  Ikeja=  [
        "Agidinbi",
        "Aguda",
        "Alausa",
        "Allen",
        "Erunkan",
        "Idi Mangoro",
        "Ikeja",
        "Ikeja Gra",
        "Ikosi Ketu",
        "Isheri",
        "Ketu",
        "Maryland",
        "Mile 12",
        "Oba Akran",
        "Ogba",
        "Ojodu",
        "Olowora",
        "Opebi",
        "Oregun",
      ]
      Ikeja.forEach(AreaName => {
        selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
        })
}
else if(e.target.value === 'Ikorodu'){
  //get select element 
  //get local  government area here
  let  Ikorodu=  [
      "Agric",
      "Akute Ajuwon",
      "Apeka",
      "Ebute",
      "Ibeshe",
      "Igbogbo",
      "Ijede",
      "Ikorodu",
      "Ipakodo",
      "Isawo",
      "Jumofak",
      "Maya",
      "Odongunyan",
    ]
    Ikorodu.forEach(AreaName => {
      selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
      })
}
else if(e.target.value === 'Kosofe'){
  //get select element 
  //get local  government area here
  let  Kosofe=  [
      "Anthony",
      "Araromi",
      "Gbagada",
      "Ifako",
      "Kosofe",
      "Mende",
      "Ogudu",
      "Ojota",
      "Oworosoki",
    ]
    Kosofe.forEach(AreaName => {
      selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
      })
}
else if(e.target.value === 'Lagos Mainland'){
  //get select element 
  //get local  government area here
  let  LagosMainland=  [
      "Abule Ijesha",
      "Adekunle",
      "Alagomeji-Yaba",
      "Ebute Metta",
      "Iwaya",
      "Makoko",
      "Onike",
      "Oyadiran Estate",
      "University of Lagos",
      "Yaba",
    ]
    LagosMainland.forEach(AreaName => {
      selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
      })
}
else if(e.target.value === 'Lagos Island'){
  //get select element 
  //get local  government area here
  let  LagosIsland=  [
      "Apongbon",
      "C.M.S",
      "Lagos Island",
      "Marina",
      "Obalende",
      "Onikan",
    ]
    LagosIsland.forEach(AreaName => {
      selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
      })
}
else if(e.target.value === 'Mushin'){
  //get select element 
  //get local  government area here
  let  Mushin=  [
      "Fadeyi",
      "Idi Oro",
      "Ilupeju",
      "Mushin",
      "Onipanu",
      "Papa Ajao",
    ]
    Mushin.forEach(AreaName => {
      selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
      })
}
else if(e.target.value === 'Ojo'){
  //get select element 
  //get local  government area here
  let  Ojo=  [
      "Ajangbadi",
      "Alaba",
      "Iba",
      "Ojo",
      "Okomaiko",
    ]
    Ojo.forEach(AreaName => {
      selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
      })
}
else if(e.target.value === 'Oshodi-Isolo'){
  //get select element 
  //get local  government area here
  let  OshodiIsolo=  [
      "Ajao Estate",
      "Ejigbo",
      "Ilasamaja",
      "Isaga Tedo",
      "Isheri Osun",
      "Isolo",
      "Mafoluku Oshodi",
      "Orile Oshodi",
      "Shogunle",
    ]
    OshodiIsolo.forEach(AreaName => {
      selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
      })
}
else if(e.target.value === 'Shomolu'){
  //get select element 
  //get local  government area here
  let  Shomolu=  [
      "Abule Okuta",
      "Akoka",
      "Igbobi",
      "Obanikoro",
      "Pedro",
      "Somolu",
    ]
    Shomolu.forEach(AreaName => {
      selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
      })
}
else if(e.target.value === 'Surulere'){
  //get select element 
  //get local  government area here
  let  Surulere=  [
      "Abulenla",
      "Alaka",
      "Animashaun",
      "Coker",
      "Idi-Araba",
      "Iganmu",
      "Ijesha Tedo",
      "Ikate",
      "Itire",
      "Lawanson",
      "Oke Ira",
      "Orile Iganmu",
      "Surulere",
    ]
    Surulere.forEach(AreaName => {
      selectArea.innerHTML += `<option value='${AreaName}'>${AreaName}</option>`
      })
      }
      //lagos state sub local government area ends here
}

//get installment poyment inputs here
let installment  = document.getElementById('installment');
     installment.addEventListener('click',function(){
  if(installment.checked === true){
    Array.from(document.querySelectorAll('.hideInstallment')).forEach(element => {
      element.style.display = "block"
    })
  }else{
    Array.from(document.querySelectorAll('.hideInstallment')).forEach(element => {
      element.style.display = "none"
    })
  }
})


     