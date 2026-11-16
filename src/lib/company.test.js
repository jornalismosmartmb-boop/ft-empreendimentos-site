import { describe, expect, test } from "bun:test";
import { company } from "./company";

describe("Dados do cartão CNPJ do Adalberto", () => {
  test("identifica a empresa do cartão", () => {
    expect(company.legalName).toBe("57.493.589 THIAGO FERREIRA DE ALMEIDA");
    expect(company.cnpj).toBe("57.493.589/0001-24");
  });
  test("mantém a situação ativa e a data do cartão", () => {
    expect(company.situation).toBe("ATIVA");
    expect(company.situationSince).toBe("30/09/2024");
  });
  test("usa a atividade principal do cartão", () => {
    expect(company.cnae).toBe("47.52-1-00");
  });
  test("usa o endereço do cartão", () => {
    expect(company.address.city).toBe("Euclides da Cunha");
    expect(company.address.zip).toBe("48.500-000");
  });
  test("usa a natureza jurídica do cartão", () => {
    expect(company.legalNature).toBe("Empresário (Individual) (213-5)");
    expect(company.size).toBe("ME");
  });
  test("preserva o endereço completo do cartão", () => {
    expect(company.address.street).toBe("Av Lot Jardim das Acacias, S/N");
    expect(company.address.district).toBe("Populares");
    expect(company.address.state).toBe("BA");
  });
  test("usa a atividade e os contatos do cartão", () => {
    expect(company.mainActivity).toBe("Comércio varejista especializado de equipamentos de telefonia e comunicação");
    expect(company.phone).toBe("(71) 98257-7846");
    expect(company.email).toBe("emaildoedsonlima@gmail.com");
    expect(company.openingDate).toBe("30/09/2024");
  });
});
