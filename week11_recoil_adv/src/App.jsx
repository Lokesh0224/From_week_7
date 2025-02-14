import {RecoilRoot, useRecoilState, useRecoilValue} from 'recoil'
import { messagingAtom, networkAtom, jobsAtom, notificationAtom } from './atom'

function App(){
  
  return <div>
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  </div>
}

function MainApp(){

  const networkNotificationCount= useRecoilValue(networkAtom)
  const jobsAtomCount= useRecoilValue(jobsAtom)
  const notificationsAtomCount= useRecoilValue(notificationAtom)
  const [messagingAtomCount, setmessagingAtomCount]= useRecoilState(messagingAtom)//here useRecoilState because its like useState , 
  //if you want to update the value use useRecoilState hook, useRecoilValue is used to get the value                                                                                //which will return us the value and return the fn which will update the value
  //useSetRecoilState is used to update the value but no need of rerendering 
  return <div>
    <button>Home</button>
    <button>My Network ({networkNotificationCount >=100 ? "99+": networkNotificationCount})</button>
    <button>Jobs ({jobsAtomCount})</button>
    <button>Messaging ({messagingAtomCount})</button>
    <button>Notifications ({notificationsAtomCount})</button>

    <button onClick={()=>{setmessagingAtomCount(c=>c+1)}}>Me </button>
  </div>
}

export default App