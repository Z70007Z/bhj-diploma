// const { response } = require("express");

/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.register(data, (error,response) => {
     
        // if (response.status === 200) {
        //  if (response.success) { 
        //  if (xhr.readyState === 4 && xhr.status === 200) {    
      if (response.success) {      
        this.element.reset();
        App.setState('user-logged');
        App.getModal('register').close();
      } else {
        alert(response.error);
        this.element.reset();
      }
    });
    
  }
}

const elemExit = document.querySelectorAll('.btn-default');
const elemClose = document.querySelectorAll('.close');

elemClose.forEach(element => {
  element.addEventListener('click', () => {
     App.getModal('register').close();
     App.getModal('login').close();
  });
});

elemExit.forEach(element => {
  element.addEventListener('click', () => {
     App.getModal('register').close();
     App.getModal('login').close();
  });
});