import { render } from "react-dom";
import "./index.css";
import * as React from "react";
import {
  MultiSelectComponent,
  CheckBoxSelection,
  Inject
} from "@syncfusion/ej2-react-dropdowns";
import { SampleBase } from "./sample-base";
import { PropertyPane } from "./property-pane";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";

export class CheckBox extends SampleBase {
  constructor() {
    super(...arguments);
    this.state = { value: "Australia" }; //

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //define the data with category
    this.countries = [
      { Name: "Australia", Code: "AU" },
      { Name: "Bermuda", Code: "BM" },
      { Name: "Canada", Code: "CA" },
      { Name: "Cameroon", Code: "CM" },
      { Name: "Denmark", Code: "DK" },
      { Name: "France", Code: "FR" },
      { Name: "Finland", Code: "FI" },
      { Name: "Germany", Code: "DE" },
      { Name: "Greenland", Code: "GL" },
      { Name: "Hong Kong", Code: "HK" },
      { Name: "India", Code: "IN" },
      { Name: "Italy", Code: "IT" },
      { Name: "Japan", Code: "JP" },
      { Name: "Mexico", Code: "MX" },
      { Name: "Norway", Code: "NO" },
      { Name: "Poland", Code: "PL" },
      { Name: "Switzerland", Code: "CH" },
      { Name: "United Kingdom", Code: "GB" },
      { Name: "United States", Code: "US" }
    ];
    // maps the appropriate column to fields property
    this.checkFields = { text: "Name", value: "Code" };
  }
  handleChange(event) {
    this.setState({ value: event.target.value }); //
  }

  // function to handle the CheckBox change event
  onChange(args) {
    // enable or disable the SelectAll in multiselect on CheckBox checked state
    this.mulObj.showSelectAll = args.checked;
  }
  // function to handle the CheckBox change event
  onChangeDrop(args) {
    // enable or disable the Dropdown button in multiselect on CheckBox checked state
    this.mulObj.showDropDownIcon = args.checked;
  }
  // function to handle the CheckBox change event
  onChangeLimit(args) {
    // enable or disable the selection limit in multiselect on CheckBox checked state
    this.mulObj.enableSelectionOrder = args.checked;
  }
  handleSubmit(event) {
    alert("Your favorite country is: " + this.state.value); //
    event.preventDefault();
  }

  render() {
    return (
      <div id="multichecbox" className="control-pane">
        <div className="control-section col-lg-8">
          <div id="multigroup" className="control-styles">
            <form onSubmit={this.handleSubmit}>
              <label>
                Pick your favorite Country:
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="Australia">Australia</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Canada">Canada</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Denmark">Denmark</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="India">India</option>
                  <option value="Italy">Italy</option>
                  <option value="Japan">Japan</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Norway">Norway</option>
                  <option value="Poland">Poland</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                </select>
              </label>
              <input type="submit" value="Submit" />
            </form>
            <h4>CheckBox</h4>
            <MultiSelectComponent
              id="checkbox"
              ref={scope => {
                this.mulObj = scope;
              }}
              dataSource={this.countries}
              fields={this.checkFields}
              placeholder="Select countries"
              mode="CheckBox"
              showSelectAll={true}
              showDropDownIcon={true}
              filterBarPlaceholder="Search countries"
              popupHeight="350px"
            >
              <Inject services={[CheckBoxSelection]} />
            </MultiSelectComponent>
          </div>
        </div>
        <div className="col-lg-4 property-section">
          <PropertyPane title="Properties">
            <table
              id="property"
              title="Properties"
              className="property-panel-table"
              style={{ width: "100%" }}
            >
              <tr>
                <td>
                  <div>
                    <CheckBoxComponent
                      checked={true}
                      label="Show Select All"
                      ref={scope => {
                        this.checkboxObj = scope;
                      }}
                      change={this.onChange.bind(this)}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <CheckBoxComponent
                      checked={true}
                      label="DropDown Button"
                      ref={scope => {
                        this.checkboxObj = scope;
                      }}
                      change={this.onChangeDrop.bind(this)}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <CheckBoxComponent
                      checked={true}
                      label="Selection Reorder"
                      ref={scope => {
                        this.checkboxObj = scope;
                      }}
                      change={this.onChangeLimit.bind(this)}
                    />
                  </div>
                </td>
              </tr>
            </table>
          </PropertyPane>
        </div>
      </div>
    );
  }
}

render(<CheckBox />, document.getElementById("sample"));
