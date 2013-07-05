'use strict';

describe('Directive: mainVideoItem', function () {
  beforeEach(module('ytclientApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<main-video-item></main-video-item>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the mainVideoItem directive');
  }));
});
