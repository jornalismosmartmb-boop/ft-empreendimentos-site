import { describe, expect, test } from "bun:test";
import { company } from "./company";

describe("Dados do cartão CNPJ do Emerson", () => {
  test("identifica a empresa do cartão", () => {
    expect(company.legalName).toBe("57.498.091 EMERSON DE ARAUJO RABELO");
    expect(company.cnpj).toBe("57.498.091/0001-54");
  });
  test("mantém a situação ativa e a data do cartão", () => {
    expect(company.situation).toBe("ATIVA");
    expect(company.situationSince).toBe("30/09/2024");
  });
  test("usa a atividade principal do cartão", () => {
    expect(company.cnae).toBe("43.21-5-00");
  });
  test("usa o endereço do cartão", () => {
    expect(company.address.city).toBe("Feira de Santana");
    expect(company.address.zip).toBe("44.075-525");
  });
  test("usa a natureza jurídica do cartão", () => {
    expect(company.legalNature).toBe("Empresário (Individual) (213-5)");
    expect(company.size).toBe("ME");
  });
  test("preserva o endereço completo do cartão", () => {
    expect(company.address.street).toBe("R Juracy Magalhaes, 418");
    expect(company.address.district).toBe("Ponto Central");
    expect(company.address.state).toBe("BA");
  });
  test("usa a atividade e os contatos do cartão", () => {
    expect(company.mainActivity).toBe("Instalação e manutenção elétrica");
    expect(company.phone).toBe("(71) 98257-7846");
    expect(company.email).toBe("emaildoedsonlima@gmail.com");
    expect(company.openingDate).toBe("30/09/2024");
  });
});
