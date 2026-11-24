import { createBrowserRouter } from 'react-router'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { HomePage } from '@/pages/HomePage'
import { MenuPage } from '@/pages/MenuPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

/**
 * Home (/) is a long scrolling page whose sections are reached with hash links (/#branches…);
 * /menu is the full menu (/menu#hot-coffee…). useScrollToHash handles hash scrolling.
 * Add new routes here as children of SiteLayout.
 */
export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'menu', element: <MenuPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
