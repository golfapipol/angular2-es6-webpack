import {Component} from 'angular2/core'

@Component({
  selector: 'app-component',
  template: `
<form class="ui large form segment">
  <h3 class="ui header">Add a Link</h3>

  <div class="field">
    <label for="title">Title: </label>
    <input name="title">
  </div>
  <div class="field">
    <label for="link">Link: </label>
    <input name="link">
  </div>
</form>
  `
})
class AppComponent {
  constructor () {
  }

}

export { AppComponent }
