export const IfSearch = ({condition, children}) => condition ? children : null;
export const searchFalse = (object) => {
  if(object.currency === ''){
    return true;
  }else{
    return false;
  }
};