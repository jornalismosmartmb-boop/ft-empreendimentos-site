import { describe, expect, test } from "bun:test";
import { company } from "./company";

describe("Dados do cartão CNPJ do Josimario", () => {
  test("identifica a empresa do cartão", () => {
    expect(company.legalName).toBe("57.486.245 JOSIMARIO SANTOS DE SANTA INEZ");
    expect(company.cnpj).toBe("57.486.245/0001-98");
  });
  test("mantém a situação ativa e a data do cartão", () => {
    expect(company.situation).toBe("ATIVA");
    expect(company.situationSince).toBe("30/09/2024");
  });
  test("usa a atividade principal do cartão", () => {
    expect(company.cnae).toBe("73.19-0-02");
  });
  test("usa o endereço do cartão", () => {
    expect(company.address.city).toBe("Conceição do Coité");
    expect(company.address.zip).toBe("48.730-000");
  });
});

 test("usa a natureza jurídica do cartão", () => {
   expect(company.legalNature).toBe("Empresário (Individual) (213-5)");
   expect(company.size).toBe("ME");
 });
  test("preserva o endereço completo do cartão", () => {
    expect(company.address.street).toBe("R Rua Antonio Nunes Gordiano, 430");
    expect(company.address.district).toBe("Carije");
   expect(company.address.state).toBe("BA");
 });
 test("usa a atividade e os contatos do cartão", () => {
    expect(company.mainActivity).toBe("Promoção de vendas");
   expect(company.phone).toBe("(71) 98257-7846");
   expect(company.email).toBe("emaildoedsonlima@gmail.com");
   expect(company.openingDate).toBe("30/09/2024");
 });
