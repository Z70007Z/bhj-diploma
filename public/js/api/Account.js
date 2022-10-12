/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
  /**
   * Получает информацию о счёте
   * */
  static url = '/account';

  static get(id = '', callback){
  // constructor(, releaseDate, pagesCount) {
  //   super(name, releaseDate, pagesCount);
  //   this.type = 'magazine';
  
    createRequest({
      url: this.url + '/' + id,
      method: 'GET',
      callback
    });  
 
  }
}
