import Admin from "./pages/Admin";
import Article from "./pages/Article";
import Auth from "./pages/Auth";
import Exch from "./pages/Exch";
import Main from "./pages/Main";
import News from "./pages/News";
import Profile from "./pages/Profile";
import { ADMIN_ROUTE, ARTICLE_ROUTE, EXCH_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, NEWS_ROUTE, PROFILE_ROUTE, REGISTARTION_ROUTE } from "./utils/consts";


export const authRoutes = [
    {
      path: ADMIN_ROUTE,
      Component: Admin
    },
    {
      path: PROFILE_ROUTE,
      Component: Profile
    }
  ];
  

export const publicRoutes=[
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTARTION_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: NEWS_ROUTE,
        Component: News
    },
    {
        path: ARTICLE_ROUTE + '/:id',
        Component: Article
    },
    {
        path: EXCH_ROUTE,
        Component: Exch
    },

]