import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Option1Analytics from "./pages/Option1Analytics";
import Option2Analytics from "./pages/Option2Analytics";
import Option3Analytics from "./pages/Option3Analytics";
import Option4Analytics from "./pages/Option4Analytics";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/analytics/option1" element={<Option1Analytics />} />
      <Route path="/analytics/option2" element={<Option2Analytics />} />
      <Route path="/analytics/option3" element={<Option3Analytics />} />
      <Route path="/analytics/option4" element={<Option4Analytics />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
