const app = new Vue ({
   
   el: '#app',
   
   data: {
      
      contacts: [
         {
             name: 'Michele',
             avatar: '_1',
             visible: true,
             messages: [
                {
                 date: '10/01/2020 15:30:55',
                 message: 'Hai portato a spasso il cane?',
                 status: 'sent'
                },
                 {
                     date: '10/01/2020 15:50:00',
                     message: 'Ricordati di dargli da mangiare',
                     status: 'sent'
                 },
                 {
                     date: '10/01/2020 16:15:22',
                     message: 'Tutto fatto!',
                     status: 'received'
                 }
             ],
         },
         {
             name: 'Fabio',
             avatar: '_2',
             visible: true,
             messages: [{
                 date: '20/03/2020 16:30:00',
                 message: 'Ciao come stai?',
                 status: 'sent'
             },
                 {
                     date: '20/03/2020 16:30:55',
                     message: 'Bene grazie! Stasera ci vediamo?',
                     status: 'received'
                 },
                 {
                     date: '20/03/2020 16:35:00',
                     message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                     status: 'received'
                 }
             ],
         },
         {
             name: 'Samuele',
             avatar: '_3',
             visible: true,
             messages: [{
                 date: '28/03/2020 10:10:40',
                 message: 'La Marianna va in campagna',
                 status: 'received'
             },
                 {
                     date: '28/03/2020 10:20:10',
                     message: 'Sicuro di non aver sbagliato chat?',
                     status: 'sent'
                 },
                 {
                     date: '28/03/2020 16:15:22',
                     message: 'Ah scusa!',
                     status: 'received'
                 }
             ],
         },
         {
             name: 'Luisa',
             avatar: '_4',
             visible: true,
             messages: [
               {
               date: '10/01/2020 15:30:55',
               message: 'Lo sai che ha apertouna nuova pizzeria?',
               status: 'sent'
               },
               {
                  date: '10/01/2020 15:50:00',
                  message: 'Si, ma preferirei andare al cinema',
                  status: 'received'
               }
             ],
         },
      ],
      userActive: 0,
      newMessage: '',
   },
   methods: {
      displayUser(index){
         this.userActive = index;
      },
      addMessage(){
         const d = new Date();

         const newSMS = 
         {
            date: d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(),
            message: '',
            status: 'sent'
         };
         console.log(newSMS);
         newSMS.message = this.newMessage.trim();

         if(newSMS.message.length > 0){
            this.contacts[this.userActive].messages.push(newSMS);
            console.log(this.contacts[this.userActive].messages);
            this.newMessage = '';
         }
      }
   }
})
