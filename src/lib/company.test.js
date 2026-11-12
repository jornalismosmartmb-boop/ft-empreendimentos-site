import { describe, expect, test } from "bun:test";
import { company } from "./company";

describe("Dados do cartão CNPJ da Gessica", () => {
  test("identifica a empresa do cartão", () => {
    expect(company.legalName).toBe("57.487.207 GESSICA DE OLIVEIRA FRANCA");
    expect(company.cnpj).toBe("57.487.207/0001-50");
  });
  test("mantém a situação ativa e a data do cartão", () => {
    expect(company.situation).toBe("ATIVA");
    expect(company.situationSince).toBe("30/09/2024");
  });
  test("usa a atividade principal do cartão", () => {
    expect(company.cnae).toBe("56.11-2-03");
  });
  test("usa o endereço do cartão", () => {
    expect(company.address.city).toBe("Feira de Santana");
    expect(company.address.zip).toBe("44.088-031");
  });
});

 test("usa a natureza jurídica do cartão", () => {
   expect(company.legalNature).toBe("Empresário (Individual) (213-5)");
   expect(company.size).toBe("ME");
 });
 test("preserva o endereço completo, incluindo o box", () => {
   expect(company.address.street).toBe("Av Governador Joao Durval Carneiro, 100, BOX 02");
   expect(company.address.district).toBe("Brasilia");
   expect(company.address.state).toBe("BA");
 });
 test("usa a atividade e os contatos do cartão", () => {
   expect(company.mainActivity).toBe("Lanchonetes, casas de chá, de sucos e similares");
   expect(company.phone).toBe("(71) 98257-7846");
   expect(company.email).toBe("emaildoedsonlima@gmail.com");
   expect(company.openingDate).toBe("30/09/2024");
 });
