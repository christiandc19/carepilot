import { Routes, Route } from "react-router-dom";
import Survey from "./routes/Survey";
import Result from "./routes/Result";
import NotFound from "./routes/NotFound";
import LeadCaptureForm from "./components/LeadCaptureForm";
import Embed from "./routes/Embed";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Survey />} />
      <Route path="/embed" element={<Embed />} />
      <Route path="/lead" element={<LeadCaptureForm />} />
      <Route path="/results" element={<Result />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}
