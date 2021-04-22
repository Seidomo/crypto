export const IfSearch = ({condition, children}) => condition ? children : null;
export const searchFalse = (object) => {
  if(Array.isArray(object) && object.length === 0){
    return true;
  }else{
    return false;
  }
};