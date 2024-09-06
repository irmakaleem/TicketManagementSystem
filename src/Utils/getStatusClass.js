// ek alag file may banadya ye method ab jahan use krna chahun krskta hun
// extension .js bhi hoskti .jsx bhi agr koi import wagera nhi hai library to .js warna ager koi lib import krwari method may to .jsx warn dono bhi chalskti pta nhi
export const getStatusClass = (status) => {
  switch (status) {
    case "open":
      return "bg-yellow-500 text-white";
    case "close":
      return "bg-blue-500 text-white";
    case "resolved":
      return "bg-green-400 text-white";
    case "dropped":
      return "bg-red-500 text-white";
    case "pending":
      return "bg-orange-500 text-white";
    default:
      return "bg-gray-200 text-black";
  }
};
