//THIS IS ATOM, SELECTOR , MEMO(App.jsx)

// import {RecoilRoot, useRecoilState, useRecoilValue} from 'recoil'
// import { messagingAtom, networkAtom, jobsAtom, notificationAtom, totalNotificationSelector } from './atom'

// function App(){
  
//   return <div>
//     <RecoilRoot>
//       <MainApp/>
//     </RecoilRoot>
//   </div>
// }

// function MainApp(){

//   const networkNotificationCount= useRecoilValue(networkAtom)
//   const jobsAtomCount= useRecoilValue(jobsAtom)
//   const notificationsAtomCount= useRecoilValue(notificationAtom)
//   const messagingAtomCount= useRecoilValue(messagingAtom)
//   //here useRecoilState because its like useState , 
//   //if you want to update the value use useRecoilState hook, useRecoilValue is used to get the value                                                                                //which will return us the value and return the fn which will update the value
//   //useSetRecoilState is used to update the value but no need of rerendering 
//   const totalNotificationCount=  useRecoilValue(totalNotificationSelector)

//   //instead of using selector you can also use useMemo but selector got more advantages
//   // const totalNotificationCount= useMemo(()=>{
//   //   return networkNotificationCount+ jobsAtomCount+ notificationsAtomCount+ messagingAtomCount
//   // }, [networkNotificationCount, jobsAtomCount, notificationsAtomCount,  messagingAtomCount])
//   return <div>
//     <button>Home</button>
//     <button>My Network ({networkNotificationCount >=100 ? "99+": networkNotificationCount})</button>
//     <button>Jobs ({jobsAtomCount})</button>
//     <button>Messaging ({messagingAtomCount})</button> 
//     <button>Notifications ({notificationsAtomCount})</button>

//     <button>Me {totalNotificationCount}</button>
//   </div>
// }

// export default App

//ATOM CODE(atom.js)
// import { atom , selector} from 'recoil'

// export const networkAtom= atom ({
//     key:"NetworkAtom", 
//     default: 102
// })

// export const jobsAtom= atom ({
//     key:"JobsAtom", 
//     default: 0
// }) 

// export const notificationAtom= atom ({
//     key:"NotificationAtom", 
//     default: 12
// })

// export const messagingAtom= atom ({
//     key:"MessagingAtom", 
//     default: 0
// })

// //selectors are derived from other atoms or even other selectors 
// export const totalNotificationSelector= selector({
//     key: 'totalNotificationCountSelector', 
//     get:({get})=>{//this value is a function which gives you access to the get object
//         const networkAtomCount= get(networkAtom)
//         const jobsAtomCount= get(jobsAtom)
//         const notificationAtomCount= get(notificationAtom)
//         const messagingAtomCount= get(messagingAtom)

//         return networkAtomCount + jobsAtomCount + notificationAtomCount + messagingAtomCount

//     } 
// })


