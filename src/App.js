import React from 'react';
class App extends React.Component {
  state = {
    options: {},
    selectedKey: '',
    optionsList: [],
    secondSelectedOption: '',
  };

  componentDidMount() {
    const options = {
      fruits: ['Apple', 'Banana', 'Orange', 'Mango'],
      vegetables: ['Carrot', 'Broccoli', 'Spinach', 'Potato'],
      drinks: ['Water', 'Juice', 'Soda', 'Milk'],
    };

    if (options) {
      this.setState({ options: options });
    }
  }

  handleChangeFirstOption = (e) => {
    const selectedKey = e.target.value;
    const filteredList = this.state.options[selectedKey];
    this.setState({ optionsList: filteredList, selectedKey: selectedKey });
  };

  handleChangeSecondOption = (e) => {
    const selectedKey = e.target.value;
    this.setState({
      secondSelectedOption: selectedKey,
    });
  };

  render() {
    let optionsKeys = Object.keys(this.state.options);
    console.log(this.state.optionsList);
    return (
      <div>
        <div>
          {/* select box -1  */}
          <select
            onChange={this.handleChangeFirstOption}
            value={this.state.selectedKey}
          >
            <option value="">Please Select </option>
            {optionsKeys.map((eachItem) => (
              <option key={eachItem}>{eachItem}</option>
            ))}
          </select>

          {/* select box - 2  */}
          <select
            onChange={this.handleChangeSecondOption}
            value={this.state.secondSelectedOption}
          >
            <option value="">Please Select </option>
            {this.state.optionsList
              ? this.state.optionsList.map((eachItem) => (
                  <option key={eachItem}>{eachItem}</option>
                ))
              : []}
          </select>
        </div>
      </div>
    );
  }
}

export default App;
