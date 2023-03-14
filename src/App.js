import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Items from './components/Items';
import Footer from './components/Footer';
import Categories from './components/Categories';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id:1,
          title: 'Крем для лица',
          img: 'shis2-1.jpg',
          desc: "Lorem lorem lorem lorem",
          category: 'face',
          price: '89.99'
      },
       {
        id:2,
        title: 'Крем для лица',
        img: 'shis2-1.jpg',
        desc: "Lorem lorem lorem lorem",
        category: 'face',
        price: '89.99'
      },
       {
      id:3,
      title: 'Крем для лица',
      img: 'shis2-1.jpg',
      desc: "Lorem lorem lorem lorem",
      category: 'face',
      price: '89.99'
    },
      {
        id:4,
        title: 'Крем для тела',
        img: 'shis3-1.jpg',
        desc: "Lorem lorem lorem lorem",
        category: 'body',
        price: '69.99'
    },
      {
        id:5,
        title: 'Крем для тела',
        img: 'shis3-1.jpg',
        desc: "Lorem lorem lorem lorem",
        category: 'body',
        price: '69.99'
      },
      {
        id:6,
        title: 'Крем для тела',
        img: 'shis3-1.jpg',
        desc: "Lorem lorem lorem lorem",
        category: 'body',
        price: '69.99'
      },
      {
        id:7,
        title: 'Крем для тела',
        img: 'shis3-1.jpg',
        desc: "Lorem lorem lorem lorem",
        category: 'body',
        price: '69.99'
      },
     {
      id:8,
      title: 'Крем для рук',
      img: 'shis3-2.jpg',
      desc: "Lorem lorem lorem lorem",
      category: 'hand',
      price: '49.99'
     },
      {
      id:9,
      title: 'Крем для лица',
      img: 'shiseido.jpg',
      desc: "Lorem lorem lorem lorem",
      category: 'face',
      price: '149.99'
      }
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)

  }
  render () {
    return (
    <div className="wrapper">
     <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
     <Categories chooseCategory={this.chooseCategory} />
     <Items items={this.state.currentItems} onAdd={this.addToOrder} />
     <Footer />
    </div>
    );
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems:this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !==id)}) //для удаления из корзины
  }

 // добавляем в коризину элементы (без повторения)
  addToOrder(item) {
    let isArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isArray = true
    })
    if(!isArray)
    this.setState({orders: [...this.state.orders, item] }
    )
  }
}

export default App;
