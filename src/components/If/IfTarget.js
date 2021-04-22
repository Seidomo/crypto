export const IfTarget = ({condition, children}) => condition ? children : null;
export const searchTrue = (object) => {
  if(Array.isArray(object) && object.length > 0){
    console.log(object);
    return true;
  }else{
    return false;
  }
};