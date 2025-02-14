import { atom } from 'recoil'

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

