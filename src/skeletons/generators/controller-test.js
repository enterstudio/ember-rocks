/* jshint expr:true */
import {
  describeModule,
  it
} from 'ember-mocha';

describeModule(
  'controller:__DASHERIZE_NAMESPACE__',
  '__NAMESPACE__',
  {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  },
  function() {
    // Replace this with your real tests.
    it('exists', function() {
      var controller = this.subject();
      controller.should.be.ok;
    });
  }
);
