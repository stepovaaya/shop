import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
             categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'face',
                    name: 'Для лица'
                },
                {
                    key: 'body',
                    name: 'Для тела'
                },
                {
                    key: 'hand',
                    name: 'Для рук'
                }

             ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)} >{el.name}

            </div>
        ))}
      </div>
    )
  }
}

export default Categories