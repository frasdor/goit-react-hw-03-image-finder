import React, { Component } from "react";
import axios from 'axios';

const URL = "https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12";

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    showModal: false,
    largeImageURL: null,
  };
}



//id - unikalny identyfikator
// webformatURL - odnośnik do miniatury dla listy obrazków
// largeImageURL - odnośnik do dużej wersji dla okna modalnego










// Your API key: 46136265-8c05b511bcb8d1129c580e4d3



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
