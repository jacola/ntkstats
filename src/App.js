import React, { Component } from 'react';
import StatGroup from './components/StatGroup/StatGroup';
import './App.css';

class app extends Component {
  state = {
    stats: {
      current_hp: 10000,
      current_mp: 20000,
      target_hp: 30000,
      target_mp: 40000,
    }
  }

  statChangedHandler = (event) => {
    const key = event.target.getAttribute('data-key');
    const stats = { ...this.state.stats };
    stats[key] = event.target.value;
    this.setState({ stats: stats });
  }

  render() {
    return (
      <div className="App">
        <h1>Calc</h1>
        
        <StatGroup
          label="Current"
          hp={this.state.stats.current_hp}
          dataKeyHP="current_hp"
          mp={this.state.stats.current_mp}
          dataKeyHP="current_mp"
          change={this.statChangedHandler}
        />

        Current:
        <input
          type="text"
          data-key="current_hp"
          value={this.state.stats.current_hp}
          onChange={this.statChangedHandler}
          />

        <br/>

        <input
          type="text"
          data-key="current_mp"
          value={this.state.stats.current_mp}
          onChange={this.statChangedHandler}
          />

        <br/>

        Target:
        <input
          type="text"
          data-key="target_hp"
          value={this.state.stats.target_hp}
          onChange={this.statChangedHandler}
          />

        <br/>

        <input
          type="text"
          data-key="target_mp"
          value={this.state.stats.target_mp}
          onChange={this.statChangedHandler}
          />
      </div>
    );
  }
}

export default app;
