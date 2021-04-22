export const IfStart = ({condition, children}) => condition ? children : null;
export const startObject = (object) => {
  if(object === ''){
    return false;
  }else{
    return true;
  }
};