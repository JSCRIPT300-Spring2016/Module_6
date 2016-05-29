$(function () {

  'use strict';

  var foodTypes = [];

  $.get('/trucks', function (truckList) {
    var list = [];
    if (truckList) {
      truckList.forEach(function (truck) {
        list.push('<li><li><span class="delete_link" data-truck="'
          + truck._id + '">X</span><a href="/trucks/' + truck._id +
           '">' + truck.name + '</a></li>');
      });
      $('.trucks-list').append(list);
    }
  });

  $('form').on('submit', function (e) {

    e.preventDefault();
    var $form = $(this);
    var data = $form.serialize() + serializeFoodTypes();

    $.ajax({
      method: 'POST',
      url: '/trucks',
      data: data
    })
    .done(function (truck) {
      var list = [];
      list.push('<li><span class="delete_link" data-truck="' + truck._id +
        '">X</span><a href="/trucks/' + truck._id + '">' +
        truck.name + '</a></li>');
      $('.trucks-list').append(list);
      $form.trigger('reset');
    });
  });

  function serializeFoodTypes() {
    var typeString = '';

    $('.foodType-list li').each(function (index, item) {
      typeString += '&foodType=' + item.innerText;
    });

    return typeString;
  }

  function getPaymentTypes() {
    var types = [];

    $('[name=payment]').each(function () {
      if (this.checked) {
        types.push(this.value);
      }
    });

    return types;
  }

  function getSchedule() {
    var schedule = [];

    $('[name=schedule]').each(function () {
      if (this.checked) {
        schedule.push(this.value);
      }
    });

    return schedule;
  }

  function addFoodType(type) {

    foodTypes.push(type);
    $('.foodType-list').append('<li>' + type + '</li>');
    $('[name=type]').val('');
  }

  $('[name=type').on('keypress', function (e) {
    if (e.which === 13) {
      e.preventDefault();
      addFoodType($(this).val());
    }
  });
  /* eslint-disable no-unused-vars */
  $('#addFoodType').on('click', function (e) {
    var foodType = $('[name=type]').val();

    addFoodType(foodType);
  });

  $('#clearFoodTypes').on('click', function (e) {
    $('.foodType-list').empty();
  });

  $('.trucks-list').on('click', '[data-truck]', function (e) {
    if (!confirm('Remove food truck?')) {
      return false;
    }
    var $target = $(e.currentTarget);
  /* eslint-enable no-unused-vars */
    $.ajax({
      method: 'DELETE',
      url: '/trucks/' + $target.data('truck')
    })
    .done(function () {
      $target.closest('li').remove();
    });
  });
});