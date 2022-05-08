import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.fetchDoguinhos = this.fetchDoguinhos.bind(this);
    this.findDoguinhos = this.findDoguinhos.bind(this);
    this.state = {
      doguinhos: '',
    };
  }

  componentDidMount() {
    this.fetchDoguinhos();
  }

  async fetchDoguinhos() {
    const request = await fetch('https://dog.ceo/api/breeds/image/random');
    const requestDogs = await request.json();
    if (requestDogs.message.includes('terrier')) {
      alert('Terrier não pode ser mostrado nessa página!!!');
    } else {
      this.setState({
        doguinhos: requestDogs.message,
      });
    }
  }

  findDoguinhos() {
    const { doguinhos } = this.state;
    const separando = doguinhos.split('/');
    alert(`A raça do animal da imagem é: ${separando[4]}`);
  }

  render() {
    const { doguinhos } = this.state;
    return (
      <section>
        <h1>Doguinhos e afins</h1>
        <img src={ doguinhos } alt="dogs" />
        <br />
        <button
          type="button"
          onClick={ this.fetchDoguinhos }
        >
          Próximo Doguinho
        </button>
        <button type="button" onClick={ this.findDoguinhos }>Descobrir a raça</button>
      </section>

    );
  }
}

export default App;
