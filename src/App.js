import React from "react";
import Excel from "./Excel";
// import Excel2 from "./Excel2";
import "./App.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./Theme";

const headers = ["Book", "Author", "Language", "Published", "Sales"];
const data = [
  ["A Tale of Two Cities", "Charles Dickens", "English", "1859", "200 million"],
  [
    "Le Petit Prince (The Little Prince)",
    "Antoine de Saint-Exupéry",
    "French",
    "1943",
    "150 million",
  ],
  [
    "Harry Potter and the Philosopher's Stone",
    "J. K. Rowling",
    "English",
    "1997",
    "120 million",
  ],
  [
    "And Then There Were None",
    "Agatha Christie",
    "English",
    "1939",
    "100 million",
  ],
  ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1791", "100 million"],
  ["The Hobbit", "J. R. R. Tolkien", "English", "1937", "100 million"],
];
const App = () => {
  return (
    <div className="App">
      <MantineProvider theme={theme}>
        <div className="appCenter">
          <div className="appWrapper">
            <Excel headers={headers} initialData={data} />
            {/* <Excel2 headers={headers} initialData={data} /> */}
          </div>
        </div>
      </MantineProvider>
    </div>
  );
};

export default App;
//
