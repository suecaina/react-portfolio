/*Takes relative path thats passed to it
 appending - dynamically import images*/

// export const getImageUrl = (path) => {
//     return new URL(`/assets/${path}`, import.meta.url).href  
// };

// utils.js
export const getImageUrl = (path) => {
    // Use the correct relative path from utils.js to the assets folder
    return require(`../src/assets/${path}`);
  };
  