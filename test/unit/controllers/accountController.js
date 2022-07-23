const sinon = require('sinon');
const { expect } = require('chai');

const accountServices = require('../../../src/services/accountService');
const accountController = require('../../../src/controllers/accountController');
const accountMock = require('../../mock/accountMock');
const assetsByClientMock = require('../../mock/assetsByClientMock');

describe('Controller - Account', () => {
  describe('1 - Recebe um retorno após efetuar o depósito', () => {
    describe("quando é efetuado com sucesso", async () => {
      const response = {};
      const request = {};

      before(() => {
        request.body = {
          userId: 2,
          amount: 100
        };
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(accountServices, 'createdDeposit').resolves(accountMock);
      });

      after(() => { accountServices.createdDeposit.restore(); });

      it('é chamado o método "status" passando o código 201', async () => {
        await accountController.createdDeposit(request, response);
        expect(response.status.calledWith(201)).to.be.equal(true);
      });

      it('é chamado o método "json" passando um objeto', async () => {
        await accountController.createdDeposit(request, response);
        expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
      });
    });
  });

  describe('2 - Recebe um retorno após efetuar o saque', () => {
    describe("quando é efetuado com sucesso", async () => {
      const response = {};
      const request = {};

      before(() => {
        request.body = {
          userId: 2,
          amount: 100
        };

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(accountServices, 'createdDeposit').resolves(accountMock);
      });

      after(() => { accountServices.createdDeposit.restore(); });

      it('é chamado o método "status" passando o código 201', async () => {
        await accountController.createdDeposit(request, response);
        expect(response.status.calledWith(201)).to.be.equal(true);
      });

      it('é chamado o método "json" passando um objeto', async () => {
        await accountController.createdDeposit(request, response);
        expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
      });
    });
  });

  describe('3 - Busca a lista de ativos por cliente', () => {
    describe("quando é efetuado com sucesso", async () => {
      const response = {};
      const request = {};

      before(() => {
        request.params = { id: 1 };

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(accountServices, 'getClientById').resolves(assetsByClientMock);
      });

      after(() => { accountServices.getClientById.restore(); });

      it('é chamado o método "status" passando o código 200', async () => {
        await accountController.getClientById(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });

      it('é chamado o método "json" passando um array', async () => {
        await accountController.getClientById(request, response);
        expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
      });
    });
  });
})
