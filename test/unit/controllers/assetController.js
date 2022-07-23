const sinon = require('sinon');
const { expect } = require('chai');

const assetServices = require('../../../src/services/assetService');
const assetController = require('../../../src/controllers/assetController');
const assetMock = require('../../mock/assetMock');

describe('Controller - Asset', () => {
  describe('1 - Busca o ativos por ID', () => {
    describe("quando é efetuado com sucesso", async () => {
      const response = {};
      const request = {};

      before(() => {
        request.params = { id: 1 };

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(assetServices, 'getAssetById').resolves(assetMock);
      });

      after(() => { assetServices.getAssetById.restore(); });

      it('é chamado o método "status" passando o código 200', async () => {
        await assetController.getAssetById(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });

      it('é chamado o método "json" passando um objeto', async () => {
        await assetController.getAssetById(request, response);
        expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
      });
    });
  });
})
