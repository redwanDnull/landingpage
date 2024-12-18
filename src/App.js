import React from "react";
// Import Sections
import Header from "./sections/header";
import Page01 from "./sections/page01";
import Page02 from "./sections/page02";
import Page03 from "./sections/page03";
import Page04 from "./sections/page04";
import Page05 from "./sections/page05";
import Page06 from "./sections/page06";
import Page07 from "./sections/page07";
import Page08 from "./sections/page08";
import Page09 from "./sections/page09";
import Footer from "./sections/footer";
function App() {
  return (
    
    <div className="min-h-screen bg-[#E2E6E9]">
      {/* Header Section */}
      <Header />

      {/* Main Sections */}
      <main>
        <Page01 />
        <Page02 />
        <Page03 />
        <Page04 />
        <Page05 />
        <Page06 />
        <Page07 />
        <Page08 />
        <Page09 />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>    
  );
}

export default App;
