const app = new Vue ({
   
   el: '#app',
   
   data: {
      
      contacts: [
         {
            name: 'Elisa Dal Prete',
            avatar: '_1',
            visible: true,
            visibilityDropdown: false,
            messages: [
              {
                  date: '10/01/2020 15:50:00',
                  visibilityMessage: true,
                 message: 'Ciao Elisa! Buongiorno :)',
                 status:'sent'
              },
              {
                  date: '10/01/2020 15:50:00',
                  visibilityMessage: true,
                 message: 'Com è andata ieri sera?',
                 status: 'sent'
              },
              {
                  date: '10/01/2020 15:50:00',
                  visibilityMessage: true,
                  message: 'Ciao francii! Ieri sera è andata bene! Abbiamo fatto cenone a casa mia e dopo sono uscita! Te com’è andata? Sei a vr o belfiore? 😉',
                  status: 'received'
               },
               {
                  date: '10/01/2020 15:50:00',
                  visibilityMessage: true,
                  message: 'Dai bene, mi fa piacere :) Io sono a Belfiore, torno a vr dopo il corso',
                  status: 'sent'
               },
               {
                   date: '10/01/2020 15:50:00',
                   visibilityMessage: true,
                   message: 'Alla fine stasera ci aspettano per cena, facciamo pizzetta alle 20.45',
                   status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    visibilityMessage: true,
                    message: 'Ok ottimo! Io ora sono via con mia sorella e alle 11 mi trovo a quinzano con la vale e Tommy (coppia di Londra) a bere un caffè! Ti chiamo dopo pranzo che capiamo come organizzarci 😊',
                    status: 'received'
                 },
                 {
                     date: '10/01/2020 15:50:00',
                     visibilityMessage: true,
                     message: 'Benissimo✌🏼 Buona mattinata :)',
                     status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        visibilityMessage: true,
                        message: 'A te 👨🏻‍💻😉',
                        status: 'received'
                     },
                ],
         },
         {
             name: 'Damiano Disperati',
             avatar: '_2',
             visible: true,
             visibilityDropdown: false,
             messages: [
                 {
                     date: '20/03/2020 16:30:55',
                     visibilityMessage: true,
                     message: 'Fra stase io e Ale  e Seba ci troviamo allo show room',
                     status: 'received'
                 },
                 {
                     date: '20/03/2020 16:30:55',
                     visibilityMessage: true,
                     message: 'Per le 21:30. Vieni vero!!💪😎',
                     status: 'received'
                 },
                 {
                 date: '20/03/2020 16:30:00',
                 visibilityMessage: true,
                 message: 'Vengo a fare un salto',
                 status: 'sent'
                },
                {
                     date: '20/03/2020 16:30:55',
                     visibilityMessage: true,
                     message: 'Daje!',
                     status: 'received'
                 },
             ],
         },
         {
             name: 'Alessandro Padoan',
             avatar: '_3',
             visible: true,
             visibilityDropdown: false,
             messages: [
                 {
                 date: '28/03/2020 10:10:40',
                 visibilityMessage: true,
                 message: 'In realtà da come l ho  conosciuta è davvero una brava ragazza',
                 status: 'received'
                 },
                 {
                 date: '28/03/2020 10:10:40',
                 visibilityMessage: true,
                 message: 'c è un piccolo problema però 😅',
                 status: 'received'
                 },
                 {
                     date: '28/03/2020 10:20:10',
                     visibilityMessage: true,
                     message: 'Fidanzata? 🤦🏻‍♂️',
                     status: 'sent'
                 },
                 {
                     date: '28/03/2020 16:15:22',
                     visibilityMessage: true,
                     message: 'No, domenica parte e va 3 anni a Valencia per studio 😅',
                     status: 'received'
                 }
             ],
         },
         {
             name: 'Sonia Piccoli',
             avatar: '_4',
             visible: true,
             visibilityDropdown: false,
             messages: [{
                 date: '28/03/2020 10:10:40',
                 message: '🙈🙈🙈🙈Porca miseria, mi sono dimenticata che giovedì sera devo fare la Baby sitter ai nipoti di Pietro 😫😫 che palle! Organizzo lo stesso riunione per giovedì per chi c è e ne facciamo un altra domenica orario aperitivo?',
                 status: 'received'
                  },
                 {
                     date: '28/03/2020 10:20:10',
                     visibilityMessage: true,
                     message: 'Ok👍🏼 Si si giovedì per forza, altrimenti andiamo troppo in là',
                     status: 'sent'
                 },
                 {
                     date: '28/03/2020 16:15:22',
                     visibilityMessage: true,
                    message: 'Ok domani mattina scrivo sul gruppo🙏🏻',
                     status: 'received'
                 }
             ],
         },
         {
             name: 'Chiara Pisani',
             avatar: '_5',
             visible: true,
             visibilityDropdown: false,
             messages: [
                 {
                    date: '10/01/2020 15:50:00',
                    visibilityMessage: true,
                    message: 'Ciao Cesco! Domani se vuoi ci troviamo dopo cena al Cortez a Palù 🍻 Fammi sapere che forse conviene prenotare in base a quanti siamo',
                    status: 'received'
                 },
                 {
                     date: '10/01/2020 15:30:55',
                     visibilityMessage: true,
                     message: 'Interessante😎 Ti faccio sapere😉🤙🏼',
                     status: 'sent'
                    },
                    {
                       date: '10/01/2020 15:50:00',
                       visibilityMessage: true,
                       message: 'Ottimo! 😎',
                       status: 'received'
                    },
                ],
         },
         {
             name: 'Elisabetta',
             avatar: '_6',
             visible: true,
             visibilityDropdown: false,
             messages: [
               {
               date: '10/01/2020 15:30:55',
               visibilityMessage: true,
               message: 'Ho trovato un posto molto bello vicino Rovereto dove puoi venire con Iniziative Giovani! 😁😁😁🎊✌🏻😎😎😎',
               status: 'received'
               },
               {
                   date: '10/01/2020 15:50:00',
                   visibilityMessage: true,
                   message: 'È il Lago di Cei ✌🏻🎊😊',
                   status: 'received'
                },
                {
                   date: '10/01/2020 15:50:00',
                   visibilityMessage: true,
                   message: 'Bello!',
                   status: 'sent'
                }
             ],
         },
         {
             name: 'Elisabetta Schiesari',
             avatar: '_7',
             visible: true,
             visibilityDropdown: false,
             messages: [
               {
               date: '10/01/2020 15:30:55',
               visibilityMessage: true,
               message: '❤️W gli sposiiiiii!!!!',
               status: 'sent'
               },
               {
                  date: '10/01/2020 15:50:00',
                  visibilityMessage: true,
                  message: 'Che dire.. caro Cesco grazie infinite x ogni cosa! Il nostro “si” è anche frutto di tanto sostegno e appoggio di voi amici presenti e futuri ❤️ speriamo con il cuore di rimanere sempre così! Un abbraccio grande e grazie ancora per il dono che ci avete fatto e per esserci ♥️',
                  status: 'received'
               },
             ],
         },
         {
             name: 'Giovani FCIM',
             avatar: '_8',
             visible: true,
             visibilityDropdown: false,
             messages: [
               {
               date: '10/01/2020 15:30:55',
               visibilityMessage: true,
               message: 'Ospiti a cena 😂😂😂',
               status: 'sent'
               },
               {
                  date: '10/01/2020 15:50:00',
                  visibilityMessage: true,
                  message: '🥰🥰🥰',
                  status: 'received'
                }
             ],
         },
         {
             name: 'Veronica Trevisan',
             avatar: '_9',
             visible: true,
             visibilityDropdown: false,
             messages: [
                 {
                     date: '10/01/2020 15:50:00',
                     visibilityMessage: true,
                     message: 'Ho capito beh mi racconterai  meglio😊 noi stiamo tornando a madrid e domani mattina abbiamo il ✈️',
                     status: 'received'
                    },
                    {
                        date: '10/01/2020 15:30:55',
                        visibilityMessage: true,
                        message: 'Grandi!! Dai che dovete raccontarmi!',
                        status: 'sent'
                    },
                    {
                        date: '11/01/2020 19:50:00',
                        visibilityMessage: true,
                        message: 'Appena atterrati a bergamo✈️',
                        status: 'received'
                       },
                    {
                        date: '11/01/2020 19:50:00',
                        visibilityMessage: true,
                        message: 'Vuoi venire a cena?',
                        status: 'received'
                       },
                ],
         },
         {
             name: 'Giovanni Trevisan',
             avatar: '_10',
             visible: true,
             visibilityDropdown: false,
             messages: [
               {
               date: '10/01/2020 15:30:55',
               visibilityMessage: true,
               message: 'Buon compleanno! 🍾🍾🍾🎂😄😄',
               status: 'sent'
               },
               {
                  date: '10/01/2020 15:50:00',
                  visibilityMessage: true,
                  message: 'Grazie Brooooooo!',
                  status: 'received'
               }
             ],
         },
         {
             name: 'Anna Borile',
             avatar: '_11',
             visible: true,
             visibilityDropdown: false,
             messages: [
                 {
                    date: '10/01/2020 15:50:00',
                    visibilityMessage: true,
                    message: 'Buonaseraaaaaa',
                    status: 'received'
                 },
                 {
                    date: '10/01/2020 15:50:00',
                    visibilityMessage: true,
                    message: 'Quando mi chiami??',
                    status: 'received'
                 },
               {
               date: '10/01/2020 15:30:55',
               visibilityMessage: true,
               message: 'Sentiamoci in serata',
               status: 'sent'
               },
               {
                  date: '10/01/2020 15:50:00',
                  visibilityMessage: true,
                  message: 'Finisco alle 00:00',
                  status: 'received'
               },
               {
                  date: '10/01/2020 15:50:00',
                  visibilityMessage: true,
                  message: 'Mandami audio ceh ascolto tra una pausa e l altra',
                  status: 'received'
               },
               {
                  date: '10/01/2020 15:50:00',
                  visibilityMessage: true,
                  message: 'Ti aggiorno Comunque su quello che vuole fare la mia amica',
                  status: 'received'
               },
             ],
         },
         {
             name: 'Yuri',
             avatar: '_12',
             visible: true,
             visibilityDropdown: false,
             messages: [
                 {
                    date: '10/01/2020 15:50:00',
                    visibilityMessage: true,
                    message: 'Ciao fra, fammi sapere se alla fine stasera si fa. Io ora vado a casa e ho un webinar con l’università fino alle 19:30 circa, poi mangio e posso spostarmi però farei fatica in città perché comunque voglio tornare presto che domattina 6:30 devo partire alla volta di Treviso. Attendo info quando sai il da farsi, ciao',
                    status: 'received'
                 },
               {
               date: '10/01/2020 15:30:55',
               visibilityMessage: true,
               message: '21.30 chiamata telefonica',
               status: 'sent'
               },
               {
                   date: '10/01/2020 15:50:00',
                   visibilityMessage: true,
                   message: 'Si, ma preferirei andare al cinema',
                   status: 'received'
                },
                {
                date: '10/01/2020 15:30:55',
                visibilityMessage: true,
                message: 'Yes!',
                status: 'sent'
                },
             ],
         },
         {
             name: 'Luca Centurioni',
             avatar: '_13',
             visible: true,
             visibilityDropdown: false,
             messages: [
               {
               date: '10/01/2020 15:30:55',
               visibilityMessage: true,
               message: 'ciao cesco scusa per l ora. grazie mille ancora per l invito ma alla fine domani ho il gruppo adolescenti',
               status: 'received'
            },
            {
                date: '10/01/2020 15:30:55',
                visibilityMessage: true,
                message: 'ci vediamo alla prossima o mal che vada all incontro di fine mese 😉',
                status: 'received'
            },
               {
                   date: '10/01/2020 15:50:00',
                   visibilityMessage: true,
                  message: 'Ok contaci!',
                   status: 'sent'
               }
             ],
         },
         {
             name: 'Miriam Perazzolo',
             avatar: '_14',
             visible: true,
             visibilityDropdown: false,
             messages: [
                 {
                    date: '10/01/2020 15:50:00',
                    visibilityMessage: true,
                    message: ' Ciao Francesco!☺️🌸 Come stai?☺️Java? Mi hanno chiesto se facciamo anche quest anno il corso Ad amare si impara🤗ho cercato sul sito dell INER, ho visto che ne era partito uno all inizio di ottobre, però non ho visto dove né ne se ne fanno altri in primavera, tu che sicuramente sai più di me, ne sai qualcosa?☺️🌸',
                    status: 'received'
                 },
               {
               date: '10/01/2020 15:30:55',
               visibilityMessage: true,
               message: 'Ciao, sentiamoci📞, dopo le 13:00',
               status: 'sent'
               },
             ],
         },
         {
             name: 'Matteo Lucco',
             avatar: '_15',
             visible: true,
             visibilityDropdown: false,
             messages: [
                 {
                    date: '10/01/2020 15:50:00',
                    visibilityMessage: true,
                    message: '5 monitor tutti con gli switch da wga ad hdmi👍🏻👍🏻👍🏻',
                    status: 'received'
                 },
               {
               date: '10/01/2020 15:30:55',
               visibilityMessage: true,
               message: 'Mancano i cavi di alimentazione degli schermi però, o no?',
               status: 'sent'
               },
               {
                  date: '10/01/2020 15:50:00',
                  visibilityMessage: true,
                  message: 'Si si👍🏻👍🏻 Te li porto',
                  status: 'received'
               }
             ],
         },
         {
             name: 'Pietro Venturi',
             avatar: '_16',
             visible: true,
             visibilityDropdown: false,
             messages: [
                 {
                    date: '10/01/2020 15:50:00',
                    visibilityMessage: true,
                    message: 'Cesco ma stasera eri nel mio quartiere???',
                    status: 'received'
                 },
               {
               date: '10/01/2020 15:30:55',
               visibilityMessage: true,
               message: 'Nain',
               status: 'sent'
               },
               {
                  date: '10/01/2020 15:50:00',
                  visibilityMessage: true,
                  message: 'Bugia 🤥',
                  status: 'received'
               },
               {
               date: '10/01/2020 15:30:55',
               visibilityMessage: true,
               message: 'Non ero lì stasera, ero lì stamattina',
               status: 'sent'
               },
               {
               date: '10/01/2020 15:30:55',
               visibilityMessage: true,
               message: 'Perchè?',
               status: 'sent'
               },
               {
                  date: '10/01/2020 15:50:00',
                  visibilityMessage: true,
                  message: 'E non mi dici niente?? È sotto casa mia!',
                  status: 'received'
               },

               {
               date: '10/01/2020 15:30:55',
               visibilityMessage: true,
               message: 'L ho deciso all ultimo',
               status: 'sent'
               },
               {
               date: '10/01/2020 15:30:55',
               visibilityMessage: true,
               message: 'Sono in città da Briggi',
               status: 'sent'
               },
               {
               date: '10/01/2020 15:30:55',
               visibilityMessage: true,
               message: 'Perché a casa mia sono tutti in quarantena',
               status: 'sent'
               },
               {
               date: '10/01/2020 15:30:55',
               visibilityMessage: true,
               message: 'Mio nipote è positivo',
               status: 'sent'
               },
               {
                  date: '10/01/2020 15:50:00',
                  visibilityMessage: true,
                  message: 'Ma dai',
                  status: 'received'
               },
               {
               date: '10/01/2020 15:30:55',
               visibilityMessage: true,
               message: 'Ho deciso di venire lì perché conosco la Elisa',
               status: 'sent'
               },
               {
                  date: '10/01/2020 15:50:00',
                  visibilityMessage: true,
                  message: 'Prox volta avvisami che ci vediamo',
                  status: 'received'
               },
               {
               date: '10/01/2020 15:30:55',
               visibilityMessage: true,
               message: 'Se c eri ti salutavo👍🏼',
               status: 'sent'
               },
               {
                  date: '10/01/2020 15:50:00',
                  visibilityMessage: true,
                  message: 'Elisa delprete?',
                  status: 'received'
               },
               {
                   date: '10/01/2020 15:50:00',
                   visibilityMessage: true,
                   message: 'Io non c’ero ..mi hanno riferito',
                   status: 'received'
                },
                {
                    date: '10/01/2020 15:30:55',
                    visibilityMessage: true,
                    message: 'dAlprete',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    visibilityMessage: true,
                    message: 'Carina lei 😏',
                    status: 'received'
                 },
            ],
         },
      ],
      userActive: 0,
      messageDelete: -1,               
      visibilityDropdown: -1,
      newMessage: '',
      searchUser: '',
      word: [],
   },
    methods: {

        // Funzione per eliminare la schermata di inizio e per definire quale contatto deve essere "active" e quindi visualizzabile
        displayUser(index){
         this.userActive = index;
         const windowStart = document.querySelector('.schermata-inizio');
         windowStart.classList.add('hide');
        },

        // Funzione per aggiungere un nuovo messaggio tramite barra input in basso alla pagina
        addMessage(){
            
            // const d = new Date();
        const newSMS = 
        {
            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            // date: d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(),
            message: this.newMessage.trim(),
            status: 'sent'
        };
        
        // Controllo di validità (oltre al 'trim' già inserito)
        if(newSMS.message.length > 0){
            this.contacts[this.userActive].messages.push(newSMS);
            this.newMessage = '';
        };
        
        // Messaggio BOT di risposta dopo un secondo: utilizzo arrow function per poter utilizzare al suo interno il "this"
        setTimeout(() =>{
            const newSmsBot = 
            {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: 'Ok :)',
                status: 'received'
            };
            this.contacts[this.userActive].messages.push(newSmsBot);
            }, 1000);
        },

        // Funzione di ricerca del nome-contatto utilizzando la proprietà includes(), valida anche per le stringhe
        searchName(){
            for (const element of this.contacts) {
                if(element.name.toUpperCase().includes(this.searchUser.toUpperCase())){
                        element.visible = true
                        }else{
                            element.visible = false  
                        };
            }
        },

        // Funzione per visualizzare i primi 30 caratteri dell'ultimo messaggio inviato dall'utente
        getLastMessage(index){
            let lastMessage = this.contacts[index].messages[this.contacts[index].messages.length - 1].message;
            if(lastMessage.length > 30){
                lastMessage = lastMessage.substr(0,30)+". . .";
            }
            return lastMessage;
        },
       
        dropdownMenu(index){
            this.visibilityDropdown = index;
        },

        deleteMessage(index){
            this.messageDelete = index -1;
        }
    }
})
//  v-for="(contact, index) in contacts"
// class="user-chat"
// :class="{'visible': messageDelete === index}"
// @click="displayUser(index)"
// v-if="contact.visible == true ? true : false">
// <img :src="`img/avatar${contact.avatar}.jpg`" alt="">

//                 :class="`dropdown_menu${contacts[userActive].avatar}${index} hide`" 
