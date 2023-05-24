// import {
//   NovuProvider,
//   PopoverNotificationCenter,
//   NotificationBell,
//   IMessage,
// } from "@novu/notification-center";

// function NovuBell() {
//   function onNotificationClick(message) {
//     // your logic to handle the notification click
//     if (message?.cta?.data?.url) {
//       window.location.href = message.cta.data.url;
//     }
//   }

//   return (
//     <NovuProvider
//       subscriberId={"USER_ID"}
//       applicationIdentifier={"APP_ID_FROM_ADMIN_PANEL"}
//     >
//       <PopoverNotificationCenter onNotificationClick={onNotificationClick}>
//         {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
//       </PopoverNotificationCenter>
//     </NovuProvider>
//   );
// }

// export default NovuBell
