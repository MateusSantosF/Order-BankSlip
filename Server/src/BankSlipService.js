var Gerencianet = require('gn-api-sdk-node');


const options = {
    sandbox: true,
    client_id: 'SEU_CLIENT_ID',
    client_secret: 'SEU_CLIENT_SECRET',
    certificate: './pedidoAppCert-hmg.p12',
}

var gerencianet = new Gerencianet(options);

function createBankSlip(request) {

    return gerencianet.createOneStepCharge([], createBankSlipBody(request))
        .then((resposta) => {
            console.log(resposta)
            return resposta;
        })
        .catch((error) => {
            console.log(error);
            return null;
        })

}

function createBankSlipBody(order) {
    return {
        payment: {
            banking_billet: {
                expire_at: '2023-06-12',
                customer: {
                    name: 'Mateus Santos DEV',
                    email: 'mateus.dev@gmail.com',
                    cpf: '04267484171',
                    birth: '2002-06-02',
                    phone_number: '5144916523',
                    juridical_person: {
                        corporate_name: 'Empresa MateusDEV',
                        cnpj: '92247037000137'
                    }
                }
            }
        },
        items: [
            {
                name: order.nome,
                value:floatToCents(order.valor),
                amount: order.quantidade
            }
        ],
        shippings: [{
            name: 'Default Shipping Cost',
            value: 100
        }]
    }

}

const floatToCents = (value)=>{
    return parseInt(value*100);
}
const bankSlipController = {
    createBankSlip
}

module.exports = {
    bankSlipController
};