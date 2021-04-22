export const IfTarget = ({condition, children}) => condition ? children : null;
export const searchTrue = (object) => {
  if(object.currency !== ''){
    return true;
  }else{
    return false;
  }
};