export const onBlur = (event: React.ChangeEvent<HTMLInputElement>, isSuccess:any, setIsSuccess:any, isError:any, setIsError:any): void => {
    const value = event.target.value;
    switch (event.target.name) {
      case "email":
        if (value === "") {
          setIsSuccess({
            ...isSuccess,
            email: false
          });
          setIsError({
            ...isError,
            email: true
          });
        } else {
          setIsError({
            ...isError,
            email: false
          });
          setIsSuccess({
            ...isSuccess,
            email: true
          });
        }
        break;
      case "password":
        if (value === "") {
          setIsSuccess({
            ...isSuccess,
            password: false
          });
          setIsError({
            ...isError,
            password: true
          });
        } else {
          setIsError({
            ...isError,
            password: false
          });
          setIsSuccess({
            ...isSuccess,
            password: true
          });
        }
        break;
      case "firstName":
        if (value === "") {
          setIsSuccess({
            ...isSuccess,
            firstName: false
          });
          setIsError({
            ...isError,
            firstName: true
          });
        } else {
          setIsError({
            ...isError,
            firstName: false
          });
          setIsSuccess({
            ...isSuccess,
            firstName: true
          });
        }
        break;
      case "lastName":
        if (value === "") {
          setIsSuccess({
            ...isSuccess,
            lastName: false
          });
          setIsError({
            ...isError,
            lastName: true
          });
        } else {
          setIsError({
            ...isError,
            lastName: false
          });
          setIsSuccess({
            ...isSuccess,
            lastName: true
          });
        }
        break;
    
      default:
        break;
    }
    
  };