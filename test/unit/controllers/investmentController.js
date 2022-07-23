const sinon = require('sinon');
const { expect } = require('chai');

const investmentService = require('../../../src/services/investimentService');
const investmentController = require('../../../src/controllers/investmentController');
const investmentMock = require('../../mock/investmentMock');

describe('Controller - Investment', () => {
  describe('1 - Inserindo uma nova compra', () => {
    describe("quando é efetuado com sucesso", async () => {
      const response = {};
      const request = {};

      before(() => {
        request.body =  {
          userId: 1,
          assetId: 1,
          quantityAsset: 1
       };

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(investmentService, 'createdPurchase').resolves(investmentMock);
      });

      after(() => { investmentService.createdPurchase.restore(); });

      it('é chamado o método "status" passando o código 201', async () => {
        await investmentController.createdPurchase(request, response);
        expect(response.status.calledWith(201)).to.be.equal(true);
      });

      it('é chamado o método "json" passando um objeto', async () => {
        await investmentController.createdPurchase(request, response);
        expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
      });
    });
  });

  describe('2 - Inserindo uma nova venda', () => {
    describe("quando é efetuado com sucesso", async () => {
      const response = {};
      const request = {};

      before(() => {
        request.body =  {
          userId: 1,
          assetId: 1,
          quantityAsset: 1
       };

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(investmentService, 'createdSale').resolves(investmentMock);
      });

      after(() => { investmentService.createdSale.restore(); });

      it('é chamado o método "status" passando o código 201', async () => {
        await investmentController.createdSale(request, response);
        expect(response.status.calledWith(201)).to.be.equal(true);
      });

      it('é chamado o método "json" passando um objeto', async () => {
        await investmentController.createdSale(request, response);
        expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
      });
    });
  });
})
