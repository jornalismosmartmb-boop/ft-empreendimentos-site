import { describe, expect, test } from "bun:test";
import { company } from "./company";

describe("Dados do cartão CNPJ da Daiane", () => {
  test("identifica a empresa do cartão", () => {
    expect(company.legalName).toBe("57.487.428 DAIANE DE SOUZA BRANDAO SANTOS");
    expect(company.cnpj).toBe("57.487.428/0001-28");
  });
  test("mantém a situação ativa e a data do cartão", () => {
    expect(company.situation).toBe("ATIVA");
    expect(company.situationSince).toBe("30/09/2024");
  });
  test("usa a atividade principal do cartão", () => {
    expect(company.cnae).toBe("47.89-0-99");
  });
  test("usa o endereço do cartão", () => {
    expect(company.address.city).toBe("Coração de Maria");
    expect(company.address.zip).toBe("44.250-000");
  });
});

 test("usa a natureza jurídica do cartão", () => {
   expect(company.legalNature).toBe("Empresário (Individual) (213-5)");
   expect(company.size).toBe("ME");
 });
  test("preserva o endereço completo do cartão", () => {
    expect(company.address.street).toBe("R Casa, SN, TERREO CASA;CASA CASA;CASA CASA;CASA CASA CASA");
    expect(company.address.district).toBe("Centro");
   expect(company.address.state).toBe("BA");
 });
 test("usa a atividade e os contatos do cartão", () => {
    expect(company.mainActivity).toBe("Comércio varejista de outros produtos não especificados anteriormente");
   expect(company.phone).toBe("(71) 98257-7846");
   expect(company.email).toBe("emaildoedsonlima@gmail.com");
   expect(company.openingDate).toBe("30/09/2024");
 });
