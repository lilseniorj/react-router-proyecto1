import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./Menu";
import { AuthProvider, AuthRoute } from "./auth";
import { BlogPage } from "./BlogPage";
import { HomePage } from "./HomePage";
import { ProfilePage } from "./ProfilePage";
import { BlogPost } from "./BlogPost";
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";

// /#/ -> Home
// /#/blog
// /#/profile
// /#/lalalala -> not found
// /blog, /lalalala -> Home

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>

            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            />

            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
