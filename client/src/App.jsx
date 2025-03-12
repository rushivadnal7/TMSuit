import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import { ThemeProvider } from 'styled-components'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import SingleBlog from './pages/SingleBlog'
import RemoteTeam from './pages/products/RemoteTeam'
import Payroll from './pages/products/Payroll'
import ProjectManagement from './pages/products/ProjectManagement'
import Hrmanagament from './pages/products/Hrmanagament'
import TimeTracking from './pages/products/TimeTracking'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/blog',
      element: <Blog />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/pricing',
      element: <Pricing />,
    },
    {
      path: '/blog/:blogtitle',
      element: <SingleBlog />,
    },
    {
      path: '/remote-team-management',
      element: <RemoteTeam />,
    },
    {
      path: '/payroll-management',
      element: <Payroll />,
    },
    {
      path: '/project-management',
      element: <ProjectManagement />,
    },
    {
      path: '/hr-management',
      element: <Hrmanagament />,
    },
    {
      path: '/time-tracking',
      element: <TimeTracking/>,
    },
  ])

  const size = {
    xs: '400px', // for small screen mobile
    sm: '600px', // for mobile screen
    md: '900px', // for tablets
    lg: '1380px', // for laptops
    xl: '1440px', // for desktop / monitors
    xxl: '1920px', // for big screens
  }

  const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(max-width: ${size.xl})`,
    xxl: `(max-width: ${size.xxl})`,
  }
  return (
    <>
      <ThemeProvider theme={device}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
