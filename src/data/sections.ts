import type { ScreenshotItem } from "@/components/ui/screenshot-gallery";

export interface ContentBlock {
  title: string;
  text: string;
  images?: ScreenshotItem[];
}

type ContentKey = "einfuehrung" | "aufgaben" | "analyse" | "durchfuehrung" | "auswertung";

export const arseniSections: Record<ContentKey, ContentBlock[]> = {
  einfuehrung: [
    {
      title: "Das Unternehmen",
      text: "Mein einj\u00e4hriges Praktikum absolviere ich bei der Firma alphanauten GmbH & Co. KG, einer Full-Service-Agentur f\u00fcr Online-Shops, Websites und Online-Marketing mit Sitz in Unna. Das Unternehmen wurde 2014 im Ruhrgebiet gegr\u00fcndet, hat sich auf digitale Markenwelten spezialisiert und besch\u00e4ftigt 18 Mitarbeiterinnen und Mitarbeiter.",
    },
    {
      title: "Das Projekt \u00abAlphaverse\u00bb",
      text: "Im Rahmen meines Praktikums bin ich als Anwendungsentwickler t\u00e4tig und arbeite aktiv an einem realen Webentwicklungsprojekt mit. Das Ziel des Projekts ist die Entwicklung einer Web-Anwendung namens \u00abAlphaverse\u00bb, die analytische Daten aus den sozialen Netzwerken der Unternehmensinhaber und Investoren \u00fcbersichtlich darstellt und auswertet.",
    },
    {
      title: "Automatisierung f\u00fcr Marketing",
      text: "Dar\u00fcber hinaus erm\u00f6glicht die Anwendung die automatisierte Planung und Ver\u00f6ffentlichung von Beitr\u00e4gen in sozialen Netzwerken \u00fcber einen integrierten Kalender. Dieses System unterst\u00fctzt insbesondere die Arbeit der Marketingabteilung, indem Prozesse automatisiert und Inhalte effizienter verwaltet werden k\u00f6nnen.",
    },
  ],
  aufgaben: [
    {
      title: "\u00dcbersicht",
      text: "In diesem Berichtszeitraum habe ich weiter an dem Projekt \u00abAlphaverse\u00bb gearbeitet. Dabei hatte ich drei Hauptaufgaben:",
    },
    {
      title: "Kalender fertigstellen",
      text: "Erstens sollte ich den Kalender fertigstellen, der in meinem letzten Bericht bereits in einer ersten Version vorhanden war. Ziel war es, den Kalender \u00fcbersichtlicher und funktionaler zu gestalten, damit die Mitarbeiterinnen und Mitarbeiter der Marketingabteilung ihre geplanten Beitr\u00e4ge in sozialen Netzwerken noch effizienter verwalten k\u00f6nnen.",
      images: [
        { src: "/Images/Kalendar.png", alt: "Kalender \u2014 Monatsansicht mit geplanten Beitr\u00e4gen" },
      ],
    },
    {
      title: "Dashboard entwickeln",
      text: "Zweitens sollte ich ein Dashboard entwickeln. Ein Dashboard ist eine \u00dcbersichtsseite, auf der wichtige Daten auf einen Blick dargestellt werden. Das Ziel des Dashboards ist es, Daten aus Google Analytics \u2014 einem Analyse-Tool von Google, das Informationen \u00fcber Besucher einer Website aufzeichnet \u2014 \u00fcbersichtlich darzustellen und auszuwerten.",
      images: [
        { src: "/Images/Line Chart with KPIs.png", alt: "Dashboard \u2014 Liniendiagramm mit KPIs" },
      ],
    },
    {
      title: "KI-Chat \u2014 eigene Idee",
      text: "Drittens entstand w\u00e4hrend der Entwicklung eine eigene Idee: ein KI-Chat (K\u00fcnstliche-Intelligenz-Chat), der mithilfe der Daten aus Google Analytics automatisch Analysen erstellt. Ziel war es, den Marketingmitarbeitern die M\u00f6glichkeit zu geben, Fragen zu Websitedaten in einfacher Sprache zu stellen und sofort eine Antwort zu erhalten.",
      images: [
        { src: "/Images/KI-Chat.png", alt: "KI-Chat \u2014 Echte Antwort auf eine Nutzerfrage" },
      ],
    },
  ],
  analyse: [
    {
      title: "Kalender \u2014 Weiterentwicklung",
      text: "Nach der Fertigstellung der Grundversion des Kalenders analysierte ich, welche Funktionen noch fehlten, um ihn vollst\u00e4ndig nutzbar zu machen. Es stellte sich heraus, dass drei verschiedene Ansichten notwendig waren: eine \u00dcbersicht \u00fcber drei Monate, eine Monatsansicht und eine detaillierte Dreitagesansicht. Au\u00dferdem musste es m\u00f6glich sein, die Details eines einzelnen Beitrags \u2014 also Text, Bilder oder Videos \u2014 direkt im Kalender anzuzeigen. Eine weitere Anforderung war eine separate Analyseseite f\u00fcr den Kalender.",
    },
    {
      title: "Dashboard \u2014 API-Analyse",
      text: "F\u00fcr das Dashboard musste zun\u00e4chst analysiert werden, welche Daten aus Google Analytics relevant sind und wie diese \u00fcber die sogenannte API (Application Programming Interface \u2014 eine Schnittstelle, \u00fcber die Programme Daten austauschen k\u00f6nnen) abgerufen werden k\u00f6nnen. Es wurde geplant, verschiedene Diagrammtypen zu verwenden, um unterschiedliche Daten optimal darzustellen.",
    },
    {
      title: "KI-Chat \u2014 Konzept",
      text: "Die Idee f\u00fcr den KI-Chat entstand spontan w\u00e4hrend der Arbeit am Dashboard, als mir auffiel, dass die gesammelten Daten sehr gut f\u00fcr eine automatische Analyse genutzt werden k\u00f6nnten. Nach Absprache mit meinem Vorgesetzten, der die Idee sehr positiv aufnahm, wurde entschieden, die OpenAI-API zu verwenden. Mein Vorgesetzter stellte mir daf\u00fcr ein Budget zur Verf\u00fcgung.",
    },
  ],
  durchfuehrung: [
    {
      title: "Drei Kalenderansichten",
      text: "Zun\u00e4chst erweiterte ich den Kalender um drei verschiedene Ansichten: eine Dreimonatsansicht f\u00fcr einen groben \u00dcberblick, eine Monatsansicht f\u00fcr die t\u00e4gliche Planung und eine Dreitagesansicht f\u00fcr eine detaillierte Betrachtung einzelner Tage. Wenn ein Nutzer auf einen Beitrag im Kalender klickt, wechselt die Ansicht automatisch zur Dreitagesansicht.",
      images: [
        { src: "/Images/Kalendar.png", alt: "Kalender \u2014 Monatsansicht" },
        { src: "/Images/Kalendar Items Info.png", alt: "Kalender \u2014 Dreitagesansicht mit Beitragsdetails" },
      ],
    },
    {
      title: "\u00abShow more\u00bb-Funktion",
      text: "Auf jedem Beitrag im Kalender gibt es nun eine Schaltfl\u00e4che mit der Aufschrift \u00abShow more\u2026\u00bb. Klickt der Nutzer darauf, \u00f6ffnet sich eine Detailkarte mit dem vollst\u00e4ndigen Text des Beitrags sowie \u2014 falls vorhanden \u2014 einem Bild oder einem Video. Eine besondere Herausforderung war, dass die Daten aus der Metricool-API je nach Beitrag unterschiedlich aufgebaut sein konnten.",
      images: [
        { src: "/Images/Kalendar Items Info.png", alt: "Beitragsdetails mit Text und Bild" },
      ],
    },
    {
      title: "Kalender-Analyse",
      text: "Zus\u00e4tzlich entwickelte ich eine separate Analyseseite mit Kennzahlen wie: N\u00e4chstgelegener Beitrag, Letzter geplanter Beitrag und Anzahl der Posts. Die Analyseseite unterst\u00fctzt dieselben Filter wie der Kalender selbst. Der Kalender ist ausschlie\u00dflich f\u00fcr Nutzer mit der Rolle \u00abSocial Manager\u00bb sichtbar.",
      images: [
        { src: "/Images/Kalendar Analyse.png", alt: "Kalender-Analyse \u2014 Statistiken und Diagramme" },
      ],
    },
    {
      title: "Dashboard mit Google Analytics",
      text: "Die Daten werden \u00fcber die Google Analytics API abgerufen. Das wichtigste Element ist ein Liniendiagramm, das den Verlauf von Daten \u00fcber die Zeit zeigt. Zus\u00e4tzlich implementierte ich: Tabellen f\u00fcr detaillierte Auflistungen, Fortschrittsbalken f\u00fcr prozentuale Vergleiche, Balkendiagramme, Kreisdiagramme und eine Deutschland-Karte, auf der die Bundesl\u00e4nder farblich markiert sind.",
      images: [
        { src: "/Images/Line Chart with KPIs.png", alt: "Liniendiagramm \u2014 KPI-Verlauf" },
        { src: "/Images/Tables with KPIs.png", alt: "Tabellen \u2014 Paid & Social Platforms" },
        { src: "/Images/Balkendiagram.png", alt: "Balkendiagramm \u2014 KPI-Vergleich" },
        { src: "/Images/PieChart.png", alt: "Kreisdiagramm \u2014 Betriebssysteme" },
        { src: "/Images/ProgressBar.png", alt: "Fortschrittsbalken \u2014 SEO-Score" },
      ],
    },
    {
      title: "KI-Chat mit OpenAI",
      text: "Ich entwickelte einen Chat, der die OpenAI-API verwendet. Der Ablauf: 1) Der Nutzer stellt eine Frage, 2) Die KI analysiert die Frage und entscheidet, welche Daten ben\u00f6tigt werden, 3) Die KI ruft die Daten direkt ab, 4) Auf Basis der Daten erstellt die KI eine vollst\u00e4ndige Antwort. Mein Vorgesetzter war begeistert und stellte das Budget zur Verf\u00fcgung.",
      images: [
        { src: "/Images/KI-Chat.png", alt: "KI-Chat \u2014 Echte Antwort mit Sitzungsdaten" },
      ],
    },
  ],
  auswertung: [
    {
      title: "Alle Ziele erreicht",
      text: "In diesem Berichtszeitraum konnte ich alle drei Ziele erfolgreich umsetzen: Der Kalender wurde vollst\u00e4ndig fertiggestellt, das Dashboard wurde entwickelt und der KI-Chat wurde als eigenst\u00e4ndige Idee erfolgreich implementiert.",
    },
    {
      title: "Herausforderung: Medientypen",
      text: "Als besonders herausfordernd empfand ich die Verarbeitung der unterschiedlichen Medientypen in den Kalender-Beitr\u00e4gen. Da ich zu Beginn nicht wusste, in welchem Format die Daten aus der Metricool-API ankommen w\u00fcrden, musste ich eine flexible L\u00f6sung entwickeln. Diese Aufgabe hat mir gezeigt, wie wichtig es ist, die Struktur der eingehenden Daten vorher genau zu analysieren.",
    },
    {
      title: "Google Analytics API",
      text: "Die Arbeit mit der Google Analytics API war ebenfalls lehrreich, da ich mich zun\u00e4chst intensiv mit der Dokumentation und den verf\u00fcgbaren Datenpunkten auseinandersetzen musste.",
    },
    {
      title: "Highlight: KI-Chat",
      text: "Am meisten Freude hat mir die Entwicklung des KI-Chats bereitet, da es eine eigene kreative Idee war. Ich habe dabei gelernt, wie man eine externe KI-API in eine bestehende Anwendung einbindet und wie KI-Modelle dynamisch mit realen Daten kombiniert werden k\u00f6nnen.",
    },
    {
      title: "Verbesserungen f\u00fcr die Zukunft",
      text: "Bei einer \u00e4hnlichen Aufgabe w\u00fcrde ich in Zukunft mehr Zeit in die Analyse der API-Datenstrukturen investieren, um Probleme wie die Frage nach den Medientypen fr\u00fcher erkennen und vermeiden zu k\u00f6nnen.",
    },
  ],
};

