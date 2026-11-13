import { describe, expect, test } from "bun:test";
import { company } from "./company";

describe("Dados do cartão CNPJ do Bruno", () => {
  test("identifica a empresa do cartão", () => {
    expect(company.legalName).toBe("57.483.727 BRUNO LUIZ DA CONCEICAO BRASIL");
    expect(company.cnpj).toBe("57.483.727/0001-94");
  });
  test("mantém a situação ativa e a data do cartão", () => {
    expect(company.situation).toBe("ATIVA");
    expect(company.situationSince).toBe("30/09/2024");
  });
  test("usa a atividade principal do cartão", () => {
    expect(company.cnae).toBe("23.19-2-00");
  });
  test("usa o endereço do cartão", () => {
    expect(company.address.city).toBe("Cruz das Almas");
    expect(company.address.zip).toBe("44.380-000");
  });
});

 test("usa a natureza jurídica do cartão", () => {
   expect(company.legalNature).toBe("Empresário (Individual) (213-5)");
   expect(company.size).toBe("ME");
 });
  test("preserva o endereço completo do cartão", () => {
    expect(company.address.street).toBe("R Mario Pinto da Cunha, 113, Box Lote Para Criac");
    expect(company.address.district).toBe("Lauro Passos");
   expect(company.address.state).toBe("BA");
 });
 test("usa a atividade e os contatos do cartão", () => {
    expect(company.mainActivity).toBe("Fabricação de artigos de vidro");
   expect(company.phone).toBe("(71) 98257-7846");
   expect(company.email).toBe("emaildoedsonlima@gmail.com");
   expect(company.openingDate).toBe("30/09/2024");
 });
