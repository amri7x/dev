import { createBrowserRouter, RouterProvider } from "react-router"
import { CustomErrorBoundary } from "./components/CustomErrorBoundary"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { VansV8, loader as vansLoader } from "./pages/Vans/VansV8"
import { VanDetailV8, loader as vanDetailV8 } from "./pages/Vans/VanDetailV8"
import { Dashboard } from "./pages/Host/Dashboard"
import { Income } from "./pages/Host/Income"
import { HostVansV8, loader as hostVansLoader } from "./pages/Host/HostVansV8"
import { HostVanDetailV8, loader as hostVanDetailLoader } from "./pages/Host/HostVanDetailV8"
import { HostVanDescription } from "./pages/Host/HostVanDescription"
import { HostVanPhotos } from "./pages/Host/HostVanPhotos"
import { HostVanPricing } from "./pages/Host/HostVanPricing"
import { Reviews } from "./pages/Host/Reviews"
import { HostLayout } from "./components/HostLayout"

import "./server"

const router = createBrowserRouter([{
  element: <Layout />,
  children: [
    {path: "/", element: <Home />},
    {path: "about", element: <About />},
    {
      path: "vans",
      children: [
        {
          index: true,
          element: <VansV8 />,
          loader: vansLoader,
          errorBoundary: CustomErrorBoundary,
        },
        {
          path: ":id", 
          element: <VanDetailV8 />,
          loader: vanDetailV8,
          errorBoundary: CustomErrorBoundary,
        }
      ]
    },
    {
      path: "host",
      element: <HostLayout />,
      children: [
        {index: true, element: <Dashboard />},
        {path: "income", element: <Income />},
        {
          path: "vans", 
          element: <HostVansV8 />,
          loader: hostVansLoader,
          errorBoundary: CustomErrorBoundary,
        },
        {
          path: "vans/:id",
          element: <HostVanDetailV8 />,
          loader: hostVanDetailLoader,
          errorBoundary: CustomErrorBoundary,
          children: [
            {index: true, element: <HostVanDescription />},
            {path: "pricing", element: <HostVanPricing />},
            {path: "photos", element: <HostVanPhotos />},
          ]
        },
        {path: "reviews", element: <Reviews />}
      ]
    }
  ]
}])

export const AppV8 = () => {
  return(
    <RouterProvider 
        router={router}
        hydrateFallbackElement={<p>Loading apps....</p>}
    />
  )
}