export const bohdanSections: Record<ContentKey, ContentBlock[]> = {
  einfuehrung: [
    {
      title: "Die Genossenschaft",
      text: "Die visibleRuhr eG ist eine 2017 gegr\u00fcndete Genossenschaft aus dem Ruhrgebiet. Ihr geh\u00f6ren mehr als f\u00fcnfzig Mitgliedsunternehmen aus den Bereichen IT, Design, Kommunikation und digitale Dienstleistungen an. Ziel der Genossenschaft ist es, die digitale Transformation in der Region voranzutreiben und die Kompetenzen verschiedener Unternehmen zu b\u00fcndeln.",
    },
    {
      title: "Der Auftrag",
      text: "Im Rahmen meines Praktikums wurde ich beauftragt, eine Webanwendung f\u00fcr die digitale Verwaltung von BarCamps zu entwickeln. Die Projektentwicklung dauerte etwa einen Monat.",
    },
    {
      title: "Was ist ein BarCamp?",
      text: "BarCamp ist ein offenes Veranstaltungsformat, bei dem die Teilnehmer das Programm selbst gestalten \u2014 ohne vorab festgelegten Plan. Die Anwendung soll die Sessions in Echtzeit anzeigen, ein Account-System mit drei verschiedenen Rollen bereitstellen und bei \u00c4nderungen automatische Benachrichtigungen versenden.",
    },
  ],
  aufgaben: [
    {
      title: "Das Problem",
      text: "Ein BarCamp ist ein besonderes Veranstaltungsformat, bei dem die Teilnehmenden selbst entscheiden, welche Themen besprochen werden. Anders als bei einer klassischen Konferenz gibt es kein fertiges Programm \u2014 alles wird zu Beginn des Tages festgelegt. Dadurch entsteht oft Verwirrung: Die Leute wissen nicht, wohin sie gehen sollen, was in welchem Raum stattfindet und ob eine Session vielleicht abgesagt wurde. Fr\u00fcher wurde all das von Hand auf Tafeln geschrieben, was bei vielen Teilnehmenden schlecht funktionierte.",
    },
    {
      title: "Die Aufgabe",
      text: "Mein Ausbildungsbetrieb stellte die Aufgabe, eine Website zu entwickeln, die dieses Problem l\u00f6st. Die wichtigsten Anforderungen waren: Jeder sollte das Programm ohne Registrierung einsehen k\u00f6nnen, und Organisatoren sowie Referenten sollten die M\u00f6glichkeit haben, Sessions zu verwalten.",
      images: [
        { src: "/Images/whatusersees.jpg", alt: "BarCamp Programm \u2014 \u00f6ffentliche Ansicht f\u00fcr Teilnehmer" },
      ],
    },
    {
      title: "Drei Benutzerrollen",
      text: "Konkret sollten drei Benutzerrollen umgesetzt werden \u2014 normaler Teilnehmer, Referent und Administrator. Ein Teilnehmer kann interessante Sessions speichern und erh\u00e4lt Benachrichtigungen. Ein Referent kann eigene Sessions erstellen und deren Status \u00e4ndern. Ein Administrator verwaltet alles \u2014 R\u00e4ume, Sessions und Benutzer.",
      images: [
        { src: "/Images/usersAdmin.jpg", alt: "Admin-Panel \u2014 Benutzerverwaltung mit Rollen" },
      ],
    },
  ],
  analyse: [
    {
      title: "Technologie-Auswahl",
      text: "Vor Beginn der Arbeit habe ich mich damit besch\u00e4ftigt, welche Werkzeuge f\u00fcr dieses Projekt geeignet sind. Die wichtigste Anforderung war Einfachheit: Die Website sollte ohne eigenen Server funktionieren, aber trotzdem in Echtzeit aktualisiert werden.",
    },
    {
      title: "Frontend: HTML, CSS, JavaScript",
      text: "F\u00fcr den sichtbaren Teil der Website habe ich HTML, CSS und JavaScript verwendet. F\u00fcr die Datenspeicherung und die Benutzeranmeldung habe ich Firebase verwendet \u2014 eine Plattform von Google, die die Rolle eines Servers \u00fcbernimmt. Sie speichert alle Daten in der Cloud und kann \u00c4nderungen sofort an alle ge\u00f6ffneten Seiten weitergeben.",
      images: [
        { src: "/Images/1firebaselogo.jpg", alt: "Firebase \u2014 Google-Plattform f\u00fcr Datenspeicherung in der Cloud" },
      ],
    },
    {
      title: "KI als Hilfsmittel",
      text: "Bei der Umsetzung nutzte ich KI-gest\u00fctzte Werkzeuge als Hilfsmittel, um einzelne Funktionen schneller zu realisieren. Die Planung, das Testen und die Fehlersuche f\u00fchrte ich dabei selbst\u00e4ndig durch.",
    },
    {
      title: "Konzept\u00e4nderung",
      text: "Zu Beginn war mir nicht sofort klar, wie die Website aufgebaut sein sollte. Zun\u00e4chst dachte ich, ein einfaches Programm ohne Anmeldesystem zu erstellen, aber dann wurde klar, dass die Website ohne Benutzerrollen keinen Sinn ergibt. Deshalb wurde das Konzept \u00fcberarbeitet: Ich begann mit dem Anmeldesystem und den Rollen und baute den Rest darauf auf.",
    },
    {
      title: "Arbeitsschritte",
      text: "Die Arbeit teilte ich in folgende Schritte auf: Planung der Datenbankstruktur, Anmeldesystem und Benutzerrollen, \u00d6ffentliche Seite mit dem Programm, Admin-Dashboard, Speaker-Dashboard, Benachrichtigungssystem, Einrichtung der Zugriffsrechte, Testen und Fehlerbehebung.",
    },
  ],
  durchfuehrung: [
    {
      title: "Datenbank aufbauen",
      text: "Ich begann mit der Datenbank. Firebase speichert Daten in sogenannten Collections. Ich legte vier solcher Collections an: Sessions, Nutzer, R\u00e4ume und Benachrichtigungen. Jede Session speichert Titel, Beschreibung, Start- und Endzeit, Raum sowie einen Status (geplant, l\u00e4uft gerade, abgesagt oder verlegt).",
      images: [
        { src: "/Images/roomsFirebase.jpg", alt: "Firebase Firestore \u2014 Rooms-Collection mit Feldern" },
      ],
    },
    {
      title: "Problem: Firebase-Verbindung",
      text: "Das erste ernsthafte Problem trat beim Verbinden von Firebase mit der Website auf. Die Website konnte die Datenbank nicht finden \u2014 nach mehreren Versuchen stellte sich heraus, dass ich die Verbindungseinstellungen falsch kopiert hatte. Nach der Korrektur funktionierte alles.",
    },
    {
      title: "Anmeldesystem & Rollen",
      text: "Der n\u00e4chste Schritt war das Anmeldesystem. Ein Nutzer registriert sich mit E-Mail und Passwort, und bei der Registrierung wird automatisch ein Profil angelegt. Die Rollen funktionierten anfangs nicht korrekt \u2014 ein Referent konnte die Sessions anderer Nutzer sehen und bearbeiten. Die Ursache lag in den Zugriffsregeln der Datenbank, die ich falsch konfiguriert hatte.",
      images: [
        { src: "/Images/registrationBar.jpg", alt: "Registrierungsformular \u2014 Name, E-Mail, Passwort" },
        { src: "/Images/usersAdmin.jpg", alt: "Admin-Panel \u2014 Rollenvergabe (User, Speaker, Admin)" },
      ],
    },
    {
      title: "\u00d6ffentliche Programmseite",
      text: "Die \u00f6ffentliche Programmseite zeigt alle Sessions in Echtzeit an. Ich habe zwei Anzeigevarianten umgesetzt \u2014 eine Tabellenansicht und eine einfache Listenansicht. W\u00e4hrend der Entwicklung habe ich das Design mehrmals \u00fcberarbeitet \u2014 die ersten Versionen sahen unordentlich aus.",
      images: [
        { src: "/Images/2opensite.jpg", alt: "BarCamp Programm \u2014 \u00f6ffentliche Ansicht mit Raumfilter" },
        { src: "/Images/3Test1.jpg", alt: "Session-Details \u2014 Popup mit Informationen zur ausgew\u00e4hlten Session" },
      ],
    },
    {
      title: "Admin-Bereich",
      text: "Die Schaltfl\u00e4chen auf der Anmeldeseite reagierten anfangs \u00fcberhaupt nicht auf Klicks. Das Problem lag darin, wie JavaScript seinen Code in Modulen organisiert \u2014 Funktionen innerhalb von Modulen sind f\u00fcr Schaltfl\u00e4chen in HTML standardm\u00e4\u00dfig nicht zug\u00e4nglich.",
      images: [
        { src: "/Images/roomadminBar 00.25.52.jpg", alt: "Admin-Panel \u2014 Raumverwaltung" },
        { src: "/Images/AdminCreatingAnEventBar.jpg", alt: "Admin erstellt eine neue Session" },
      ],
    },
    {
      title: "Benachrichtigungssystem",
      text: "Der letzte gro\u00dfe Schritt war das Benachrichtigungssystem. Wenn ein Administrator oder Referent den Status einer Session auf \u00ababgesagt\u00bb oder \u00abverlegt\u00bb \u00e4ndert, sucht die Website automatisch alle Nutzer, die diese Session gespeichert haben, und erstellt f\u00fcr jeden eine Benachrichtigung in Echtzeit.",
    },
  ],
  auswertung: [
    {
      title: "Ergebnis",
      text: "Am Ende wurden alle geplanten Funktionen umgesetzt. Die Website funktioniert: Das Programm wird in Echtzeit angezeigt, die Rollen sind korrekt getrennt und Benachrichtigungen werden bei \u00c4nderungen verschickt.",
    },
    {
      title: "Wichtigste Erkenntnis",
      text: "Die wichtigste Erkenntnis aus diesem Projekt ist, dass man mit dem Schwierigsten und Grundlegendsten beginnen sollte \u2014 nicht mit dem, was einfacher erscheint. Ich bin mehrfach auf das Problem gesto\u00dfen, dass bereits fertige Teile \u00fcberarbeitet werden mussten, weil sie auf einer falsch geplanten Grundlage aufbauten.",
    },
    {
      title: "Planung als Schl\u00fcssel",
      text: "H\u00e4tte ich von Anfang an mehr Zeit in die Planung der Datenbankstruktur und des Rollensystems investiert, w\u00e4ren viele \u00dcberarbeitungen vermeidbar gewesen.",
    },
    {
      title: "Firebase-Erfahrung",
      text: "Die Arbeit mit Firebase hat mir gezeigt, dass es in einem echten Projekt nicht reicht, nur den Code f\u00fcr die Seite zu schreiben \u2014 man muss auch dar\u00fcber nachdenken, wie Daten gespeichert werden, wer Zugriff darauf hat und was passiert, wenn etwas schiefgeht.",
    },
    {
      title: "Was ich anders machen w\u00fcrde",
      text: "Wenn ich ein \u00e4hnliches Projekt noch einmal angehen w\u00fcrde, w\u00fcrde ich zuerst die gesamte Datenbankstruktur planen und aufzeichnen, wie alles zusammenh\u00e4ngen soll \u2014 und erst dann mit der Entwicklung beginnen.",
    },
  ],
};
