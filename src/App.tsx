import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLayout } from "@/components/layout/page-layout";
import { EinfuehrungPage } from "@/pages/einfuehrung";
import { ContentPage } from "@/pages/content-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<EinfuehrungPage />} />
          <Route
            path="/aufgaben"
            element={
              <ContentPage
                key="aufgaben"
                title="Aufgabenbeschreibung und Zielsetzung"
                subtitle="Ziele und Anforderungen"
                contentKey="aufgaben"
                pageNumber={2}
              />
            }
          />
          <Route
            path="/analyse"
            element={
              <ContentPage
                key="analyse"
                title="Analyse und Planung"
                subtitle="Vorgehensweise und Arbeitsschritte"
                contentKey="analyse"
                pageNumber={3}
              />
            }
          />
          <Route
            path="/durchfuehrung"
            element={
              <ContentPage
                key="durchfuehrung"
                title="Durchführung"
                subtitle="Umsetzung und Herausforderungen"
                contentKey="durchfuehrung"
                pageNumber={4}
              />
            }
          />
          <Route
            path="/auswertung"
            element={
              <ContentPage
                key="auswertung"
                title="Auswertung und Reflexion"
                subtitle="Ergebnisse und Erkenntnisse"
                contentKey="auswertung"
                pageNumber={5}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
