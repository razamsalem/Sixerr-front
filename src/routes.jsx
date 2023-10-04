import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { CarIndex } from './pages/CarIndex.jsx'
import { ReviewIndex } from './pages/ReviewIndex.jsx'
import { ChatApp } from './pages/Chat.jsx'
import { AdminApp } from './pages/AdminIndex.jsx'
import { SurveyIndex } from './pages/SurveyIndex.jsx'
import { GigIndex } from './pages/GigIndex.jsx'
import { GigDetails } from './pages/GigDetails.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home',
        shouldRender: true
    },
    {
        path: 'gig',
        component: <GigIndex />,
        label: 'Explore',
        shouldRender: true
    },
    {
        path: `gig/:gigId`,
        component: <GigDetails />,
        shouldRender: false
    },
    // {
    //     path: 'survey',
    //     component: <SurveyIndex />,
    //     label: 'Take our survey'
    // },
    // {
    //     path: 'car',
    //     component: <CarIndex />,
    //     label: 'Cars'
    // },
    // {
    //     path: 'review',
    //     component: <ReviewIndex />,
    //     label: 'Reviews'
    // },
    // {
    //     path: 'chat',
    //     component: <ChatApp />,
    //     label: 'Chat'
    // },
    // {
    //     path: 'about',
    //     component: <AboutUs />,
    //     label: 'About us'
    // },
    // {
    //     path: 'admin',
    //     component: <AdminApp />,
    //     label: 'Admin Only'
    // }
]

export default routes