import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Group9HCIUIDesignThree = React.lazy(
  () => import("pages/Group9HCIUIDesignThree"),
);
const Group9HCIUIDesignOne = React.lazy(
  () => import("pages/Group9HCIUIDesignOne"),
);
const Group9HCIUIDesignFive = React.lazy(
  () => import("pages/Group9HCIUIDesignFive"),
);
const Group9HCIUIDesignFour = React.lazy(
  () => import("pages/Group9HCIUIDesignFour"),
);
const CoursesOpenPageDesktop = React.lazy(
  () => import("pages/CoursesOpenPageDesktop"),
);
const Group9HCIUIDesignTwo = React.lazy(
  () => import("pages/Group9HCIUIDesignTwo"),
);
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/group9hciuidesigntwo"
            element={<Group9HCIUIDesignTwo />}
          />
          <Route
            path="/coursesopenpagedesktop"
            element={<CoursesOpenPageDesktop />}
          />
          <Route
            path="/group9hciuidesignfour"
            element={<Group9HCIUIDesignFour />}
          />
          <Route
            path="/group9hciuidesignfive"
            element={<Group9HCIUIDesignFive />}
          />
          <Route
            path="/group9hciuidesignone"
            element={<Group9HCIUIDesignOne />}
          />
          <Route
            path="/group9hciuidesignthree"
            element={<Group9HCIUIDesignThree />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
