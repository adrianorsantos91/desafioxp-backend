const sinon = require('sinon');
const { expect } = require('chai');

const clientService = require('../../../src/services/clientService');
const clientController = require('../../../src/controllers/clientController');
const clientMock = require('../../mock/clientMock');

describe('Controller - Client', () => {
  describe('1 - Busca o cliente por ID', () => {
    describe("quando é efetuado com sucesso", async () => {
      const response = {};
      const request = {};

      before(() => {
        request.params = { id: 1 };

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(clientService, 'getClientById').resolves(clientMock);
      });

      after(() => { clientService.getClientById.restore(); });

      it('é chamado o método "status" passando o código 200', async () => {
        await clientController.getClientById(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });

      it('é chamado o método "json" passando um objeto', async () => {
        await clientController.getClientById(request, response);
        expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
      });
    });
  });
})
