import { useState } from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import NewArrivals from "../components/NewArrivals";
import Featured from "../components/Featured";
import TrustStrip from "../components/TrustStrip";

import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

export default function HomePage() {
  const [text, setText] = useState("");

  return (
    <>
      <SearchBar onSearch={(t) => setText(t)} />

      <SearchResults searchText={text} />

      <Hero />
      <Categories />
      <NewArrivals />
      <Featured />
      <TrustStrip />
    </>
  );
}
