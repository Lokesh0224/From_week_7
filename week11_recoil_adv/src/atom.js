import { atom , selector} from 'recoil'

export const networkAtom= atom ({
    key:"NetworkAtom", 
    default: 102
})

export const jobsAtom= atom ({
    key:"JobsAtom", 
    default: 0
}) 

export const notificationAtom= atom ({
    key:"NotificationAtom", 
    default: 12
})

export const messagingAtom= atom ({
    key:"MessagingAtom", 
    default: 0
})

//selectors are derived from other atoms or even other selectors 
export const totalNotificationSelector= selector({
    key: 'totalNotificationCountSelector', 
    get:({get})=>{//this value is a function which gives you access to the get object
        const networkAtomCount= get(networkAtom)
        const jobsAtomCount= get(jobsAtom)
        const notificationAtomCount= get(notificationAtom)
        const messagingAtomCount= get(messagingAtom)

        return networkAtomCount + jobsAtomCount + notificationAtomCount + messagingAtomCount

    } 
})

