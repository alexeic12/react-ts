export const capitalizeFirstLetter = (str:String) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }