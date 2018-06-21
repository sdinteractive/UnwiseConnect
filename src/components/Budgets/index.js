import React, { Component } from 'react';
import Table from './Table';
import Item from './Item';
import NewItem from './Item/NewItem';

class Budgets extends Component {
	constructor() {
		super();

    this.state = {
      items: [
        {
          summary: "Klevu discovery & calls",
          phase: "dev/Klevu",
          feature: "Klevu",
          budgetHours: { 
            column: "Discovery",
            value: 6,
          },
          descriptions: {
            workplan: [
              "Time for communication with Klevu.",
            ],
            budget: [],
            assumptions: [
              "Accounts for one onboarding call."
            ],
            exclusions: [],
          },
          tags: "klevu",
        },
        {
          summary: "Install Klevu extension",
          phase: "dev/Klevu",
          feature: "Klevu",
          budgetHours: { 
            column: 'Dev',
            value: 4,
          },
          descriptions: {
            workplan: [
              "Install Klevu extension using composer.",
            ],
            assumptions: [
              "Install extension once using code provided by Klevu."
            ],
          },
          tags: "klevu",
        },
        {
          summary: "Configure Klevu flyout",
          phase: "dev/Klevu",
          feature: "Klevu",
          budgetHours: { 
            column: 'Dev',
            value: 4,
          },
          descriptions: {
            workplan: [
              "Use Klevu control panel to choose between autocomplete and faceted.",
            ],
            assumptions: [
              "Use one of out of box options provided by Klevu (autocomplete or faceted) without customization.",
            ],
          },
          tags: "klevu",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="panel-uc panel panel-default">
          <div className="panel-uc__heading panel-heading clearfix">
            <h4>Center (temp title)</h4>
            <div className="panel-uc__manage">

            </div>
          </div>
        </div>
        <div className="row panel-body">
          <NewItem />
          <div className="panel-body projects__wrapper">
            <h2> Features (temp title) </h2>
          </div>
          <div className="panel-body projects__wrapper">
            {this.state.items.map(item => (
              <Item summary={item.summary} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Budgets;
