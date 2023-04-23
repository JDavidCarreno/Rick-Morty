const validations =(datos) => {
    const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    let error = {};

    if (datos.email.length < 1 || datos.email.length > 35 || !emailRegex.test(datos.email)) {
        error.email = 'Ingresa un email válido';
    } else {
        if (!/\d/.test(datos.password)) {
            error.password = "La contraseña debe contener al menos un número";
          }
        
          if (datos.password.length < 6 || datos.password.length > 10) {
            error.password = "La contraseña debe tener entre 6 y 10 caracteres";
          }        
    }
    return error;
}

export default validations;