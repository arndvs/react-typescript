import { Component } from 'react';

type CounterProps = {
    incident: string;
  };

  type CounterState = {
    count: number;
  };

class Counter extends Component<CounterProps, CounterState> {
    state: CounterState = {
        count: 0,
    };

    increment = () => {
        this.setState(({ count }) => ({ count: count + 1 }));
      };

      decrement = () => {
        this.setState(({ count }) => ({ count: count - 1 }));
      };

      reset = () => {
        this.setState({ count: 0 });
      };

      changeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ count: +e.target.value });
      };

  render() {
    const { incident } = this.props;
    const { count } = this.state;

    return (
      <main className="Counter">
        <h1>Days Since Last { incident }</h1>
        <p className="count">{ count }</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.decrement}>Decrement</button>
        </section>
        <section className="controls">
          <form onSubmit={() => {}}>
            <label htmlFor="set-to">Set Count</label>
            <input id="set-to" type="number" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" onChange={this.changeCount} value={count}/>
            <input type="submit" />
          </form>
        </section>
      </main>
    );
  }
}

class IncidentReportClass extends Component {
  render() {
    return <Counter incident="Coffee Spill"/>;
  }
}

export default IncidentReportClass;
