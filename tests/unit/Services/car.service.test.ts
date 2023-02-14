// describe('', function () {
//   it('', function () {});
// });

import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
// import ICar from '../../../src/Interfaces/ICar';

const carInput = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carOutPut = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: false,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
  id: '63ebdb90f4e0ac2072dd9bff',
};

const allCar = [
  {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: false,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
    id: '63ebdb90f4e0ac2072dd9bff',
  },
  {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: false,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
    id: '63ebdb90f4e0ac2072dd9bff',
  },
];

describe('Testes do serviço Car', function () {
  describe('Testes relativos a criação de um novo Car', function () {
    it('Testa se um carro novo é criado com sucesso', async function () {
      sinon.stub(Model, 'create').resolves(carOutPut);
  
      const { type, message } = await new CarService().create(carInput);
  
      expect(type).to.be.equal(null);
      expect(message).to.be.deep.equal(carOutPut);
    });

    it('Testa erro ao criar uma carro', async function () {
      sinon.stub(Model, 'create').resolves(null);
  
      const { type, message } = await new CarService().create(carInput);
  
      expect(type).to.be.equal('erro');
      expect(message).to.be.equal('error');
    });

    afterEach(function () {
      sinon.restore();
    });
  });

  describe('Testa as buscas de todos os carros', function () {
    it('Testa se todos os carros são retornados com sucesso', async function () {
      sinon.stub(Model, 'find').resolves(allCar);
  
      const { type, message } = await new CarService().findAll();
  
      expect(type).to.be.equal(null);
      expect(message).to.be.deep.equal(allCar);
    });

    it('Testa erro buscar todos os carros', async function () {
      sinon.stub(Model, 'find').resolves(undefined);
  
      const { type, message } = await new CarService().findAll();
  
      expect(type).to.be.equal('erro');
      expect(message).to.be.equal('error');
    });

    afterEach(function () {
      sinon.restore();
    });
  });

  describe('Testa as buscas um carro especifico', function () {
    it('Testa se um carro é retornado com sucesso', async function () {
      sinon.stub(Model, 'findById').resolves(carOutPut);
  
      const { type, message } = await new CarService().findById('63ebdb90f4e0ac2072dd9bff');
  
      expect(type).to.be.equal(null);
      expect(message).to.be.deep.equal(carOutPut);
    });

    it('Testa erro ao enviar um id no formato inválido', async function () {
      sinon.stub(Model, 'findById').resolves(undefined);
  
      const { type, message } = await new CarService().findById('63ebd');
  
      expect(type).to.be.equal('INVALID');
      expect(message).to.be.equal('Invalid mongo id');
    });

    it('Testa erro ao não encontrar o id', async function () {
      sinon.stub(Model, 'findById').resolves(undefined);
  
      const { type, message } = await new CarService().findById('63ebdb90f4e0ac2072dd9bff');
  
      expect(type).to.be.equal('NOT_FOUND');
      expect(message).to.be.equal('Car not found');
    });

    afterEach(function () {
      sinon.restore();
    });
  });
});