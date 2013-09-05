'use strict';

angular.module('angularJqmMixerApp')
  .service('Cars', function cars() {
    // TODO: Get data from REST API
    var cars = [
      {
        manufacturer: 'Porsche',
        model: '911',
        price: 135000,
        img: 'http://gtdemo.com/wp-content/uploads/2013/05/porsche-911.jpg',
        description: 'Turbo'
      },
      {
        manufacturer: 'Nissan',
        model: 'GT-R',
        price: 80000,
        img: 'http://www.blogcdn.com/www.autoblog.com/media/2012/11/2014-nissan-gt-r-la.jpg',
        description: 'Turbo'
      },
      {
        manufacturer: 'BMW',
        model: 'M3',
        price: 60500,
        img: 'http://upload.wikimedia.org/wikipedia/commons/1/1e/Benz-velo.jpg',
        description: 'Turbo'
      },
      {
        manufacturer: 'Audi',
        model: 'S5',
        price: 53000,
        img: 'http://t3.gstatic.com/images?q=tbn:ANd9GcRGM_uwuaoylStRe_D6cAbQl5XJcXdHN_GdVCWKElmB0dRlkKGI',
        description: 'Turbo'
      },
      {
        manufacturer: 'Audi',
        model: 'TT',
        price: 40000,
        img: 'http://t3.gstatic.com/images?q=tbn:ANd9GcSb4c3sqD40mqXKh8XJbwRDIpxqcp7XpEx2Wp0H6V16y-6sSF4L',
        description: 'Turbo'
      }
    ];

    // Give them an id.
    cars.forEach(function (car, index) {
      car.id = index + '';
      return angular.extend(new Car(), car);
    });

    var lastId = cars.length - 1;

    return {
      getCars: function () {
        return cars;
      },
      addCar: function (make, model, price, description, img) {
        cars.push(new Car(++lastId + '', make, model, price, description, img));
      }
    };
  });

/**
 * Car model.
 * @param {string} id
 * @param {string} manufacturer
 * @param {string} model
 * @param {number} price
 * @param {string} description
 * @param {string} img
 * @constructor
 */
function Car(id, manufacturer, model, price, description, img) {
  this.id = id;
  this.make = manufacturer;
  this.model = model;
  this.price = price;
  this.description = description;
  this.img = img;
}
