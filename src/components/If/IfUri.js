export const IfUri = ({condition, children}) => condition ? children : null;
export const checkUri = (object) => {
  if(object){
    if(object.logo_url.includes('.png') || object.logo_url.includes('.jpg')){
      return false;
    }else{
      return true;
    }
  }
};